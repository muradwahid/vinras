import React from 'react';
const businessImg = 'https://i.ibb.co/VMJ29DG/01-Home-6.png';
const HomeBusinessDiscusion = () => {
  return (
    <div className='md:w-[82%] mx-auto -mb-48 mt-12'>
      <h2 className='text-5xl font-bold poppins text-center mb-5'>Live Our Busniess Discussion</h2>
      <p className='text-[22px] text-[#878c8f] poppins text-center mb-12 font-[500]'>Ut enim ad minim veniam, quis nostrud </p>
      <img src={businessImg} className='w-full' alt="" />
    </div>
  );
};

export default HomeBusinessDiscusion;