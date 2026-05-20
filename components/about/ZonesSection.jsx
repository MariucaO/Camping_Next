"use client";

import { motion } from "framer-motion";
import FramedSection from "../common/FramedSection";
import {
  containerStagger,
  fadeInUp,
} from "../common/animations/motionVariants";

// Mapăm ID-urile din această pagină cu cheile exacte din componenta hărții (BookingMap)
const mapZoneKeys = {
  camping_rulote: "rulote",
  camping_1_3: "cires",
  camping_random: "gradina",
  camping_1_4: "meri",
  "la-nuc": "nuc"
};

const zonesData = [
  {
    id: "camping_rulote",
    title: "Poiana Călătoare (VanLife)",
    color: "var(--accent)", 
    capacity: "4 Echipaje",
    tag: "Van Life",
    details:
      "Situată imediat la intrare, această zonă este destinată exclusiv rulotelor, autorulotelor sau turiștilor care vor să doarmă în mașina personală/ cort pe mașină. Oaspeții au acces la curent electric, deversare apă, apă curentă, dar și la restul facilităților pe care le are campingul. Este o zonă însorită, recomandăm utilizarea umbrarelor.",
  },
  {
    id: "camping_1_3",
    title: "Zona 'La Cireș'",
    color: "var(--foreground)", 
    capacity: "6 Pitch-uri delimitate",
    tag: "Confort & Acces",
    details:
      "Situată în continuarea Șurii Vechi, aici avem locuri generoase de cort pentru 1-3 persoane. Zona este semiumbroasă datorită unui cireș păsăresc mare, a liniei de pruni de pe linia gardului și a tinerilor arbori plantați anul trecut. Pitch-urile sunt delimitate cu frânghie și plante cățărătoare(glicină, trompeta turcului, viță de cacao).",
  },
  {
    id: "camping_random",
    title: "Livada Liberă (Camping Random)",
    color: "var(--accent)",
    capacity: "+20 de corturi",
    tag: "Camp Life",
    details:
      "Zona vastă din spatele campingului, fără spații delimitate. Oaspeții își pot alege locul oriunde, bucurându-se de umbra deasă a nucului bătrân și a pomilor fructiferi. Spațiul este foarte generos și este ideal pentru grupuri foarte mari, de 10-20 de corturi.",
  },
  {
    id: "camping_1_4",
    title: "Zona 'Meri-Mesteceni'",
    color: "var(--foreground)",
    capacity: "9 Pitch-uri mari",
    tag: "Grupuri & Relaxare",
    details:
      "Aici se află pitch-uri mari, delimitate de mesteceni tineri și plante cățărătoare. Zona se află în spatele livezii-camping, la capătul drumului de acces, între grupul sanitar ”Baia sub Cer” și Bucătăria-Foișor. Cele 9 spații de campare sunt foarte mari, ideale pentru corturi de 2-4 persoane.",
  },
  {
    id: "la-nuc", 
    title: "La Nuc (Camping Random)",
    color: "var(--accent)", 
    capacity: "8-10 corturi mari",
    tag: "Umbră Deasă",
    details:
      "Situată în dreapta drumului de acces, zona este umbroasă după-amiaza. Nucul imens plantat de bunica Ica,  dudul și arțarul  oferă răcoare din belșug. Deși este mai mică decât Livada Liberă, zona are o capacitate de 8-10 corturi mari, de 4-6 persoane.",
  },
];

export default function ZonesSection() {
  
  const handleViewOnMap = (zoneId) => {
    // 1. Facem scroll-ul lin către secțiunea hărții
    const mapElement = document.getElementById("harta-booking");
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: "smooth" });
    }

    // 2. Trimitem ID-ul zonei către hartă printr-un eveniment global
    const targetMapKey = mapZoneKeys[zoneId];
    if (targetMapKey) {
      const event = new CustomEvent("selectMapZone", { detail: targetMapKey });
      window.dispatchEvent(event);
    }
  };

  return (
    <section id="zone" className="py-24 bg-[var(--background)] scroll-mt-24">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.span
                variants={fadeInUp}
                className="text-[var(--accent)] uppercase tracking-[3px] text-[10px] font-bold"
              >
                Zonificare Precisă
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-[var(--foreground)]"
              >
                Configurația Livezii
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full opacity-60"
              />
              <motion.p
                variants={fadeInUp}
                className="text-[var(--foreground)] max-w-2xl mx-auto italic text-lg leading-relaxed font-sans font-medium pt-2"
              >
                Vă invităm să vă selectați locul preferat. Mai jos găsiți descrierea fiecărei zone, menită să vă ajute în planificarea șederii.
              </motion.p>
            </div>

            {/* Lista Zonelor */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
              {zonesData.map((zone) => (
                <motion.div
                  key={zone.id}
                  variants={fadeInUp}
                  className="group space-y-6 border-t border-[var(--foreground)]/10 pt-12 relative"
                >
                  <div
                    className="absolute top-0 left-0 w-16 h-1.5 transition-all group-hover:w-full duration-700 ease-in-out"
                    style={{ backgroundColor: zone.color.includes('var') ? `var(--accent)` : zone.color }}
                  />

                  <div className="flex items-center gap-6">
                    <span className="bg-[var(--accent)] text-white text-[9px] px-4 py-1 rounded-full font-bold uppercase tracking-widest shadow-sm">
                      {zone.tag}
                    </span>
                    <span className="text-[10px] text-[var(--foreground)] font-bold uppercase tracking-widest opacity-80">
                      Capacitate: {zone.capacity}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-serif)] text-[var(--foreground)] leading-tight">
                    {zone.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)] leading-relaxed italic border-l-4 border-[var(--accent)]/40 pl-6 text-base font-sans font-medium">
                    {zone.details}
                  </p>

                  <button
                    onClick={() => handleViewOnMap(zone.id)}
                    className="group/btn relative overflow-hidden bg-transparent text-[var(--foreground)] border-2 border-[var(--foreground)]/20 px-10 py-3.5 rounded-full text-[11px] font-bold hover:border-[var(--foreground)] transition-all uppercase tracking-[2px] mt-6 shadow-sm"
                  >
                    <span className="relative z-10">Vezi pe hartă</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}