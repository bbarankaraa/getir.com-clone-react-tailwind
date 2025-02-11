import FooterMenu from "../Footer/FooterMenu";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const Footer = () => {

  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto 2xl:px-32">
        <div className="grid md:grid-cols-4 gap-y-6 md:py-10 pt-4 px-4">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-color">Getir'i indir!</h6>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt="appstore"
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt="googleplay"
                />
              </a>
              <a href="#">
                <img
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt="appgallery"
                />
              </a>
            </nav>
          </section>
          <section className="grid gap-x-5 md:gap-y-4 gap-y-2">
            <nav className="">
              <h6 className="text-lg text-brand-color">Getir'i keşfet</h6>
                <ul className="grid gap-y-1 md:gap-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Kariyer
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Teknoloji Kariyerleri
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      İletişim
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Sosyal Sorumluluk Projeleri
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Basın Bültenleri
                    </a>
                  </li>
                </ul>
            </nav>
          </section>
          <section className="grid gap-x-5 md:gap-y-4 gap-y-2">
            <nav className="">
              <h6 className="text-lg text-brand-color">Yardıma mı ihtiyacın var?</h6>
                <ul className="grid gap-y-1 md:gap-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Sıkça Sorulan Sorular
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Kişisel Verilerin Korunması
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Gizlilik Politikası
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Kullanım Koşulları
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Çerez Politikası
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      İşlem Rehberi
                    </a>
                  </li>
                </ul>
            </nav>
          </section>
          <section className="grid gap-x-5 md:gap-y-4 gap-y-2">
            <nav className="">
              <h6 className="text-lg text-brand-color">İş Ortağımız Ol</h6>
                <ul className="grid gap-y-1 md:gap-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Bayimiz Olun
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Deponu Kirala
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      GetirYemek Restoranı Ol
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      GetirÇarşı İşletmesi Ol
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:text-brand-color transition-colors"
                    >
                      Zincir Restoranlar
                    </a>
                  </li>
                </ul>
            </nav>
          </section>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 mt-6 py-6 bg-gray-100 md:bg-white">
          <div className="text-xs text-gray-700 flex md:flex-row flex-col text-center gap-x-8">
            © 2025 Getir
            <a
              href="#"
              className="text-brand-color text-[13px] md:mt-0 mt-1 md:mb-0 mb-2"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-2.5 text-paragraph">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-paragraph hover:bg-brand-color hover:bg-brand-color/10 hover:text-primary-color transition-colors flex items-center justify-center"
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-paragraph hover:bg-brand-color hover:bg-brand-color/10 hover:text-primary-color transition-colors flex items-center justify-center"
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-paragraph hover:bg-brand-color hover:bg-brand-color/10 hover:text-primary-color transition-colors flex items-center justify-center"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="#"
              className="h-8 flex items-center gap-x-2 rounded-lg bg-white text-paragraph px-2 text-sm border md:border-gray-100 border-gray-300 md:hover:bg-brand-color md:hover:bg-brand-color/10 hover:text-primary-color md:hover:border-transparent"
            >
              <FiGlobe size={18} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
