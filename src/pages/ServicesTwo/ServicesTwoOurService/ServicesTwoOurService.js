import React from 'react';
const image = 'https://i.ibb.co/sshjbkz/1.png';
const image2 = 'https://i.ibb.co/GFpF6g9/2.png';
const image3 = 'https://i.ibb.co/xgrF8kP/3.png';
const icon = 'https://i.ibb.co/8xXdX4v/icon.png';
const icon2 = 'https://i.ibb.co/5T9tYJ3/icon2.png';
const icon3 = 'https://i.ibb.co/nBJFGJ8/icon3.png';
const ServicesTwoOurService = () => {
  return (
    <div className='w-[82%] mx-auto my-20'>
      <div className='w-[90%] mx-auto'>
        <p className='2xl:text-[22px] text-[20px] poppins font-semibold text-color text-center relative service-style'>Our Service</p>
        <h2 className='black text-5xl font-bold text-center mt-6 mb-10'>What We Are Offering</h2>


        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
          <div className='border rounded-lg'>
            <div className='relative'>
              <img className='w-full' src={image} alt="" />
              <i className="fa-solid fa-arrow-right-from-bracket bg-color text-white py-4 px-5 rounded-t-md -mt-7 absolute right-4"></i>
            </div>
            <div className='px-5'>
              <div className=''>
                <p className='text-[#878c8f] text-[14px] mt-3'>Creative, Design, Business</p>

              </div>
              <div className='flex gap-3 justify-between items-center my-3'>
                <div className='w-[90%]'>
                  <h4 className='2xl:text-[22px] xl:text-[20px] poppins black font-bold mb-2'>Product Engineering</h4>
                  <p className='text-[15px] text-[#878c8f]'>Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qoffic </p>
                </div>
                <div className='bg-[#ebebec] p-2 rounded-[10px]'>
                  <img className='w-full' src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='border rounded-lg'>
            <div className='relative'>
              <img className='w-full' src={image2} alt="" />
              <i className="fa-solid fa-arrow-right-from-bracket bg-color text-white py-4 px-5 rounded-t-md -mt-7 absolute right-4"></i>
            </div>
            <div className='px-5'>
              <div className=''>
                <p className='text-[#878c8f] text-[14px] mt-3'>Creative, Design, Business</p>

              </div>
              <div className='flex gap-3 justify-between items-center my-3'>
                <div className='w-[90%]'>
                  <h4 className='2xl:text-[22px] xl:text-[20px] poppins black font-bold mb-2'>Product Engineering</h4>
                  <p className='text-[15px] text-[#878c8f]'>Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qoffic </p>
                </div>
                <div className='bg-[#ebebec] p-2 rounded-[10px]'>
                  <img className='w-full' src={icon2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='border rounded-lg'>
            <div className='relative'>
              <img className='w-full' src={image3} alt="" />
              <i className="fa-solid fa-arrow-right-from-bracket bg-color text-white py-4 px-5 rounded-t-md -mt-7 absolute right-4"></i>
            </div>
            <div className='px-5'>
              <div className=''>
                <p className='text-[#878c8f] text-[14px] mt-3'>Creative, Design, Business</p>

              </div>
              <div className='flex gap-3 justify-between items-center my-3'>
                <div className='w-[90%]'>
                  <h4 className='2xl:text-[22px] xl:text-[20px] poppins black font-bold mb-2'>Product Engineering</h4>
                  <p className='text-[15px] text-[#878c8f]'>Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qoffic </p>
                </div>
                <div className='bg-[#ebebec] p-2 rounded-[10px]'>
                  <img className='w-full' src={icon3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwoOurService;