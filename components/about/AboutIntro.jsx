"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import FramedSection from "../common/FramedSection";
import { fadeInUp } from "../common/animations/motionVariants";

export default function AboutIntro() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src="/about-intro-websafe.jpg"
          alt="Camping at night"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay subtil pentru a face tranziția spre secțiunea următoare mai fină */}
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* Framed Text Section */}
      <FramedSection>
        <motion.div
          className="text-center space-y-8 py-10" // Spațiere puțin mai generoasă
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Am schimbat text-teal-800 cu un stil care folosește font-serif-ul tău */}
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-serif)] font-medium text-[var(--foreground)]">
            Despre noi
          </h1>
          
          {/* Am schimbat stone-700 cu foreground-ul tău organic și am reglat dimensiunea */}
          <p className="text-base md:text-lg font-sans text-[var(--foreground)] opacity-85 leading-relaxed max-w-2xl mx-auto tracking-wide">
            Povestea noastră începe cu dragostea pentru natură și se continuă cu fiecare călător care ne trece pragul.
            Refugiul nostru este despre liniște, conexiune și simplitate atentă.
          </p>
          
          {/* Un mic element decorativ (opțional) în culoarea accentului tău */}
          <div className="w-12 h-[1px] bg-[var(--accent)] mx-auto opacity-50" />
        </motion.div>
      </FramedSection>
    </>
  );
}