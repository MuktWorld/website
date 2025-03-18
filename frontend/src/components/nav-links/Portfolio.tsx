import { useState, useEffect } from "react";
import api from "../../api/axios";
import { PortfolioItem } from "../../types";

export default function Portfolio() {
  const categories = [
    "Film Making",
    "Videography",
    "Photography",
    "Graphic Design",
    "Post Production",
    "Advertisement",
    "Events",
    "Social Media Content",
  ];

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to the first category
  const [visibleItems, setVisibleItems] = useState(8); // Number of items to display initially
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPortfolio = async () => {
      setLoading(true);
      try {
        const response = await api.get("/portfolio/get-portfolio");
        console.log(response.data.data);

        setPortfolioItems(response.data.data || []);
      } catch (error) {
        console.error("Error fetching portfolio items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Filter items based on selected category
  const filteredItems = portfolioItems.filter(
    (item) => item.service === activeCategory
  );

  // Slice to show only the first `visibleItems` items
  const displayedItems = filteredItems.slice(0, visibleItems);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 8); // Load 8 more items
  };

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our diverse portfolio of creative projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleItems(8); // Reset visible items when category changes
              }}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-secondary text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Items Grid */}
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto"></div>
            <p className="mt-4 text-gray-400">Loading portfolio items...</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <p className="text-center text-gray-400">
            No portfolio items available.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {displayedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  {item.fileUrl.endsWith(".mp4") ||
                  item.fileUrl.endsWith(".webm") ? (
                    <video
                      src={item.fileUrl}
                      className="object-cover w-full h-full"
                      controls
                    />
                  ) : (
                    <img
                      src={item.fileUrl}
                      alt={`Portfolio item for ${item.service}`}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              ))}
            </div>
            {filteredItems.length > visibleItems && (
              <div className="text-center mt-8">
                <button
                  onClick={handleShowMore}
                  className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-all"
                >
                  Show More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
