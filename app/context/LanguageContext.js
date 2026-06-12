"use client";
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [limba, setLimba] = useState("ro");

  const t = {
    ro: {
      nav: {
        poveste: "Povestea",
        harta: "Vezi livada",
        galerie: "Galerie",
        activitati: "Activități",
        contact: "Contact",
        rezervare: "Rezervă",
      },
      hero: {
        locatie: "Brezoi • Valea Lotrului",
        titlu: "Camping Grădina cu Flori",
        descriere: "Am transformat livada familiei într-un spațiu de campare cochet, cu nuci, duzi și cireși bătrâni. Valea Lotrului este o frumusețe, iar festivalul de muzică Summer Camp Brezoi este la câțiva pași.",
        btnRezerva: "Rezervă locul",
        btnExploreaza: "Explorează livada",
      },
      footer: {
        descriere: "O livadă de familie transformată în refugiu pentru iubitorii de natură. Simplitate, liniște și spiritul Văii Lotrului.",
        contactTitlu: "Contact & Locație",
        socialTitlu: "Urmărește-ne",
        copyright: "creat de Măriuca Onică ©",
      },
    },
    en: {
      nav: {
        poveste: "Our Story",
        harta: "See the Orchard",
        galerie: "Gallery",
        activitati: "Activities",
        contact: "Contact",
        rezervare: "Book Now",
      },
      hero: {
        locatie: "Brezoi • Lotru Valley",
        titlu: "Grădina cu Flori Camping",
        descriere: "We transformed our family orchard into a cozy camping space, with old walnut, mulberry, and cherry trees. The Lotru Valley is beautiful, and the Summer Camp Brezoi music festival is just a few steps away.",
        btnRezerva: "Book Now",
        btnExploreaza: "Explore the Orchard",
      },
      footer: {
        descriere: "A family orchard transformed into a refuge for nature lovers. Simplicity, peace, and the spirit of the Lotru Valley.",
        contactTitlu: "Contact & Location",
        socialTitlu: "Follow us",
        copyright: "created by Măriuca Onică ©",
      },
    },
  };

  return (
    <LanguageContext.Provider value={{ limba, setLimba, t: t[limba] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);