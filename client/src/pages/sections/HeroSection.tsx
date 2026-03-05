import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#5dade2] py-16 px-4 overflow-hidden">
      {/* Decorative Paw Prints */}
      <div className="absolute inset-0 pointer-events-none">
        <img src="/figmaAssets/paw.png" alt="" className="absolute top-10 left-[5%] w-12 h-12 opacity-30 mix-blend-multiply" />
        <img src="/figmaAssets/paw.png" alt="" className="absolute top-32 left-[15%] w-10 h-10 opacity-25 mix-blend-multiply" />
        <img src="/figmaAssets/paw.png" alt="" className="absolute top-20 right-[8%] w-14 h-14 opacity-30 mix-blend-multiply" />
        <img src="/figmaAssets/paw.png" alt="" className="absolute bottom-24 left-[10%] w-12 h-12 opacity-25 mix-blend-multiply" />
        <img src="/figmaAssets/paw.png" alt="" className="absolute bottom-40 right-[12%] w-16 h-16 opacity-30 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Heartwarming<br />
            Stories that build<br />
            Confidence, Kindness,<br />
            and Resilience in Kids
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-[#9b3388] hover:bg-[#8a2f7a] text-white [font-family:'Poppins',Helvetica] font-semibold px-8 py-6 text-lg border-2 border-[#2b7bb9]"
              data-testid="button-explore-books"
            >
              Explore the Books
              <ArrowRightIcon className="ml-2 w-6 h-6" />
            </Button>

            <Button 
              className="bg-[#ffd74f] hover:bg-[#f0c840] text-[#9b3388] [font-family:'Poppins',Helvetica] font-semibold px-8 py-6 text-lg border-2 border-[#2b7bb9]"
              data-testid="button-view-classes"
            >
              View Our Classes
              <ArrowRightIcon className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="flex-shrink-0">
          <img
            src="/figmaAssets/littlelabradoodle-new-2.png"
            alt="Little Labradoodle puppy"
            className="w-72 md:w-96 lg:w-[500px] h-auto object-contain"
            data-testid="img-hero-puppy"
          />
        </div>
      </div>
    </section>
  );
};
