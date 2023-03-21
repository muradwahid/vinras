import React from 'react';
const firstImage = 'https://i.ibb.co/vYWM58Z/01-Home-5.png';
const secondImage = 'https://i.ibb.co/0rmQsbR/01-Home-6.png';
const thirdImage = 'https://i.ibb.co/RQFnjnY/01-Home-7.png';
const fourthImage = 'https://i.ibb.co/wh1PWQd/01-Home-8.png';

const HomeOurAdvisor = () => {
  return (
    <div className='my-28'>
      <div>
        <p className='relative service-style text-color font-semibold text-[18px] text-center'>Meet Our Advisors</p>
        <h2 className='text-5xl font-semibold black my-4 text-center mt-5'>Our Professional Consultants</h2>
      </div>
      <div className='w-[82%] mx-auto mt-16'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
          <div className='relative advisorOne cursor-pointer overflow-hidden rounded-tr-[25%] rounded-bl-[25%]'>
            <img className='w-full h-full' src={firstImage} alt="" />
            <div className='absolute top-0 left-0 bottom-0 right-0 bg-[#0e0e0e2d] w-full h-full hoverParent'>
              <div className='mt-4 ml-4'>
                <div className='text-[20px] grid gap-3 firstAdvisorEffect'>
                  <i className=" fa-solid fa-plus bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-instagram bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-twitter bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-facebook-f bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                </div>
              </div>
              <div className='absolute xl:bottom-5 xl:left-12 lg:bottom-6 lg:left-28 md:bottom-7 md:left-28 bottom-7 left-40'>
                <h2 className='text-white text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                <p className='text-white poppins text-[14px]'>Web Developer</p>
              </div>
              </div>
          </div>
          <div className='relative advisorOne cursor-pointer overflow-hidden rounded-tr-[25%] rounded-bl-[25%]'>
            <img className='w-full h-full' src={secondImage} alt="" />
            <div className='absolute top-0 left-0 bg-[#0e0e0e2d] w-full h-full hoverParent'>
              <div className='mt-4 ml-4'>
                <div className='text-[20px] grid gap-3 firstAdvisorEffect'>
                  <i className=" fa-solid fa-plus bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-instagram bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-twitter bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-facebook-f bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                </div>
              </div>
              <div className='absolute xl:bottom-5 xl:left-12 lg:bottom-6 lg:left-28 md:bottom-7 md:left-28 bottom-7 left-32'>
                <h2 className='text-white text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                <p className='text-white poppins text-[14px]'>Web Developer</p>
              </div>
              </div>
          </div>
          <div className='relative advisorOne cursor-pointer overflow-hidden rounded-tr-[25%] rounded-bl-[25%]'>
            <img className='w-full h-full' src={thirdImage} alt="" />
            <div className='absolute top-0 left-0 bg-[#0e0e0e2d] w-full h-full hoverParent'>
              <div className='mt-4 ml-4'>
                <div className='text-[20px] grid gap-3 firstAdvisorEffect'>
                  <i className=" fa-solid fa-plus bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-instagram bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-twitter bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-facebook-f bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                </div>
              </div>
              <div className='absolute xl:bottom-5 xl:left-12 lg:bottom-6 lg:left-28 md:bottom-7 md:left-28 bottom-7 left-32'>
                <h2 className='text-white text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                <p className='text-white poppins text-[14px]'>Web Developer</p>
              </div>
              </div>
          </div>
          <div className='relative advisorOne cursor-pointer overflow-hidden rounded-tr-[25%] rounded-bl-[25%]'>
            <img className='w-full h-full' src={fourthImage} alt="" />
            <div className='absolute top-0 left-0 bg-[#0e0e0e2d] w-full h-full hoverParent'>
              <div className='mt-4 ml-4'>
                <div className='text-[20px] grid gap-3 firstAdvisorEffect'>
                  <i className=" fa-solid fa-plus bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-instagram bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-twitter bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                  <i className=" fa-brands fa-facebook-f bg-white h-8 w-8 flex items-center justify-center transiti duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
                </div>
              </div>
              <div className='absolute xl:bottom-5 xl:left-12 lg:bottom-6 lg:left-28 md:bottom-7 md:left-28 bottom-7 left-32'>
                <h2 className='text-white text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                <p className='text-white poppins text-[14px]'>Web Developer</p>
              </div>
              </div>
          </div>

      </div>
      </div>
    </div>
  );
};

export default HomeOurAdvisor;