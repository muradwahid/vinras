import React from 'react';
import CountUp from 'react-countup';
const firstLogo = 'https://i.ibb.co/WpRJz8V/01-Home-1.png';
const secondLogo = 'https://i.ibb.co/cF7P0qC/01-Home-2.png';
const thirdLogo = 'https://i.ibb.co/7bF97b2/01-Home-3.png';
const fourthLogo = 'https://i.ibb.co/BwB7nR1/01-Home-5.png';
const fiftLogo = 'https://i.ibb.co/z5FmTpX/01-Home-4.png';
const AboutusCounter = () => {
  return (
    <div className=''>
      <div className='w-[74%] mx-auto'>
        <div className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-1 pb-16 gap-4'>
          <div className='grid gap-3 poppins text-center bg-white py-6 px-3 rounded-md shadow-lg'>
            <div className='flex justify-center mb-1'>
              <img src={firstLogo} alt="" />
            </div>
            <p className='text-[18px] font-[500] black'>Complete Project </p>
            <h3 className='text-color text-[38px] font-semibold'><CountUp enableScrollSpy start={0} end={5684} /></h3>
          </div>
          <div className='grid gap-3 poppins text-center bg-white py-6 px-3 rounded-md shadow-lg'>
            <div className='flex justify-center mb-1'>
              <img src={secondLogo} alt="" />
            </div>
            <p className='text-[18px] font-[500] black'>Total Download </p>
            <h3 className='text-color text-[38px] font-semibold'><CountUp enableScrollSpy start={0} end={5593} /></h3>
          </div>
          <div className='grid gap-3 poppins text-center bg-white py-6 px-3 rounded-md shadow-lg'>
            <div className='flex justify-center mb-1'>
              <img src={thirdLogo} alt="" />
            </div>
            <p className='text-[18px] font-[500] black'>Positive Review </p>
            <h3 className='text-color text-[38px] font-semibold'><CountUp enableScrollSpy start={0} end={5487} /></h3>
          </div>
          <div className='grid gap-3 poppins text-center bg-white py-6 px-3 rounded-md shadow-lg'>
            <div className='flex justify-center mb-1'>
              <img src={fourthLogo} alt="" />
            </div>
            <p className='text-[18px] font-[500] black'>Team Members </p>
            <h3 className='text-color text-[38px] font-semibold'><CountUp enableScrollSpy start={0} end={2474} /></h3>
          </div>
          <div className='grid gap-3 poppins text-center bg-white py-6 px-3 rounded-md shadow-lg'>
            <div className='flex justify-center mb-1'>
              <img src={fiftLogo} alt="" />
            </div>
            <p className='text-[18px] font-[500] black'>Cup Of Coffe </p>
            <h3 className='text-color text-[38px] font-semibold'><CountUp enableScrollSpy start={0} end={6497} /></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusCounter;