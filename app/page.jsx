"use client"; // Ne asigurăm că este componentă client

import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import AboutContent from "@/components/about/AboutContent";
import BarnKitchen from "@/components/about/BarnKitchen";
import OutdoorBathroom from "@/components/about/OutdoorBathroom";
import ZonesSection from "@/components/about/ZonesSection";
import BookingMap from "@/components/about/BookingMap";
import AboutGallery from "@/components/about/AboutGallery";
import SummerKitchen from "@/components/about/SummerKitchen";

// Importăm LotruSection dinamic pentru a evita erorile de hidratare/compilare
const LotruSection = dynamic(() => import("@/components/activities/LotruSection"), {
  ssr: false, // Nu randa pe server, doar în browser
});

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Welcome & Visuals */}
      <Hero />

      {/* 2. Povestea umană */}
      <section id="poveste">
        <AboutContent />
      </section>

      <div id="facilitati" className="scroll-mt-20">
        <div id="bucatarie_1">
          <BarnKitchen />
        </div>
        <div id="baie_nuc">
          <OutdoorBathroom />
        </div>
        <div id="bucatarie_2">
          <SummerKitchen />
        </div>
      </div>

      {/* 5. Descrierea zonelor de campare */}
      <section id="zone">
        <ZonesSection />
      </section>

      {/* 6. Harta Interactivă & Booking */}
      <section id="rezervare">
        <BookingMap />
      </section>

      {/* 7. Activități în jur (Valea Lotrului) */}
      <section id="activitati">
        <LotruSection />
      </section>

      {/* 8. GALERIA */}
      <AboutGallery />
    </main>
  );
}