import React from 'react';
const logoFirst = 'https://i.ibb.co/qkvnqFz/01-Home-8.png';
const logoSecond = 'https://i.ibb.co/QQGnHfD/01-Home-9.png';
const logoThird = 'https://i.ibb.co/3zdsvXT/01-Home-10.png';
const HomeBrightAgency = () => {
  return (
    <div className='bg-[#F7F7F7] pt-72 pb-20'>
      <div className='w-[74%] mx-auto poppins'>
        <h4 className='text-color font-semibold text-[18px] about-syle-text'>How Can Help You</h4>
        <div className='flex justify-between items-center flex-wrap'>
          <h2 className='text-5xl font-semibold black my-4'>We Make Bright Agency</h2>
          <div className='flex gap-6 text-[24px]'>
            <i className="fa-solid fa-angles-left px-3 py-2 bg-white transition-all duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
            <i className="fa-solid fa-angles-right px-3 py-2 bg-white transition-all duration-300 cursor-pointer hover:bg-[#f94d1c] hover:text-white"></i>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8'>
          <div className='bg-white p-8'>
            <div>
              <img src={logoFirst} alt="" />
            </div>
            <div>
              <h4 className='text-2xl poppins black font-[500] mb-4 mt-7'>Product Engineering</h4>
              <p className='text-[14px] text-[#878c8f] mb-5'>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.</p>
            </div>
            <div className='grid gap-2'>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Logo & Branding</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Website Design</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Mobile App Design</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Graphic/print Design</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Video Product</span></p>
            </div>
          </div>
          <div className='bg-white p-8'>
            <div>
              <img src={logoSecond} alt="" />
            </div>
            <div>
              <h4 className='text-2xl poppins black font-[500] mb-4 mt-7'>Technology Services</h4>
              <p className='text-[14px] text-[#878c8f] mb-5'>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.</p>
            </div>
            <div className='grid gap-2'>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Content Management System</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Ecommerce Website</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Theme Development</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Digital Development</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Mobile App Development</span></p>
            </div>
          </div>
          <div className='bg-white p-8'>
            <div>
              <img src={logoThird} alt="" />
            </div>
            <div>
              <h4 className='text-2xl poppins black font-[500] mb-4 mt-7'>Digital Solutions</h4>
              <p className='text-[14px] text-[#878c8f] mb-5'>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.</p>
            </div>
            <div className='grid gap-2'>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Search Engine Optimization</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Pay-Per-Click</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Email Marketing</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Social Media Marketing</span></p>
              <p className='flex gap-2 items-center text-[14px] text-[#878c8f]'><i className="fa-solid fa-angles-right transition-all duration-300 cursor-pointer text-[#f94d1c]"></i><span>Display Marketing</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBrightAgency;