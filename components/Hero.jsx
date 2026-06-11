"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollToBooking = (e) => {
    e.preventDefault();
    // Folosim "rezervare" pentru că ăsta e ID-ul pus pe secțiunea din page.jsx
    const element = document.getElementById("rezervare");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-4 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="/camping-bg.jpg"
          alt="Grădina cu Flori Orchard"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/40 via-transparent to-[var(--background)]/20" />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        {/* Subtitlu cu umbră pentru lizibilitate */}
        <span className="uppercase tracking-[0.4em] text-[10px] sm:text-xs font-bold text-[#D97706] mb-6 block drop-shadow-lg">
          Brezoi • Valea Lotrului
        </span>

        <h1 className="text-5xl sm:text-7xl font-[family-name:var(--font-serif)] text-white leading-[1.1] tracking-tight drop-shadow-md">
          Camping <br className="hidden sm:block" /> Grădina cu Flori
        </h1>

        <p className="mt-8 text-sm sm:text-lg text-white/90 font-sans font-light max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-sm">
          Am transformat livada familiei într-un spațiu de campare cochet, cu
          nuci, duzi și cireși bătrâni. Valea Lotrului este o frumusețe, iar
          festivalul de muzică Summer Camp Brezoi este la câțiva pași.
        </p>

        {/* Butoane Minimaliste */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={scrollToBooking}
            className="border border-[#D97706] bg-[#D97706]/10 hover:bg-[#D97706] text-white px-9 py-3 rounded-full transition-all text-[10px] font-bold uppercase tracking-[2.5px]"
          >
            Rezervă locul
          </button>

          <Link
            href="#facilitati"
            className="border border-[#D97706] bg-[#D97706]/10 hover:bg-[#D97706] text-white px-9 py-3 rounded-full transition-all text-[10px] font-bold uppercase tracking-[2.5px]"
          >
            Explorează livada
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <div className="w-[1px] h-14 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
