"use client";

import React, { useState } from 'react';
import FramedSection from "../../components/common/FramedSection";

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
                  <h3 className="font-[family-name:var(--font-serif)] text-xl text-[var(--foreground)] mb-4">Tarife 2026</h3>
                  <ul className="space-y-3 text-[var(--foreground)] text-sm">
                    <li className="flex justify-between border-b border-[var(--foreground)]/10 pb-2">
                      <span>Loc cort</span> <span className="font-bold">50 RON</span>
                    </li>
                    <li className="flex justify-between border-b border-[var(--foreground)]/10 pb-2">
                      <span>Rulotă</span> <span className="font-bold">80 RON</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Persoană</span> <span className="font-bold">20 RON</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Iframe Formular */}
            <iframe 
              src="https://tally.so/r/LZ6X6G?transparentBackground=1" 
              className="w-full h-[700px]"
              frameBorder="0" 
              title="Rezervare Camping"
            />
          </div>
        </div>
      </FramedSection>
    </main>
  );
}