import { useLanguage } from "../data/LanguageContext";
//loc: My Services
export const Intro = () => {
  const { lang } = useLanguage();
  return (
    <div className="flex flex-col pt-8 bg-pink-300 text-white font-semibold">
      <h2 className="text-4xl  text-center">{lang.ord6}</h2>
      <p className="max-w-4xl  self-center p-4">{lang.ord7}</p>
    </div>
  );
};
