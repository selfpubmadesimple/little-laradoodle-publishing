import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EmailSignUpSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#9b3388] py-16 px-4 overflow-hidden">
      {/* Large Decorative Paw Prints */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="absolute bottom-0 right-[10%] w-64 h-64" viewBox="0 0 24 24" fill="#8B7355">
          <ellipse cx="12" cy="18" rx="4" ry="3.5"/>
          <ellipse cx="7" cy="11" rx="2.5" ry="3" transform="rotate(-15 7 11)"/>
          <ellipse cx="12" cy="9" rx="2.5" ry="3"/>
          <ellipse cx="17" cy="11" rx="2.5" ry="3" transform="rotate(15 17 11)"/>
        </svg>
        <svg className="absolute top-0 left-[5%] w-48 h-48" viewBox="0 0 24 24" fill="#8B7355">
          <ellipse cx="12" cy="18" rx="4" ry="3.5"/>
          <ellipse cx="7" cy="11" rx="2.5" ry="3" transform="rotate(-15 7 11)"/>
          <ellipse cx="12" cy="9" rx="2.5" ry="3"/>
          <ellipse cx="17" cy="11" rx="2.5" ry="3" transform="rotate(15 17 11)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-4xl md:text-5xl mb-8 text-center md:text-left">
          Digital Gift Set Freebie
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 max-w-3xl">
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 bg-white rounded-md h-16 text-lg [font-family:'Poppins',Helvetica] font-normal text-gray-700 placeholder:text-gray-400 text-center"
            data-testid="input-freebie-email"
          />

          <Button 
            className="bg-[#ffd74f] hover:bg-[#f0c840] text-[#9b3388] [font-family:'Poppins',Helvetica] font-bold px-8 py-6 text-lg border-2 border-[#2b7bb9] whitespace-nowrap"
            data-testid="button-signup-freebie"
          >
            Sign Up With Email
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
