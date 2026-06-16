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
        gospodarie: { titlu: "Acasă, în Grădina cu Flori", descriere: "Campingul este parte din gospodăria noastră, situată pe un teren de 5000 m, unde avem casa, o mică livadă de pomi și vie, solarul de legume și grădina cu flori. Ne-am mutat aici în 2018 și de atunci muncim cu drag pământul primit de la bunici.\n\nDe altfel, numele ales pentru camping vine direct din pasiunea Măriucăi pentru florile de grădină." },
        family: {
          rares: { name: "Rareș", role: "Constructorul", bio: "El a simțit potențialul livezii moștenite și a început să o transforme într-un loc de reîncărcat bateriile. Rareș este cel care a construit tot ce vedeți, de la vatra de foc la modernizarea vechiului grajd." },
          mariuca: { name: "Măriuca", role: "Gazda", bio: "Ea l-a sprijinit pe Rareș, dorind ca terenul de la bunicii ei să își găsească o utilitate modernă. Păstrează curățenia, primește oaspeții, le oferă ajutor și indicații, se ocupă de promovare și de rezervări." },
          ilinca: { name: "Ilinca", role: "Mica Exploratoare", bio: "La 3 ani jumătate, Ilinca este ghidul neoficial. Hrănește câinii, verifică hamacele, își ajută părinții să ude florile. Crește liberă și învață în fiecare zi cât de importantă este natura." }
        },
        valori: { titlu: "Ce prețuim", descriere: "Iubim acest loc, este acasă pentru noi și deoarece activitatea de camping se desfășoară într-o parte semnificativă din grădina noastră, ne dorim să ne simțim bine și noi și oaspeții noștri. Campingul nostru nu este unul cu pretenții, prețuim foarte mult bunul simț și simplitatea. Suntem prietenoși și sociabili și ne dorim să ne facem oaspeții să se simtă cât mai bine." },
        viziune: { titlu: "Planuri și viziune", partea1: "Nevoia de umbră este foarte mare pe timp de vară, așa că am plantat în ultimii 3 ani mai multe specii, precum frasini, mesteceni, nuci, dar și plante cățărătoare. Zonele delimitate, cu pitch-uri, au arbori plantați între ele, dar și cățărătoare rezistente, precum trompeta turcului, glicină și viță de cacao. Ne dorim să creăm o oază de verdeață numai bună de campat, de mers desculț, de stat în hamac sau direct pe iarbă.", partea2: "Pentru anul următor ne-am propus să mutăm vatra de foc în apropiere de bucătăria de vară, iar spațiul rămas să îl transformăm într-un loc de joacă complex, dotat cu turn de cățărat, tobogan, plasă de cățărat și o căsuță în copac, totul gândit special pentru cei mici, la vârsta Ilincăi.", partea3: "De asemenea, ne propunem să curățăm malul râului Lotru, situat la doar 3 minute de mers pe jos, astfel încât oaspeții noștri să se poată bucura de un spațiu curat și primitor unde să se relaxeze sau să facă baie în zilele călduroase." }
      },
      barn: {
        subtitle: "Povestea Locului",
        title: { part1: "Grăjdiuțul vechi:", part2: "Inima campingului" },
        desc: "Am pornit de la ideea că vechiul poate să devină actual, modern și am folosit structura solidă construită de bunic pentru a amenaja toalete, dușuri și o bucătărie de vară.",
        bathroom: {
          badge: "Grajdiul lui Gogu",
          title: "Grupul sanitar modern",
          text: "Rareș a transformat interiorul într-un spațiu modern, păstrând exteriorul intact. Am avut grijă de cuiburile rândunelelor vechi de zeci de ani, care se întorc aici în fiecare primăvară.",
          features: [{ emoji: "🚿", label: "4 Dușuri calde" }, { emoji: "🚽", label: "3 Toalete" }, { emoji: "🪞", label: "Oglindă & Lavoare" }, { emoji: "🌐", label: "Zonă Wi-Fi" }],
          accessibility: "Toaletă adaptată în lucru"
        },
        kitchen: {
          title: "Bucătăria de vară",
          features: [{ item: "Insulă & Blat", desc: "Spațiu generos pentru gătit simultan" }, { item: "Dotări Electrice", desc: "Plite inducție, fierbător, prize" }, { item: "2 Frigidere", desc: "Spațiu organizat pentru alimente" }, { item: "Ustensile", desc: "Vase, farfurii, tacâmuri & condimente" }],
          diningTitle: "Spațiu de luat masa",
          diningDesc: "2 mese lungi cu bănci, acoperite, ideale pentru grupuri de 15-20 persoane."
        },
        tech: [{ icon: "☀️", title: "Energie Solară", desc: "Sursă regenerabilă pentru un camping verde." }, { icon: "💧", title: "Apă de munte", desc: "Apă potabilă ce provine din fântâna proprie." }, { icon: "♻️", title: "Colectare selectivă", desc: "Protejăm natura prin gestionarea deșeurilor." }]
      },
      outdoorBathroom: {
        subtitle: "Experiență Arhaică",
        title: "Baia sub Cer",
        desc: "Situat între Nucul Icai și Meri-Mesteceni, acest grup sanitar deservește zonele din spate. Dușurile în aer liber sunt experiența preferată a oaspeților noștri în zilele de vară.",
        images: [{ src: "/dus1.jpg", label: "Duș sub cerul liber" }, { src: "/mirror.jpg", label: "Oglindă din bambus" }, { src: "/sink2.jpg", label: "Apă de izvor" }],
        features: [{ emoji: "🚿", label: "3 Dușuri Open-Air", detail: "Apă încălzită de soare" }, { emoji: "🚽", label: "3 Toalete Private", detail: "Curățenie și intimitate" }, { emoji: "🎋", label: "Bambus & Lemn", detail: "Construcție naturală" }, { emoji: "🏔️", label: "Apă de munte", detail: "Sursă proprie" }],
        footerText: "Construită manual din bambus și materiale naturale, baia oferă o oglindă șic și două lavoare simple pentru igiena de dimineață.",
        tags: { sustainable: "Sustenabil", solar: "Solar Power" }
      },
      summerKitchen: {
        subtitle: "Proiect în curs de amenajare 🛠️",
        title: { part1: "Foișor și bucătărie", part2: "Zona din spate a campingului" },
        desc: "Pentru weekendurile mai aglomerate, ne-am dorit să construim o a doua bucătărie de vară și un alt loc de luat masa. Noua construcție este amplasată între Livada Liberă și Meri Mesteceni.",
        featuresTitle: "Dotări",
        kitchenFeatures: [{ item: "Bucătărie acoperită", desc: "Spațiu complet protejat pentru gătit cu blat de lucru generos" }, { item: "Foișor acoperit", desc: "Zonă de luat masa/relaxare acoperită, dotată cu 2 mese mari și bănci/scaune" }, { item: "Apă curentă", desc: "1 chiuvetă și spații dedicate pentru depozitare" }, { item: "2 Frigidere", desc: "Suficient spațiu pentru organizarea alimentelor tuturor oaspeților" }, { item: "Ustensile de gătit", desc: "Tot ce ai nevoie pentru pregătirea și servirea mesei în natură" }],
        utilTitle: "Spațiul Utilitar",
        utilDesc: "Această bucătărie-foișor, cu loc generos de luat masa, acoperit, este construită în central în gradina- camping din spate. Pentru a observa corect unde este situată, vă invităm să vizitați harta interactivă de mai jos.",
        technicalFeatures: [{ emoji: "⚡", label: "Curent Electric" }, { emoji: "🔌", label: "Prize încărcare" }, { emoji: "🛠️", label: "În Lucru" }, { emoji: "🌿", label: "Zonă livadă" }],
        backButton: "← Spre hartă"
      },
      map: {
        title: "Alege locul tău în livadă",
        reset: "Reset",
        more: "Citește mai mult ↗",
        zones: {
            rulote: { name: "Poiana Călătoare (VanLife)", desc: "Zonă dedicată rulotelor și autorulotelor, situată imediat la intrare. Are o capacitate de maxim 4 rulote/autorulote mari.", features: ["🚐 Acces facil", "⚡ Curent", "🌞 Soare din belșug", "⬇️ Deversare ape", "🚰 Apă", "🚐 Rulote", "🚐 Autorulote", "🚗⛺ Cort pe mașină"] },
            cires: { name: "La Cireș", desc: "6 locuri mari, delimitate, pentru corturi de 1-3 persoane.", features: ["🌳 Umbră", "🌳🌤️ Semiumbra", "🧺 Intimitate", "🔌 Curent"] },
            gradina: { name: "Livada Liberă (Camping Random)", desc: "Spațiu vast de campare la liber în partea stângă a livezii, cu o capacitate de peste 20 de corturi.", features: ["🌳 Umbră", "🌳🌤️ Semiumbra", "🌞 Soare din belșug", "🪁 Spațiu joacă", "🏕️ Orice mărime cort", "🔌 Curent"] },
            meri: { name: "Meri & Mesteceni", desc: "9 locuri mari, delimitate, aflate în partea din spate a campingului.", features: ["🍏 Livadă", "📏 Locuri generoase", "🔌 Curent"] },
            nuc: { name: "La Nuc (Camping Random)", desc: "Zonă de campare la liber în dreapta livezii din spate. Are o capacitate de 8-10 corturi mari.", features: ["🌳 Umbră", "🏕️ Orice mărime cort", "🔌 Curent"] },
            baie_nuc: { name: "Baia sub Cer", desc: "Grup sanitar complet utilat, situat în zona din spate a campingului.", features: ["🚿 3 Dușuri", "🚰 2 Chiuvete", "🚻 3 WC-uri", "🔥 Apă Caldă"] },
            baie_centrala: { name: "Grup Sanitar Central", desc: "Toalete accesibile rapid din zona centrală a campingului.", features: ["🚿 3 Dușuri", "🚰 3 Chiuvete", "🚻 3 WC-uri", "🔥 Apă Caldă"] },
            bucatarie_1: { name: "Bucătăria Poiana Călătoare", desc: "Bucătărie utilată situată lângă zona de rulote.", features: ["🚰 Chiuvetă", "🍳 Plită", "🧊 2 Frigidere", "📶 Wi-Fi"] },
            bucatarie_2: { name: "Bucătăria de Vară", desc: "A doua bucătărie utilată, situată central în zona din spate a campingului.", features: ["🚰 Chiuvetă", "🧊 2 Frigidere", "🍽️ Zonă mese"] },
            gratar: { name: "Zona de grătar", desc: "Loc amenajat pentru foc și pregătirea mâncării la grătar.", features: ["🔥 Grătar", "🍢 Ustensile", "🪑 Masă de sprijin", "🚰 Apă"] }
        }
      },
      footer: { descriere: "O livadă de familie transformată în refugiu pentru iubitorii de natură. Simplitate, liniște și spiritul Văii Lotrului.", contactTitlu: "Contact & Locație", socialTitlu: "Urmărește-ne", copyright: "creat de Măriuca Onică ©" },
    },
    en: {
      nav: { poveste: "Our Story", harta: "See the Orchard", galerie: "Gallery", activitati: "Activities", contact: "Contact", rezervare: "Book Now" },
      hero: { locatie: "Brezoi • Lotru Valley", titlu: "Grădina cu Flori Camping", descriere: "We transformed our family orchard into a cozy camping space, with old walnut, mulberry, and cherry trees. The Lotru Valley is beautiful, and the Summer Camp Brezoi music festival is just a few steps away.", btnRezerva: "Book Now", btnExploreaza: "Explore the Orchard" },
      about: {
        titlu: "Our Story",
        intro: "We wanted to make the most of the land inherited from our ancestors without spoiling the natural charm of this large garden, with trees planted by our grandparents. Located by the river, on the road that crosses the Lotru Valley, we noticed the tourists' need to camp in this beautiful area and we are addressing ourselves especially to lovers of simplicity. We welcomed our first guests in 2021 and since then we continue to improve the facilities and expand the shady area.",
        gospodarie: { titlu: "Home, at Grădina cu Flori", descriere: "The campsite is part of our household, situated on a 5000 sqm plot, where we have our house, a small orchard of trees and vines, a vegetable greenhouse, and the flower garden. We moved here in 2018 and since then we have been lovingly working the land received from our grandparents.\n\nBesides, the name chosen for the camping comes directly from Măriuca's passion for garden flowers." },
        family: {
          rares: { name: "Rareș", role: "The Builder", bio: "He felt the potential of the inherited orchard and started turning it into a place to recharge. Rareș is the one who built everything you see, from the fire pit to the modernization of the old stable." },
          mariuca: { name: "Măriuca", role: "The Host", bio: "She supported Rareș, wanting her grandparents' land to find a modern use. She keeps everything clean, welcomes guests, offers help and directions, handles promotion and bookings." },
          ilinca: { name: "Ilinca", role: "The Little Explorer", bio: "At 3 and a half years old, Ilinca is the unofficial guide. She feeds the dogs, checks the hammocks, helps her parents water the flowers. She grows up free and learns every day how important nature is." }
        },
        valori: { titlu: "What we value", descriere: "We love this place, it is home to us, and since the camping activity takes place in a significant part of our garden, we want both us and our guests to feel good. Our campsite is not one with pretensions; we highly value common sense and simplicity. We are friendly and sociable, and we want to make our guests feel as comfortable as possible." },
        viziune: { titlu: "Plans and Vision", partea1: "The need for shade is very high during the summer, so in the last 3 years, we have planted several species, such as ash, birch, walnut trees, but also climbing plants. The delimited areas, with pitches, have trees planted between them, but also resistant climbers, such as trumpet vine, wisteria, and chocolate vine. We want to create an oasis of greenery perfect for camping, walking barefoot, sitting in a hammock, or directly on the grass.", partea2: "For next year, we aim to move the fire pit closer to the summer kitchen and turn the remaining space into a complex playground, equipped with a climbing tower, slide, climbing net, and a treehouse, all designed specifically for the little ones, at Ilinca's age.", partea3: "We also intend to clean up the bank of the Lotru River, located just a 3-minute walk away, so that our guests can enjoy a clean and welcoming space to relax or swim on hot days." }
      },
      barn: {
        subtitle: "The Place's Story",
        title: { part1: "The old barn:", part2: "The heart of the camping" },
        desc: "We started from the idea that the old can become current, modern, and we used the solid structure built by our grandfather to set up toilets, showers, and a summer kitchen.",
        bathroom: {
          badge: "Gogu's Barn",
          title: "Modern sanitary facilities",
          text: "Rareș transformed the interior into a modern space, keeping the exterior intact. We took care of the swallows' nests, old for decades, which return here every spring.",
          features: [{ emoji: "🚿", label: "4 Warm Showers" }, { emoji: "🚽", label: "3 Toilets" }, { emoji: "🪞", label: "Mirror & Sinks" }, { emoji: "🌐", label: "Wi-Fi Area" }],
          accessibility: "Accessible toilet in progress"
        },
        kitchen: {
          title: "Summer kitchen",
          features: [{ item: "Island & Countertop", desc: "Generous space for simultaneous cooking" }, { item: "Appliances", desc: "Induction hobs, kettle, sockets" }, { item: "2 Refrigerators", desc: "Organized space for food" }, { item: "Utensils", desc: "Pots, plates, cutlery & spices" }],
          diningTitle: "Dining area",
          diningDesc: "2 long tables with benches, covered, ideal for groups of 15-20 people."
        },
        tech: [{ icon: "☀️", title: "Solar Energy", desc: "Renewable source for a green campsite." }, { icon: "💧", title: "Mountain Water", desc: "Potable water from our own well." }, { icon: "♻️", title: "Selective Collection", desc: "We protect nature through waste management." }]
      },
      outdoorBathroom: {
        subtitle: "Archaic Experience",
        title: "Bathroom under the Sky",
        desc: "Located between the Icai Walnut and the Apple-Birch trees, this sanitary facility serves the back areas. The open-air showers are our guests' favorite experience during summer days.",
        images: [{ src: "/dus1.jpg", label: "Open-air shower" }, { src: "/mirror.jpg", label: "Bamboo mirror" }, { src: "/sink2.jpg", label: "Spring water" }],
        features: [{ emoji: "🚿", label: "3 Open-Air Showers", detail: "Sun-heated water" }, { emoji: "🚽", label: "3 Private Toilets", detail: "Cleanliness and privacy" }, { emoji: "🎋", label: "Bamboo & Wood", detail: "Natural construction" }, { emoji: "🏔️", label: "Mountain Water", detail: "Private source" }],
        footerText: "Hand-built from bamboo and natural materials, the bathroom offers a chic mirror and two simple sinks for morning hygiene.",
        tags: { sustainable: "Sustainable", solar: "Solar Power" }
      },
      summerKitchen: {
        subtitle: "Project under development 🛠️",
        title: { part1: "Gazebo and kitchen", part2: "The back area of the camping" },
        desc: "For busier weekends, we wanted to build a second summer kitchen and another dining area. The new construction is located between the Open Orchard and the Birch-Apple trees.",
        featuresTitle: "Amenities",
        kitchenFeatures: [{ item: "Covered kitchen", desc: "Fully protected space for cooking with a generous countertop" }, { item: "Covered gazebo", desc: "Covered dining/relaxation area, equipped with 2 large tables and benches/chairs" }, { item: "Running water", desc: "1 sink and dedicated storage spaces" }, { item: "2 Refrigerators", desc: "Enough space to organize everyone's food" }, { item: "Cooking utensils", desc: "Everything you need to prepare and serve meals in nature" }],
        utilTitle: "Utility space",
        utilDesc: "This kitchen-gazebo, with a generous covered dining area, is built centrally in the back camping garden. To see exactly where it is located, we invite you to visit the interactive map below.",
        technicalFeatures: [{ emoji: "⚡", label: "Electricity" }, { emoji: "🔌", label: "Charging sockets" }, { emoji: "🛠️", label: "Under construction" }, { emoji: "🌿", label: "Orchard zone" }],
        backButton: "← To the map"
      },
      map: {
        title: "Choose your spot in the orchard",
        reset: "Reset",
        more: "Read more ↗",
        zones: {
            rulote: { name: "Poiana Călătoare (VanLife)", desc: "Area dedicated to caravans and motorhomes, located right at the entrance. It has a capacity of max 4 large caravans/motorhomes.", features: ["🚐 Easy access", "⚡ Electricity", "🌞 Plenty of sun", "⬇️ Water disposal", "🚰 Water", "🚐 Caravans", "🚐 Motorhomes", "🚗⛺ Roof tent"] },
            cires: { name: "La Cireș", desc: "6 large, delimited spots for 1-3 person tents.", features: ["🌳 Shade", "🌳🌤️ Semi-shade", "🧺 Privacy", "🔌 Electricity"] },
            gradina: { name: "Livada Liberă (Camping Random)", desc: "Vast free camping space on the left side of the orchard, with a capacity of over 20 tents.", features: ["🌳 Shade", "🌳🌤️ Semi-shade", "🌞 Plenty of sun", "🪁 Playground", "🏕️ Any size tent", "🔌 Electricity"] },
            meri: { name: "Meri & Mesteceni", desc: "9 large, delimited spots located at the back of the camping.", features: ["🍏 Orchard", "📏 Generous spots", "🔌 Electricity"] },
            nuc: { name: "La Nuc (Camping Random)", desc: "Free camping area on the right side of the back orchard. Capacity of 8-10 large tents.", features: ["🌳 Shade", "🏕️ Any size tent", "🔌 Electricity"] },
            baie_nuc: { name: "Bathroom under the Sky", desc: "Fully equipped sanitary facility, located at the back of the camping.", features: ["🚿 3 Showers", "🚰 2 Sinks", "🚻 3 Toilets", "🔥 Hot water"] },
            baie_centrala: { name: "Central Sanitary Group", desc: "Toilets accessible quickly from the central area of the camping.", features: ["🚿 3 Showers", "🚰 3 Sinks", "🚻 3 Toilets", "🔥 Hot water"] },
            bucatarie_1: { name: "Poiana Călătoare Kitchen", desc: "Equipped kitchen located near the caravan area.", features: ["🚰 Sink", "🍳 Stove", "🧊 2 Refrigerators", "📶 Wi-Fi"] },
            bucatarie_2: { name: "Summer Kitchen", desc: "Second equipped kitchen, located centrally in the back area of the camping.", features: ["🚰 Sink", "🧊 2 Refrigerators", "🍽️ Dining area"] },
            gratar: { name: "Grill Area", desc: "Area arranged for fire and grilling food.", features: ["🔥 Grill", "🍢 Utensils", "🪑 Support table", "🚰 Water"] }
        }
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