import { useLanguage } from "../data/LanguageContext";

export const Contact = () => {
  const {lang} = useLanguage();
  return (
    <div className="flex flex-col text-center bg-black text-white">
      <h2 className="text-4xl">{lang.ord24}</h2>

      <h2 className="text-xl">
        {lang.ord25} <a className="text-pink-400" href="tel::+38598637311">+38598637311</a>
      </h2>
    </div>
  );
};
