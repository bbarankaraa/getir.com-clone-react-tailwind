import Banners from '../api/banners.json'
import Slider from "react-slick";
import { useState, useEffect } from 'react';

const Campaigns = () => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
      setBanners(Banners);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
      };

  return (
    <div className='container mx-auto 2xl:px-36 md:mt-8'>
        <Slider {...settings}>
        {banners.length && banners.map((banner) => (
            <div key={banner.id} className='flex! items-center justify-center'>
                <img src={banner.image} alt="banner" className='md:w-[400px] md:h-[200px] md:rounded-xl' />
            </div>
        ))}
        </Slider>
    </div>
  )
}

export default Campaigns