import React from 'react';
import svgLogo from '../../../assets/svg/home-recovered.svg'
import heroImg from '../../../assets/images/homeHero.png';
import heroBg from '../../../assets/bg/heroBg.png'
const iconRight = 'https://i.ibb.co/YBfFg5W/right.png';
const HomeHero = () => {
  return (
    <div className='flex items-center' style={{backgroundImage:`url(${heroBg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div className='ml-[8%] w-[45%]'>
        <h3 className='text-xl font-semibold text-[#1a1a1a]'>Welcome To Digital Startup Agency</h3>
        <h1 className='text-[60px] font-bold text-[#1a1a1a] my-2'>Digital Startup
          Agency</h1>
        <p className='text-xl font-bold text-[#1a1a1a]'>Our  Best Business Technology Consulting</p>
        <div className='inline-block mt-7'>
          <div className='flex bg-[#F94D1B] px-6 py-3 gap-3 rounded-full items-center cursor-pointer transition-all duration-300 hover:bg-[#fa5c2c]'><p className='font-semibold text-white '>Free Consultation</p> <div>
            <img src={iconRight} alt="" /></div></div>
        </div>
      </div>
      <div className='w-[64%]'>
        <img src={heroImg} style={{ WebkitMaskImage: `url(${svgLogo})`, WebkitMaskRepeat: 'no-repeat' }} alt="" />
      </div>
    </div>
  );
};

export default HomeHero;