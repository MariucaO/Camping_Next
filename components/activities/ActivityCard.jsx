"use client";

import { FiPhone, FiFacebook, FiGlobe, FiMapPin } from "react-icons/fi";

export default function ActivityCard({ item, onOpenGallery }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Imaginea - acum legată de lightbox */}
      {item.gallery && item.gallery.length > 0 && (
        <img 
          src={item.gallery[0]} 
          alt={item.title} 
          className="w-full h-48 object-cover rounded-xl mb-4 cursor-pointer hover:opacity-90 transition-opacity" 
          onClick={onOpenGallery} 
        />
      )}
      
      <h4 className="font-bold text-lg mb-2 text-teal-900">{item.title}</h4>
      <p className="text-stone-600 text-sm mb-4 font-medium">{item.description}</p>
      <p className="text-stone-500 text-xs mb-6 leading-relaxed flex-grow">{item.content}</p>
      
      {/* Butoane acțiune - Link-uri și Telefon */}
      <div className="flex gap-3 mt-auto pt-4 border-t border-stone-50">
        {item.links?.phone && (
          <a href={`tel:${item.links.phone}`} className="text-xs flex items-center gap-1.5 text-emerald-700 hover:text-amber-600 font-bold transition-colors">
            <FiPhone /> Sunați
          </a>
        )}
        {item.links?.fb && (
          <a href={item.links.fb} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold transition-colors">
            <FiFacebook /> Facebook
          </a>
        )}
        {item.links?.web && (
          <a href={item.links.web} target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1.5 text-teal-600 hover:text-teal-800 font-bold transition-colors">
            <FiGlobe /> Web
          </a>
        )}
      </div>
    </div>
  );
}