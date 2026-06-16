"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";
import { useLanguage } from "../../app/context/LanguageContext"; // Ajustează calea
import { containerStagger, fadeInUp } from "../common/animations/motionVariants";

export default function OutdoorBathroom() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[var(--background)] overflow-hidden">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <motion.span variants={fadeInUp} className="text-[var(--accent)] uppercase tracking-[3px] text-[10px] font-bold block">
                {t.outdoorBathroom.subtitle}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-[var(--foreground)]">
                {t.outdoorBathroom.title}
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full opacity-60" />
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
                {t.outdoorBathroom.desc}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {t.outdoorBathroom.images.map((img, i) => (
                <motion.div key={i} variants={fadeInUp} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <Image src={img.src} alt={img.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <p className="text-center mt-6 font-[family-name:var(--font-serif)] text-[var(--foreground)] text-xl italic">
                    {img.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="bg-stone-50/50 p-10 md:p-14 rounded-[3rem] border border-stone-100 mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {t.outdoorBathroom.features.map((feat, i) => (
                  <div key={i} className="text-center space-y-3">
                    <span className="text-4xl block transform transition-transform group-hover:scale-110">{feat.emoji}</span>
                    <span className="block font-bold text-[var(--foreground)] text-xs uppercase tracking-wider">{feat.label}</span>
                    <span className="text-[11px] text-[var(--foreground)] opacity-70 font-medium">{feat.detail}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-10 border-t border-[var(--foreground)]/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
                  {t.outdoorBathroom.footerText}
                </p>
                <div className="flex gap-4">
                  <span className="bg-white text-[var(--foreground)] px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-stone-200 shadow-sm">
                    {t.outdoorBathroom.tags.sustainable}
                  </span>
                  <span className="bg-[var(--accent)] text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {t.outdoorBathroom.tags.solar}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}