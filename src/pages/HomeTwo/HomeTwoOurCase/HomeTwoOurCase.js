import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
const bg = 'https://i.ibb.co/7g1D7Yz/02-Home-case-bg.png';
const sliderImage = 'https://i.ibb.co/QdzXzzK/slider.png';
const sliderImage2 = 'https://i.ibb.co/y59km7Y/slider2.png';
const sliderImage3 = 'https://i.ibb.co/3fKR1Pw/slider3.png';
const first = 'https://i.ibb.co/XVSKCTL/logo.png';
const first2 = 'https://i.ibb.co/tpQr8zm/logo.png';
const second = 'https://i.ibb.co/KLqwsZb/02-Home.png';
const second2 = 'https://i.ibb.co/87jMfyn/02-Home.png';
const third = 'https://i.ibb.co/8MR6Vq8/02-Home.png';
const third2 = 'https://i.ibb.co/q5KWFNc/02-Home.png';
const fourth = 'https://i.ibb.co/zmCPpWC/02-Home.png';
const fourth2 = 'https://i.ibb.co/7gP46sv/02-Home.png';
const fifth = 'https://i.ibb.co/C82Qmbs/02-Home.png';
const fifth2 = 'https://i.ibb.co/RTDXH99/02-Home.png';
const HomeTwoOurCase = () => {
  
  const settings = {
    className: "slider variable-width",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  }

  return (


    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='pt-24 pb-24'>
      <div className='w-[82%] mx-auto mb-20'>
        <div className='w-[90%] mx-auto flex items-center justify-between flex-wrap md:gap-0 gap-7'>
          <div>
            <h5 className='text-color 2xl:text-[22px] text-[20px] about-syle-text font-semibold poppins'>
              Our Case
            </h5>
            <h2 className='2xl:text-5xl text-4xl black font-bold mt-4'>Amazing Work Showcase</h2>
          </div>
          <div>
            <div className='flex items-center gap-1 2xl:text-[18px] font-semibold bg-color text-white py-3 px-5 rounded-full'>
              <button>
                All showcase
              </button>
              <i className="fa-solid fa-angles-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className='relative min-h-[380px]'>
        <Slider {...settings}>
          <div className='mx-6'>
            <img className='h-[380px] rounded-md' src={sliderImage} alt="" />
          </div>
          <div className='mx-6'>
            <img className='h-[380px] rounded-md' src={sliderImage2} alt="" />
          </div>
          <div className='mx-6'>
            <img className='h-[380px] rounded-md' src={sliderImage3} alt="" />
          </div>
          <div className='mx-6'>
            <img className='h-[380px] rounded-md' src={sliderImage} alt="" />
          </div>
          <div className='mx-6'>
            <img className='h-[380px] rounded-md' src={sliderImage2} alt="" />
          </div>
        </Slider>
        <div className='absolute flex items-center gap-12 border -bottom-9 bg-white px-6 py-3 2xl:w-[450px] w-[370px] left-1/2 translate-x-[-50%]'>
          <div>
          <h4 className='2xl:text-[30px] text-[24px] font-semibold'>Businesses Growth</h4>
            <p className='text-[#878c8f]'>Forestry Innovation</p>
          </div>
          <i className="fa-solid fa-angles-right bg-color p-3 rounded-full text-white"></i>
        </div>
      </div>
      <div className='w-[90%] mx-auto pt-32'>
        <div className='flex justify-between flex-wrap gap-6'>
          <div className='home-two-partner transition-all duration-300 cursor-pointer'>
            <img src={first} className='first-img' alt="" />
            <img src={first2} className='second-img hidden' alt="" />
          </div>
          <div className='home-two-partner transition-all duration-300 cursor-pointer'>
            <img src={second} className='first-img' alt="" />
            <img src={second2} className='second-img hidden' alt="" />
          </div>
          <div className='home-two-partner transition-all duration-300 cursor-pointer'>
            <img src={third} className='first-img' alt="" />
            <img src={third2} className='second-img hidden' alt="" />
          </div>
          <div className='home-two-partner transition-all duration-300 cursor-pointer'>
            <img src={fourth} className='first-img' alt="" />
            <img src={fourth2} className='second-img hidden' alt="" />
          </div>
          <div className='home-two-partner transition-all duration-300 cursor-pointer'>
            <img src={fifth} className='first-img' alt="" />
            <img src={fifth2} className='second-img hidden' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoOurCase;