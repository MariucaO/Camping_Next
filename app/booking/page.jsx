"use client";

import React, { useState } from 'react';
import FramedSection from "@/components/common/FramedSection";

export default function BookingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
      <FramedSection>
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-[family-name:var(--font-serif)] text-5xl text-[var(--foreground)] mb-6">
              Rezervă <span className="text-[var(--accent)]">locul</span> tău
            </h1>
            <p className="text-[var(--foreground)] opacity-80 font-sans font-medium uppercase tracking-[2px] text-[12px]">
              Completează formularul pentru a solicita o rezervare
            </p>
          </div>

          {/* Container Formular */}
          <div className="bg-white/50 backdrop-blur-sm border border-[var(--foreground)]/10 rounded-lg p-6 md:p-10 shadow-sm">
            
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold uppercase tracking-[3px] text-[11px] text-[var(--foreground)]">
                Formular de Booking
              </h2>
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-[10px] font-bold uppercase tracking-[3px] border border-[var(--accent)] text-[var(--accent)] px-6 py-2 hover:bg-[var(--accent)] hover:text-white transition-all"
              >
                {isOpen ? "Ascunde Tarife" : "Vezi Tarife"}
              </button>
            </div>

            {/* ZONA DE TARIFE (Inline & Animată) */}
            <div 
              className={`grid transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "grid-rows-[1fr] opacity-100 mb-8" : "grid-rows-[0fr] opacity-0 mb-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="bg-[var(--background)] p-6 border border-[var(--accent)]/20 rounded-lg">
                  <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--foreground)] mb-6">Tarife 2026</h3>
                  <ul className="space-y-6 text-[var(--foreground)] text-sm">
                    
                    <li className="border-b border-[var(--foreground)]/10 pb-4">
                      <div className="flex justify-between font-bold mb-1">
                        <span>Cort (Zone: Cirș, Meri Mesteceni)</span>
                        <span>45 RON/pers</span>
                      </div>
                      <p className="text-[11px] opacity-70 italic">Include: cort pe mașină sau dormit în mașină</p>
                    </li>

                    <li className="border-b border-[var(--foreground)]/10 pb-4">
                      <div className="flex justify-between font-bold">
                        <span>Cort (Zone Random)</span>
                        <span>50 RON/pers</span>
                      </div>
                    </li>

                    <li className="border-b border-[var(--foreground)]/10 pb-4">
                      <div className="flex justify-between font-bold">
                        <span>Rulotă (max. 4 persoane)</span>
                        <span>150 RON/zi</span>
                      </div>
                    </li>

                  </ul>
                  <p className="mt-4 text-[10px] uppercase tracking-wider opacity-50 italic">
                    * Prețurile sunt per persoană, excepție rulota.
                  </p>
                </div>
              </div>
            </div>

            {/* Iframe Formular */}
           {/* Iframe Formular - varianta simplificată */}
<div className="w-full mt-8">
  <iframe 
    src="https://tally.so/r/LZ6X6G?transparentBackground=1" 
    className="w-full h-[800px]" 
    frameBorder="0" 
    title="Rezervare Camping"
  />
</div>
          </div>
        </div>
      </FramedSection>
    </main>
  );
}