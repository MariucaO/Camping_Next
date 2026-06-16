"use client";
import { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [limba, setLimba] = useState("ro");

  const t = {
    ro: {
      nav: { poveste: "Povestea", harta: "Vezi livada", galerie: "Galerie", activitati: "Activități", contact: "Contact", rezervare: "Rezervă" },
      hero: { locatie: "Brezoi • Valea Lotrului", titlu: "Camping Grădina cu Flori", descriere: "Am transformat livada familiei într-un spațiu de campare cochet, cu nuci, duzi și cireși bătrâni. Valea Lotrului este o frumusețe, iar festivalul de muzică Summer Camp Brezoi este la câțiva pași.", btnRezerva: "Rezervă locul", btnExploreaza: "Explorează livada" },
      about: {
        titlu: "Povestea noastră",
        intro: "Ne-am dorit să valorificăm terenul moștenit de la străbuni, fără însă să stricăm farmecul natural al acestei grădini mari, cu pomi plantați de bunici. Fiind așezați lângă râu, pe drumul care parcurge Valea Lotrului, am sesizat nevoia turiștilor de a campa în această zonă frumoasă și ne adresăm în special iubitorilor de simplitate. Primii oaspeți i-am primit în 2021 și de atunci continuăm să îmbunătățim facilitățile și să extindem zona umbroasă.",
        gospodarie: {
          titlu: "Acasă, în Grădina cu Flori",
          descriere: "Campingul este parte din gospodăria noastră, situată pe un teren de 5000 m, unde avem casa, o mică livadă de pomi și vie, solarul de legume și grădina cu flori. Ne-am mutat aici în 2018 și de atunci muncim cu drag pământul primit de la bunici.\n\nDe altfel, numele ales pentru camping vine direct din pasiunea Măriucăi pentru florile de grădină."
        },
        family: {
          rares: { name: "Rareș", role: "Constructorul", bio: "El a simțit potențialul livezii moștenite și a început să o transforme într-un loc de reîncărcat bateriile. Rareș este cel care a construit tot ce vedeți, de la vatra de foc la modernizarea vechiului grajd." },
          mariuca: { name: "Măriuca", role: "Gazda", bio: "Ea l-a sprijinit pe Rareș, dorind ca terenul de la bunicii ei să își găsească o utilitate modernă. Păstrează curățenia, primește oaspeții, le oferă ajutor și indicații, se ocupă de promovare și de rezervări." },
          ilinca: { name: "Ilinca", role: "Mica Exploratoare", bio: "La 3 ani jumătate, Ilinca este ghidul neoficial. Hrănește câinii, verifică hamacele, își ajută părinții să ude florile. Crește liberă și învață în fiecare zi cât de importantă este natura." }
        },
        valori: { titlu: "Ce prețuim", descriere: "Iubim acest loc, este acasă pentru noi și deoarece activitatea de camping se desfășoară într-o parte semnificativă din grădina noastră, ne dorim să ne simțim bine și noi și oaspeții noștri. Campingul nostru nu este unul cu pretenții, prețuim foarte mult bunul simț și simplitatea. Suntem prietenoși și sociabili și ne dorim să ne facem oaspeții să se simtă cât mai bine." },
        viziune: { titlu: "Planuri și viziune", partea1: "Nevoia de umbră este foarte mare pe timp de vară, așa că am plantat în ultimii 3 ani mai multe specii, precum frasini, mesteceni, nuci, dar și plante cățărătoare. Zonele delimitate, cu pitch-uri, au arbori plantați între ele, dar și cățărătoare rezistente, precum trompeta turcului, glicină și viță de cacao. Ne dorim să creăm o oază de verdeață numai bună de campat, de mers desculț, de stat în hamac sau direct pe iarbă.", partea2: "Pentru anul următor ne-am propus să mutăm vatra de foc în apropiere de bucătăria de vară, iar spațiul rămas să îl transformăm într-un loc de joacă complex, dotat cu turn de cățărat, tobogan, plasă de cățărat și o căsuță în copac, totul gândit special pentru cei mici, la vârsta Ilincăi.", partea3: "De asemenea, ne propunem să curățăm malul râului Lotru, situat la doar 3 minute de mers pe jos, astfel încât oaspeții noștri să se poată bucura de un spațiu curat și primitor unde să se relaxeze sau să facă baie în zilele călduroase." }
      },
      footer: { descriere: "O livadă de familie transformată în refugiu pentru iubitorii de natură. Simplitate, liniște și spiritul Văii Lotrului.", contactTitlu: "Contact & Locație", socialTitlu: "Urmărește-ne", copyright: "creat de Măriuca Onică ©" },
    },
    en: {
      nav: { poveste: "Our Story", harta: "See the Orchard", galerie: "Gallery", activitati: "Activities", contact: "Contact", rezervare: "Book Now" },
      hero: { locatie: "Brezoi • Lotru Valley", titlu: "Grădina cu Flori Camping", descriere: "We transformed our family orchard into a cozy camping space, with old walnut, mulberry, and cherry trees. The Lotru Valley is beautiful, and the Summer Camp Brezoi music festival is just a few steps away.", btnRezerva: "Book Now", btnExploreaza: "Explore the Orchard" },
      about: {
        titlu: "Our Story",
        intro: "We wanted to make the most of the land inherited from our ancestors without spoiling the natural charm of this large garden, with trees planted by our grandparents. Located by the river, on the road that crosses the Lotru Valley, we noticed the tourists' need to camp in this beautiful area and we are addressing ourselves especially to lovers of simplicity. We welcomed our first guests in 2021 and since then we continue to improve the facilities and expand the shady area.",
        gospodarie: {
          titlu: "Home, at Grădina cu Flori",
          descriere: "The campsite is part of our household, situated on a 5000 sqm plot, where we have our house, a small orchard of trees and vines, a vegetable greenhouse, and the flower garden. We moved here in 2018 and since then we have been lovingly working the land received from our grandparents.\n\nBesides, the name chosen for the camping comes directly from Măriuca's passion for garden flowers."
        },
        family: {
          rares: { name: "Rareș", role: "The Builder", bio: "He felt the potential of the inherited orchard and started turning it into a place to recharge. Rareș is the one who built everything you see, from the fire pit to the modernization of the old stable." },
          mariuca: { name: "Măriuca", role: "The Host", bio: "She supported Rareș, wanting her grandparents' land to find a modern use. She keeps everything clean, welcomes guests, offers help and directions, handles promotion and bookings." },
          ilinca: { name: "Ilinca", role: "The Little Explorer", bio: "At 3 and a half years old, Ilinca is the unofficial guide. She feeds the dogs, checks the hammocks, helps her parents water the flowers. She grows up free and learns every day how important nature is." }
        },
        valori: { titlu: "What we value", descriere: "We love this place, it is home to us, and since the camping activity takes place in a significant part of our garden, we want both us and our guests to feel good. Our campsite is not one with pretensions; we highly value common sense and simplicity. We are friendly and sociable, and we want to make our guests feel as comfortable as possible." },
        viziune: { titlu: "Plans and Vision", partea1: "The need for shade is very high during the summer, so in the last 3 years, we have planted several species, such as ash, birch, walnut trees, but also climbing plants. The delimited areas, with pitches, have trees planted between them, but also resistant climbers, such as trumpet vine, wisteria, and chocolate vine. We want to create an oasis of greenery perfect for camping, walking barefoot, sitting in a hammock, or directly on the grass.", partea2: "For next year, we aim to move the fire pit closer to the summer kitchen and turn the remaining space into a complex playground, equipped with a climbing tower, slide, climbing net, and a treehouse, all designed specifically for the little ones, at Ilinca's age.", partea3: "We also intend to clean up the bank of the Lotru River, located just a 3-minute walk away, so that our guests can enjoy a clean and welcoming space to relax or swim on hot days." }
      },
      footer: { descriere: "A family orchard transformed into a refuge for nature lovers. Simplicity, peace, and the spirit of the Lotru Valley.", contactTitlu: "Contact & Location", socialTitlu: "Follow us", copyright: "created by Măriuca Onică ©" },
    },
  };

  return (
    <LanguageContext.Provider value={{ limba, setLimba, t: t[limba] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);