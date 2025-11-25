"use client";

import { useLanguage } from "./LanguageProvider";

export function Hours() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text">
          {t("hours.title")}
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Weekdays */}
          <div className="hours-card rounded-2xl p-8 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
              {t("hours.weekdays")}
            </h3>
            <p className="text-2xl font-bold text-[var(--primary)]">
              {t("hours.weekdaysTime")}
            </p>
          </div>

          {/* Weekend */}
          <div className="hours-card rounded-2xl p-8 text-center">
            <div className="mb-4">
              <svg className="w-10 h-10 mx-auto text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
              {t("hours.weekend")}
            </h3>
            <p className="text-2xl font-bold text-[var(--primary)]">
              {t("hours.weekendTime")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
