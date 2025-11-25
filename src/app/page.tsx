"use client";

import { useState, useEffect } from "react";

type Lang = "ru" | "kz";

const content = {
  ru: {
    tagline: "Приватное пространство сильных женщин",
    hours: "ПН-ПТ 07:00-23:00 · СБ-ВС 09:00-22:00",
    tour: "3D тур по студии",
    instagram: "Instagram",
    whatsapp: "Записаться",
  },
  kz: {
    tagline: "Күшті әйелдердің жеке кеңістігі",
    hours: "ДС-ЖМ 07:00-23:00 · СБ-ЖС 09:00-22:00",
    tour: "3D студия туры",
    instagram: "Instagram",
    whatsapp: "Жазылу",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [tourOpen, setTourOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const saved = localStorage.getItem("forme-lang") as Lang;
    if (saved) setLang(saved);
  }, []);

  const switchLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("forme-lang", l);
  };

  return (
    <main className="min-h-screen bg-[#EFE8D9] flex flex-col items-center justify-center px-6 py-12">
      {/* Lang switcher */}
      <div className="fixed top-6 right-6 flex bg-white/60 backdrop-blur rounded-full p-1 border border-[#B49D7E]/30">
        {(["ru", "kz"] as const).map((l) => (
          <button
            key={l}
            onClick={() => switchLang(l)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
              lang === l
                ? "bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] text-white"
                : "text-[#5A493B]"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-sm flex flex-col items-center gap-6">
        {/* Logo */}
        <h1 className="text-6xl font-light tracking-wide bg-gradient-to-r from-[#5A493B] via-[#B49D7E] to-[#5A493B] bg-clip-text text-transparent">
          formē
        </h1>

        {/* Tagline */}
        <p className="text-[#5A493B] text-center text-lg">{t.tagline}</p>

        {/* Hours */}
        <p className="text-[#B49D7E] text-sm font-medium">{t.hours}</p>

        {/* Links */}
        <div className="w-full flex flex-col gap-3 mt-4">
          {/* 3D Tour */}
          <button
            onClick={() => setTourOpen(true)}
            className="w-full py-4 px-6 bg-white/80 border-2 border-[#B49D7E]/40 rounded-2xl text-[#5A493B] font-medium hover:border-[#B49D7E] hover:scale-[1.02] transition-all"
          >
            {t.tour}
          </button>

          {/* Instagram */}
          <a
            href="https://instagram.com/forme.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 bg-white/80 border-2 border-[#B49D7E]/40 rounded-2xl text-[#5A493B] font-medium hover:border-[#B49D7E] hover:scale-[1.02] transition-all text-center"
          >
            {t.instagram}
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/77022222566"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-6 bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] rounded-2xl text-white font-semibold hover:scale-[1.02] transition-all text-center shadow-lg shadow-[#B49D7E]/30"
          >
            {t.whatsapp}
          </a>
        </div>

        {/* Footer */}
        <p className="text-[#B49D7E]/50 text-xs mt-8 tracking-widest">STUDIO</p>
      </div>

      {/* Modal */}
      {tourOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setTourOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setTourOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-[#B49D7E]"
            >
              ×
            </button>
            <iframe
              src="https://kuula.co/share/collection/71q0j?logo=0&info=0&fs=1&vr=1&thumbs=1"
              className="w-full h-full rounded-xl"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}
