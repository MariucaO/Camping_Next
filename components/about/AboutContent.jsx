"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";
import { useLanguage } from "../../app/context/LanguageContext"; // Asigură-te că drumul este corect

export default function AboutContent() {
  const { t } = useLanguage();

  const family = [
    {
      name: t.about.family.rares.name,
      role: t.about.family.rares.role,
      bio: t.about.family.rares.bio,
      image: "/rares.jpg",
    },
    {
      name: t.about.family.mariuca.name,
      role: t.about.family.mariuca.role,
      bio: t.about.family.mariuca.bio,
      image: "/mariuca.jpg",
    },
    {
      name: t.about.family.ilinca.name,
      role: t.about.family.ilinca.role,
      bio: t.about.family.ilinca.bio,
      image: "/ilinca.jpg",
    },
  ];

  return (
    <section id="poveste" className="py-20 bg-[#F9F9F6]">
      <FramedSection>
        <div className="text-center mb-20 px-6">
          <motion.h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">
            {t.about.titlu}
          </motion.h2>
          <div className="w-12 h-[2px] bg-amber-500/50 mx-auto mb-10" />
          <div className="max-w-3xl mx-auto">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
              {t.about.intro}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 mb-20">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-100 shadow-sm text-center">
            <h3 className="text-2xl font-serif text-teal-900 mb-8">{t.about.gospodarie.titlu}</h3>
            
            <div className="relative w-full h-72 mb-8 rounded-2xl overflow-hidden shadow-sm">
              <Image src="/flori.jpg" fill className="object-cover" alt="Grădina cu flori" />
            </div>

            <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-sans text-left">
              {t.about.gospodarie.descriere}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {family.map((member, i) => (
            <motion.div key={i} className="group text-center">
              <div className="relative aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-[8px] border-white shadow-lg bg-stone-100">
                <Image src={member.image} fill className="object-cover transition-transform duration-500 group-hover:scale-105" alt={member.name} sizes="192px" quality={90} />
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-1">{member.name}</h3>
              <p className="text-amber-600 text-[9px] uppercase tracking-[0.25em] font-bold mb-3">{member.role}</p>
              <p className="text-stone-600 leading-relaxed text-[13px] px-4 font-medium italic">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <details className="group bg-white rounded-2xl shadow-sm border border-stone-200 transition-all hover:border-amber-200 hover:shadow-md">
            <summary className="font-serif text-xl text-teal-900 cursor-pointer list-none p-8 flex items-center justify-between select-none">
              {t.about.valori.titlu}
            </summary>
            <div className="px-8 pb-8 border-t border-stone-100 text-stone-700 leading-relaxed font-sans text-[15px]">
              <div className="relative w-full h-64 mb-6 mt-6 rounded-xl overflow-hidden shadow-sm">
                <Image src="/about-intro.jpg" fill className="object-cover" alt="Despre noi" />
              </div>
              <p>{t.about.valori.descriere}</p>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-stone-200 transition-all hover:border-amber-200 hover:shadow-md">
            <summary className="font-serif text-xl text-teal-900 cursor-pointer list-none p-8 flex items-center justify-between select-none">
              {t.about.viziune.titlu}
            </summary>
            <div className="px-8 pb-8 border-t border-stone-100 text-stone-700 leading-relaxed font-sans text-[15px]">
              <p className="pt-6 mb-6">{t.about.viziune.partea1}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm"><Image src="/ilinca_planteaza.jpg" fill className="object-cover" alt="Ilinca" /></div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm"><Image src="/plantari1.jpg" fill className="object-cover" alt="Plantari" /></div>
              </div>
              <p className="mb-6">{t.about.viziune.partea2}</p>
              <p className="pt-4 border-t border-stone-100">{t.about.viziune.partea3}</p>
            </div>
          </details>
        </div>
      </FramedSection>
    </section>
  );
}