import { Button } from "@/components/ui/button";

const booksData = [
  {
    id: 1,
    image: "/figmaAssets/group-8.png",
    title: "Puppy Pickup Day Companion Coloring Book",
  },
  {
    id: 2,
    image: "/figmaAssets/group-8-1.png",
    title: "A Little Sister for Brady",
  },
  {
    id: 3,
    image: "/figmaAssets/group-8-2.png",
    title: "A Little Labradoodle Christmas (Signed Hardcover)",
  },
];

export const FeaturedBooksSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#9b3388] text-4xl md:text-5xl mb-4">
            Featured Books
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[2px] w-32 bg-gray-300"></div>
            <img className="w-8 h-8" alt="Decorative paw" src="/figmaAssets/paw.png" />
            <div className="h-[2px] w-32 bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {booksData.map((book) => (
            <div key={book.id} className="flex flex-col items-center">
              <img
                className="w-full max-w-[280px] h-auto object-contain mb-4"
                alt={book.title}
                src={book.image}
                data-testid={`img-featured-book-${book.id}`}
              />
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#9b3388] text-xl text-center mb-4 px-4">
                {book.title}
              </h3>
              <Button 
                className="bg-[#9b3388] hover:bg-[#8a2f7a] text-white [font-family:'Poppins',Helvetica] font-semibold px-8 py-3 border-2 border-[#2b7bb9]"
                data-testid={`button-shop-featured-${book.id}`}
              >
                Shop Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            className="bg-[#ffd74f] hover:bg-[#f0c840] text-[#9b3388] [font-family:'Poppins',Helvetica] font-bold px-8 py-3 border-2 border-[#2b7bb9]"
            data-testid="button-view-all"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};
