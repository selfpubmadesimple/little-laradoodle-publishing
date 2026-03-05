import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { label: "Home" },
  { label: "Books" },
  { label: "About" },
  { label: "Contact" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[#9b3388] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-6">
            <img
              className="w-full max-w-[320px] h-auto object-contain"
              alt="Little Labradoodle Publishing"
              src="/figmaAssets/llp-logo-whiteonpurple-1-1.png"
            />
            <p className="text-base leading-relaxed [font-family:'Open_Sans',Helvetica] font-normal text-white tracking-[0] max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[0] leading-tight mb-2">
                Quick Links
              </h3>
              <div className="flex items-center gap-2 max-w-[200px]">
                <div className="h-[2px] flex-1 bg-white"></div>
                <img className="w-6 h-6" alt="Paw" src="/figmaAssets/paw.png" />
                <div className="h-[2px] flex-1 bg-white"></div>
              </div>
            </div>

            <nav className="flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-lg leading-relaxed [font-family:'Open_Sans',Helvetica] font-normal text-white tracking-[0] hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-2xl tracking-[0] leading-tight mb-2">
                Join The Pack!
              </h3>
              <div className="flex items-center gap-2 max-w-[200px]">
                <div className="h-[2px] flex-1 bg-white"></div>
                <img className="w-6 h-6" alt="Paw" src="/figmaAssets/paw-1.png" />
                <div className="h-[2px] flex-1 bg-white"></div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-white rounded-md h-14 text-base [font-family:'Poppins',Helvetica] font-normal text-gray-700 placeholder:text-gray-400"
                data-testid="input-email-signup"
              />

              <Button className="bg-[#ffd74f] border-2 border-solid border-[#2b7bb9] hover:bg-[#f0c840] h-14 text-lg [font-family:'Poppins',Helvetica] font-bold text-[#9b3388] leading-tight flex items-center justify-center gap-2" data-testid="button-signup-email">
                Sign Up With Email
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
