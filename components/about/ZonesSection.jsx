"use client";

import { motion } from "framer-motion";
import FramedSection from "../common/FramedSection";
import {
  containerStagger,
  fadeInUp,
} from "../common/animations/motionVariants";

const zonesData = [
  {
    id: "rulote",
    title: "Poiana Călătoare (VanLife)",
    capacity: "4 Echipaje",
    tag: "Van Life",
    details:
      "Situată imediat la intrare, această zonă este destinată exclusiv rulotelor, autorulotelor sau turiștilor care vor să doarmă în mașina personală/ cort pe mașină. Oaspeții au acces la curent electric, deversare apă, apă curentă, dar și la restul facilităților pe care le are campingul. Este o zonă însorită, recomandăm utilizarea umbrarelor.",
  },
  {
    id: "cires",
    title: "Zona 'La Cireș'",
    capacity: "6 Pitch-uri",
    tag: "Confort & Acces",
    details:
      "Situată în continuarea Șurii Vechi, aici avem locuri generoase de cort pentru 1-3 persoane. Zona este semiumbroasă datorită unui cireș păsăresc mare, a prunilor bătrâni plantați pe marginea gardului și a tinerilor arbori plantați anul trecut. Pitch-urile sunt delimitate cu frânghie și plante cățărătoare (glicină, trompeta turcului, viță de cacao).",
  },
  {
    id: "gradina",
    title: "Livada Liberă (Camping Random)",
    capacity: "+20 de corturi",
    tag: "Camp Life",
    details:
      "Zona vastă din spatele campingului, fără spații delimitate. Oaspeții își pot alege locul oriunde, bucurându-se de umbra deasă a nucului bătrân și a pomilor fructiferi. Spațiul este generos și este ideal pentru grupuri foarte mari, de 10-20 de corturi.",
  },
  {
    id: "meri",
    title: "Zona 'Meri-Mesteceni'",
    capacity: "9 Pitch-uri",
    tag: "Grupuri & Relaxare",
    details:
      "Aici se află pitch-uri mari, delimitate de mesteceni tineri și plante cățărătoare. Cei 3 meri se află în mijlocul acestei zone de campare, care se află în spatele livezii-camping, la capătul drumului de acces, între grupul sanitar ”Baia sub Cer” și Bucătăria-Foișor. Cele 9 spații de campare sunt foarte mari, ideale pentru corturi de 2-4 persoane.",
  },
  {
    id: "nuc",
    title: "La Nuc (Camping Random)",
    capacity: "8-10 corturi",
    tag: "Umbră Deasă",
    details:
      "Situată în dreapta drumului de acces, zona este umbroasă după-amiaza. Nucul imens plantat de bunica Ica,  dudul și arțarul  oferă răcoare din belșug. Deși este mai mică decât Livada Liberă, zona are o capacitate de 8-10 corturi mari, de 4-6 persoane.",
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
