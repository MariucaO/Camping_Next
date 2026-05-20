"use client";

import { FiMapPin, FiPhone, FiInstagram, FiFacebook } from "react-icons/fi";
import FramedSection from "./common/FramedSection";

export default function Footer() {
  const googleMapsUrl = "https://www.google.com/maps"; // Pune link-ul tău aici

  return (
    <footer id="contact" className="bg-[var(--background)] scroll-mt-24">
      <FramedSection>
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Linie de separare mai vizibilă */}
          <div className="w-full h-[2px] bg-[var(--accent)] opacity-30 mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Coloana 1: Brand - Text negru/verde închis clar */}
            <div className="space-y-4">
              <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[var(--foreground)] tracking-tight">
                Grădina cu <span className="text-[var(--accent)]">flori</span>
              </h3>
              <p className="text-[var(--foreground)] text-sm leading-relaxed max-w-[280px] mx-auto md:mx-0 font-medium font-sans">
                O livadă de familie transformată în refugiu pentru iubitorii de
                natură. Simplitate, liniște și spiritul Văii Lotrului.
              </p>
            </div>

            {/* Coloana 2: Contact - Fără opacitate, text pronunțat */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-[3px] text-[11px] text-[var(--accent)]">
                Contact & Locație
              </h4>
              <ul className="space-y-4 text-sm font-sans text-[var(--foreground)] font-medium">
                <li>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-[var(--accent)] transition-colors group"
                  >
                    <FiMapPin className="text-[var(--accent)] text-lg" />
                    <span>Brezoi, Vâlcea (Valea Lotrului)</span>
                  </a>
                </li>
                <li className="flex flex-col gap-4 items-center md:items-start">
                  <a
                    href="tel:+40752223869"
                    className="flex items-center gap-3 hover:text-[var(--accent)] transition-colors group"
                  >
                    <FiPhone className="text-[var(--accent)] text-lg" />
                    <span>0752 223 869</span>
                  </a>
                  <a
                    href="tel:+40730701781"
                    className="flex items-center gap-3 hover:text-[var(--accent)] transition-colors group"
                  >
                    <FiPhone className="text-[var(--accent)] text-lg" />
                    <span>0730 701 781</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coloana 3: Social - Iconițe mai mari și mai negre */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-[3px] text-[11px] text-[var(--accent)]">
                Urmărește-ne
              </h4>
              <div className="flex justify-center md:justify-start gap-8 text-[var(--foreground)]">
                <a
                  href="#"
                  className="text-2xl hover:text-[var(--accent)] transition-all transform hover:-translate-y-1"
                >
                  <FiInstagram />
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-[var(--accent)] transition-all transform hover:-translate-y-1"
                >
                  <FiFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright - Mai lizibil */}
          <div className="mt-20 pt-8 border-t border-[var(--foreground)]/10 text-center text-[var(--foreground)] text-[11px] uppercase tracking-[3px] font-bold">
            <p>© {new Date().getFullYear()} Camping Grădina cu Flori</p>
            <br></br>
            <p className="text-[10px] uppercase tracking-[2px] text-[var(--foreground)]/40">
              Conceput și creat de Măriuca Onică
            </p>
          </div>
        </div>
      </FramedSection>
    </footer>
  );
}
