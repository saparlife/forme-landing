"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { VirtualTourModal } from "./VirtualTourModal";

export function Services() {
  const { t } = useLanguage();
  const [tourOpen, setTourOpen] = useState(false);

  const services = [
    {
      key: "personal",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      span: "sm:col-span-2",
    },
    {
      key: "pilates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      span: "",
    },
    {
      key: "tour",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      span: "",
      onClick: () => setTourOpen(true),
    },
    {
      key: "membership",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      span: "sm:col-span-2",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[var(--light)]/30 dark:bg-white/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">
          {t("services.title")}
        </h2>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <div
              key={service.key}
              onClick={service.onClick}
              className={`card rounded-2xl p-6 ${service.span} ${service.onClick ? "cursor-pointer" : ""}`}
            >
              <div className="text-[var(--primary)] mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-sm text-[var(--text)]/70">
                {t(`services.${service.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <VirtualTourModal isOpen={tourOpen} onClose={() => setTourOpen(false)} />
    </section>
  );
}
