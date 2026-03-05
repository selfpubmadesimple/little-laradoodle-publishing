import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

const bookData = [
  { 
    bookNumber: "BOOK 1",
    title: "Self-Publishing Made Simple™",
    subtitle: "Clarity First",
    description: "Validate & Clarify the Market Potential of Your Children's Book Idea",
    subtext: "Clarity First: Shape, Test, and Solidify Your Children's Book Idea in Just 5 Days",
    author: "APRIL M. COX",
    badge: "INTERACTIVE GUIDE",
    price: "$14.95",
    image: "/figmaAssets/group-8.png"
  },
  { 
    bookNumber: "BOOK 2",
    title: "Self-Publishing Made Simple™",
    subtitle: "Publishing Your Children's Book in 90 Days",
    description: "",
    subtext: "Self-Publishing Made Simple - Publishing Your Children's Book in 90 Days",
    author: "APRIL M. COX",
    badge: "INTERACTIVE GUIDE",
    price: "$14.95",
    image: "/figmaAssets/group-8-1.png"
  },
];

export const NonFictionBooks = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-white">
      <HeaderSection />
      
      {/* Hero Section */}
      <section className="relative w-full bg-[#3a4a5c] py-16 px-4" style={{
        backgroundImage: 'url(/figmaAssets/group-8.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        <div className="absolute inset-0 bg-[#3a4a5c] opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-4xl md:text-5xl mb-6">
            Explore Our<br />
            Non-Fiction Books
          </h1>
          <p className="[font-family:'Poppins',Helvetica] text-white text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Learn how to plan, write, and publish your own children's book with our interactive guides designed to simplify every step, from idea to market.
          </p>
          <a href="#books-section">
            <Button 
              className="bg-[#9b3388]/30 hover:bg-[#9b3388]/40 text-white [font-family:'Poppins',Helvetica] font-semibold px-8 py-6 text-lg rounded-full border-2 border-white"
              data-testid="button-scroll-down"
            >
              Scroll Down
              <ChevronDown className="ml-2 w-5 h-5" data-testid="icon-scroll-arrow" />
            </Button>
          </a>
        </div>
      </section>

      {/* Book Grid Section */}
      <section id="books-section" className="w-full bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {bookData.map((book, index) => (
              <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                <div className="p-6">
                  <div className="mb-4">
                    <span className="[font-family:'Poppins',Helvetica] text-sm font-bold text-gray-700 bg-gray-200 px-3 py-1 rounded">
                      {book.bookNumber}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] text-sm font-bold text-gray-700 bg-[#ffd74f] px-3 py-1 rounded ml-2">
                      {book.author}
                    </span>
                  </div>
                  
                  <h3 className="[font-family:'Poppins',Helvetica] font-bold text-gray-900 text-2xl mb-4">
                    {book.title}
                  </h3>
                  
                  <div className="bg-[#ffd74f] p-6 rounded-lg mb-4 flex items-center gap-4">
                    <img
                      src={book.image}
                      alt={book.subtitle}
                      className="w-32 h-auto object-contain"
                      data-testid={`img-book-${index}`}
                    />
                    <div>
                      <h4 className="[font-family:'Poppins',Helvetica] font-bold text-gray-900 text-2xl md:text-3xl mb-2">
                        {book.subtitle}
                      </h4>
                      {book.description && (
                        <p className="[font-family:'Poppins',Helvetica] text-gray-800 text-sm">
                          {book.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  <p className="[font-family:'Poppins',Helvetica] text-gray-600 text-sm mb-4">
                    {book.subtext}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="[font-family:'Poppins',Helvetica] text-[#9b3388] font-bold text-2xl" data-testid={`text-price-${index}`}>
                      {book.price}
                    </span>
                    <Button 
                      className="bg-[#2b7bb9] hover:bg-[#256a9f] text-white [font-family:'Poppins',Helvetica] font-semibold px-6 py-2"
                      data-testid={`button-shop-now-${index}`}
                    >
                      Shop Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
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
            className="bg-[#ffd74f] hover:bg-[#f0c840] text-[#9b3388] [font-family:'Poppins',Helvetica] font-bold px-8 py-3 text-lg border-2 border-[#2b7bb9]"
            data-testid="button-visit-store"
          >
            Visit My Store
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
