import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const image = 'https://i.ibb.co/f0CpTZ8/01-Home.png';
const HomeAboutBottom = () => {
  const percentage = 76;
  return (
    <div className='flex gap-10 items-center lg:flex-row flex-col mt-28 w-4/5 mx-auto'>
      <div className='lg:w-1/2'>
        <img src={image} alt="" />
      </div>
      <div className='lg:w-[45%]'>
        <h3 className='text-color text-[20px] font-semibold about-syle-text'>About Us</h3>
        <h2 className='2xl:text-[50px] text-[40px] font-bold  text-[#1a1a1a] leading-[55px] mb-5 mt-3'>We are good at these areas to work</h2>
        <p className='text-[#878c8f]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
        <ul className='text-[#878c8f] mt-5'>
          <li className='flex gap-5'><div className=''><i className="fa-solid fa-check list-shadow h-8 w-8 flex justify-center items-center rounded-full"></i></div> <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p> </li>
          <li className='flex gap-5 mt-3'><div className=''><i className="fa-solid fa-check list-shadow h-8 w-8 flex justify-center items-center rounded-full"></i></div> <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</p></li>
        </ul>
        <div className='flex gap-8 mt-10'>
          <div className=' flex items-center gap-4'>
            <div style={{ width: 75, height: 75 }}>
              <CircularProgressbar counterClockwise={true} value={percentage} text={`${percentage}%`} />

            </div>
            <div className='text-[18px] text-[#878c8f] font-bold'>
              <p>Business</p>
              <p>Consulting</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div style={{ width: 75, height: 75 }}>
              <CircularProgressbar counterClockwise={true} value={85} text={`${85}%`} />
            </div>
            <div className='text-[18px] text-[#878c8f] font-bold'>
              <p>Digital</p>
              <p>Consultancy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutBottom;