import { useLanguage } from "../data/LanguageContext";
import { FullService } from "./FullService";

export const Services = (props) => {
  const {lang} = useLanguage();
  return (
    <div className="flex flex-col  p-4 w-full">
      {/* Kratka - left */}
      <FullService
        num="1"
        title={lang.ord8}
        prices={[{ price: "4" }, { price: "4" }, { price: "4" }]}
      />
      <FullService
        num="2"
        title={lang.ord10}
        prices={[{ price: "3" }, { price: "4" }, { price: "6" }]}
      />
      <FullService
        num="3"
        title={lang.ord11}
        prices={[{ price: "6" }, { price: "6" }, { price: "6" }]}
      />
      <FullService
        num="4"
        title={lang.ord12}
        prices={[{ price: "8" }, { price: "8" }, { price: "8" }]}
      />
      <FullService
        num="5"
        title={lang.ord13}
        prices={[{ price: "8" }, { price: "10" }, { price: "11" }]}
      />

      <FullService
        num="6"
        title={lang.ord14}
        prices={[{ price: "14" }, { price: "15" }, { price: "16" }]}
      />

      <FullService
        num="7"
        title={lang.ord15}
        prices={[{ price: "22" }, { price: "24" }, { price: "27" }]}
      />

      <FullService
        num="8"
        title={lang.ord15_1}
        prices={[{ price: "22" }, { price: "24" }, { price: "30" }]}
      />

      <FullService
        num="9"
        title={lang.ord16}
        prices={[{ price: "16" }, { price: "16" }, { price: "16" }]}
      />

      <FullService
        num="10"
        title={lang.ord17}
        prices={[{ price: "23" }, { price: "27" }, { price: "34" }]}
      />

      <FullService
        num="11"
        title={lang.ord18}
        prices={[{ price: "8" }, { price: "10" }, { price: "11" }]}
      />
      <FullService
        num="12"
        title={lang.ord19}
        prices={[{ price: "3" }, { price: "3" }, { price: "3" }]}
      />

      <FullService
        num="13"
        title={lang.ord20}
        prices={[{ price: "3" }, { price: "3" }, { price: "3" }]}
      />

      <FullService
        num="14"
        title={lang.ord21}
        hair2={lang.ord9.sub4}
        prices={[{ price: "0" }, { price: "16" }, { price: "20" }]}
      />

      <FullService
        num="15"
        title={lang.ord22}
        hair2={lang.ord9.sub4}
        prices={[{ price: "27" }, { price: "34" }, { price: "40" }]}
      />
    </div>
  );
};