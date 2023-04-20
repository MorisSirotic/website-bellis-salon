import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../data/LanguageContext";
import { Croatian, English } from "../data/Languages";

export const Navbar = () => {
  const {lang, updateLanguage} = useLanguage();
  return (
    <div className="flex w-full h-20 p-4 mb-24">
      <div className="text-4xl self-center justify-self-center m-auto text-center font-bold">
        Frizerski Salon <br />
        <span className="text-pink-600 text-6xl">Dolores</span>
      </div>

      <div className="flex flex-col">
        <ReactCountryFlag
          className="my-2 cursor-pointer"
          countryCode="HR"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="Hrvatski"
          onClick={() => updateLanguage(Croatian)}
        />
        <ReactCountryFlag
          className="my-2 cursor-pointer"
          countryCode="GB"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="English"
          onClick={() => updateLanguage(English)}
        />
        <ReactCountryFlag
          className="my-2 opacity-10 cursor-not-allowed"
          countryCode="DE"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="DE"
        />
        <ReactCountryFlag
          className="my-2 opacity-10 cursor-not-allowed"
          countryCode="IT"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
          title="x"
        />
      </div>
    </div>
  );
};
