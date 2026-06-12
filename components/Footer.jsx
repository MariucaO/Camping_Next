"use client";

import { FiMapPin, FiPhone, FiInstagram, FiFacebook } from "react-icons/fi";
import FramedSection from "./common/FramedSection";
import { useLanguage } from "../app/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const googleMapsUrl = "https://www.google.com/maps"; 

  return (
    <footer id="contact" className="bg-[var(--background)] scroll-mt-24">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="w-full h-[2px] bg-[var(--accent)] opacity-30 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Coloana 1: Brand */}
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--foreground)] tracking-tight">
                Grădina cu <span className="text-[var(--accent)]">flori</span>
              </h3>
              <p className="text-[var(--foreground)] text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0 font-medium font-sans">
                {t.footer.descriere}
              </p>
            </div>

            {/* Coloana 2: Contact - Am pus ambele numere înapoi */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-[3px] text-[11px] text-[var(--accent)]">
                {t.footer.contactTitlu}
              </h4>
              <ul className="space-y-4 text-sm font-sans text-[var(--foreground)] font-medium">
                <li>
                  <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-[var(--accent)] transition-colors group">
                    <FiMapPin className="text-[var(--accent)] text-lg" />
                    <span>Brezoi, Vâlcea (Valea Lotrului)</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+40752223869" className="flex items-center justify-center md:justify-start gap-3 hover:text-[var(--accent)] transition-colors">
                    <FiPhone className="text-[var(--accent)] text-lg" />
                    <span>0752 223 869</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+40730701781" className="flex items-center justify-center md:justify-start gap-3 hover:text-[var(--accent)] transition-colors">
                    <FiPhone className="text-[var(--accent)] text-lg" />
                    <span>0730 701 781</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coloana 3: Social */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-[3px] text-[11px] text-[var(--accent)]">
                {t.footer.socialTitlu}
              </h4>
              <div className="flex justify-center md:justify-start gap-8 text-[var(--foreground)]">
                <a href="https://www.instagram.com/camping.gradina.cu.flori" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--accent)] transition-all transform hover:-translate-y-1"><FiInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=100083178489940" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[var(--accent)] transition-all transform hover:-translate-y-1"><FiFacebook /></a>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[var(--foreground)]/10 text-center text-[var(--foreground)] text-[11px] uppercase tracking-[3px] font-bold">
            <p>{t.footer.copyright} {new Date().getFullYear()} Camping Grădina cu Flori</p>
          </div>
        </div>
      </FramedSection>
    </footer>
  );
}