"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Povestea", href: "#poveste" },
    { name: "Vezi livada", href: "#harta-booking" },
    { name: "Galerie", href: "#album-familie" },
    { name: "Activități", href: "#activitati" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className={`text-xl font-serif tracking-wide ${
          isScrolled ? "text-emerald-950" : "text-white"
        }`}>
          P.C.
        </Link>

        {/* Desktop Menu - Ascuns pe mobil */}
        <div className="hidden md:flex items-center gap-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={`text-[11px] uppercase tracking-[2px] font-bold ${
              isScrolled ? "text-emerald-950 hover:text-amber-600" : "text-white hover:text-amber-500"
            }`}>
              {link.name}
            </Link>
          ))}
          <Link href="/booking" className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            isScrolled ? "bg-amber-600 text-white hover:bg-emerald-900" : "bg-white text-black hover:bg-amber-500 hover:text-white"
          }`}>
            Rezervă
          </Link>
        </div>

        {/* Hamburger Button - Vizibil pe mobil */}
        <button 
          className={`md:hidden z-[60] ${isScrolled ? "text-emerald-950" : "text-white"}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Meniu Mobil - Afișat când isOpen este true */}
      {/* Înlocuiește blocul de mai jos în Navbar.jsx */}

{isOpen && (
  <div className="fixed inset-0 z-[100] bg-emerald-950 flex flex-col items-center justify-center gap-8 md:hidden">
    {/* Buton de închidere intern */}
    <button 
      className="absolute top-8 right-6 text-white text-3xl"
      onClick={() => setIsOpen(false)}
    >
      ✕
    </button>
    
    {navLinks.map((link) => (
      <Link 
        key={link.name} 
        href={link.href} 
        onClick={() => setIsOpen(false)} 
        className="text-2xl font-serif text-white hover:text-amber-500 transition-colors"
      >
        {link.name}
      </Link>
    ))}
    
    <Link 
      href="/booking" 
      onClick={() => setIsOpen(false)} 
      className="bg-amber-600 text-white px-10 py-4 rounded-full text-lg font-bold uppercase"
    >
      Rezervă
    </Link>
  </div>

      )}
    </nav>
  );
}