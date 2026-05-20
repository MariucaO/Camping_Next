"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FramedSection from "../common/FramedSection"; // Asigură marginea și stilul unitar
import { containerStagger, fadeInUp } from "../common/animations/motionVariants";

// Obiectul zones rămâne neschimbat pentru a păstra funcționalitatea
const zones = {
  rulote: { id: "rulote", name: "Poiana Călătoare", type: "free", color: "#fbbf24", desc: "Zonă dedicată rulotelor și autorulotelor, situată imediat la intrare. Are o capacitate de maxim 4 rulote/autorulote mari.", features: ["🚐 Acces facil", "⚡ Curent", "🌞 Soare din belșug", "⬇️ Deversare ape", "🚰 Apă", "🚐 Rulote", "🚐 Autorulote", "🚗⛺ Cort pe mașină",] },
  cires: { id: "cires", name: "La Cireș", type: "fixed", count: 6, prefix: "C", color: "#065f46", desc: "6 locuri delimitate pentru corturi de 1-3 persoane. ", features: ["🌳 Umbră","🌳🌤️ Semiumbra", "🧺 Intimitate", "🔌 Curent"] },
  gradina: { id: "gradina", name: "Grădina Liberă", type: "free", color: "#4ade80", desc: "Spațiu vast de campare la liber în partea dreaptă a livezii.", features: ["🌳 Umbră","🌳🌤️ Semiumbra","🌞 Soare din belșug", "🪁 Spațiu joacă", "🏕️ Orice mărime cort", "🔌 Curent"] },
  meri: { id: "meri", name: "Meri & Mesteceni", type: "fixed", count: 9, prefix: "M", color: "#2dd4bf", desc: "9 locuri mari delimitate în partea din spate a campingului.", features: ["🍏 Livadă", "📏 Locuri generoase", "🔌 Curent"] },
  nuc: { id: "nuc", name: "La Nuc", type: "free", color: "#86efac", desc: "Zonă de campare la liber în stânga, lângă baia sub cer.", features: ["🌳 Umbră ", "🏕️ Orice mărime cort", "🔌 Curent"] },
  baie_nuc: { id: "baie_nuc", name: "Baia sub Cer", type: "utility", color: "#3b82f6", desc: "Baia sub Cer, grup sanitar complet situat în zona din spate a campingului.", features: ["🚿 3 Dușuri","𚚰 2 Chiuvete", "🚻 3 WC-uri", "🔥 Apă Caldă"] },
  baie_centrala: { id: "baie_centrala", name: "Grup Sanitar Central", type: "utility", color: "#3b82f6", desc: "Toalete accesibile rapid din zona centrală a campingului.", features: ["🚿 3 Dușuri", "🚰 3 Chiuvete", "🚻 3 WC-uri", "🔥 Apă Caldă"] },
  bucatarie_1: { id: "bucatarie_1", name: "Bucătăria Poiana Călătoare", type: "utility", color: "#ef4444", desc: "Bucătărie utilată situată lângă zona de rulote.", features: ["🚰 Chiuvetă", "🍳 Plită", "🧊 2 Frigidere", "📶 Wi-Fi"] },
  bucatarie_2: { id: "bucatarie_2", name: "Bucătăria de Vară", type: "utility", color: "#ef4444", desc: "A doua bucătărie utilată, ideală pentru zona de grătar.", features: ["🚰 Chiuvetă", "🧊 2 Frigidere", "🍽️ Zonă mese"] },
  gratar: { id: "gratar", name: "Zona de Grătar", type: "utility", color: "#a855f7", desc: "Loc amenajat pentru foc, grătar și relaxare în grup.", features: ["🔥 Grătar", "🍢 Ustensile", "🪑 Masă de sprijin "] },
};

