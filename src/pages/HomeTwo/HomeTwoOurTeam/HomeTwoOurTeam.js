import React from 'react';
const bg = 'https://i.ibb.co/9G9DWC7/02-Home.png';
const firstImage = 'https://i.ibb.co/Z6v2mbP/02-Home.png';
const secondImage = 'https://i.ibb.co/p4jQGdj/Image.png';
const thirdImage = 'https://i.ibb.co/XVGMCsq/Image.png';
const fourthImage = 'https://i.ibb.co/mRzTdtR/Image.png';
const HomeTwoOurTeam = () => {
  return (
    <div className='bg-cover bg-no-repeat pb-40' style={{backgroundImage:`url(${bg})`}}>
      <div className='pt-16'>
        <p className='text-color text-center 2xl:text-[22px] text-[20px] font-semibold mb-5 relative service-style'>Our Team</p>
        <h2 className='2xl:text-5xl text-4xl black font-bold text-center'>Meet Our Amazing Team</h2>
      </div>
      <div className='w-[82%] mx-auto mt-16'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-8 gap-20'>
          <div className='relative advisorOne cursor-pointer'>
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
              <div className='absolute left-0 right-0 flex items-center justify-center -bottom-12'>
                <div className='border-[#f94d1c] bg-white px-5 py-4 border-l-4 shadow-lg'>
                  <h2 className=' text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                  <p className='poppins text-[14px]'>Web Developer</p>
                </div>
              </div>
            </div>

          </div>
          <div className='relative advisorOne cursor-pointer'>
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
              <div className='absolute left-0 right-0 flex items-center justify-center -bottom-12'>
                <div className='border-[#f94d1c] bg-white px-5 py-4 border-l-4 shadow-lg'>
                  <h2 className=' text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                  <p className='poppins text-[14px]'>Web Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative advisorOne cursor-pointer'>
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
              <div className='absolute left-0 right-0 flex items-center justify-center -bottom-12'>
                <div className='border-[#f94d1c] bg-white px-5 py-4 border-l-4 shadow-lg'>
                  <h2 className=' text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                  <p className='poppins text-[14px]'>Web Developer</p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative advisorOne cursor-pointer'>
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
              <div className='absolute left-0 right-0 flex items-center justify-center -bottom-12'>
                <div className='border-[#f94d1c] bg-white px-5 py-4 border-l-4 shadow-lg'>
                  <h2 className=' text-[24px] font-bold poppins text-center'>Murad Wahid</h2>
                  <p className='poppins text-[14px]'>Web Developer</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeTwoOurTeam;