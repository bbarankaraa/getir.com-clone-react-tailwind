
const MobileApp = () => {
  return (
    <div className="2xl:px-32 lg:px-4 lg:mx-auto lg:mt-6">
    <div className="lg:bg-[url(src/assets/doodle.png)] bg-brand-color h-[312px] lg:rounded-lg lg:flex lg:justify-between items-center">
      <div className="flex flex-col justify-center lg:p-10 p-4 h-full">
        <h3 className="text-[26px] font-bold text-white tracking-tight">Götir'i indir!</h3>
        <p className="text-white font-semibold my-3">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
        <nav className="flex lg:flex-row flex-col gap-2 lg:pt-8">
          <a href="#">
            <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="appstore" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="playstore" />
          </a>
          <a href="#">
            <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="appgallery" />
          </a>
        </nav>
      </div>
      <picture className="h-full hidden lg:flex items-end">
        <img src="https://i.hizliresim.com/des5kup.png" alt="phone" className="h-[288px]" />
      </picture>
    </div>
    </div>
  )
}

export default MobileApp