import { useRef } from "react";
import { Aboutus } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Top } from "./components/Top";
import { useLanguage } from "./data/LanguageContext";

function App() {
  const myRef = useRef(null);
  const {lang} = useLanguage();
  const handleContactClick = (e) => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-b from-pink-200 to-slate-200 text-slate-800">
      <Navbar />

      <div className="">
        <Top contactClick={() => handleContactClick()} />
      </div>

      <div className="block lg:hidden">
        <Aboutus />
      </div>

      <div className="mt-0">
        <Intro />
      </div>

      <div className="flex w-full mt-0 self-center  max-w-3xl">
        <Services />
      </div>
      <div className="flex text-sm self-center text-center p-2">
      {lang.ord23} <br/>  1 euro = 7,53450 kuna.
      </div>
      <div id="contact" className="mt-0" ref={myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
