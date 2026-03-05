// GitHub integration script for saving project to GitHub
import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

// Get all files to upload (excluding node_modules, .git, etc.)
function getAllFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const ignore = ['node_modules', '.git', '.cache', 'dist', '.replit', 'replit.nix', '.upm'];
  
  const items = fs.readdirSync(dir);
  for (const item of items) {
    if (ignore.includes(item)) continue;
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else {
      files.push(path.relative(baseDir, fullPath));
    }
  }
  return files;
}

async function main() {
  try {
    console.log('Connecting to GitHub...');
    const octokit = await getUncachableGitHubClient();
    
    // Get authenticated user
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    const repoName = 'little-laradoodle-publishing';
    
    // Try to create the repository
    let repo;
    try {
      const { data } = await octokit.repos.createForAuthenticatedUser({
        name: repoName,
        description: 'Little Laradoodle Publishing site',
        private: false,
        auto_init: false
      });
      repo = data;
      console.log(`Created new repository: ${repo.html_url}`);
    } catch (e: any) {
      if (e.status === 422) {
        // Repository already exists, get it
        const { data } = await octokit.repos.get({
          owner: user.login,
          repo: repoName
        });
        repo = data;
        console.log(`Using existing repository: ${repo.html_url}`);
      } else {
        throw e;
      }
    }
    
    // Get all files
    const projectDir = process.cwd();
    const files = getAllFiles(projectDir);
    console.log(`Found ${files.length} files to upload`);
    
    // Upload files one by one
    for (const file of files) {
      const filePath = path.join(projectDir, file);
      const content = fs.readFileSync(filePath);
      const base64Content = content.toString('base64');
      
      try {
        // Check if file exists
        let sha: string | undefined;
        try {
          const { data: existingFile } = await octokit.repos.getContent({
            owner: user.login,
            repo: repoName,
            path: file
          });
          if ('sha' in existingFile) {
            sha = existingFile.sha;
          }
        } catch (e) {
          // File doesn't exist, that's fine
        }
        
        await octokit.repos.createOrUpdateFileContents({
          owner: user.login,
          repo: repoName,
          path: file,
          message: sha ? `Update ${file}` : `Add ${file}`,
          content: base64Content,
          sha
        });
        console.log(`Uploaded: ${file}`);
      } catch (e: any) {
        console.error(`Failed to upload ${file}: ${e.message}`);
      }
    }
    
    console.log(`\n✅ Done! Your code is saved at: ${repo.html_url}`);
    console.log('\nYou can now safely remove this project from Replit.');
    console.log('When you want to bring it back, just import from this GitHub URL.');
    
  } catch (error: any) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();
