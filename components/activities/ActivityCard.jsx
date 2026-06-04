import { FiPhone, FiInstagram, FiFacebook, FiGlobe } from "react-icons/fi";

export default function ActivityCard({ item }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
      
      {/* 1. Imaginea - Acum o adăugăm ca să apară! */}
      {item.gallery && item.gallery[0] && (
        <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
          <img 
            src={item.gallery[0]} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* 2. Titlul și descrierea */}
      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.description}</p>
      
      {/* 3. Link-uri - Stil Footer */}
      <div className="flex flex-wrap items-center gap-6 mt-auto">
        
        {item.links?.phone && item.links.phone !== "" && (
          <a href={`tel:${item.links.phone}`} className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent)] transition-colors text-sm">
            <FiPhone className="text-[var(--accent)]" />
          </a>
        )}

        {item.links?.fb && item.links.fb !== "" && (
          <a href={item.links.fb} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent)] transition-colors text-sm">
            <FiFacebook className="text-[var(--accent)]" />
          </a>
        )}

        {item.links?.insta && item.links.insta !== "" && (
          <a href={item.links.insta} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent)] transition-colors text-sm">
            <FiInstagram className="text-[var(--accent)]" />
          </a>
        )}

        {item.links?.web && item.links.web !== "" && (
          <a href={item.links.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-[var(--accent)] transition-colors text-sm">
            <FiGlobe className="text-[var(--accent)]" />
          </a>
        )}
      </div>
    </div>
  );
}