"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FramedSection from "../common/FramedSection";
import {
  containerStagger,
  fadeInUp,
} from "../common/animations/motionVariants";

// 1. Componenta pentru Slider
function ImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-72 overflow-hidden rounded-xl mb-6 group/slider shadow-lg">
      <AnimatePresence mode="wait">
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

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover/slider:opacity-100 shadow-md z-10"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full hover:bg-white transition-colors opacity-0 group-hover/slider:opacity-100 shadow-md z-10"
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
}

const zonesData = [
  {
    id: "rulote",
    title: "Poiana Călătoare (VanLife)",
    images: ["/camper-zone2.jpg", "/camper-zone1.jpg", "/poiana_calatoare.jpg"], // Adaugă mai multe imagini aici: ["/poza1.jpg", "/poza2.jpg"]
    capacity: "4 Echipaje",
    tag: "Van Life",
    details:
      "Situată imediat la intrare, această zonă este destinată exclusiv rulotelor, autorulotelor sau turiștilor care vor să doarmă în mașina personală/ cort pe mașină. Oaspeții au acces la curent electric, deversare apă, apă curentă, dar și la restul facilităților pe care le are campingul.",
  },
  {
    id: "cires",
    title: "Zona 'La Cireș'",
    images: ["/la_cires2.jpg", "/la-cires2.jpg"],
    capacity: "6 Pitch-uri",
    tag: "Confort & Acces",
    details:
      "Aflată în continuarea Grăjdiuțului Vechi, aici avem 6 locuri generoase de cort pentru 1-3 persoane. Zona este semiumbroasă datorită unui cireș păsăresc mare și a prunilor bătrâni situați pe marginea gardului. Am extins zona umbroasă, plantând frasini, tei și cățărătoare.",
  },
  {
    id: "gradina",
    title: "Livada Liberă (Camping Random)",
    images: [
      "/gradina-libera1.jpg",
      "/about-camping-12.jpg",
      "/gradina-libera2.jpg",
      "gradina-libera5.jpg",
    ],
    capacity: "+20 de corturi",
    tag: "Camp Life",
    details:
      "Livada fâneață este o zonă vastă din spatele campingului, fără spații delimitate. Oaspeții își pot alege locul oriunde, bucurându-se de umbra deasă a nucului bătrân și a pomilor fructiferi. Spațiul este foarte generos, având o capacitate de peste 20 de corturi.",
  },
  {
    id: "meri",
    title: "Zona 'Meri-Mesteceni'",
    images: ["/meri-mesteceni1.jpg"],
    capacity: "9 Pitch-uri",
    tag: "Grupuri & Relaxare",
    details:
      "Aflată în spatele campingului, între grupul sanitar Baia sub Cer și Foișor și Bucătăria de vară, aici se află pitch-uri mari, delimitate de mesteceni tineri și plante cățărătoare. În mijlocul acestei zone se află 3 meri mari, iar zona este ideală pentru corturi mari, de 4-6 persoane.",
  },
  {
    id: "nuc",
    title: "La Nuc (Camping Random)",
    images: ["/la-nuc.jpg", "/nucul-mamei-ica2.jpg", "/la-nuc3.jpg"],
    capacity: "8-10 corturi",
    tag: "Umbră Deasă",
    details:
      "Situată în dreapta drumului de acces, este a doua zonă de campare la liber și are o capacitate de 8-10 corturi mari. Zona este umbroasă după-amiaza datorită nucului imens, dudului și arțarului care oferă răcoare din belșug.",
  },
];

export default function ZonesSection() {
  return (
    <section id="zone" className="py-24 bg-[var(--background)]">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-16"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--foreground)] mb-6">
                Locul tău în livadă
              </h2>
              <p className="text-[15px] md:text-[16px] leading-relaxed
                text-stone-700 font-normal font-sans">
                 Fiecare colț al
                campingului nostru are o poveste și un vibe aparte. Alege zona
                care se potrivește cel mai bine stilului tău de campare.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
              {zonesData.map((zone) => (
                <motion.div
                  key={zone.id}
                  id={zone.id}
                  variants={fadeInUp}
                  className="group space-y-6 border-t border-[var(--foreground)]/10 pt-12 relative scroll-mt-32"
                >
                  {/* Slider integrat aici */}
                  {zone.images && zone.images.length > 0 && (
                    <ImageSlider images={zone.images} title={zone.title} />
                  )}

                  <div className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {zone.tag}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif text-[var(--foreground)]">
                    {zone.title}
                  </h3>

                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    Capacitate: {zone.capacity}
                  </p>

                  <p className="text-[var(--foreground)] leading-relaxed italic border-l-4 border-[var(--accent)]/40 pl-6">
                    {zone.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}
