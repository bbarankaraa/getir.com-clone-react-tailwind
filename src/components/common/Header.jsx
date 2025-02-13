import { FiGlobe } from "react-icons/fi";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { useState,useEffect } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Logo from "../../assets/logo.png"

const Header = () => {
  
  const [loginOpened,setLoginOpened] = useState(false);
  const [registerOpened,setRegisterOpened] = useState(false);

  const loginHandler = () => {
    setLoginOpened(true);
  }

  const registerHandler = () => {
    setRegisterOpened(true);
  }

  useEffect(() => {
    if (loginOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loginOpened]);

  useEffect(() => {
    if (registerOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [registerOpened]);

  return (
    <div className="bg-secondary-color px-8">
      {loginOpened && <Login setLoginOpened={setLoginOpened} />}
      {registerOpened && <Register setRegisterOpened={setRegisterOpened} />}
      <div className="container h-[45px] 2xl:px-36 px-4 flex items-center justify-between mx-auto">
        <a href="#">
          <img
            src={Logo}
            alt="Logo"
            className="h-4"
            />
        </a>
        <nav className="flex gap-x-8 text-sm font-normal">
          <a href="#" className="hidden md:flex items-center gap-x-2 text-white opacity-80 hover:opacity-100 transition-all">
            <FiGlobe size={20} />
            <span className="hidden lg:block">Türkçe (TR)</span>
            </a>
          <button onClick={loginHandler} className="hidden md:flex items-center gap-x-2 text-white opacity-80 hover:opacity-100 transition-all cursor-pointer">
            <FaUser size={20} />
            <span className="hidden lg:block">Giriş Yap</span>
            </button>
          <button onClick={registerHandler} className="hidden md:flex items-center gap-x-2 text-white opacity-80 hover:opacity-100 transition-all cursor-pointer">
            <FaUserPlus size={20} />
            <span className="hidden lg:block">Kayıt Ol</span>
            </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
