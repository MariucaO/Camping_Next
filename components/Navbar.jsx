"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../app/context/LanguageContext"; // Importăm Contextul

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Aici accesăm variabilele din Context
  const { limba, setLimba, t } = useLanguage();

  const isDarkTheme = isScrolled || pathname === '/booking';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Folosim textele din t (care vin din LanguageContext)
  const navLinks = [
    { name: t.nav.poveste, href: "/#poveste" },
    { name: t.nav.harta, href: "/#harta-booking" },
    { name: t.nav.galerie, href: "/#album-familie" },
    { name: t.nav.activitati, href: "/#activitati" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkTheme ? "bg-white shadow-md py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-12 w-auto" style={{ filter: isDarkTheme ? "invert(15%) sepia(40%) saturate(2000%) hue-rotate(150deg) brightness(90%)" : "invert(50%) sepia(85%) saturate(2500%) hue-rotate(15deg) brightness(95%)" }} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-x-8">
          {/* BUTONUL DE LIMBĂ */}
          <button 
            onClick={() => setLimba(limba === 'ro' ? 'en' : 'ro')}
            className={`text-[11px] uppercase tracking-[2px] font-bold ${isDarkTheme ? "text-emerald-950" : "text-white"}`}
          >
            {limba === 'ro' ? 'EN' : 'RO'}
          </button>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-[11px] uppercase tracking-[2px] font-bold transition-colors ${isDarkTheme ? "text-emerald-950 hover:text-amber-600" : "text-white hover:text-amber-500"}`}>
              {link.name}
            </Link>
          ))}
          <Link href="/booking" className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase ${isDarkTheme ? "bg-amber-600 text-white" : "bg-white text-black"}`}>
            {t.nav.rezervare}
          </Link>
        </div>

        {/* Hamburger */}
        <button className={`md:hidden ${isDarkTheme ? "text-emerald-950" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      
      {/* Meniu Mobil - am adăugat aici doar logica de afișare pentru el */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-emerald-950 flex flex-col items-center justify-center gap-8 md:hidden">
          <button className="absolute top-8 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>✕</button>
          
          <button onClick={() => { setLimba(limba === 'ro' ? 'en' : 'ro'); setIsOpen(false); }} className="text-amber-500 text-lg font-bold uppercase">
             {limba === 'ro' ? 'EN' : 'RO'}
          </button>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-serif text-white hover:text-amber-500">
              {link.name}
            </Link>
          ))}

          <Link href="/booking" onClick={() => setIsOpen(false)} className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold uppercase">
            {t.nav.rezervare}
          </Link>
        </div>
      )}
    </nav>
  );
}