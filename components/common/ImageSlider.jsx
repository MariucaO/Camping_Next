"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl mb-6 group/slider">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} - ${index + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Butoane de navigare */}
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover/slider:opacity-100">❮</button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover/slider:opacity-100">❯</button>
        </>
      )}
    </div>
  );
}