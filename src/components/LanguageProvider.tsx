"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "ru" | "kz";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Hero
    "hero.tagline": "Приватное пространство сильных женщин",
    "hero.description": "Создан для женщин, которые выбирают результат. Мы объединили приватность, стиль и продуманную функциональность, чтобы каждая тренировка давала ощущение силы и контроля.",
    "hero.scroll": "Скролл",

    // Hours
    "hours.title": "Режим работы",
    "hours.weekdays": "Понедельник — Пятница",
    "hours.weekdaysTime": "07:00 — 23:00",
    "hours.weekend": "Суббота — Воскресенье",
    "hours.weekendTime": "09:00 — 22:00",

    // Services
    "services.title": "Наши услуги",
    "services.personal.title": "Персональные тренировки",
    "services.personal.desc": "Формат мини-группы с индивидуальным сопровождением тренера",
    "services.pilates.title": "Пилатес на реформере",
    "services.pilates.desc": "Персональные тренировки на профессиональном оборудовании",
    "services.tour.title": "Виртуальная экскурсия",
    "services.tour.desc": "Изучите наше пространство в 3D визуализации",
    "services.membership.title": "Абонементы",
    "services.membership.desc": "Комфортные способы оплаты",

    // CTA
    "cta.button": "Связаться с менеджером",

    // Footer
    "footer.studio": "Studio",
  },
  kz: {
    // Hero
    "hero.tagline": "Күшті әйелдердің жеке кеңістігі",
    "hero.description": "Нәтиже таңдайтын әйелдер үшін жасалған. Біз жекелікті, стильді және ойластырылған функционалдылықты біріктірдік, әр жаттығу күш пен бақылау сезімін сыйлайды.",
    "hero.scroll": "Төмен",

    // Hours
    "hours.title": "Жұмыс режимі",
    "hours.weekdays": "Дүйсенбі — Жұма",
    "hours.weekdaysTime": "07:00 — 23:00",
    "hours.weekend": "Сенбі — Жексенбі",
    "hours.weekendTime": "09:00 — 22:00",

    // Services
    "services.title": "Біздің қызметтер",
    "services.personal.title": "Жеке жаттығулар",
    "services.personal.desc": "Жаттықтырушының жеке қолдауымен мини-топ форматы",
    "services.pilates.title": "Реформерде пилатес",
    "services.pilates.desc": "Кәсіби жабдықта жеке жаттығулар",
    "services.tour.title": "Виртуалды экскурсия",
    "services.tour.desc": "Біздің кеңістікті 3D визуализацияда зерттеңіз",
    "services.membership.title": "Абонементтер",
    "services.membership.desc": "Ыңғайлы төлем әдістері",

    // CTA
    "cta.button": "Менеджермен байланысу",

    // Footer
    "footer.studio": "Studio",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("forme-language") as Language | null;
    if (saved && ["ru", "kz"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("forme-language", language);
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
