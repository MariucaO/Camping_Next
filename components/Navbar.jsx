"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectează scroll-ul
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo - își schimbă culoarea în funcție de scroll */}
        <Link href="/" className={`text-xl font-serif tracking-wide transition-colors ${
          isScrolled ? "text-emerald-950" : "text-white"
        }`}>
          P.C.
        </Link>

        {/* Link-uri - culori diferite la scroll */}
        <div className="hidden md:flex gap-x-8">
          {["Povestea", "Harta", "Galerie", "Activități", "Contact"].map((item) => (
            <Link key={item} href={`/#${item.toLowerCase()}`} className={`text-[11px] uppercase tracking-[2px] font-bold transition-colors ${
              isScrolled ? "text-emerald-950 hover:text-amber-600" : "text-white hover:text-[var(--accent)]"
            }`}>
              {item}
            </Link>
          ))}
        </div>

        {/* Buton Rezervă - devine "solid" la scroll */}
        <Link href="/booking" className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
          isScrolled 
            ? "bg-amber-600 text-white hover:bg-emerald-900" 
            : "bg-white text-black hover:bg-[var(--accent)] hover:text-white"
        }`}>
          Rezervă
        </Link>
      </div>
    </nav>
  );
}