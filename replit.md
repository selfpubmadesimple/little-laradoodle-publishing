# Overview

This is a children's book author portfolio and e-commerce website built with React, Express, and PostgreSQL. The application showcases books written by the author, features an email signup system for digital freebies, and includes sections for author information, book catalogs, and store integration. The site uses a modern tech stack with TypeScript, Vite for frontend tooling, and Drizzle ORM for database management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework and Tooling**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (alternative to React Router)
- TanStack Query (React Query) for server state management and data fetching
- shadcn/ui component library built on Radix UI primitives for accessible, composable UI components

**Design System**
- Tailwind CSS for utility-first styling with custom theme configuration
- Custom color palette defined in CSS variables for consistent theming
- Google Fonts integration (Poppins, Open Sans, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- Responsive design using Tailwind's mobile-first breakpoint system

**Component Structure**
- Page-based organization with a `Frame` component serving as the main layout
- Section-based composition (HeaderSection, HeroSection, AboutMeSection, etc.)
- Reusable UI components from shadcn/ui library stored in `client/src/components/ui/`
- Custom hooks for mobile detection and toast notifications

**State Management**
- React Query for async server state with configured query client
- Local component state using React hooks
- Form state managed via react-hook-form with Zod validation

## Backend Architecture

**Server Framework**
- Express.js for HTTP server and API routing
- TypeScript throughout for type safety
- HTTP server creation with Node's native `http` module

**Development Setup**
- Vite middleware integration in development for HMR and client bundling
- Custom logging middleware for API request tracking
- Error handling middleware with status code normalization
- Static file serving configured through Vite in dev, standalone in production

**Storage Layer**
- In-memory storage implementation (`MemStorage`) as default
- Interface-based design (`IStorage`) allowing easy swap to database-backed storage
- CRUD operations for user management (getUser, getUserByUsername, createUser)

**Build and Deployment**
- Separate build processes: Vite for frontend, esbuild for backend
- ESM module format throughout the application
- Environment-based configuration (NODE_ENV)

## Database Architecture

**ORM and Schema**
- Drizzle ORM for type-safe database operations
- PostgreSQL as the target database (configured via @neondatabase/serverless)
- Schema defined in shared directory for reuse across client and server
- Drizzle Kit for migrations with output to `./migrations` directory

**Schema Design**
- Users table with UUID primary keys, username, and password fields
- Zod integration via drizzle-zod for runtime validation
- Type inference from schema definitions for TypeScript safety

**Database Connection**
- Connection via DATABASE_URL environment variable
- Neon serverless driver for PostgreSQL connectivity
- Session storage capability through connect-pg-simple (PostgreSQL session store for Express)

## External Dependencies

**UI Component Libraries**
- Radix UI primitives for 30+ accessible, unstyled components (dialogs, dropdowns, tooltips, etc.)
- Embla Carousel for touch-friendly image carousels
- cmdk for command palette interfaces
- Lucide React for icon system

**Development Tools**
- Replit-specific plugins (cartographer, dev-banner, runtime-error-modal) for enhanced development experience
- TypeScript compiler for type checking
- Drizzle Kit for database schema management and migrations

**Validation and Forms**
- Zod for schema validation
- react-hook-form for form state management
- @hookform/resolvers for Zod integration with react-hook-form

**Date Handling**
- date-fns for date manipulation and formatting

**Styling Utilities**
- clsx and tailwind-merge via custom `cn()` utility for conditional class composition
- class-variance-authority for variant-based component styling
- PostCSS with Tailwind and Autoprefixer plugins

**Third-Party Services**
- Neon Database (PostgreSQL serverless platform)
- Configuration suggests integration with external store and author booking systems
- Email signup functionality (implementation pending)