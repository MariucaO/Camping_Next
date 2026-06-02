"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { activitiesData } from "./data";
import ActivityCard from "./ActivityCard";
import GalleryActivities from "./GalleryActivities";
import FramedSection from "../common/FramedSection";

export default function LotruSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [activeGalleryItems, setActiveGalleryItems] = useState([]);

  const openGallery = (gallery) => {
    setActiveGalleryItems(gallery);
    setOpenIndex(0); 
  };

  return (
    <section id="activitati" className="py-24 bg-stone-50">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-serif text-teal-900 text-center mb-16">Valea Lotrului</h2>
          
          {Object.entries(activitiesData).map(([catName, data]) => (
            <div key={catName} className="mb-16">
              <h3 className="text-2xl font-serif text-teal-800 mb-8 flex items-center gap-3">
                {data.icon} {catName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.items.map((item, idx) => (
                  <ActivityCard 
                    key={idx} 
                    item={item} 
                    onOpenGallery={() => openGallery(item.gallery)} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </FramedSection>

      <GalleryActivities 
        openIndex={openIndex} 
        setOpneIndex={setOpenIndex} 
        activities={[{ gallery: activeGalleryItems }]} 
      />
    </section>
  );
}