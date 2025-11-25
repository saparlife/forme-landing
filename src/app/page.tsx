"use client";

import { useState, useEffect } from "react";

type Lang = "ru" | "kz";

const content = {
  ru: {
    tagline: "Приватное пространство сильных женщин",
    description: "Создан для женщин, которые выбирают результат. Мы объединили приватность, стиль и продуманную функциональность, чтобы каждая тренировка давала ощущение силы и контроля.",
    scroll: "Скролл",
    hoursTitle: "Режим работы",
    weekdays: "Понедельник — Пятница",
    weekdaysTime: "07:00 — 23:00",
    weekend: "Суббота — Воскресенье",
    weekendTime: "09:00 — 22:00",
    servicesTitle: "Наши услуги",
    personal: "Персональные тренировки",
    personalDesc: "Формат мини-группы с индивидуальным сопровождением тренера",
    pilates: "Пилатес на реформере",
    pilatesDesc: "Персональные тренировки на профессиональном оборудовании",
    tour: "Виртуальная экскурсия",
    tourDesc: "Изучите наше пространство в 3D визуализации",
    membership: "Абонементы",
    membershipDesc: "Комфортные способы оплаты",
    cta: "Связаться с менеджером",
  },
  kz: {
    tagline: "Күшті әйелдердің жеке кеңістігі",
    description: "Нәтиже таңдайтын әйелдер үшін жасалған. Біз жекелікті, стильді және ойластырылған функционалдылықты біріктірдік, әр жаттығу күш пен бақылау сезімін сыйлайды.",
    scroll: "Төмен",
    hoursTitle: "Жұмыс режимі",
    weekdays: "Дүйсенбі — Жұма",
    weekdaysTime: "07:00 — 23:00",
    weekend: "Сенбі — Жексенбі",
    weekendTime: "09:00 — 22:00",
    servicesTitle: "Біздің қызметтер",
    personal: "Жеке жаттығулар",
    personalDesc: "Жаттықтырушының жеке қолдауымен мини-топ форматы",
    pilates: "Реформерде пилатес",
    pilatesDesc: "Кәсіби жабдықта жеке жаттығулар",
    tour: "Виртуалды экскурсия",
    tourDesc: "Біздің кеңістікті 3D визуализацияда зерттеңіз",
    membership: "Абонементтер",
    membershipDesc: "Ыңғайлы төлем әдістері",
    cta: "Менеджермен байланысу",
  },
};

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [dark, setDark] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const t = content[lang];

  useEffect(() => {
    const savedLang = localStorage.getItem("forme-lang") as Lang;
    const savedTheme = localStorage.getItem("forme-theme");
    if (savedLang) setLang(savedLang);
    if (savedTheme === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("forme-theme", dark ? "dark" : "light");
  }, [dark]);

  const switchLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("forme-lang", l);
  };

  return (
    <>
      {/* Language Switcher */}
      <div className="fixed top-8 right-8 z-50 flex bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-full p-1.5 border border-[#B49D7E]/20 shadow-lg shadow-black/5">
        {(["ru", "kz"] as const).map((l) => (
          <button
            key={l}
            onClick={() => switchLang(l)}
            className={`px-5 py-2.5 text-sm font-semibold tracking-wider rounded-full transition-all duration-300 ${
              lang === l
                ? "bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] text-white shadow-md"
                : "text-[#5A493B] dark:text-white/70 hover:text-[#B49D7E]"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-[#B49D7E]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gradient-to-tr from-[#CCC0A9]/15 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 text-center max-w-2xl">
          {/* Logo */}
          <h1
            className="text-[clamp(4rem,15vw,10rem)] leading-none mb-8 bg-gradient-to-r from-[#5A493B] via-[#B49D7E] to-[#5A493B] dark:from-[#B49D7E] dark:via-[#EFE8D9] dark:to-[#B49D7E] bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_8s_ease-in-out_infinite]"
            style={{ fontFamily: "'Alias', serif" }}
          >
            formē
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-light tracking-wide text-[#5A493B] dark:text-white/90 mb-6">
            {t.tagline}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-[#5A493B]/70 dark:text-white/60 leading-relaxed max-w-xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-xs tracking-[0.3em] uppercase text-[#B49D7E]">{t.scroll}</span>
          <svg className="w-5 h-5 text-[#B49D7E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-[#B49D7E]/20 shadow-2xl shadow-[#B49D7E]/10">
            <h2 className="text-xs font-semibold tracking-[0.4em] uppercase text-[#B49D7E] mb-10">
              {t.hoursTitle}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 rounded-2xl p-8 border border-[#B49D7E]/10 hover:border-[#B49D7E]/30 transition-all hover:-translate-y-1 hover:shadow-xl">
                <p className="text-[#5A493B] dark:text-white/80 font-medium mb-2">{t.weekdays}</p>
                <p className="text-3xl font-semibold bg-gradient-to-r from-[#B49D7E] to-[#5A493B] dark:to-[#CCC0A9] bg-clip-text text-transparent">
                  {t.weekdaysTime}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 rounded-2xl p-8 border border-[#B49D7E]/10 hover:border-[#B49D7E]/30 transition-all hover:-translate-y-1 hover:shadow-xl">
                <p className="text-[#5A493B] dark:text-white/80 font-medium mb-2">{t.weekend}</p>
                <p className="text-3xl font-semibold bg-gradient-to-r from-[#B49D7E] to-[#5A493B] dark:to-[#CCC0A9] bg-clip-text text-transparent">
                  {t.weekendTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 bg-gradient-to-r from-[#5A493B] to-[#B49D7E] dark:from-white dark:to-[#B49D7E] bg-clip-text text-transparent">
            {t.servicesTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {/* Personal Training - Large */}
            <div className="md:col-span-2 group">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-[#B49D7E]/15 hover:border-[#B49D7E]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B49D7E]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#B49D7E]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-semibold text-[#5A493B] dark:text-white mb-3 relative">{t.personal}</h3>
                <p className="text-[#5A493B]/60 dark:text-white/50 relative">{t.personalDesc}</p>
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border-2 border-[#B49D7E]/30 flex items-center justify-center group-hover:bg-[#B49D7E] group-hover:border-[#B49D7E] transition-all duration-300">
                  <span className="text-[#B49D7E] group-hover:text-white transition-colors">→</span>
                </div>
              </div>
            </div>

            {/* Pilates */}
            <div className="group">
              <div className="h-full bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#B49D7E]/15 hover:border-[#B49D7E]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B49D7E]/20 relative overflow-hidden">
                <h3 className="text-xl font-semibold text-[#5A493B] dark:text-white mb-3">{t.pilates}</h3>
                <p className="text-[#5A493B]/60 dark:text-white/50 text-sm">{t.pilatesDesc}</p>
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 border-[#B49D7E]/30 flex items-center justify-center group-hover:bg-[#B49D7E] group-hover:border-[#B49D7E] transition-all duration-300">
                  <span className="text-[#B49D7E] group-hover:text-white text-sm transition-colors">→</span>
                </div>
              </div>
            </div>

            {/* Virtual Tour */}
            <div className="group cursor-pointer" onClick={() => setTourOpen(true)}>
              <div className="h-full bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-[#B49D7E]/15 hover:border-[#B49D7E]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B49D7E]/20 relative overflow-hidden">
                <h3 className="text-xl font-semibold text-[#5A493B] dark:text-white mb-3">{t.tour}</h3>
                <p className="text-[#5A493B]/60 dark:text-white/50 text-sm">{t.tourDesc}</p>
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border-2 border-[#B49D7E]/30 flex items-center justify-center group-hover:bg-[#B49D7E] group-hover:border-[#B49D7E] transition-all duration-300">
                  <span className="text-[#B49D7E] group-hover:text-white text-sm transition-colors">→</span>
                </div>
              </div>
            </div>

            {/* Membership - Large */}
            <div className="md:col-span-2 group">
              <div className="bg-white/70 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-[#B49D7E]/15 hover:border-[#B49D7E]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B49D7E]/20 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#CCC0A9]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
                <h3 className="text-2xl font-semibold text-[#5A493B] dark:text-white mb-3 relative">{t.membership}</h3>
                <p className="text-[#5A493B]/60 dark:text-white/50 relative">{t.membershipDesc}</p>
                <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full border-2 border-[#B49D7E]/30 flex items-center justify-center group-hover:bg-[#B49D7E] group-hover:border-[#B49D7E] transition-all duration-300">
                  <span className="text-[#B49D7E] group-hover:text-white transition-colors">→</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <a
            href="https://wa.me/77022222566"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] text-white px-12 py-5 rounded-full text-lg font-semibold tracking-wide shadow-2xl shadow-[#B49D7E]/40 hover:shadow-[#B49D7E]/60 hover:scale-105 transition-all duration-300"
          >
            {t.cta}
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#B49D7E]/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <p
            className="text-4xl bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] bg-clip-text text-transparent"
            style={{ fontFamily: "'Alias', serif" }}
          >
            formē
          </p>
          <p className="text-xs tracking-[0.5em] uppercase text-[#5A493B]/40 dark:text-white/30">Studio</p>

          {/* Theme Switcher */}
          <div className="flex items-center gap-1 bg-[#B49D7E]/10 rounded-full p-1.5 mt-4">
            <button
              onClick={() => setDark(false)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                !dark ? "bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] shadow-lg scale-110" : "hover:bg-white/20"
              }`}
            >
              ☀️
            </button>
            <button
              onClick={() => setDark(true)}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${
                dark ? "bg-gradient-to-r from-[#B49D7E] to-[#CCC0A9] shadow-lg scale-110" : "hover:bg-white/20"
              }`}
            >
              🌙
            </button>
          </div>
        </div>
      </footer>

      {/* Virtual Tour Modal */}
      {tourOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setTourOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setTourOpen(false)}
              className="absolute -top-12 right-0 text-white/60 hover:text-white text-4xl font-light transition-colors"
            >
              ×
            </button>
            <iframe
              src="https://kuula.co/share/collection/71q0j?logo=0&info=0&fs=1&vr=1&thumbs=1"
              className="w-full h-full rounded-2xl shadow-2xl"
              allow="xr-spatial-tracking; gyroscope; accelerometer"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
      `}</style>
    </>
  );
}
