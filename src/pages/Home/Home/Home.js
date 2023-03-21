import React from 'react';
import HomeAboutUs from '../HomeAboutUs/HomeAboutUs';
import HomeBrightAgency from '../HomeBrightAgency/HomeBrightAgency';
import HomeBusinessDiscusion from '../HomeBusinessDiscusion/HomeBusinessDiscusion';
import HomeCounter from '../HomeCounter/HomeCounter';
import HomeHero from '../HomeHero/HomeHero';
import HomeOurAdvisor from '../HomeOurAdvisor/HomeOurAdvisor';
import HomeOurArticles from '../HomeOurArticles/HomeOurArticles';
import HomeOurBenefits from '../HomeOurBenefits/HomeOurBenefits';
import HomeOurService from '../HomeOurService/HomeOurService';
import HomeProcedure from '../HomeProcedure/HomeProcedure';
import HomeSlider from '../HomeSlider/HomeSlider';
import HomeTestiMonial from '../HomeTestiMonial/HomeTestiMonial';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HomeHero/>
      <HomeAboutUs />
      <HomeOurService />
      <HomeSlider />
      <HomeBusinessDiscusion/>
      <HomeBrightAgency />
      <HomeCounter />
      <HomeOurAdvisor />
      <HomeOurBenefits/>
      <HomeTestiMonial />
      <HomeProcedure />
      <HomeOurArticles/>
    </div>
  );
};

export default Home;