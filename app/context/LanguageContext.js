"use client";
import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [limba, setLimba] = useState('ro');

  // Aici vei pune toate textele din site-ul tău, organizate frumos
 // În context/LanguageContext.js, completează obiectul t:
const t = {
    ro: {
      nav: { poveste: "Povestea", harta: "Vezi livada", galerie: "Galerie", activitati: "Activități", contact: "Contact", rezervare: "Rezervă" },
    },
    en: {
      nav: { poveste: "Our Story", harta: "See the Orchard", galerie: "Gallery", activitati: "Activities", contact: "Contact", rezervare: "Book Now" },
    }
};

  return (
    <LanguageContext.Provider value={{ limba, setLimba, t: t[limba] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);