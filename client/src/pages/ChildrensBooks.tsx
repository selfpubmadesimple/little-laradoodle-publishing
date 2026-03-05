import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";
import giftSetImage from "@assets/3cd3aa_cd4c697d21b942e494b3bb8adabe3ee6~mv2_d_1575_1503_s_2_1759574555175.avif";
import christmasImage from "@assets/3cd3aa_8a4c43cc80a1419aba72098c05eaab92~mv2_1759574830027.avif";
import sisterActivityImage from "@assets/3cd3aa_3084a893186b4cd8af05ed9c84523785~mv2_1759574830029.avif";
import sisterImage from "@assets/3cd3aa_7d2225b148d44456b9c7d35fe27fdffb~mv2_1759574830031.avif";
import klubActivityImage from "@assets/3cd3aa_2746a13500fa494b9343d0097245e267~mv2 (1)_1759575168169.avif";
import doodleLoversImage from "@assets/3cd3aa_f4e0b07207034c419ea57ce54c7508c9~mv2_1759575168178.avif";
import klubGiftSetImage from "@assets/3cd3aa_1042943a049b496a9adce9629347c3fc~mv2_1759575298479.avif";
import klubNoBullyingImage from "@assets/3cd3aa_9e37524ea72d4cd4903119594ec00f47~mv2_d_2000_2000_s_2 (1)_1759575479818.avif";
import puppyColoringActivityImage from "@assets/3cd3aa_94877a05c7984f7092c32df98f84dfea~mv2_1759575504706.avif";
import puppyHardcoverPlushImage from "@assets/3cd3aa_dc213427ef014cf78fbfdb7577dd1b09~mv2_1759575504709.avif";
import littleLabradoodlePlushImage from "@assets/3cd3aa_238a83237934411e848ce0a5f6063991~mv2_1759575694738.avif";
import puppySignedHardcoverImage from "@assets/3cd3aa_e28373a9685e4acaa0b305947745d87a~mv2_1759575694739.avif";
import coloringActivityPagesImage from "@assets/3cd3aa_86ed89afae914613ade6aa5fa26bf3f5~mv2_1759575694740.avif";

const bookData = [
  { title: "Puppy Pickup Day Companion Coloring Book", price: "$2.99", image: "/figmaAssets/group-8.png" },
  { title: "Puppy Pickup Day - Literacy Guide", price: "$0.00", image: "/figmaAssets/group-8-1.png" },
  { title: "Puppy Pickup Day GIFT SET", price: "$14.99", image: giftSetImage },
  { title: "A Little Labradoodle Christmas (Signed Hardcover)", price: "$14.99", image: christmasImage },
  { title: "A Little Sister for Brady - Activity Book", price: "$2.99", image: sisterActivityImage },
  { title: "A Little Sister for Brady", price: "$14.99", image: sisterImage },
  { title: "Join the K.L.U.B. - Activity Book", price: "$0.99", image: klubActivityImage },
  { title: "Doodle Lovers Adult Coloring Book", price: "$2.99", image: doodleLoversImage },
  { title: "Join the K.L.U.B. - Gift Set w/Plush", price: "$29.99", image: klubGiftSetImage },
  { title: "Join the K.L.U.B. - No Bullying Allowed", price: "$6.50", image: klubNoBullyingImage },
  { title: "Puppy Pickup Day Coloring & Activity Book", price: "$5.99", image: puppyColoringActivityImage },
  { title: "Puppy Pickup Day Hardcover & Plush", price: "$19.99", image: puppyHardcoverPlushImage },
  { title: "Little Labradoodle Plush", price: "$10.99", image: littleLabradoodlePlushImage },
  { title: "Puppy Pickup Day (Hardcover) - Signed by Author", price: "$5.99", image: puppySignedHardcoverImage },
  { title: "The Little Labradoodle & Friends Coloring and Activity Pages", price: "$2.99", image: coloringActivityPagesImage },
];

