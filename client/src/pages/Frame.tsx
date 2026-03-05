import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { EmailSignUpSection } from "./sections/EmailSignUpSection";
import { FeaturedBooksSection } from "./sections/FeaturedBooksSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { RedirectCallToActionSection } from "./sections/RedirectCallToActionSection";

export const Frame = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeaderSection />
      <HeroSection />
      <EmailSignUpSection />
      <FeaturedBooksSection />
      <AboutMeSection />
      <RedirectCallToActionSection />
      <FooterSection />
    </div>
  );
};
