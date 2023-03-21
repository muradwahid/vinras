import React from 'react';
import HomeHero from '../HomeHero/HomeHero';
import HomeTwoAboutUs from '../HomeTwoAboutUs/HomeTwoAboutUs';
import HomeTwoAdd from '../HomeTwoAdd/HomeTwoAdd';
import HomeTwoCompanySkills from '../HomeTwoCompanySkills/HomeTwoCompanySkills';
import HomeTwoOurCase from '../HomeTwoOurCase/HomeTwoOurCase';
import HomeTwoOurService from '../HomeTwoOurService/HomeTwoOurService';
import HomeTwoOurTeam from '../HomeTwoOurTeam/HomeTwoOurTeam';
import HomeTwoTestiMonial from '../HomeTwoTestiMonial/HomeTwoTestiMonial';
import HomeTwoWhyChoose from '../HomeTwoWhyChoose/HomeTwoWhyChoose';

const HomeTwo = () => {
  return (
    <div className='overflow-hidden'>
      <HomeHero/>
      <HomeTwoAboutUs/>
      <HomeTwoOurService/>
      <HomeTwoOurCase />
      <HomeTwoCompanySkills/>
      <HomeTwoAdd/>
      <HomeTwoOurTeam />
      <HomeTwoWhyChoose/>
      <HomeTwoTestiMonial/>
    </div>
  );
};

export default HomeTwo;