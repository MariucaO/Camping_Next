"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

import FramedSection from "../../components/common/FramedSection";

const images = [
  "/gallery-11.jpg",
  "/about-details.jpg",
  "/about-camping-9.jpg",
  "/bicycles.jpg",
  "/gallery-4.jpg",
  "/gallery-8.jpg",
  "/gallery-9.jpg",
  "/kayak.jpg",
  "/bg-camping.jpg",
  "/bg-camping-2.jpg",
  "/bg-camping-5.jpg",
  "/kitchen.jpg",
];

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="bg-stone-50 py-16 text-green-900 font-sans">
      <FramedSection>
        {/* Heading + intro */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-serif text-amber-500 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Galerie foto
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Momente autentice din Camping Grădina cu Flori: glampinguri, foc
            de&nbsp;tabără, natură și colțuri liniștite în mijlocul Văii Lotrului.
          </motion.p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src={src}
                alt={`Imagine ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </FramedSection>

      {/* Full-screen slideshow / carousel */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        plugins={[Zoom, Slideshow]}
        animation={{ fade: 300 }}
        carousel={{ finite: false }}
        zoom={{ maxZoomPixelRatio: 3 }}
        slideshow={{ autoplay: true, delay: 3500 }}
      />
    </section>
  );
}
