import { useLanguage } from "../data/LanguageContext";

export const Aboutus = () => {
  const {lang} = useLanguage();
  return (
    <div className="flex flex-col w-full bg-black text-white">
      <div>
        <h1 className="text-5xl p-4">{lang.ord4}</h1>
        <div className="p-4">    
        {lang.ord5}
        </div>
      </div>
    </div>
  );
};
