import { useState, useEffect } from "react";
import { Layout, LogOut } from "lucide-react";
import PortfolioUpload from "./PortfolioUpload";
import PortfolioGrid from "./PortfolioGrid";
import { PortfolioItem, Service } from "../../types";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const services: (Service | "all")[] = [
  "all",
  "Film Making",
  "Videography",
  "Photography",
  "Graphic Design",
  "Post Production",
  "Advertisement",
  "Events",
  "Social Media Content",
];

export default function Dashboard() {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [selectedService, setSelectedService] = useState<Service | "all">("all");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPortfolio = async () => {
    try {
      const response = await api.get("/portfolio/get-portfolio");
      console.log(response);
      
      const transformedItems: PortfolioItem[] = response.data.data.map((item: any) => ({
        id: item._id,
        service: item.service,
        fileUrl: item.fileUrl,
        fileType: item.fileUrl.endsWith(".mp4") || item.fileUrl.endsWith(".webm") ? "video" : "image",
        createdAt: item.createdAt,
      }));
      setPortfolioItems(transformedItems);
    } catch (error) {
      console.error("Failed to fetch portfolio:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("mukt_admin_token");
    navigate("/conf/admin");
  };

  const handleDelete = (id: string) => {
    setPortfolioItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Layout className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mukt Admin</span>
            </div>
            <button onClick={handleLogout} className="flex items-center text-gray-600 hover:text-gray-900">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <PortfolioUpload onUploadSuccess={fetchPortfolio} />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Portfolio Items</h2>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value as Service | "all")}
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service === "all" ? "All Services" : service}
                    </option>
                  ))}
                </select>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading portfolio items...</p>
                </div>
              ) : portfolioItems.length === 0 ? (
                <p className="text-center text-gray-600">No portfolio items available.</p>
              ) : (
                <PortfolioGrid
                  items={portfolioItems}
                  onDelete={handleDelete}
                  selectedService={selectedService}
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
