"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

import FramedSection from "../common/FramedSection";

// Lista de imagini - Asigură-te că aceste nume sunt EXACT ca în folderul public
const images = [
  "/rares.jpg",
  "/mariuca.jpg",
  "/ilinca.jpg",
  "/about-camping-8.jpg",
  "/nucul-mamei-ica.jpg",
  "/nucul-mamei-ica2.jpg",
  "/gradina-libera1.jpg",
  "/la-cires1.jpg",
  "/camper-zone1.jpg",
  "/dus2.jpg",
  "/meri-mesteceni1.jpg",
  "/about-camping-1.jpg",
  "/about-camping-2.jpg",
  "/about-camping-3.jpg",
  "/bg-camping-5.jpg",
];

export default function AboutGallery() {
  const [index, setIndex] = useState(-1);

  return (
    // În AboutGallery.jsx, schimbă linia 40 (sau unde începe section)
   <section id="album-familie" className="bg-[#F9F9F6] py-24">
      <FramedSection>
        {/* Header Galerie - Stil finuț adaptat */}
        <motion.div
          className="text-center mb-16 px-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">
            Albumul Familiei
          </h2>
          <div className="w-12 h-[2px] bg-amber-500/50 mx-auto mb-10" />
          <p className="text-[17px] leading-relaxed text-stone-700 italic font-light tracking-wide max-w-2xl mx-auto">
            Viața sub nucii bătrâni — de la munca lui Rareș și grija Măriucăi,
            la colțurile de liniște din Grădina Liberă.
          </p>
        </motion.div>

        {/* GRID MASONRY - Curățat și stabilizat */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-2">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setIndex(i)}
              className="relative break-inside-avoid overflow-hidden rounded-2xl shadow-md cursor-zoom-in group border-4 border-white bg-white transition-all hover:shadow-xl"
            >
              {/* Overlay subtil care se curăță la hover pentru claritate maximă */}
              <div className="absolute inset-0 bg-teal-900/5 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

              <img
                src={src}
                alt={`Camping Grădina cu Flori - Foto ${i + 1}`}
                className="w-full h-auto block object-cover transition-transform duration-1000 group-hover:scale-105"
                // Adăugăm un handler de eroare să nu apară icoane de imagine spartă dacă lipsește fișierul
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            </motion.div>
          ))}
        </div>
      </FramedSection>

      {/* Lightbox - Stilizat să fie elegant */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Fullscreen, Zoom, Slideshow]}
        animation={{ fade: 400 }}
        styles={{
          container: { backgroundColor: "rgba(10, 20, 20, 0.97)" },
          root: { "--yarl__color_backdrop": "rgba(10, 20, 20, 0.97)" },
        }}
      />
    </section>
  );
}
