import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white">
      <div className="text-center py-12">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#9b3388] text-4xl md:text-5xl mb-4">
          About Me
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-[2px] w-32 bg-gray-300"></div>
          <img className="w-8 h-8" alt="Decorative paw" src="/figmaAssets/paw.png" />
          <div className="h-[2px] w-32 bg-gray-300"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-8 lg:p-12 bg-white">
          <img
            className="w-full max-w-[400px] h-auto object-cover rounded-full"
            alt="April M. Cox"
            src="/figmaAssets/april-profile-whiteshirt-new-1.png"
            data-testid="img-about-april"
          />
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-16 bg-[#9b3388]">
          <p className="[font-family:'Open_Sans',Helvetica] text-white text-base md:text-lg leading-relaxed font-normal tracking-[0] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <Button 
            className="w-fit bg-[#ffd74f] hover:bg-[#f0c840] text-[#9b3388] [font-family:'Poppins',Helvetica] font-bold px-8 py-4 text-lg border-2 border-[#2b7bb9]"
            data-testid="button-learn-more-april"
          >
            Learn More About April
            <ArrowRightIcon className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
