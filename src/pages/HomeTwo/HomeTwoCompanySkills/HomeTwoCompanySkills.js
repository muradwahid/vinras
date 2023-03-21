import React from 'react';
const image = 'https://i.ibb.co/Y0059Hn/02-Home.png';
const logo = 'https://i.ibb.co/sQhzpZy/02-Home.png';
const logo2 = 'https://i.ibb.co/RpxCQF3/02-Home.png';
const logo3 = 'https://i.ibb.co/MVKgwSg/02-Home.png';
const HomeTwoCompanySkills = () => {
  return (
    <div className='poppins mt-32 mb-80'>
      <div className='w-[82%] mx-auto bg-[#f8f8f8]'>
        <div className='flex justify-between items-center lg:flex-row flex-col-reverse'>
          <div className='lg:ml-12 mx-4 lg:w-[45%]'>
            <p className='about-syle-text 2xl:text-[22px] text-[20px] font-semibold text-color lg:mi-0 mt-6'>Company Skills</p>
            <h2 className='black 2xl:text-5xl text-[40px] font-bold mb-7'>Exclusive Work Skill</h2>
            <div className='grid gap-4'>
              <div>
                <div className='flex w-[80%] justify-between black font-bold mb-1 2xl:text-[16px] text-[14px]'>
                  <p>Web design</p>
                  <p>80%</p>
                </div>
                <div className='bg-white rounded-full'>
                  <div className='bg-color py-[6px] w-[80%] rounded-full'>

                  </div>
                </div>
              </div>
              <div>
                <div className='flex w-[55%] justify-between black font-bold mb-1 2xl:text-[16px] text-[14px]'>
                  <p>Web development</p>
                  <p>48%</p>
                </div>
                <div className='bg-white rounded-full'>
                  <div className='bg-color py-[6px] w-[55%] rounded-full'>

                  </div>
                </div>
              </div>
              <div>
                <div className='flex w-[35%] justify-between black font-bold mb-1 2xl:text-[16px] text-[14px]'>
                  <p>Web application</p>
                  <p>28%</p>
                </div>
                <div className='bg-white rounded-full'>
                  <div className='bg-color py-[6px] w-[35%] rounded-full'>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-[45%] w-full lg:-mt-32'>
            <img className='w-full' src={image} alt="" />
          </div>
        </div>
        <div className='mx-12 flex justify-between flex-wrap gap-4 py-16'>
          <div className='flex items-center gap-5'>
            <div>
              <img className='bg-color p-4 h-20 w-[90px]' src={logo} alt="" />
            </div>
            <div>
              <h2 className='text-[34px] font-bold black'>20<sup>k</sup></h2>
              <p className='2xl:text-[18px] black'>Completed Cases</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div>
              <img className='bg-color p-4 h-20 w-[90px]' src={logo2} alt="" />
            </div>
            <div>
              <h2 className='text-[34px] font-bold black'>10<sup>k</sup></h2>
              <p className='2xl:text-[18px] black'>Satisfied Customers</p>
            </div>
          </div>
          <div className='flex items-center gap-5'>
            <div>
              <img className='bg-color p-4 h-20 w-[90px]' src={logo3} alt="" />
            </div>
            <div>
              <h2 className='text-[34px] font-bold black'>18<sup>k</sup></h2>
              <p className='2xl:text-[18px] black'>Expert Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoCompanySkills;