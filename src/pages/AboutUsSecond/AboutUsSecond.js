import React from 'react';
import HomeTwoAdd from '../HomeTwo/HomeTwoAdd/HomeTwoAdd';
import HomeTwoCompanySkills from '../HomeTwo/HomeTwoCompanySkills/HomeTwoCompanySkills';
import HomeTwoOurTeam from '../HomeTwo/HomeTwoOurTeam/HomeTwoOurTeam';
import AboutSecondAbout from './AboutSecondAbout/AboutSecondAbout';
const topImage = 'https://i.ibb.co/f1TTnzg/03-About-Us.png';
const AboutUsSecond = () => {
  return (
    <div>
      <div className='h-[100vh]' style={{ background: `url(${topImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className='flex items-center pt-[50vh] md:pl-[30vh] pl-[10vh]'>
          <div className='h-[20vh]'>
            <h2 className='2xl:text-[70px] text-6xl font-bold text-white'>About Us</h2>
            <p className='2xl:text-[22px] text-[20px] mt-3 font-bold text-white'>Home <i class="fa-solid fa-angles-right"></i> About Us</p>
          </div>
        </div>
      </div>
      <AboutSecondAbout />
      <HomeTwoCompanySkills />
      <HomeTwoAdd />
      <HomeTwoOurTeam/>
    </div>
  );
};

export default AboutUsSecond;