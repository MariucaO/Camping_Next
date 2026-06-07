"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FramedSection from "../common/FramedSection"; // Folosim wrapper-ul standard
import {
  containerStagger,
  fadeInUp,
} from "../../components/common/animations/motionVariants";

const kitchenFeatures = [
  { item: "Bucătărie acoperită", desc: "Spațiu complet protejat pentru gătit cu blat de lucru generos" },
    { item: "Foișor acoperit", desc: "Zonă de luat masa/relaxare acoperită, dotată cu 2 mese mari și bănci/scaune" },
  { item: "Apă curentă", desc: "1 chiuvetă  și spații dedicate pentru depozitare" },
  { item: "2 Frigidere", desc: "Suficient spațiu pentru organizarea alimentelor tuturor oaspeților" },
  { item: "Ustensile de gătit", desc: "Tot ce ai nevoie pentru pregătirea și servirea mesei în natură" },
];

const technicalFeatures = [
  { emoji: "⚡", label: "Curent Electric" },
  { emoji: "🔌", label: "Prize încărcare" },
  { emoji: "🛠️", label: "În Lucru" },
  { emoji: "🌿", label: "Zonă livadă" },
];

export default function SummerKitchenPage() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Header - Identic stilistic cu ZonesSection */}
            <div className="text-center space-y-4">
              <motion.span variants={fadeInUp} className="text-[var(--accent)] uppercase tracking-[3px] text-[10px] font-bold block">
                Proiect în curs de amenajare 🛠️
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-[var(--foreground)]">
                Foișor și bucătărie <span className="text-[var(--accent)]">Zona din spate a campingului</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full opacity-60" />
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
                Pentru weekendurile mai aglomerate, ne-am dorit să construim o a doua bucătărie de vară și un alt loc de luat masa. Noua construcție este amplasată între <strong>Livada Liberă</strong> și <strong>Meri&Mesteceni</strong>.
              </motion.p>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Card 1: Dotări */}
              <motion.div variants={fadeInUp} className="bg-white p-10 rounded-[2rem] border border-[var(--foreground)]/10 shadow-sm">
                <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)] mb-8">Dotări</h3>
                <ul className="space-y-6">
                  {kitchenFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-4 border-b border-[var(--foreground)]/5 pb-4 last:border-0">
                      <span className="text-[var(--accent)] font-bold text-lg">✓</span>
                      <div>
                        <span className="font-bold text-[var(--foreground)] block uppercase tracking-widest text-[9px]">{feat.item}</span>
                        <span className="text-sm text-[var(--foreground)]/70">{feat.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Card 2: Detalii Tehnice */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="bg-[var(--foreground)]/5 p-10 rounded-[2rem] border border-[var(--accent)]/20 h-full">
                  <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)] mb-6">Spațiul Utilitar</h3>
                  <p className="text-sm text-[var(--foreground)] font-medium leading-relaxed opacity-90">
                   Această bucătărie-foișor, cu loc generos de luat masa, acoperit, este construită în central în gradina- camping din spate. Pentru a observa corect unde este situată, vă invităm să vizitați harta interactivă de mai jos.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {technicalFeatures.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[var(--foreground)]/10 shadow-sm">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-[9px] font-bold text-[var(--foreground)] uppercase tracking-widest">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Buton Înapoi */}
            <div className="flex justify-center pt-8">
              <Link href="/#rezervare" className="group inline-flex items-center gap-3 bg-transparent text-[var(--foreground)] border-2 border-[var(--foreground)]/20 px-10 py-4 rounded-full text-[11px] font-bold hover:border-[var(--foreground)] transition-all uppercase tracking-[2px]">
                ← Spre hartă
              </Link>
            </div>
          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}