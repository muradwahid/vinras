import React from 'react';
import { Link } from 'react-router-dom';
const heroImage = 'https://i.ibb.co/Cv5g8kw/02-Home.png';
const logofirst = 'https://i.ibb.co/FBgGHn4/02-Home-1.png';
const logoSecond = 'https://i.ibb.co/M6bybz0/02-Home-2.png';
const HomeHero = () => {
  return (
    <div className='mb-32'>
      <div className='h-[110vh] w-full' style={{ backgroundImage:`linear-gradient(#00000036,#00000036),url(${heroImage})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <div className='flex items-center h-full'>
          <div className='w-[82%] mx-auto '>
            <div className='lg:w-1/2 mt-7'>
              <div className='flex text-[20px] text-white mb-3'>
                <p>Technology</p>
                <p className='home-two-style-text relative px-2 mx-2'>Business</p>
                <p>Consulton</p>
              </div>
              <h2 className='text-[60px] font-bold poppins text-white mb-3'>Best Grow Your
                Business</h2>
              <p className='text-[20px] font-semibold text-white'>Our  Best Business Technology Consulting</p>
              <div className='bg-color inline-block px-6 py-4 text-[18px] text-white rounded-full mt-8'>
                <Link className='pr-4'>Free Consultation</Link>
                <i className="fa-solid fa-angles-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='w-[80%] flex lg:flex-row flex-col bg-[#F9F9F9] mx-auto py-6 -mt-12'>
            <div className='flex items-center gap-7 pl-6 pr-12 lg:border-r'>
              <div className='flex items-center gap-4'>
                <div>
                  <img className='w-10' src={logofirst} alt="" />
                </div>
                <h5 className='black font-bold text-[20px]'>Build Your Business With
                  Right Way</h5>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right-from-bracket text-white p-3 text-[17px] bg-color "></i>
              </div>
            </div>
            <div className='flex items-center gap-7 lg:pl-12 pr-6 pl-6 lg:mt-0 mt-8'>
              <div className='flex items-center gap-4'>
                <div>
                  <img className='w-10' src={logoSecond} alt="" />
                </div>
                <h5 className='black font-bold text-[20px]'>We Take Care  and Growth
                  Your  Business</h5>
              </div>
              <div>
                <i className="fa-solid fa-arrow-right-from-bracket text-white p-3 text-[17px] bg-color "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;