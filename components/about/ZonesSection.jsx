"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FramedSection from "../common/FramedSection";
import { fadeInUp } from "../common/animations/motionVariants";
import { useLanguage } from "../../app/context/LanguageContext";

function ImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);
  return (
    <div className="relative w-full h-72 overflow-hidden rounded-xl mb-6 shadow-lg">
      <motion.img key={index} src={images[index]} alt={title} className="w-full h-full object-cover" />
    </div>
  );
}

export default function ZonesSection() {
  const { t } = useLanguage();
  const z = t.zonesSection || {};

  const zonesData = [
    { id: "rulote", images: ["/camper-zone2.jpg", "/camper-zone1.jpg", "/poiana_calatoare.jpg"], capacity: "4 Echipaje", tag: "Van Life", ...z.rulote },
    { id: "cires", images: ["/la_cires2.jpg", "/la-cires2.jpg"], capacity: "6 Pitch-uri", tag: "Confort & Acces", ...z.cires },
    { id: "gradina", images: ["/gradina-libera1.jpg", "/about-camping-12.jpg", "/gradina-libera2.jpg", "/gradina-libera5.jpg"], capacity: "+20 de corturi", tag: "Camp Life", ...z.gradina },
    { id: "meri", images: ["/meri-mesteceni1.jpg"], capacity: "9 Pitch-uri", tag: "Grupuri & Relaxare", ...z.meri },
    { id: "nuc", images: ["/la-nuc.jpg", "/nucul-mamei-ica2.jpg", "/la-nuc3.jpg"], capacity: "8-10 corturi", tag: "Umbră Deasă", ...z.nuc },
  ];

  return (
    <section id="zone" className="py-24 bg-[var(--background)]">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4">
          {/* AICI ESTE TITLUL PE CARE ÎL CĂUTAI */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-6">
              Locul tău în livadă
            </h2>
            <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
              Fiecare colț al campingului nostru are o poveste și un vibe aparte. Alege zona care se potrivește cel mai bine stilului tău de campare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
            {zonesData.map((zone) => (
              <motion.div 
                key={zone.id} 
                id={zone.id} // ID-ul e aici, deci linkurile din BookingMap vor merge din nou
                variants={fadeInUp} 
                className="group space-y-6 border-t border-[var(--foreground)]/10 pt-12 scroll-mt-32"
              >
                <ImageSlider images={zone.images} title={zone.name} />
                <div className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {zone.tag}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-[var(--foreground)]">
                  {zone.name}
                </h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  Capacitate: {zone.capacity}
                </p>
                <p className="text-[var(--foreground)] leading-relaxed italic border-l-4 border-[var(--accent)]/40 pl-6">
                  {zone.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </FramedSection>
    </section>
  );
}