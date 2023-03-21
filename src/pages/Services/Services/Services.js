import React from 'react';
import HomeBrightAgency from '../../Home/HomeBrightAgency/HomeBrightAgency';
import HomeBusinessDiscusion from '../../Home/HomeBusinessDiscusion/HomeBusinessDiscusion';
import HomeCounter from '../../Home/HomeCounter/HomeCounter';
import HomeOurService from '../../Home/HomeOurService/HomeOurService';
import HomeTestiMonial from '../../Home/HomeTestiMonial/HomeTestiMonial';
const topImage = 'https://i.ibb.co/f1TTnzg/03-About-Us.png';
const Services = () => {
  return (
    <div>
      <div className='h-[100vh]' style={{ background: `url(${topImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='flex items-center pt-[50vh] md:pl-[30vh] pl-[10vh]'>
          <div className='h-[20vh]'>
            <h2 className='2xl:text-[70px] text-6xl font-bold text-white'>Services</h2>
            <p className='2xl:text-[22px] text-[20px] mt-3 font-bold text-white'>Home <i class="fa-solid fa-angles-right"></i> Services</p>
          </div>
        </div>
      </div>
      <HomeOurService />
      <HomeBusinessDiscusion />
      <HomeBrightAgency />
      <HomeCounter />
      <HomeTestiMonial/>
    </div>
  );
};

export default Services;