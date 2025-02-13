import Logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="bg-brand-color h-20 px-8 flex md:justify-start justify-center items-center 2xl:px-36">
        <a href="#" className="">
            <img src={Logo} alt="Logo" className="h-9"/>
        </a>
        </div>
  )
}

export default Navbar