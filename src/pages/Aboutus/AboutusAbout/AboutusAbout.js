import React from 'react';
import aboutBg from '../../../assets/bg/secondBg.png';
import HomeAboutBottom from '../../Home/HomeAboutUs/HomeAboutBottom/HomeAboutBottom';

const AboutusAbout = () => {
  return (
    <div className='pb-12' style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat" }} >
      <HomeAboutBottom/>
    </div>
  );
};

export default AboutusAbout;