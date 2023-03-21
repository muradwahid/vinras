import React from 'react';
const mapImage = 'https://i.ibb.co/423Jszy/01-Home-14.png';
const HomeProcedure = () => {
  return (
    <div className='poppins'>
      <div className='w-[82%] mx-auto'>
        <img className='w-full' src={mapImage} alt="" />
      </div>
      <div className='w-[70%] mx-auto flex lg:flex-row flex-col gap-20 items-center'>
        <div className='lg:w-[60%]'>
          <p className='text-color text-[18px] font-semibold about-syle-text mb-3'>Steps Of procedure</p>
          <h2 className='text-4xl black font-bold mb-3'>Creating Value Through Business</h2>
          <p className='text-[#878c8f]'>Duis nunc sodales conubia a laoreet aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat a pulvina integer semper ridiculus lectus con dimentum obor tise verodar capmtaso morin</p>
          <div className='w-[90%] mt-3'>
            <div className='black font-[500] w-[90%] flex justify-between'>
              <p>Client Satisfaction</p>
              <p>90%</p>
            </div>
            <div className='border border-[#f94d1c]'>
              <div className='bg-[#f94d1c] py-[4px] my-[2px] w-[90%]'></div>
            </div>
          </div>
        </div>
        <div className='lg:w-[40%] shadow-2xl p-10 -mt-16 bg-white rounded-lg'>
          <h3 className='uppercase text-[24px] black font-semibold mb-5'>get a free quote</h3>
          <form className='grid gap-4'>
            <input className='w-full border py-3 px-3 outline-[#f94d1c] rounded-md' type="text" placeholder='Your Name' />
            <input className='w-full border py-3 px-3 outline-[#f94d1c] rounded-md' type="text" name="" placeholder='Email Address' />
            <input className='w-full border py-3 px-3 outline-[#f94d1c] rounded-md' type="text" name="" placeholder='Phone Number' />
            <select className='w-full border py-3 px-3 outline-[#f94d1c] rounded-md' name="" id="">
              <option className='text-[#878c8f]' value="">Choose Service</option>
              <option className='text-[#878c8f]' value="">Choose Service</option>
              <option className='text-[#878c8f]' value="">Choose Service</option>
              <option className='text-[#878c8f]' value="">Choose Service</option>
            </select>
            <input type="submit" className='uppercase w-full border bg-[#f94d1c] border-[#f94d1c] rounded-md transition-all duration-300 py-3 font-[500] text-white hover:bg-transparent hover:border-[#f94d1c] hover:text-[#f94d1c] cursor-pointer' name="" id="" value='request a quote' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeProcedure;