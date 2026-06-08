import { FiPhone, FiFacebook, FiInstagram, FiGlobe, FiMapPin } from "react-icons/fi";

export default function ActivityCard({ item, onOpenGallery }) {
  if (!item) return null;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
      {item.gallery && item.gallery[0] && (
        <div 
          onClick={onOpenGallery} 
          className="w-full h-48 mb-4 overflow-hidden rounded-lg cursor-pointer"
        >
          <img 
            src={item.gallery[0]} 
            alt={item.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
      
      <div className="flex flex-wrap items-center gap-6 mt-auto">
        {item.links?.phone && item.links.phone !== "" && (
          <a href={`tel:${item.links.phone}`} className="text-gray-500 hover:text-teal-600 transition-colors">
            <FiPhone size={20} />
          </a>
        )}
        {item.links?.fb && item.links.fb !== "" && (
          <a href={item.links.fb} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-colors">
            <FiFacebook size={20} />
          </a>
        )}
        {item.links?.insta && item.links.insta !== "" && (
          <a href={item.links.insta} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-colors">
            <FiInstagram size={20} />
          </a>
        )}
        {item.links?.web && item.links.web !== "" && (
          <a href={item.links.web} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-600 transition-colors">
            <FiGlobe size={20} />
          </a>
        )}
      </div>
    </div>
  );
}