export const ChildrensBooks = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeaderSection />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#ffd74f] py-16 px-4 overflow-hidden">
        {/* Decorative Paw Prints */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/figmaAssets/paw.png" alt="" className="absolute top-10 left-[3%] w-12 h-12 opacity-40 mix-blend-multiply" />
          <img src="/figmaAssets/paw.png" alt="" className="absolute top-32 left-[12%] w-10 h-10 opacity-35 mix-blend-multiply" />
          <img src="/figmaAssets/paw.png" alt="" className="absolute top-20 right-[8%] w-14 h-14 opacity-40 mix-blend-multiply" />
          <img src="/figmaAssets/paw.png" alt="" className="absolute top-40 right-[18%] w-12 h-12 opacity-35 mix-blend-multiply" />
          <img src="/figmaAssets/paw.png" alt="" className="absolute bottom-24 left-[8%] w-12 h-12 opacity-35 mix-blend-multiply" />
          <img src="/figmaAssets/paw.png" alt="" className="absolute bottom-40 right-[12%] w-16 h-16 opacity-40 mix-blend-multiply" />
          <img src="/figmaAssets/paw.png" alt="" className="absolute bottom-16 right-[5%] w-10 h-10 opacity-35 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
          <div className="flex-shrink-0">
            <img
              src="/figmaAssets/group-8.png"
              alt="The Little Labradoodle Puppy Pickup Day book"
              className="w-72 md:w-96 h-auto object-contain"
              data-testid="img-hero-book"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-[#9b3388] text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Explore Our <br />
              Children's Books
            </h1>
            <p className="[font-family:'Poppins',Helvetica] font-semibold text-gray-800 text-base md:text-lg mb-8 max-w-2xl">
              GET PUPPY PICKUP DAY FOR $5 (RETAILS FOR $14.99) - !70% OFF WHEN YOU PURCHASE ANY OTHER ITEM. USE COUPON CODE: PPUD TO SEE THE DISCOUNT APPLIED IN the CART.
            </p>
            <Button 
              className="bg-[#9b3388]/20 hover:bg-[#9b3388]/30 text-gray-800 [font-family:'Poppins',Helvetica] font-semibold px-8 py-6 text-lg rounded-full border-2 border-gray-800"
              data-testid="button-scroll-down"
              onClick={() => window.scrollBy({ top: 600, behavior: 'smooth' })}
            >
              Scroll Down
              <ChevronDown className="ml-2 w-5 h-5" data-testid="icon-scroll-arrow" />
            </Button>
          </div>
        </div>
      </section>

      {/* Book Grid Section */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bookData.map((book, index) => (
              <div key={index} className="flex flex-col items-center h-full">
                <div className="w-full max-w-[200px] h-[280px] flex items-center justify-center mb-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-lg"
                    data-testid={`img-book-${index}`}
                  />
                </div>
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-gray-800 text-center mb-2">
                  {book.title}
                </h3>
                <p className="[font-family:'Poppins',Helvetica] text-[#9b3388] font-bold text-xl mb-4" data-testid={`text-price-${index}`}>
                  {book.price}
                </p>
                <div className="mt-auto">
                  <Button 
                    className="bg-[#9b3388] hover:bg-[#8a2f7a] text-white [font-family:'Poppins',Helvetica] font-semibold px-6 py-2"
                    data-testid={`button-add-to-cart-${index}`}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Store Section */}
      <section className="w-full bg-[#5dade2] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-3xl md:text-4xl mb-4">
            ✨ My Exclusive Store! ✨
          </h2>
          <p className="[font-family:'Poppins',Helvetica] text-white text-lg mb-6">
            Check out my exclusive merchandise and book bundles!
          </p>
          <Button 
            className="bg-[#ffd74f] hover:bg-[#f0c840] text-[#9b3388] [font-family:'Poppins',Helvetica] font-bold px-8 py-3 text-lg"
            data-testid="button-visit-store"
          >
            Visit My Store
          </Button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
