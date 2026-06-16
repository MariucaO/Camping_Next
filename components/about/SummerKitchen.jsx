"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FramedSection from "../common/FramedSection";
import { useLanguage } from "../../app/context/LanguageContext"; // Ajustează calea
import { containerStagger, fadeInUp } from "../../components/common/animations/motionVariants";

export default function SummerKitchenPage() {
  const { t } = useLanguage();

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
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.span variants={fadeInUp} className="text-[var(--accent)] uppercase tracking-[3px] text-[10px] font-bold block">
                {t.summerKitchen.subtitle}
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-[family-name:var(--font-serif)] text-[var(--foreground)]">
                {t.summerKitchen.title.part1} <span className="text-[var(--accent)]">{t.summerKitchen.title.part2}</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full opacity-60" />
              <motion.p variants={fadeInUp} className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
                {t.summerKitchen.desc}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Dotări */}
              <motion.div variants={fadeInUp} className="bg-white p-10 rounded-[2rem] border border-[var(--foreground)]/10 shadow-sm">
                <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)] mb-8">{t.summerKitchen.featuresTitle}</h3>
                <ul className="space-y-6">
                  {t.summerKitchen.kitchenFeatures.map((feat, i) => (
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

              {/* Detalii Tehnice */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="bg-[var(--foreground)]/5 p-10 rounded-[2rem] border border-[var(--accent)]/20 h-full">
                  <h3 className="text-3xl font-[family-name:var(--font-serif)] text-[var(--foreground)] mb-6">{t.summerKitchen.utilTitle}</h3>
                  <p className="text-sm text-[var(--foreground)] font-medium leading-relaxed opacity-90">
                    {t.summerKitchen.utilDesc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {t.summerKitchen.technicalFeatures.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-[var(--foreground)]/10 shadow-sm">
                        <span className="text-xl">{item.emoji}</span>
                        <span className="text-[9px] font-bold text-[var(--foreground)] uppercase tracking-widest">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center pt-8">
              <Link href="/#rezervare" className="group inline-flex items-center gap-3 bg-transparent text-[var(--foreground)] border-2 border-[var(--foreground)]/20 px-10 py-4 rounded-full text-[11px] font-bold hover:border-[var(--foreground)] transition-all uppercase tracking-[2px]">
                {t.summerKitchen.backButton}
              </Link>
            </div>
          </motion.div>
        </div>
      </FramedSection>
    </section>
  );
}