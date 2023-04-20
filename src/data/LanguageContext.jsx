import React from 'react';
import { Croatian, English } from './Languages';

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = React.useState(English);

  const updateLanguage = (language) => {
    setLang(language);
  };

  return (
    <LanguageContext.Provider value={{ lang, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const { lang, updateLanguage } = React.useContext(LanguageContext);

  return { lang, updateLanguage };
};