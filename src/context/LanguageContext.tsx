import { createContext, type ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { content, englishContent, type SiteContent, type SiteLanguage } from "../content/content";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  copy: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>(() => {
    const saved = window.localStorage.getItem("lcc-language");
    return saved === "en" ? "en" : "ru";
  });

  useEffect(() => {
    window.localStorage.setItem("lcc-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      copy: language === "ru" ? content : englishContent,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return value;
}

export function useSiteContent() {
  return useLanguage().copy;
}
