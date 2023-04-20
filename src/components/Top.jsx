import { useLanguage } from "../data/LanguageContext";
import { Croatian } from "../data/Languages";
import woman from "../data/woman.png";
import { Aboutus } from "./AboutUs";

export const Top = (props) => {

  const {lang} = useLanguage();
  
  return (
    <div className="flex flex-col-reverse sm:flex-row">
      <div className="flex flex-col max-w-screen-lg ">
        <div className="flex flex-col md:m-auto">
          <div className="flex">
            <span className="text-center w-16 h-1 bg-gray-600 self-center mr-3 ml-8"></span>
            <span className="whitespace-nowrap">{lang.ord1}, Umag</span>
          
          </div>

          <div className=" text-slate-600 mt-4 ml-7 sm:max-w-[250px] md:max-w-[500px]">
            <h1 className="text-6xl">
            {lang.ord2} <span className="text-white">{lang.ord2_1}</span>
            </h1>
          </div>

          <div className="mt-6 mb-2 sm:mt-4 sm:mb-2 ml-4 sm:self-start">
            <button
              onClick={props.contactClick}
              className="bg-black text-white p-4 rounded-3xl w-52 hover:bg-pink-500"
            >
             {lang.ord3}
            </button>
           
          </div>
        </div>

        <div className="hidden lg:block max-w-[750px] mt-24 mr-4">
          <Aboutus />
        </div>
      </div>

      <div
        className="flex flex-col  sm:visible sm:ml-auto
       bg-gradient-to-b from-pink-300 to-pink-100 rounded-t-full text-red-500
       
     sm:mb-[-0px]
       
       md:text-yellow-600 sm:max-w-[300px] md:max-w-[500px] lg:max-w-[600px]"
      >
        <img className="self-center " src={woman}></img>
      </div>
    </div>
  );
};
