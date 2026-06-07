"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";

const family = [
  { name: "Rareș", role: "Constructorul", bio: "El a simțit potențialul livezii moștenite și a început să o transforme într-un loc de reîncărcat bateriile. Rareș este cel care a construit tot ce vedeți, de la vatra de foc la modernizarea vechiului grajd.", image: "/rares.jpg" },
  { name: "Măriuca", role: "Gazda", bio: "Ea l-a sprijinit pe Rareș, dorind ca terenul de la bunicii ei să își găsească o utilitate modernă. Păstrează curățenia, primește oaspeții, le oferă ajutor și indicații, se ocupă de promovare și de rezervări.", image: "/mariuca.jpg" },
  { name: "Ilinca", role: "Mica Exploratoare", bio: "La 3 ani jumătate, Ilinca este ghidul neoficial. Hrănește câinii, verifică hamacele, își ajută părinții să ude florile. Crește liberă și învață în fiecare zi cât de importantă este natura.", image: "/ilinca.jpg" },
];

export default function AboutContent() {
  return (
    <section className="py-20 bg-[#F9F9F6]">
      <FramedSection>
        {/* 1. VECHIUL CONȚINUT */}
        <div className="text-center mb-20 px-6">
          <motion.h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">Povestea noastră</motion.h2>
          <div className="w-12 h-[2px] bg-amber-500/50 mx-auto mb-10" />
          <div className="max-w-3xl mx-auto">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
              Ne-am dorit să valorificăm terenul moștenit de la străbuni, fără însă să stricăm farmecul natural al acestei grădini mari, cu pomi plantați de bunici. Fiind așezați lângă râu, pe drumul care parcurge Valea Lotrului, am sesizat nevoia turiștilor de a campa în această zonă frumoasă și ne adresăm în special iubitorilor de simplitate. Primii oaspeți i-am primit în 2021 și de atunci continuăm să îmbunătățim facilitățile și să extindem zona umbroasă.
            </p>
          </div>
        </div>

        {/* 2. GRILA FAMILIEI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {family.map((member, i) => (
            <motion.div key={i} className="group text-center">
              <div className="relative aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-[8px] border-white shadow-lg bg-stone-100">
                <Image src={member.image} fill className="object-cover transition-transform duration-500 group-hover:scale-105" alt={member.name} sizes="192px" quality={90} />
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-1">{member.name}</h3>
              <p className="text-amber-600 text-[9px] uppercase tracking-[0.25em] font-bold mb-3">{member.role}</p>
              <p className="text-stone-600 leading-relaxed text-[13px] px-4 font-medium italic">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. SECȚIUNILE NOI */}
       <div className="max-w-3xl mx-auto px-6 space-y-16">
    
    {/* Ce prețuim */}
    <div>
        <h3 className="text-xl font-serif text-teal-900 mb-4">Ce prețuim?!</h3>
        <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-sans mb-6">
           Iubim acest loc, este <strong>acasă</strong> pentru noi și deoarece activitatea de camping se desfășoară într-o parte semnificativă din <strong>grădina noastră </strong>, ne dorim să ne simțim bine și noi și oaspeții noștri. Campingul nostru nu este unul cu pretenții, prețuim foarte mult bunul simț și simplitatea. Suntem prietenoși și sociabili și ne dorim să ne facem oaspeții să se simtă cât mai bine. 
        </p>
    </div>

    {/* Ce ne propunem pe mai departe */}
    <div>
        <h3 className="text-xl font-serif text-teal-900 mb-4">Ce ne propunem pe mai departe</h3>
        <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-sans mb-6">
           
        </p>
    </div>

    {/* Imaginile pe aceeași linie, mai mici */}
    <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-800 shadow-md">
            <Image 
                src="/ilinca_planteaza.jpg" 
                fill 
                className="object-cover brightness-90 contrast-105 opacity-90" 
                alt="Ilinca plantează" 
            />
        </div>
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-stone-800 shadow-md">
            <Image 
                src="/plantari1.jpg" 
                fill 
                className="object-cover brightness-90 contrast-105 opacity-90" 
                alt="Plantări" 
            />
        </div>
    </div>
</div>
      </FramedSection>
    </section>
  );
}