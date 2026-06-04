import { FiPhone, FiFacebook, FiInstagram, FiGlobe, FiMapPin } from "react-icons/fi";

export default function ActivityCard({ item }) {
  if (!item) return null;

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col h-full">
      {/* 1. Imaginea */}
      {item.gallery && item.gallery[0] && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img 
            src={item.gallery[0]} 
            alt={item.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      )}

      {/* 2. Titlu și Descriere */}
      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{item.description}</p>
      
      {/* 3. Link-uri - Toate în stilul Feather (Fi...) */}
      <div className="flex flex-wrap items-center gap-6 mt-auto">
        
        {item.links?.phone && item.links.phone !== "" && (
          <a href={`tel:${item.links.phone}`} className="text-gray-500 hover:text-[var(--accent)] transition-colors">
            <FiPhone size={20} strokeWidth={2} />
          </a>
        )}

        {item.links?.fb && item.links.fb !== "" && (
          <a href={item.links.fb} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent)] transition-colors">
            <FiFacebook size={20} strokeWidth={2} />
          </a>
        )}

        {item.links?.insta && item.links.insta !== "" && (
          <a href={item.links.insta} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent)] transition-colors">
            <FiInstagram size={20} strokeWidth={2} />
          </a>
        )}

        {item.links?.web && item.links.web !== "" && (
          <a href={item.links.web} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent)] transition-colors">
            <FiGlobe size={20} strokeWidth={2} />
          </a>
        )}

        {item.links?.map && item.links.map !== "" && (
          <a href={item.links.map} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[var(--accent)] transition-colors">
            <FiMapPin size={20} strokeWidth={2} />
          </a>
        )}
      </div>
    </div>
  );
}