export default function BookingMap() {
  const [selected, setSelected] = useState(null);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    const handleExternalSelect = (event) => setSelected(event.detail);
    window.addEventListener("selectMapZone", handleExternalSelect);
    return () => window.removeEventListener("selectMapZone", handleExternalSelect);
  }, []);

  const handleZoneSelect = (key) => {
    setSelected(key);
    setTimeout(() => document.getElementById("detalii-zona")?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  };

  return (
    <section className="py-24 bg-[var(--background)]">
      <FramedSection>
        <div className="max-w-5xl mx-auto px-4">
          <motion.div variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-16">
            
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.span variants={fadeInUp} className="text-[var(--accent)] uppercase tracking-[3px] text-[10px] font-bold">Rezervare Directă</motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-[var(--foreground)]">Alege locul tău în livadă</motion.h2>
            </div>

            {/* Banner Regulament */}
            <motion.button variants={fadeInUp} onClick={() => setShowRules(!showRules)} className="w-full bg-white p-6 rounded-[2rem] border border-[var(--foreground)]/10 flex items-center justify-between shadow-sm hover:border-[var(--accent)]/50 transition-colors">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 bg-[var(--foreground)]/5 rounded-full flex items-center justify-center text-xl">📜</div>
                <div>
                  <h4 className="font-serif text-[var(--foreground)] text-lg">Codul Livezii Arhaice</h4>
                  <p className="text-[var(--foreground)]/50 text-xs">Te rugăm să verifici regulile înainte de rezervare.</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)]">{showRules ? "Închide" : "Vezi reguli"}</span>
            </motion.button>

            {/* HARTA - Acum ocupă tot spațiul cardului */}
<motion.div variants={fadeInUp} className="bg-white rounded-[3rem] border border-[var(--foreground)]/10 shadow-lg overflow-hidden">
  <div id="harta-booking" className="relative w-full">
    <img src="/map-base.png" alt="Harta Livezii" className="w-full h-auto block" />
    
    <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full z-20 pointer-events-auto" preserveAspectRatio="none">
       {/* Logica ta de click rămâne 100% intactă aici */}
       <rect x="320" y="110" width="80" height="190" fill="transparent" className="cursor-pointer hover:fill-amber-400/20 transition-colors" onClick={() => handleZoneSelect("rulote")} transform="rotate(-15, 360, 195)" />
       <rect x="280" y="290" width="60" height="220" fill="transparent" className="cursor-pointer hover:fill-emerald-900/20 transition-colors" onClick={() => handleZoneSelect("cires")} />
       <rect x="360" y="580" width="160" height="270" fill="transparent" className="cursor-pointer hover:fill-green-500/20 transition-colors" onClick={() => handleZoneSelect("gradina")} />
       <rect x="100" y="810" width="220" height="50" fill="transparent" className="cursor-pointer hover:fill-cyan-500/20 transition-colors" onClick={() => handleZoneSelect("meri")} transform="rotate(5, 210, 835)" />
       <rect x="200" y="625" width="100" height="80" fill="transparent" className="cursor-pointer hover:fill-green-300/20 transition-colors" onClick={() => handleZoneSelect("nuc")} transform="rotate(-30, 250, 665)" />
       
       <g className="cursor-pointer" onClick={() => handleZoneSelect("baie_nuc")} transform="translate(160, 740)"><circle r="18" fill="#3b82f6" stroke="white" strokeWidth="3" /></g>
       <g className="cursor-pointer" onClick={() => handleZoneSelect("baie_centrala")} transform="translate(300, 240)"><circle r="18" fill="#3b82f6" stroke="white" strokeWidth="3" /></g>
       <g className="cursor-pointer" onClick={() => handleZoneSelect("bucatarie_1")} transform="translate(300, 270)"><circle r="18" fill="#ef4444" stroke="white" strokeWidth="3" /></g>
       <g className="cursor-pointer" onClick={() => handleZoneSelect("bucatarie_2")} transform="translate(385, 800)"><circle r="18" fill="#ef4444" stroke="white" strokeWidth="3" /></g>
       <g className="cursor-pointer" onClick={() => handleZoneSelect("gratar")} transform="translate(320, 540)"><circle r="18" fill="#a855f7" stroke="white" strokeWidth="3" /></g>
    </svg>
  </div>
</motion.div>

            {/* Detalii Zona */}
            <div id="detalii-zona" className="scroll-mt-24">
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div key={selected} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 rounded-[2.5rem] border border-[var(--foreground)]/10 shadow-sm">
                    <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)] mb-4">{zones[selected].name}</h3>
                    <p className="text-lg italic text-[var(--foreground)]/70 mb-8 max-w-2xl">{zones[selected].desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {zones[selected].features.map((f, i) => (
                        <span key={i} className="px-4 py-2 bg-[var(--foreground)]/5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-[var(--foreground)]/5">{f}</span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center py-10 text-[var(--foreground)]/40 italic">Apasă pe o zonă pe hartă pentru a vedea detaliile.</div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}