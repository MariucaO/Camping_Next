"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";

// Datele familiei rămân neschimbate
const family = [
  { name: "Rareș", role: "Constructorul", bio: "El a simțit potențialul livezii moștenite și a început să o transforme într-un loc de reîncărcat bateriile. Rareș este cel care a construit tot ce vedeți, de la vatra de foc la modernizarea vechiului grajd.", image: "/rares.jpg" },
  { name: "Măriuca", role: "Gazda", bio: "Ea l-a sprijinit pe Rareș, dorind ca terenul de la bunicii ei să își găsească o utilitate modernă. Păstrează curățenia, primește oaspeții, le oferă ajutor și indicații, se ocupă de promovare și de rezervări.", image: "/mariuca.jpg" },
  { name: "Ilinca", role: "Mica Exploratoare", bio: "La 3 ani jumătate, Ilinca este ghidul neoficial. Hrănește câinii, verifică hamacele, își ajută părinții să ude florile. Crește liberă și învață în fiecare zi cât de importantă este natura.", image: "/ilinca.jpg" },
];

export default function AboutContent() {
  return (
    <section className="py-20 bg-[#F9F9F6]">
      <FramedSection>
        {/* Titlu și Intro - Varianta finuță aprobată */}
        <div className="text-center mb-20 px-6">
          <motion.h2 initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">
            Povestea Noastră
          </motion.h2>
          <div className="w-12 h-[2px] bg-amber-500/50 mx-auto mb-10" />
          <div className="max-w-3xl mx-auto">
            <p className="text-[17px] leading-relaxed text-stone-700 italic font-light tracking-wide">
              &ldquo;Ne-am dorit să valorificăm terenul moștenit de la străbuni, fără
              însă să stricăm farmecul natural al acestei grădini mari, cu pomi
              plantați de bunici. Fiind așezați lângă râu, pe drumul care
              parcurge Valea Lotrului, am sesizat nevoia turiștilor de a campa
              în această zonă frumoasă și ne adresăm în special iubitorilor
              de simplitate. Primii oaspeți i-am primit în 2021 și de atunci
              continuăm să îmbunătățim facilitățile și să extindem zona umbroasă.&rdquo;
            </p>
          </div>
        </div>

        {/* Grila Familiei - Neschimbată */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {family.map((member, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group text-center">
              <div className="relative aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-[8px] border-white shadow-lg bg-stone-100">
                <Image src={member.image} fill className="object-cover transition-transform duration-500 group-hover:scale-105" alt={member.name} sizes="192px" quality={90} />
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-1">{member.name}</h3>
              <p className="text-amber-600 text-[9px] uppercase tracking-[0.25em] font-bold mb-3">{member.role}</p>
              <p className="text-stone-600 leading-relaxed text-[13px] px-4 font-normal italic">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* Caseta cu Rândunelele - SOLUȚIA PENTRU IMAGINE BLURATĂ */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-sm overflow-hidden border border-stone-100 p-8 md:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Coloana de text - Mai lată acum (7/12) */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-teal-900 leading-tight">
                Grajdul vechi și <br /> <span className="text-amber-600">cuiburile de rândunele</span>
              </h3>
              <p className="text-[15px] text-stone-700 leading-relaxed font-light">
                În vechiul grajd ridicat de bunicul Gogu, am păstrat cu grijă
                cuiburile de rândunele construite lângă grinzile din tavan. Când
                l-am transformat într-un spațiu modern cu băi, ne-am asigurat că
                păsările se vor putea întoarce — și chiar au făcut-o.
              </p>
              
              <div className="pt-6 grid grid-cols-2 gap-4 border-t border-stone-50">
                <div className="text-[13px]">
                  <span className="font-bold text-teal-900 block mb-1">🐕 Câini</span>
                  <span className="text-stone-400 italic">Luna, Nomad, Lupu, Gore</span>
                </div>
                <div className="text-[13px]">
                  <span className="font-bold text-teal-900 block mb-1">🐈 Pisici</span>
                  <span className="text-stone-400 italic">Zia, Ida, Zor</span>
                </div>
              </div>
            </div>

            {/* Coloana imaginii - Mai îngustă și controlată (5/12) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              {/* Cadrul polaroid/tablou: forțează imaginea să fie mică (w-72) și clară */}
              <div className="relative group p-3 bg-white shadow-xl rounded-xl border border-stone-100 rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <div className="relative w-72 h-80 overflow-hidden rounded-lg">
                  <Image
                    src="/flori_grajdi.jpg"
                    fill
                    className="object-cover"
                    alt="Detalii grajd"
                    sizes="288px" // Spune browserului că imaginea e mică
                    quality={100} // Calitate maximă din fișierul original
                  />
                  {/* Overlay subtil arhaic */}
                  <div className="absolute inset-0 bg-sepia/10 mix-blend-multiply opacity-50"></div>
                </div>
                {/* O mică notă discretă sub poză pentru stil */}
                <p className="text-center font-serif text-xs text-stone-400 pt-3 opacity-70">Detalii Arhaice, 2021</p>
              </div>
            </div>

          </div>
        </div>
      </FramedSection>
    </section>
  );
}