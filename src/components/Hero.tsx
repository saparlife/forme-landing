"use client";

import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-[var(--primary)]/20 shape-morph gradient-bg-animated" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[var(--accent)]/20 shape-morph-reverse gradient-bg-animated" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main heading */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up">
          <span className="gradient-text">FORMÉ</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-light text-[var(--dark)] dark:text-[var(--light)] mb-6 animate-fade-in-up animate-delay-300">
          {t("hero.tagline")}
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--text)]/70 mb-12 animate-fade-in-up animate-delay-600">
          {t("hero.description")}
        </p>

        {/* Scroll indicator */}
        <div className="animate-bounce-slow">
          <span className="text-sm text-[var(--text)]/50 uppercase tracking-widest">
            {t("hero.scroll")}
          </span>
          <div className="mt-2">
            <svg className="w-6 h-6 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="absolute bottom-0 right-0 w-1/3 max-w-md opacity-80">
        <img src="/fitjab1.png" alt="Fitness" className="w-full" />
      </div>
    </section>
  );
}
