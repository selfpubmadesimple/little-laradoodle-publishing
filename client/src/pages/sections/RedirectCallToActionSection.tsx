import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

export const RedirectCallToActionSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <img
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
        src="/figmaAssets/rectangle-14.svg"
      />

      <div className="relative container mx-auto px-4 flex flex-col items-center">
        <header className="flex items-center justify-center gap-2 mb-8">
          <img
            className="w-[57px] h-[73px] object-cover"
            alt="Littlelabradoodle"
            src="/figmaAssets/littlelabradoodle-new-2.png"
          />

          <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[57.6px] whitespace-nowrap">
            My Exclusive Store!
          </h2>

          <img
            className="w-[57px] h-[73px] object-cover"
            alt="Littlelabradoodle"
            src="/figmaAssets/littlelabradoodle-new-2.png"
          />
        </header>

        <p className="max-w-[887px] mb-12 [font-family:'Open_Sans',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[21.6px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button className="h-auto bg-[#9b3388] hover:bg-[#8a2d77] border border-solid border-[#2b7bb9] px-4 py-5 min-w-[278px]">
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[30px]">
              Book Author Visit
            </span>
            <ArrowRightIcon className="ml-2 w-[29px] h-[29px]" />
          </Button>

          <Button className="h-auto bg-[#ffd74f] hover:bg-[#f0c840] border border-solid border-[#2b7bb9] px-3.5 py-5 min-w-[236px]">
            <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#9b4f96] text-xl tracking-[0] leading-[30px]">
              View My Store
            </span>
            <ExternalLinkIcon className="ml-2 w-[29px] h-[25px]" />
          </Button>
        </div>
      </div>

      <img
        className="absolute bottom-0 right-8 w-[287px] h-[401px] object-cover pointer-events-none"
        alt="Decorative dog"
        src="/figmaAssets/image-12.png"
      />

      <img
        className="absolute bottom-0 left-8 w-[328px] h-[401px] object-cover pointer-events-none"
        alt="Decorative dog"
        src="/figmaAssets/image-12.png"
      />
    </section>
  );
};
