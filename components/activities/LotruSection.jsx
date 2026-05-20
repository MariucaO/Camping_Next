"use client";

import { motion } from "framer-motion";
import ActivityCard from "./ActivityCard";
import FramedSection from "../common/FramedSection";
import { containerStagger, fadeInUp } from "../common/animations/motionVariants";

const lotruData = [
  {
    title: "Muzică live la Brezoi",
    image: "/festival.jpg",
    description: "Vara la Summer Camp și Open Air Blues Festival.",
    content: "Dacă este iulie, aici are loc grozavul Open Air Blues Festival. Poți lăsa mașina în siguranță în livadă și să mergi pe jos la concerte (10 min). Contact: 0761 312 655."
  },
  {
    title: "Plimbări cu e-bicicletele",
    image: "/bicycles.jpg",
    description: "Închirieri biciclete electrice mountain bike.",
    content: "Descoperă Alpine Xplore pentru tururi eco-friendly. Contact: 0745 833 567 (Carmen Sylva, nr 12, Brezoi)."
  },
  {
    title: "Mâncare Locală Autentică",
    image: "/food.jpg",
    description: "Punctul gastronomic local 'Casa Coziei'.",
    content: "Mâncare tradițională făcută cu drag. Se pot face rezervări pentru masă sau pachet. Contact: 0755 509 434 (Sat Văratica)."
  },
  {
    title: "Ghidaj Montan",
    image: "/mountainlandscape1.jpg",
    description: "Trasee către Masivul Cozia sau Pietrele Doabrei.",
    content: "Colaborăm cu ghizi locali calificați pentru Masivul Cozia, Dealul Proienilor și Muntele Narățu. Adaptăm trasee pentru copii și adulți. Contact: 0730 701 781."
  },
  {
    title: "Echitație în natură",
    image: "/horsebackriding.jpg",
    description: "Drumeții cu caii prin Munții Lotrului.",
    content: "Nedeea Vâlceană organizează excursii de 1-7 zile prin pădurile și dealurile Văii Călineștiului. Contact: 0744 313 135."
  },
  {
    title: "Băi Termale",
    image: "/thermals.jpg",
    description: "Călimănești-Căciulata la doar 15 km.",
    content: "Relaxare în ape termale și proceduri balneare aproape de Brezoi. O destinație perfectă pentru o zi de refacere."
  }
];

export default function LotruSection() {
  return (
    <section id="activitati" className="py-24 bg-stone-50 scroll-mt-24">
      <FramedSection>
        {/* Containerul care forțează lățimea corectă */}
        <div className="max-w-6xl mx-auto px-6 w-full">
          
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center space-y-3">
              <motion.span 
                variants={fadeInUp} 
                className="text-amber-600 uppercase tracking-widest text-[11px] font-bold"
              >
                Explorare Locală
              </motion.span>
              <motion.h2 
                variants={fadeInUp} 
                className="text-4xl md:text-5xl font-serif text-teal-900"
              >
                Valea Lotrului
              </motion.h2>
              <motion.p 
                variants={fadeInUp} 
                className="text-stone-600 max-w-2xl mx-auto italic text-lg leading-relaxed"
              >
                Descoperă activitățile și partenerii noștri locali. De la aventură pe munte la relaxare termală.
              </motion.p>
            </div>

            {/* Grid de activități */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lotruData.map((item, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <ActivityCard 
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    content={item.content}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}