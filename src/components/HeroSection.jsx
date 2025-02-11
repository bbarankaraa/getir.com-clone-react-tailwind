import { useState } from "react";
import biMutluluk from "../assets/bimutluluk.svg";
import ReactFlagsSelect from "react-flags-select";

const HeroSection = () => {
  const [selected, setSelected] = useState("TR");
  
  const phones = {US: "+1",TR: "+90",};

  return (
    <div className="bg-brand-color h-auto md:h-[500px] relative">
      <div className="container flex justify-center md:justify-between items-center relative md:absolute top-0 left-[50%] -translate-x-[50%] h-full z-10 2xl:px-36 md:px-4 shadow-sm">
        <div className="hidden md:block">
          <img src={biMutluluk} alt="logo" className="h-[180px]" />
          <h3 className="text-white text-4xl font-semibold mt-10">
            Dakikalar içinde kapında
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
          <h4 className="text-brand-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                selected={selected}
                onSelect={(code) => setSelected(code)}
                className="flag-select"
              />
              <label className="flex-1 relative block">
                <input
                  required
                  type="text"
                  className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-brand-color outline-0 focus:border-brand-color peer text-sm pt-2"
                />
                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-400 transition-all peer-focus:h-7 peer-focus:text-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-brand-color peer-valid:text-xs">
                  Telefon Numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow text-primary-color transition-colors hover:bg-primary-color hover:text-brand-yellow h-12 flex items-center justify-center w-full rounded-md text-sm font-semibold cursor-pointer">
              Telefon Numarası İle Devam Et
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
