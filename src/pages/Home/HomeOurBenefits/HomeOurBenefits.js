import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
const benifitImage = 'https://i.ibb.co/rwrFmyp/01-Home-9.png';
const HomeOurBenefits = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  return (
    <div className='poppins bg-[#F7F7F7] flex items-center pt-10 mt-52 lg:flex-row flex-col-reverse pb-20'>

      <div className='lg:w-[60%] w-[80%]'>
        <div className='lg:w-[75%] mx-auto mb-8 lg:mt-0 mt-8'>
          <h5 className='text-color text-[19px] font-semibold'>Our Benefits</h5>
          <h2 className='text-[34px] font-bold black'>Success Building Experience</h2>
        </div>
        <div className='flex lg:w-[75%] mx-auto gap-12'>
          <div className=' flex gap-12 lg:flex-row flex-col'>
            <div className='flex lg:flex-col gap-20 w-[20%]'>
              <div style={{ width: 75, height: 75 }}>
                <div className='flex justify-center' style={{ width: 75, height: 75 }}>
                  <CircularProgressbar value={92} strokeWidth='5' text={`${92}%`} />
                </div>
                <p className='text-[18px] font-bold black text-center mt-2'>Affordable Cost</p>
              </div>
              <div className='' style={{ width: 75, height: 75 }}>
                <div className='flex justify-center' style={{ width: 75, height: 75 }}>
                  <CircularProgressbar value={52} strokeWidth='5' text={`${52}%`} />
                </div>
                <p className='text-[18px] font-bold black text-center mt-2'>Quality Of Wark</p>
              </div>
            </div>
            <div className='w-[80%] lg:mt-0 mt-12'>
              <div onClick={()=>setFirst(!first,setSecond(false),setThird(false))} className='cursor-pointer lg:w-[500px]'>
                <div className='bg-white py-3 px-6 flex justify-between items-center'>
                  <h3 className='text-[18px] font-bold black'>Think Ahead And Boost Your Business?</h3>
                  {!first ? <i class="fa-solid fa-angle-up"></i>: <i class="fa-solid fa-angle-down"></i>}
                </div>
                <div className={` bg-white border-t py-3 px-6 transition-all duration-300 origin-top ${first ? 'block' : 'hidden'}`}>
                  <p className={`text-[#878c8f] text-[18px] poppins`}>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                </div>
              </div>
              <div onClick={()=>setSecond(!second,setFirst(false),setThird(false))} className='cursor-pointer lg:w-[500px] my-4'>
                <div className='bg-white py-3 px-6 flex justify-between items-center'>
                  <h3 className='text-[18px] font-bold black'>Maecenas condimentum sollicitudin ligula,</h3>
                  {!second ? <i class="fa-solid fa-angle-up"></i>: <i class="fa-solid fa-angle-down"></i>}
                </div>
                <div className={` bg-white border-t py-3 px-6 transition-all duration-300 origin-top ${second ? 'block' : 'hidden'}`}>
                  <p className={`text-[#878c8f] text-[18px] poppins`}>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                </div>
              </div>
              <div onClick={()=>setThird(!third,setFirst(false),setSecond(false))} className='cursor-pointer lg:w-[500px]'>
                <div className='bg-white py-3 px-6 flex justify-between items-center'>
                  <h3 className='text-[18px] font-bold black'>Maecenas condimentum sollicitudin ligula,</h3>
                  {!third ? <i class="fa-solid fa-angle-up"></i>: <i class="fa-solid fa-angle-down"></i>}
                </div>
                <div className={` bg-white border-t py-3 px-6 transition-all duration-300 origin-top ${third ? 'block' : 'hidden'}`}>
                  <p className={`text-[#878c8f] text-[18px] poppins`}>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[45%] lg:-mt-28'>
        <img className='w-full' src={benifitImage} alt="" />
      </div>
    </div>
  );
};

export default HomeOurBenefits;