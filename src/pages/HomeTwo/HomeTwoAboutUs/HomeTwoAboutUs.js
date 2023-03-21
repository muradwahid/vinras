import React from 'react';
const image = 'https://i.ibb.co/wwf8dZ3/02-Home.png';
const logoFirst = 'https://i.ibb.co/wdMdphx/02-Home-1.png';
const logoSecond = 'https://i.ibb.co/BZXMQCs/02-Home-2.png';
const first = 'https://i.ibb.co/N9HSb2R/02-Home-3.png';
const first2 = 'https://i.ibb.co/nCFqSNx/02-Home-4.png';
const second = 'https://i.ibb.co/3ThBd30/02-Home-5.png';
const second2 = 'https://i.ibb.co/nDHGsxh/02-Home-6.png';
const third = 'https://i.ibb.co/hZQbM7f/02-Home-7.png';
const third2 = 'https://i.ibb.co/zF9BdB3/02-Home-8.png';
const fourth = 'https://i.ibb.co/h2NyjQZ/02-Home-9.png';
const fourth2 = 'https://i.ibb.co/dWyjVV3/02-Home-10.png';
const HomeTwoAboutUs = () => {
  return (
    <div className='w-[82%] mx-auto '>
      <div className='flex lg:flex-row flex-col-reverse gap-12 pt-10'>
        <div>
          <img className='w-full' src={image} alt="" />
        </div>
        <div className='lg:w-1/2'>
          <h5 className='text-color text-[20px] font-semibold about-syle-text'>About Us</h5>
          <h2 className='text-[40px] black font-bold'>We are more than you
            imagine</h2>
          <div className='flex gap-6'>
            <div className='grid gap-2'>
              <div>
                <img src={logoFirst} alt="" />
              </div>
              <h4 className='black text-[20px] font-semibold'>Brand Solution</h4>
              <p className='text-[#878c8f] text-[15px]'>Multiply moved in also real after fish males beast doesn give</p>
            </div>
            <div className='grid gap-2'>
              <div>
                <img src={logoSecond} alt="" />
              </div>
              <h4 className='black text-[20px] font-semibold'>Brand Solution</h4>
              <p className='text-[#878c8f] text-[15px]'>Multiply moved in also real after fish males beast doesn give</p>
            </div>
          </div>
          <div>
            <p className='text-[15px] text-[#878c8f] mt-5'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qofficia mollianim
              id est laborum. Sed ut perspiciatis unde omnis iste natuvoluptateaccusantium
              Nemo enim ipsam voluptatem </p>
            <div className='flex gap-7 mt-8'>
              <div className='flex gap-3 items-center border-[2px] border-dashed border-black px-3 py-2'>
                <h2 className='text-[40px] font-semibold black'>12<sup>+</sup></h2>
                <p className='black text-[18px]'>Years Of Experience</p>
              </div>
              <div className='flex gap-3 items-center border-[2px] border-dashed border-black px-3 py-2'>
                <h2 className='text-[40px] font-semibold black'>70<sup>k</sup></h2>
                <p className='black text-[18px]'>Clients Individual</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-32 -mb-20'>
        <div className='homeTwo transition-all duration-300 cursor-pointer hover:bg-[#f94d1c] shadow-lg border px-6 pb-5 pt-6 bg-white'>
          <div className='flex justify-center'>
            <img className='homeTwo-first' src={first} alt="" />
            <img className='hidden homeTwo-first-second' src={first2} alt="" />
          </div>
          <div>
            <p className='text-[18px] black text-center mt-8 poppins font-[500]'>We Experience Build</p>
          </div>
        </div>
        <div className='homeTwo transition-all duration-300 cursor-pointer hover:bg-[#f94d1c] shadow-lg border px-6 pb-5 pt-6 bg-white'>
          <div className='flex justify-center'>
            <img className='homeTwo-first' src={second} alt="" />
            <img className='hidden homeTwo-first-second' src={second2} alt="" />
          </div>
          <div>
            <p className='text-[18px] black text-center mt-8 poppins font-[500]'>Highest Success Rates</p>
          </div>
        </div>
        <div className='homeTwo transition-all duration-300 cursor-pointer hover:bg-[#f94d1c] shadow-lg border px-6 pb-5 pt-6 bg-white'>
          <div className='flex justify-center'>
            <img className='homeTwo-first' src={third} alt="" />
            <img className='hidden homeTwo-first-second' src={third2} alt="" />
          </div>
          <div>
            <p className='text-[18px] black text-center mt-8 poppins font-[500]'>Branding Strengh solution</p>
          </div>
        </div>
        <div className='homeTwo transition-all duration-300 cursor-pointer hover:bg-[#f94d1c] shadow-lg border px-6 pb-5 pt-6 bg-white'>
          <div className='flex justify-center'>
            <img className='homeTwo-first' src={fourth} alt="" />
            <img className='hidden homeTwo-first-second' src={fourth2} alt="" />
          </div>
          <div>
            <p className='text-[18px] black text-center mt-8 poppins font-[500]'>Personal & Business Insurance</p>
          </div>
        </div>
        </div>
  </div>
  );
};

export default HomeTwoAboutUs;