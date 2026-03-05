import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ArrowRight, ChevronDown } from "lucide-react";

const navigationItems = [
  { label: "About" },
  { label: "Contact" },
];

const booksSubmenu = [
  { label: "Children's Books", path: "/childrens-books" },
  { label: "Non-Fiction Books", path: "/non-fiction-books" },
];

export const HeaderSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#9b3388]">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 flex items-center justify-between gap-2 sm:gap-4 z-10">
        <img
          className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64"
          alt="Llp logo"
          src="/figmaAssets/llp-logo-whiteonpurple-1.png"
        />

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          <Link href="/">
            <Button
              variant="ghost"
              data-testid="button-home"
              className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl xl:text-2xl 2xl:text-3xl tracking-[0] leading-tight hover:bg-transparent hover:opacity-80 h-auto p-2"
            >
              Home
            </Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                data-testid="button-books"
                className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl xl:text-2xl 2xl:text-3xl tracking-[0] leading-tight hover:bg-transparent hover:opacity-80 h-auto p-2 flex items-center gap-1"
              >
                Books
                <ChevronDown className="w-4 h-4 xl:w-5 xl:h-5" data-testid="icon-books-chevron" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-gray-200 min-w-[200px]">
              {booksSubmenu.map((item, index) => (
                <Link key={index} href={item.path}>
                  <DropdownMenuItem
                    data-testid={`button-${item.label.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-')}`}
                    className="[font-family:'Poppins',Helvetica] font-medium text-gray-800 cursor-pointer hover:bg-purple-50 flex items-center justify-between gap-2"
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4" data-testid={`icon-arrow-${item.label.toLowerCase().replace(/'/g, '').replace(/\s+/g, '-')}`} />
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              data-testid={`button-${item.label.toLowerCase()}`}
              className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl xl:text-2xl 2xl:text-3xl tracking-[0] leading-tight hover:bg-transparent hover:opacity-80 h-auto p-2"
            >
              {item.label}
            </Button>
          ))}

          <img
            className="w-12 h-12 xl:w-14 xl:h-14 object-cover rounded-full cursor-pointer"
            alt="User profile"
            src="/figmaAssets/image-12.png"
          />
        </nav>

        <div className="flex lg:hidden items-center gap-3">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full cursor-pointer"
            alt="User profile"
            src="/figmaAssets/image-12.png"
          />
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:opacity-80">
                <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-purple-900 border-purple-700">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/">
                  <Button
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl tracking-[0] leading-tight hover:bg-purple-800 hover:opacity-80 w-full justify-start p-4"
                  >
                    Home
                  </Button>
                </Link>

                <div className="flex flex-col gap-2">
                  <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl tracking-[0] leading-tight px-4 py-2">
                    Books
                  </div>
                  {booksSubmenu.map((item, index) => (
                    <Link key={index} href={item.path}>
                      <Button
                        variant="ghost"
                        onClick={() => setIsOpen(false)}
                        className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg tracking-[0] leading-tight hover:bg-purple-800 hover:opacity-80 w-full justify-start pl-8 pr-4 py-3 flex items-center gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>

                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    onClick={() => setIsOpen(false)}
                    className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl tracking-[0] leading-tight hover:bg-purple-800 hover:opacity-80 w-full justify-start p-4"
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[50px] sm:h-[60px] md:h-[70px] overflow-hidden">
        <img
          className="absolute bottom-0 left-0 w-full h-auto"
          alt="Header back"
          src="/figmaAssets/header-back.svg"
        />
      </div>
    </header>
  );
};
