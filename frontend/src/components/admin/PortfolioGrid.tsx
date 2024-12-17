import { Trash2 } from 'lucide-react';
import { PortfolioItem, Service } from '../../types/index';
import api from '../../api/axios';

interface PortfolioGridProps {
  items: PortfolioItem[];
  onDelete: (id: string) => void;
  selectedService: Service | 'all';
}

export default function PortfolioGrid({ items, onDelete, selectedService }: PortfolioGridProps) {
  const filteredItems = selectedService === 'all' 
    ? items 
    : items.filter(item => item.service === selectedService);

    if (!Array.isArray(filteredItems)) {
      // console.error('filteredItems is not an array:', filteredItems);
      return <div>No items available.</div>;
    }
    
    console.log(filteredItems);
    
  const handleDelete = async (id: string) => {
    try {
      const respons = await api.delete(`/portfolio/delete-portfolio/${id}`);
      console.log(respons);
      onDelete(id);
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 relative">
            {item.fileType === 'image' ? (
              <img
                src={item.fileUrl}
                alt={`Portfolio item for ${item.service}`}
                className="object-cover w-full h-full"
              />
            ) : (
              <video
                src={item.fileUrl}
                className="object-cover w-full h-full"
                controls
              />
            )}
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">{item.service}</span>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}