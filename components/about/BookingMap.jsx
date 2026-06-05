"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import FramedSection from "../common/FramedSection";

const zones = {
  rulote: { id: "rulote", name: "Poiana Călătoare(VanLife)", type: "camp", desc: "Zonă dedicată rulotelor și autorulotelor, situată imediat la intrare. Are o capacitate de maxim 4 rulote/autorulote mari.", features: ["🚐 Acces facil", "⚡ Curent", "🌞 Soare din belșug", "⬇️ Deversare ape", "🚰 Apă", "🚐 Rulote", "🚐 Autorulote", "🚗⛺ Cort pe mașină"] },
  cires: { id: "cires", name: "La Cireș", type: "camp", items: ["C1", "C2", "C3", "C4", "C5", "C6"], desc: "6 locuri mari, delimitate, pentru corturi de 1-3 persoane.", features: ["🌳 Umbră", "🌳🌤️ Semiumbra", "🧺 Intimitate", "🔌 Curent"] },
  gradina: { id: "gradina", name: "Livada Liberă(Camping Random)", type: "camp", desc: "Spațiu vast de campare la liber în partea stângă a livezii, cu o capacitate de peste 20 de corturi.", features: ["🌳 Umbră", "🌳🌤️ Semiumbra", "🌞 Soare din belșug", "🪁 Spațiu joacă", "🏕️ Orice mărime cort", "🔌 Curent"] },
  meri: { id: "meri", name: "Meri & Mesteceni", type: "camp", items: ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"], desc: "9 locuri mari, delimitate, aflate în partea din spate a campingului.", features: ["🍏 Livadă", "📏 Locuri generoase", "🔌 Curent"] },
  nuc: { id: "nuc", name: "La Nuc (Camping Random)", type: "camp", desc: "Zonă de campare la liber în dreapta livezii din spate. Are o capacitate de 8-10 corturi mari.", features: ["🌳 Umbră ", "🏕️ Orice mărime cort", "🔌 Curent"] },
  baie_nuc: { id: "baie_nuc", name: "Baia sub Cer", type: "utility", desc: "Grup sanitar complet utilat, situat în zona din spate a campingului.", features: ["🚿 3 Dușuri", "🚰 2 Chiuvete", "🚻 3 WC-uri", "🔥 Apă Caldă"] },
  baie_centrala: { id: "baie_centrala", name: "Grup Sanitar Central", type: "utility", desc: "Toalete accesibile rapid din zona centrală a campingului.", features: ["🚿 3 Dușuri", "🚰 3 Chiuvete", "🚻 3 WC-uri", "🔥 Apă Caldă"] },
  bucatarie_1: { id: "bucatarie_1", name: "Bucătăria Poiana Călătoare", type: "utility", desc: "Bucătărie utilată situată lângă zona de rulote.", features: ["🚰 Chiuvetă", "🍳 Plită", "🧊 2 Frigidere", "📶 Wi-Fi"] },
  bucatarie_2: { id: "bucatarie_2", name: "Bucătăria de Vară", type: "utility", desc: "A doua bucătărie utilată, situată central în zona din spate a campingului.", features: ["🚰 Chiuvetă", "🧊 2 Frigidere", "🍽️ Zonă mese"] },
  gratar: { id: "gratar", name: "Zona de grătar", type: "utility", desc: "Loc amenajat pentru foc și pregătirea mâncării la grătar.", features: ["🔥 Grătar", "🍢 Ustensile", "🪑 Masă de sprijin ", "🚰 Apă"] },
};

export default function BookingMap() {
  const [selected, setSelected] = useState(null);

  const handleZoneSelect = (key) => {
    setSelected(key);
    setTimeout(() => document.getElementById("detalii-zona")?.scrollIntoView({ behavior: "smooth", block: "center" }), 100);
  };

  return (
    <section id="harta-booking" className="py-24 bg-[var(--background)]">
      <FramedSection>
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          <h2 className="text-center text-4xl md:text-5xl font-serif text-[var(--foreground)]">Alege locul tău în livadă</h2>

          <div className="bg-white rounded-[3rem] border border-[var(--foreground)]/10 shadow-lg overflow-hidden relative">
            <TransformWrapper initialScale={1} minScale={1} maxScale={3} centerOnInit={true}>
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* Butoanele sunt aici, în afara TransformComponent, dar în interiorul TransformWrapper */}
                  <div className="absolute top-4 right-4 z-[100] flex flex-col gap-2 pointer-events-auto">
                    <button onClick={() => zoomIn()} className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-stone-100 font-bold border border-gray-200 w-10 h-10">+</button>
                    <button onClick={() => zoomOut()} className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-stone-100 font-bold border border-gray-200 w-10 h-10">-</button>
                    <button onClick={() => resetTransform()} className="bg-white/90 px-3 py-1 rounded-full shadow-lg hover:bg-stone-100 text-[10px] font-bold uppercase tracking-widest border border-gray-200">Reset</button>
                  </div>

                  <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }} contentStyle={{ width: "100%" }}>
                    <div className="relative w-full cursor-grab active:cursor-grabbing">
                      <img src="/map-base.png" alt="Harta" className="w-full h-auto block pointer-events-none" />
                      <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full z-20" preserveAspectRatio="none">
                        {/* Zone Campare (Intacte) */}
                        <rect x="320" y="110" width="80" height="190" fill="transparent" className="cursor-pointer hover:fill-amber-400/20" onClick={() => handleZoneSelect("rulote")} transform="rotate(-15, 360, 195)" />
                        <rect x="280" y="290" width="60" height="220" fill="transparent" className="cursor-pointer hover:fill-emerald-900/20" onClick={() => handleZoneSelect("cires")} />
                        <rect x="360" y="580" width="160" height="270" fill="transparent" className="cursor-pointer hover:fill-green-500/20" onClick={() => handleZoneSelect("gradina")} />
                        <rect x="100" y="810" width="220" height="50" fill="transparent" className="cursor-pointer hover:fill-cyan-500/20" onClick={() => handleZoneSelect("meri")} transform="rotate(5, 210, 835)" />
                        <rect x="200" y="625" width="100" height="80" fill="transparent" className="cursor-pointer hover:fill-green-300/20" onClick={() => handleZoneSelect("nuc")} transform="rotate(-30, 250, 665)" />
                        {/* Utilitare (Intacte) */}
                        <circle cx="160" cy="740" r="18" fill="#3b82f6" className="cursor-pointer hover:fill-blue-600" onClick={() => handleZoneSelect("baie_nuc")} />
                        <circle cx="300" cy="240" r="18" fill="#3b82f6" className="cursor-pointer hover:fill-blue-600" onClick={() => handleZoneSelect("baie_centrala")} />
                        <circle cx="300" cy="270" r="18" fill="#ef4444" className="cursor-pointer hover:fill-red-600" onClick={() => handleZoneSelect("bucatarie_1")} />
                        <circle cx="385" cy="800" r="18" fill="#ef4444" className="cursor-pointer hover:fill-red-600" onClick={() => handleZoneSelect("bucatarie_2")} />
                        <circle cx="320" cy="540" r="18" fill="#a855f7" className="cursor-pointer hover:fill-purple-600" onClick={() => handleZoneSelect("gratar")} />
                        {/* Etichete Pitch-uri (Alinierea ta perfectă) */}
                        {[...Array(6)].map((_, i) => (
                          <text key={`C${i+1}`} x="310" y={325 + (i * 35)} fill="white" fontSize="16" fontWeight="bold" style={{ textShadow: "0 0 4px rgba(0,0,0,0.5)" }} textAnchor="middle">C{i+1}</text>
                        ))}
                        {[...Array(9)].map((_, i) => (
                          <text key={`M${i+1}`} x={130 + (i * 22)} y="835" fill="white" fontSize="14" fontWeight="bold" style={{ textShadow: "0 0 4px rgba(0,0,0,0.5)" }} textAnchor="middle" transform={`rotate(5, ${130 + i*22}, 835)`}>M{i+1}</text>
                        ))}
                      </svg>
                    </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>

          <div id="detalii-zona" className="scroll-mt-24">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div key={selected} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-10 rounded-[2.5rem] border border-[var(--foreground)]/10">
                  <h3 className="text-3xl font-serif mb-4">{zones[selected].name}</h3>
                  <p className="text-lg italic text-gray-600 mb-6">{zones[selected].desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {zones[selected].features.map((f, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold uppercase tracking-widest">{f}</span>
                    ))}
                  </div>

                  {zones[selected].type === "camp" && (
                    <button 
                      onClick={() => document.getElementById(selected)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--accent)] hover:text-emerald-900 transition-all border-b-2 border-[var(--accent)]"
                    >
                      Citește mai mult ↗
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </FramedSection>
    </section>
  );
}