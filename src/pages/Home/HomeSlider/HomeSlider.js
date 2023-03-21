import React, { useState } from 'react';
import Slider from 'react-slick';
const logo = 'https://i.ibb.co/WHqhX21/01-Home-5.png';
const HomeSlider = () => {
  const [sliderIdx, setSliderIdx] = useState(0);
  const settings = {
    className: "slider variable-width",
    centerMode: true,
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange:(current)=>setSliderIdx(current)
  };
  const sliderData = [
    { image:'https://i.ibb.co/DQVgmqh/01-Home-2.png',index:1},
    { image: 'https://i.ibb.co/Kb7ZqBn/01-Home-3.png', index: 1 },
    { image: 'https://i.ibb.co/4phJKZ8/01-Home-4.png', index: 1 },
  ]
  console.log(sliderIdx);
  return (
    <div className='bg-white pt-20 pb-16 homeSlider'>
      <Slider {...settings}>
        {
          sliderData.map((data, idx) => <div key={idx} className='relative poppins'>
            <img className='max-h-[400px] w-full object-cover z-0' src={data.image} alt="" />
            <div className={``}>
              <div className={`absolute z-50 top-[50%] bg-color w-[80%] rounded-r-[40px] py-5 px-6 flex items-center justify-between transition-all duration-300 origin-left scale-x-0 ${sliderIdx===idx?'scale-x-95':''}`}>
                <div className='w-[70%]'>
                  <p className='text-[18px] uppercase text-white'>business, finance</p>
                  <h3 className='text-[28px] font-bold text-white'>Finance Consulting</h3>
                  <p className='text-white text-[14px]'>Suspendisse finibus urna mauris, vitae quam vel. Vestibulum leo ligula, ed luctus.</p>
                </div>
                <div>
                  <img className='w-20' src={logo} alt="" />
                </div>
              </div>
            </div>
          </div>)
}
      </Slider>
    </div>
  );
};

export default HomeSlider;