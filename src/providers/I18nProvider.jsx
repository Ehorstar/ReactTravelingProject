import React, { useEffect, useState } from "react";
import I18nContext from "../contexts/I18nContext";
import translations from "../translations/translations";

const I18nProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem("lang") || "en"
  );
  useEffect(() => {
    const savedLanguage = localStorage.getItem("lang");
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLang(savedLanguage);
    }
  }, []);

  const changeLang = (lang) => {
    if (translations[lang]) {
      setCurrentLang(lang);
      localStorage.setItem("lang", lang);
    }
  };

  const contextValue = {
    currentLang,
    changeLang,
    currentTexts: translations[currentLang],
  };

  return (
    <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
  );
};

export default I18nProvider;
