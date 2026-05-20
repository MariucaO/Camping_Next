"use client";

import { motion } from "framer-motion";
import { ShieldCheck, VolumeX, Flame, Dog, UserCheck } from "lucide-react"; // opțional, dacă ai lucide-react

export default function RulesSection() {
  const rules = [
    {
      title: "Liniștea Naturii",
      desc: "Campingul nostru este un sanctuar al sunetelor naturale. Muzica în boxe, sistemele audio sau zgomotul excesiv nu sunt permise, indiferent de oră.",
      icon: <VolumeX className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Focul și Grătarul",
      desc: "Din respect pentru livadă și siguranță, focul și grătarul sunt permise exclusiv în vatra special amenajată de Rareș.",
      icon: <Flame className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Politica Pet-Friendly",
      desc: "Animalele sunt binevenite dacă sunt sociabile. Gazdele noastre (Luna, Nomad, Lupu, Gore) sunt dornice de oaspeți noi.",
      icon: <Dog className="w-6 h-6 text-amber-600" />
    },
    {
      title: "Dreptul de Selecție",
      desc: "Ne rezervăm dreptul de a ne selecta oaspeții. Rezervarea este confirmată doar pentru cei care rezonează cu aceste valori de bun-simț.",
      icon: <UserCheck className="w-6 h-6 text-amber-600" />
    }
  ];

  return (
    <section id="codul-livezii" className="py-24 bg-stone-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          {/* Titlu și Text Stânga */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif text-teal-900 mb-6 leading-tight">
              Codul <br /> <span className="text-amber-600 italic">Livezii Arhaice</span>
            </h2>
            <p className="text-stone-600 leading-relaxed font-light mb-8">
              Nu suntem un camping comercial, ci o grădină deschisă prietenilor. 
              Am creat acest set de reguli pentru a proteja liniștea oaspeților și 
              spiritul locului.
            </p>
            <div className="p-6 bg-white border-l-4 border-amber-500 shadow-sm">
              <p className="text-sm font-bold text-teal-900 uppercase tracking-widest">Atenție</p>
              <p className="text-xs text-stone-500 mt-2">
                Nerespectarea acestor reguli duce la încetarea imediată a șederii fără rambursare.
              </p>
            </div>
          </div>

          {/* Gila de Reguli Dreapta */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {rules.map((rule, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm"
              >
                <div className="mb-4">{rule.icon}</div>
                <h3 className="text-xl font-serif text-teal-900 mb-3">{rule.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed font-light">{rule.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}