import React from 'react';
import aboutBg from '../../../assets/bg/secondBg.png';
import design from '../../../assets/icon/homeSecond/design.png'
import design1 from '../../../assets/icon/homeSecond/design-1.png';
import quality from '../../../assets/icon/homeSecond/quality.png';
import quality1 from '../../../assets/icon/homeSecond/quality-1.png';
import consulting from '../../../assets/icon/homeSecond/consulting.png';
import consulting1 from '../../../assets/icon/homeSecond/consulting-1.png';
import strategy from '../../../assets/icon/homeSecond/stratagy-1.png';
import strategy1 from '../../../assets/icon/homeSecond/stratagy.png'
import HomeAboutBottom from './HomeAboutBottom/HomeAboutBottom';
const HomeAboutUs = () => {
  return (
    <div className='mb-12' style={{backgroundImage:`url(${aboutBg})`,backgroundSize:'cover',backgroundRepeat:"no-repeat"}}>
      <div className='w-[82%] mx-auto'>
        <div className='bg-white flex items-center flex-wrap shadow-lg'>
          <div className='border-r border-l lg:w-[25%] w-full py-7 first cursor-pointer transition-all duration-500'>
            <div className='flex justify-center'>
              <div className='h-14 w-14 flex items-center justify-center rounded-full mb-5 designRound transition-all duration-500'>
                <img className='h-7 w-7 text-center design' src={design} alt="" />
                <img className='h-7 w-7 text-center hidden designOne' src={design1} alt="" />
              </div>
            </div>
            <h2 className='text-[24px] font-bold text-[#242429] text-center transition-all duration-500'>Ui/Ux Design</h2>
          </div>
          <div className='border-r lg:w-[25%] w-full py-7 second transition-all duration-500 cursor-pointer'>
            <div className='flex justify-center'>
              <div className='h-14 w-14 flex items-center justify-center rounded-full mb-5 designRound transition-all duration-500'>
                <img className='h-7 w-7 text-center design' src={quality1} alt="" />
                <img className='h-7 w-7 text-center hidden designOne' src={quality} alt="" />
              </div>
            </div>
            <h2 className='text-[24px] font-bold text-[#242429] text-center transition-all duration-500'>Committed Quality</h2>
          </div>
          <div className='border-r lg:w-[25%] w-full py-7 third transition-all duration-500 cursor-pointer'>
            <div className='flex justify-center'>
              <div className='h-14 w-14 flex items-center justify-center rounded-full mb-5 designRound transition-all duration-500'>
                <img className='h-7 w-7 text-center design' src={consulting} alt="" />
                <img className='h-7 w-7 text-center hidden designOne' src={consulting1} alt="" />
              </div>
            </div>
            <h2 className='text-[24px] font-bold text-[#242429] text-center  transition-all duration-500'>Tax Consulting</h2>
          </div>
          <div className='border-r lg:w-[25%] w-full py-7 fourth transition-all duration-500'>
            <div className='flex justify-center'>
              <div className='h-14 w-14 flex items-center justify-center rounded-full mb-5 designRound transition-all duration-500'>
                <img className='h-7 w-7 text-center design' src={strategy1} alt="" />
                <img className='h-7 w-7 text-center hidden designOne' src={strategy} alt="" />
              </div>
            </div>
            <h2 className='text-[24px] font-bold text-[#242429] text-center transition-all duration-500'>Tax Strategy</h2>
          </div>
        </div>
        <HomeAboutBottom/>
      </div>
    </div>
  );
};

export default HomeAboutUs;