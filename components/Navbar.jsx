"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-[family-name:var(--font-serif)] text-white tracking-tight"
        >
          Camping Arhaic
        </Link>

        {/* Meniu */}
        <div className="hidden md:flex items-center gap-x-10">
          <Link
            href="#poveste"
            className="text-sm uppercase tracking-[2px] font-semibold text-white hover:text-[var(--accent)] transition-colors"
          >
            Povestea Noastră
          </Link>
          <Link
            href="#harta-booking"
            className="text-sm uppercase tracking-[2px] font-semibold text-white hover:text-[var(--accent)] transition-colors"
          >
            Zone Livadă
          </Link>

          {/* Link-ul către Galerie - MODIFICAT AICI */}
          <a
            href="#album-familie"
            className="text-sm uppercase tracking-[2px] font-semibold text-white hover:text-[var(--accent)] transition-colors cursor-pointer"
          >
            Galerie
          </a>
          <Link
            href="#contact"
            className="text-sm uppercase tracking-[2px] font-semibold text-white hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Buton Rezervă */}
        <Link
          href="/booking"
          className="bg-white text-black px-7 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] hover:text-white transition-all"
        >
          Rezervă
        </Link>
      </div>
    </nav>
  );
}
