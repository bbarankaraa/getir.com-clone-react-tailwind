import ReactFlagsSelect from "react-flags-select";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Login = (props) => {
  
  const closeClickHandler = () => {
    props.setLoginOpened(false)
  }
  const [selected, setSelected] = useState("TR");
  const phones = { US: "+1", TR: "+90" };
  
  return (
    <div className="h-[100vh] w-[100vw] bg-black/50 flex justify-center items-center flex-col fixed top-0 right-0 z-50">
      <div className="w-full md:w-[400px] md:h-auto h-full md:rounded-lg bg-white">
        <div className="text-center pt-8 relative">
          <h4 className="text-brand-color font-semibold">
            Giriş yap veya kayıt ol
          </h4>
          <IoIosClose
            size={30}
            className="bg-gray-200 rounded-md absolute top-0 right-0 mx-4 my-8 cursor-pointer"
            onClick={closeClickHandler}
          />
        </div>
        <div className="grid gap-y-3 p-8">
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
          <div className="text-xs text-paragraph">
            <p>
              Kişisel verilerine dair Aydınlatma Metni için{" "}
              <span>
                <a
                  href="#"
                  className="text-brand-color underline hover:text-primary-color"
                >
                  tıklayınız.
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 py-4 md:rounded-b-lg text-paragraph text-sm text-center">
          <p>
            Hala kayıt olmadın mı?{" "}
            <span>
              <a href="" className="text-brand-color font-semibold">
                Kayıt Ol
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
