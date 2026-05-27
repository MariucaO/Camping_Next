"use client";

import { motion } from "framer-motion";
import FramedSection from "../common/FramedSection";
import { containerStagger, fadeInUp } from "../common/animations/motionVariants";

const zonesData = [
  { 
    id: "rulote", 
    title: "Poiana Călătoare (VanLife)", 
    capacity: "4 Echipaje", 
    tag: "Van Life", 
    details: "Situată imediat la intrare, această zonă este dedicată rulotelor și autorulotelor. Dispune de curent electric, acces facil și este punctul ideal pentru cei care călătoresc cu casa în spate." 
  },
  { 
    id: "cires", 
    title: "Zona 'La Cireș'", 
    capacity: "6 Pitch-uri", 
    tag: "Confort & Acces", 
    details: "Situată în continuarea Șurii Vechi, această zonă oferă 6 locuri mari, delimitate, perfecte pentru corturi de 1-3 persoane. Te vei bucura de umbră naturală și o atmosferă liniștită." 
  },
  { 
    id: "gradina", 
    title: "Livada Liberă (Camping Random)", 
    capacity: "+20 de corturi", 
    tag: "Camp Life", 
    details: "Zona vastă din spatele campingului, unde libertatea este cuvântul cheie. Este locul ideal pentru grupuri mari sau pentru oricine își dorește să campeze la liber, într-un spațiu deschis și aerisit." 
  },
  { 
    id: "meri", 
    title: "Zona 'Meri-Mesteceni'", 
    capacity: "9 Pitch-uri", 
    tag: "Grupuri & Relaxare", 
    details: "Aici se află pitch-uri mari, delimitate, aflate în partea din spate a campingului. Este zona perfectă pentru cei care caută un echilibru între intimitate și apartenența la comunitatea campingului." 
  },
  { 
    id: "nuc", 
    title: "La Nuc (Camping Random)", 
    capacity: "8-10 corturi", 
    tag: "Umbră Deasă", 
    details: "Situată în dreapta drumului de acces, lângă ”Baia sub Cer”. Este o zonă intimă, cu umbră naturală generoasă, potrivită pentru corturi de orice mărime care caută răcoare și liniște." 
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
              {zonesData.map((zone) => (
                <motion.div
                  key={zone.id}
                  id={zone.id}
                  variants={fadeInUp}
                  className="group space-y-6 border-t border-[var(--foreground)]/10 pt-12 relative scroll-mt-32"
                >
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