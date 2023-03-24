import { useRef } from "react";
import { Aboutus } from "./components/AboutUs";
import { Contact } from "./components/Contact";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Top } from "./components/Top";

function App() {
  const myRef = useRef(null);

  const handleContactClick = (e) => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="flex flex-col w-full h-full bg-gradient-to-b from-pink-200 to-slate-200 text-slate-800">
      <Navbar />

      <div className="mb-4">
        <Top contactClick={() => handleContactClick()}/>
      </div>

      <div className="block lg:hidden mb-2">
        <Aboutus />
      </div>

      <div className="mt-0">
        <Intro />
      </div>

      <div className="mt-0">
        <Services />
      </div>

      <div id="contact" className="mt-0" ref={myRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;