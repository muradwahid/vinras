import React from 'react';
import bg from '../../../assets/bg/homeTwoTestimonial.png';
import shape from '../../../assets/bg/shape.png';
import image from '../../../assets/images/homeTwoImg.png';
import image2 from '../../../assets/images/img-2.png';
const ServicesTwoTestimonial = () => {
  return (
    <div className='bg-cover bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
      <div className='text-center pt-44'>
        <p className='2xl:text-[22px] text-[20px] font-semibold relative text-color service-style'>Testimonial</p>
        <h2 className='2xl:text-5xl text-4xl font-bold black my-4'>What Saying Our Client</h2>
      </div>
      <div className='w-[80%] mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 mb-32 gap-6'>
        <div className='bg-cover bg-no-repeat pt-5 pb-24 px-6 h-[470px] ' style={{ backgroundImage: `url(${shape})` }}>
          <div className='mb-3'>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-regular fa-star text-color"></i>
          </div>
          <p className='text-[#878c8f]'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident,</p>

          <div className='flex gap-3 items-center mt-8'>
            <img src={image} alt="" />
            <div>
              <h3 className='black 2xl:text-[22px] text-[20px] leading-7'>Jhon Smith</h3>
              <p className='text-[#878c8f] text-[14px]'>Founder. Seo</p>
            </div>
          </div>
        </div>
        <div className='bg-cover bg-no-repeat pt-5 pb-24 px-6 h-[470px]' style={{ backgroundImage: `url(${shape})` }}>
          <div className='mb-3'>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-regular fa-star text-color"></i>
          </div>
          <p className='text-[#878c8f]'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident,</p>

          <div className='flex gap-3 items-center mt-8'>
            <img src={image2} alt="" />
            <div>
              <h3 className='black 2xl:text-[22px] text-[20px] leading-7'>James Smith</h3>
              <p className='text-[#878c8f] text-[14px]'>Founder. Seo</p>
            </div>
          </div>
        </div>
        <div className='bg-cover bg-no-repeat pt-5 pb-24 px-6 h-[470px]' style={{ backgroundImage: `url(${shape})` }}>
          <div className='mb-3'>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-solid fa-star text-color"></i>
            <i class="fa-regular fa-star text-color"></i>
          </div>
          <p className='text-[#878c8f]'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident,</p>

          <div className='flex gap-3 items-center mt-8'>
            <img src={image} alt="" />
            <div>
              <h3 className='black 2xl:text-[22px] text-[20px] leading-7'>Jhon Smith</h3>
              <p className='text-[#878c8f] text-[14px]'>Founder. Seo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwoTestimonial;