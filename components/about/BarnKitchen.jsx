"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";
import {
  containerStagger,
  fadeInUp,
} from "../common/animations/motionVariants";

const kitchenFeatures = [
  { item: "Insulă & Blat", desc: "Spațiu generos pentru gătit simultan" },
  { item: "Dotări Electrice", desc: "Plite inducție, fierbător, prize" },
  { item: "2 Frigidere", desc: "Spațiu organizat pentru alimente" },
  { item: "Ustensile", desc: "Vase, farfurii, tacâmuri & condimente" },
];

const bathroomFeatures = [
  { emoji: "🚿", label: "4 Dușuri calde" },
  { emoji: "🚽", label: "3 Toalete" },
  { emoji: "🪞", label: "Oglindă & Lavoare" },
  { emoji: "🌐", label: "Zonă Wi-Fi" },
];

export default function BarnHub() {
  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden">
      <FramedSection>
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 space-y-16"
        >
          {/* Section Header - RECONSTRUIT */}
          <div className="text-center space-y-4">
            <motion.span
              variants={fadeInUp}
              className="text-[var(--accent)] uppercase tracking-[3px] text-[10px] font-bold"
            >
              Povestea Locului
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-[var(--foreground)]"
            >
              Grăjdiuțul vechi:{" "}
              <span className="text-[var(--accent)]">Inima campingului</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full opacity-60"
            />

            <motion.p
              variants={fadeInUp}
              className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans"
            >
              Am pornit de la ideea că vechiul poate să devină actual, modern și am folosit structura solidă construită de bunic pentru a amenaja toalete, dușuri și o bucătărie de vară.
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT: Grupul Sanitar */}
            <motion.div 
            id="baie_centrala"
            variants={fadeInUp} className="space-y-8">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white rotate-[-1deg]">
                <Image
                  src="/grajdi.jpg"
                  alt="Sura Veche Exterior"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-6 left-6 bg-[var(--foreground)] text-white px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Grajdiul lui Gogu
                </div>
              </div>

              <div className="bg-stone-50/50 p-10 rounded-3xl border border-stone-100 space-y-6">
                <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)]">
                  Grupul sanitar modern
                </h3>
                <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
                  Rareș a transformat interiorul într-un spațiu modern, păstrând
                  exteriorul intact. Am avut grijă de cuiburile rândunelelor
                  vechi de zeci de ani, care se întorc aici în fiecare
                  primăvară.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {bathroomFeatures.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm border border-stone-50 transition-transform hover:scale-105"
                    >
                      <span className="text-xl">{item.emoji}</span>
                      <span className="text-xs font-bold text-[var(--foreground)] uppercase tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 flex items-center gap-3 text-[10px] text-[var(--accent)] font-bold uppercase tracking-widest">
                  <span className="text-lg">♿</span>
                  <span>Toaletă adaptată în lucru</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Bucătăria de vară */}
            <motion.div 
            id="bucatarie_1"
            variants={fadeInUp} className="space-y-8 lg:mt-16">
              <div className="bg-stone-50/80 p-10 rounded-3xl border border-[var(--accent)]/10 relative">
                <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)] mb-6">
                  Bucătăria de vară
                </h3>

                <ul className="space-y-5 mb-10">
                  {kitchenFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-[var(--accent)] font-bold text-lg">
                        ✓
                      </span>
                      <div className="text-sm">
                        <span className="font-bold text-[var(--foreground)] block uppercase tracking-tight text-xs">
                          {feat.item}
                        </span>
                        <span className="text-[var(--foreground)] opacity-70 font-medium">
                          {feat.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-5">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/bucatarie.jpg"
                      alt="Bucatarie interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                      src="/loc_de_mancat.jpg"
                      alt="Loc de luat masa"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <h4 className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-[2px] mb-2">
                    Spațiu de luat masa
                  </h4>
                  <p className="text-sm font-medium text-[var(--foreground)] leading-relaxed">
                    2 mese lungi cu bănci, acoperite, ideale pentru grupuri de
                    15-20 persoane.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* TECHNICAL RESOURCES */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[var(--foreground)]/5 pt-16"
          >
            {[
              {
                icon: "☀️",
                title: "Energie Solară",
                desc: "Sursă regenerabilă pentru un camping verde.",
              },
              {
                icon: "💧",
                title: "Apă de munte",
                desc: "Apă potabilă ce provine din fântâna proprie.",
              },
              {
                icon: "♻️",
                title: "Colectare selectivă",
                desc: "Protejăm natura prin gestionarea deșeurilor.",
              },
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-5 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all group"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform grayscale-[0.5] group-hover:grayscale-0">
                  {tech.icon}
                </span>
                <div>
                  <h4 className="font-bold text-[var(--foreground)] text-xs uppercase tracking-wider mb-1">
                    {tech.title}
                  </h4>
                  <p className="text-[11px] text-[var(--foreground)] opacity-60 font-medium leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </FramedSection>
    </section>
  );
}
