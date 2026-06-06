"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";

// Datele familiei rămân neschimbate
const family = [
  { name: "Rareș", role: "Constructorul", bio: "El a simțit potențialul livezii moștenite și a început să o transforme într-un loc de reîncărcat bateriile. Rareș este cel care a construit tot ce vedeți, de la vatra de foc la modernizarea vechiului grajd.", image: "/rares.jpg" },
  { name: "Măriuca", role: "Gazda", bio: "Ea l-a sprijinit pe Rareș, dorind ca terenul de la bunicii ei să își găsească o utilitate modernă. Păstrează curățenia, primește oaspeții, le oferă ajutor și indicații, se ocupă de promovare și de rezervări.", image: "/mariuca.jpg" },
  { name: "Ilinca", role: "Mica Exploratoare", bio: "La 3 ani jumătate, Ilinca este ghidul neoficial. Hrănește câinii, verifică hamacele, își ajută părinții să ude florile. Crește liberă și învață în fiecare zi cât de importantă este natura.", image: "/ilinca.jpg" },
];

export default function AboutContent() {
  return (
    <section className="py-20 bg-[#F9F9F6]">
      <FramedSection>
        {/* Titlu și Intro */}
        <div className="text-center mb-20 px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl md:text-4xl font-serif text-teal-900 mb-6"
          >
            Povestea noastră
          </motion.h2>
          <div className="w-12 h-[2px] bg-amber-500/50 mx-auto mb-10" />
          <div className="max-w-3xl mx-auto">
            <p className="text-[17px] md:text-[18px] leading-relaxed text-stone-800 font-serif italic tracking-wide">
              &ldquo;Ne-am dorit să valorificăm terenul moștenit de la străbuni, fără
              însă să stricăm farmecul natural al acestei grădini mari, cu pomi
              plantați de bunici. Fiind așezați lângă râu, pe drumul care
              parcurge Valea Lotrului, am sesizat nevoia turiștilor de a campa
              în această zonă frumoasă și ne adresăm în special iubitorilor
              de simplitate. Primii oaspeți i-am primit în 2021 și de atunci
              continuăm să îmbunătățim facilitățile și să extindem zona umbroasă.&rdquo;
            </p>
          </div>
        </div>

        {/* Grila Familiei */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {family.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.1 }} 
              className="group text-center"
            >
              <div className="relative aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-[8px] border-white shadow-lg bg-stone-100">
                <Image 
                  src={member.image} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  alt={member.name} 
                  sizes="192px" 
                  quality={90} 
                />
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-1">{member.name}</h3>
              <p className="text-amber-600 text-[9px] uppercase tracking-[0.25em] font-bold mb-3">{member.role}</p>
              <p className="text-stone-600 leading-relaxed text-[13px] px-4 font-normal italic">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </FramedSection>
    </section>
  );
}