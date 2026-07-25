"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "../../lib/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (typeof translations)[Lang];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "tomady.lang";
const DEFAULT_LANG: Lang = "fr";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem(STORAGE_KEY) as Lang | null)
        : null;
    if (stored === "fr" || stored === "en") {
      setLangState(stored);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "fr" ? "en" : "fr");
  }, [lang, setLang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggleLang, t: translations[lang] }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useTranslation() {
  const { t } = useLanguage();
  return t;
}