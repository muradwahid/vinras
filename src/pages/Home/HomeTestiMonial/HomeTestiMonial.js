import React from 'react';
import Marquee from 'react-fast-marquee';
const first = 'https://i.ibb.co/ySgZcxQ/01-Home-10.png';
const second = 'https://i.ibb.co/vVyY5h3/01-Home-11.png';
const third = 'https://i.ibb.co/zrq3x59/01-Home-12.png';
const fourth = 'https://i.ibb.co/MBLQdGz/01-Home-13.png';
const HomeTestiMonial = () => {

  return (
    <div className='home-testimonial z-0 mb-20 mt-20'>
      <div className='text-center'>
        <p className='text-[22px] text-color font-[500] mb-3'>Testimonial</p>
        <h2 className='text-5xl font-bold black'>Our Sweet Client Say</h2>
      </div>
      <div className='mt-20'>
        <Marquee speed={40} gradient={false}>
          <div className='inline-block mx-5 px-8 relative pt-20 pb-8 mt-16 w-[450px] testimonial-shadow'>
            <div className='flex justify-center  z-50 absolute left-0 right-0 -top-16'>
              <img className='z-50' src={first} alt="" />
            </div>
            <p className='text-center text-[#878c8f]'>Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean sit pharetra proin posuere  has orci molestie magna
            </p>
            <h4 className='text-[20px] font-bold black mt-6'>Daren Mackwel- <span className='text-[#878c8f] text-[15px] font-semibold'>CEO, Apple</span></h4>
          </div>
          <div className='inline-block mx-5 px-8 relative pt-20 pb-8 mt-16 w-[450px] testimonial-shadow'>
            <div className='flex justify-center  z-50 absolute left-0 right-0 -top-16'>
              <img className='z-50' src={second} alt="" />
            </div>
            <p className='text-center text-[#878c8f]'>Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean sit pharetra proin posuere  has orci molestie magna
            </p>
            <h4 className='text-[20px] font-bold black mt-6'>Daren Mackwel- <span className='text-[#878c8f] text-[15px] font-semibold'>CEO, Apple</span></h4>
          </div>
          <div className='inline-block mx-5 px-8 relative pt-20 pb-8 mt-16 w-[450px] testimonial-shadow'>
            <div className='flex justify-center  z-50 absolute left-0 right-0 -top-16'>
              <img className='z-50' src={third} alt="" />
            </div>
            <p className='text-center text-[#878c8f]'>Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean sit pharetra proin posuere  has orci molestie magna
            </p>
            <h4 className='text-[20px] font-bold black mt-6'>Daren Mackwel- <span className='text-[#878c8f] text-[15px] font-semibold'>CEO, Apple</span></h4>
          </div>
          <div className='inline-block mx-5 px-8 relative pt-20 pb-8 mt-16 w-[450px] testimonial-shadow'>
            <div className='flex justify-center  z-50 absolute left-0 right-0 -top-16'>
              <img className='z-50' src={fourth} alt="" />
            </div>
            <p className='text-center text-[#878c8f]'>Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean sit pharetra proin posuere  has orci molestie magna
            </p>
            <h4 className='text-[20px] font-bold black mt-6'>Daren Mackwel- <span className='text-[#878c8f] text-[15px] font-semibold'>CEO, Apple</span></h4>
          </div>
          <div className='inline-block mx-5 px-8 relative pt-20 pb-8 mt-16 w-[450px] testimonial-shadow'>
            <div className='flex justify-center  z-50 absolute left-0 right-0 -top-16'>
              <img className='z-50' src={first} alt="" />
            </div>
            <p className='text-center text-[#878c8f]'>Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean sit pharetra proin posuere  has orci molestie magna
            </p>
            <h4 className='text-[20px] font-bold black mt-6'>Daren Mackwel- <span className='text-[#878c8f] text-[15px] font-semibold'>CEO, Apple</span></h4>
          </div>
          <div className='inline-block mx-5 px-8 relative pt-20 pb-8 mt-16 w-[450px] testimonial-shadow'>
            <div className='flex justify-center  z-50 absolute left-0 right-0 -top-16'>
              <img className='z-50' src={second} alt="" />
            </div>
            <p className='text-center text-[#878c8f]'>Lacus senectus dictumst cursus fringilla diam justo do placerat luctus socis interdum vehicula justo tincidunt malesuada habitant aenean sit pharetra proin posuere  has orci molestie magna
            </p>
            <h4 className='text-[20px] font-bold black mt-6'>Daren Mackwel- <span className='text-[#878c8f] text-[15px] font-semibold'>CEO, Apple</span></h4>
          </div>
      </Marquee>
</div>
    </div>
  );
};

export default HomeTestiMonial;