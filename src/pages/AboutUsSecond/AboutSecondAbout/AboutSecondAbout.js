import React from 'react';
const image = 'https://i.ibb.co/wwf8dZ3/02-Home.png';
const logoFirst = 'https://i.ibb.co/wdMdphx/02-Home-1.png';
const logoSecond = 'https://i.ibb.co/BZXMQCs/02-Home-2.png';
const AboutSecondAbout = () => {
  return (
    <div className='w-4/5 mx-auto pb-24'>
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
    </div>
  );
};

export default AboutSecondAbout;