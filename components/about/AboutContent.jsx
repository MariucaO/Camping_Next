"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FramedSection from "../common/FramedSection";

const family = [
  {
    name: "Rareș",
    role: "Constructorul",
    bio: "El a simțit potențialul livezii moștenite și a început să o transforme într-un loc de reîncărcat bateriile. Rareș este cel care a construit tot ce vedeți, de la vatra de foc la modernizarea vechiului grajd.",
    image: "/rares.jpg",
  },
  {
    name: "Măriuca",
    role: "Gazda",
    bio: "Ea l-a sprijinit pe Rareș, dorind ca terenul de la bunicii ei să își găsească o utilitate modernă. Păstrează curățenia, primește oaspeții, le oferă ajutor și indicații, se ocupă de promovare și de rezervări.",
    image: "/mariuca.jpg",
  },
  {
    name: "Ilinca",
    role: "Mica Exploratoare",
    bio: "La 3 ani jumătate, Ilinca este ghidul neoficial. Hrănește câinii, verifică hamacele, își ajută părinții să ude florile. Crește liberă și învață în fiecare zi cât de importantă este natura.",
    image: "/ilinca.jpg",
  },
];

export default function AboutContent() {
  return (
    <section id="poveste" className="py-20 bg-[#F9F9F6]">
      <FramedSection>
        {/* 1. VECHIUL CONȚINUT */}
        <div className="text-center mb-20 px-6">
          <motion.h2 className="text-3xl md:text-4xl font-serif text-teal-900 mb-6">
            Povestea noastră
          </motion.h2>
          <div className="w-12 h-[2px] bg-amber-500/50 mx-auto mb-10" />
          <div className="max-w-3xl mx-auto">
            <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-normal font-sans">
              Ne-am dorit să valorificăm terenul moștenit de la străbuni, fără
              însă să stricăm farmecul natural al acestei grădini mari, cu pomi
              plantați de bunici. Fiind așezați lângă râu, pe drumul care
              parcurge Valea Lotrului, am sesizat nevoia turiștilor de a campa
              în această zonă frumoasă și ne adresăm în special iubitorilor de
              simplitate. Primii oaspeți i-am primit în 2021 și de atunci
              continuăm să îmbunătățim facilitățile și să extindem zona
              umbroasă.
            </p>
          </div>
        </div>

       {/* 2. SECȚIUNE NOUĂ: DESPRE GOSPODĂRIE */}
<div className="max-w-3xl mx-auto px-6 mb-20">
  <div className="bg-white p-8 md:p-12 rounded-3xl border border-stone-100 shadow-sm text-center">
    <h3 className="text-2xl font-serif text-teal-900 mb-8">Acasă, în Grădina cu Flori</h3>
    
    {/* Imaginea dedicată */}
    <div className="relative w-full h-72 mb-8 rounded-2xl overflow-hidden shadow-sm">
      <Image 
        src="/flori.jpg" 
        fill 
        className="object-cover" 
        alt="Grădina cu flori" 
      />
    </div>

    <p className="text-[15px] md:text-[16px] leading-relaxed text-stone-700 font-sans text-left">
      Campingul este parte din gospodăria noastră, situată pe un teren de 5000 m, unde avem casa, o mică livadă de pomi și vie, solarul de legume și <strong>grădina cu flori</strong>. Ne-am mutat aici în 2018 și de atunci muncim cu drag pământul primit de la bunici.
      <br/><br/>
      De altfel, numele ales pentru camping vine direct din pasiunea Măriucăi pentru florile de grădină.
    </p>
  </div>
</div>

        {/* 2. GRILA FAMILIEI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {family.map((member, i) => (
            <motion.div key={i} className="group text-center">
              <div className="relative aspect-square w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-[8px] border-white shadow-lg bg-stone-100">
                <Image
                  src={member.image}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={member.name}
                  sizes="192px"
                  quality={90}
                />
              </div>
              <h3 className="text-xl font-serif text-teal-900 mb-1">
                {member.name}
              </h3>
              <p className="text-amber-600 text-[9px] uppercase tracking-[0.25em] font-bold mb-3">
                {member.role}
              </p>
              <p className="text-stone-600 leading-relaxed text-[13px] px-4 font-medium italic">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 3. CHENARE INTERACTIVE */}
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <details className="group bg-white rounded-2xl shadow-sm border border-stone-200 transition-all hover:border-amber-200 hover:shadow-md">
            <summary className="font-serif text-xl text-teal-900 cursor-pointer list-none p-8 flex items-center justify-between select-none">
              Ce prețuim
            </summary>
            <div className="px-8 pb-8 border-t border-stone-100 text-stone-700 leading-relaxed font-sans text-[15px]">
              <div className="relative w-full h-64 mb-6 mt-6 rounded-xl overflow-hidden shadow-sm">
                <Image src="/about-intro.jpg" fill className="object-cover" alt="Despre noi" />
              </div>
              <p>
                Iubim acest loc, este <strong>acasă</strong> pentru noi și
                deoarece activitatea de camping se desfășoară într-o parte
                semnificativă din <strong>grădina noastră</strong>, ne dorim să
                ne simțim bine și noi și oaspeții noștri. Campingul nostru nu
                este unul cu pretenții, prețuim foarte mult bunul simț și
                simplitatea. Suntem prietenoși și sociabili și ne dorim să ne
                facem oaspeții să se simtă cât mai bine.
              </p>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-stone-200 transition-all hover:border-amber-200 hover:shadow-md">
            <summary className="font-serif text-xl text-teal-900 cursor-pointer list-none p-8 flex items-center justify-between select-none">
              Planuri și viziune
            </summary>
            <div className="px-8 pb-8 border-t border-stone-100 text-stone-700 leading-relaxed font-sans text-[15px]">
              <p className="pt-6 mb-6">
                Nevoia de umbră este foarte mare pe timp de vară, așa că am
                plantat în ultimii 3 ani mai multe specii, precum frasini,
                mesteceni, nuci, dar și plante cățărătoare. Zonele delimitate, cu
                pitch-uri, au arbori plantați între ele, dar și cățărătoare
                rezistente, precum trompeta turcului, glicină și viță de cacao.
                Ne dorim să creăm o oază de verdeață numai bună de campat, de
                mers desculț, de stat în hamac sau direct pe iarbă.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/ilinca_planteaza.jpg"
                    fill
                    className="object-cover"
                    alt="Ilinca"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/plantari1.jpg"
                    fill
                    className="object-cover"
                    alt="Plantari"
                  />
                </div>
              </div>

              <p className="mb-6">
                Pentru anul următor ne-am propus să mutăm vatra de foc în
                apropiere de <strong>bucătăria de vară</strong>, iar spațiul rămas
                să îl transformăm într-un loc de joacă complex, dotat cu turn de
                cățărat, tobogan, plasă de cățărat și o căsuță în copac, totul
                gândit special pentru cei mici, la vârsta Ilincăi.
              </p>

              <p className="pt-4 border-t border-stone-100">
                De asemenea, ne propunem să curățăm malul râului Lotru, situat la
                doar 3 minute de mers pe jos, astfel încât oaspeții noștri să se
                poată bucura de un spațiu curat și primitor unde să se relaxeze
                sau să facă baie în zilele călduroase.
              </p>
            </div>
          </details>
        </div>
      </FramedSection>
    </section>
  );
}