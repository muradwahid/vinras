import React from 'react';
import HomeOurAdvisor from '../Home/HomeOurAdvisor/HomeOurAdvisor';
import HomeOurBenefits from '../Home/HomeOurBenefits/HomeOurBenefits';
import HomeTestiMonial from '../Home/HomeTestiMonial/HomeTestiMonial';
import AboutusAbout from './AboutusAbout/AboutusAbout';
import AboutusCounter from './AboutusCounter/AboutusCounter';
const topImage = 'https://i.ibb.co/f1TTnzg/03-About-Us.png';
const Aboutus = () => {
  return (
    <div>
      <div className='h-[100vh]' style={{background:`url(${topImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <div className='flex items-center pt-[50vh] md:pl-[30vh] pl-[10vh]'>
          <div className='h-[20vh]'>
            <h2 className='2xl:text-[70px] text-6xl font-bold text-white'>About Us</h2>
            <p className='2xl:text-[22px] text-[20px] mt-3 font-bold text-white'>Home <i class="fa-solid fa-angles-right"></i> About Us</p>
          </div>
      </div>
      </div>
      <AboutusAbout />
      <AboutusCounter />
      <HomeOurAdvisor />
      <HomeOurBenefits />
      <HomeTestiMonial/>
    </div>
  );
};

export default Aboutus;