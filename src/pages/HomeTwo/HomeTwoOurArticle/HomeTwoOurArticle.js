import React from 'react';
const card1 = "https://i.ibb.co/ZXYxVqG/02-Home-15.png";
const card1Avatar = "https://i.ibb.co/ZT7673g/02-Home-16.png"

const HomeTwoOurArticle = () => {
  return (
    <div className='w-4/5 mx-auto mb-20'>
      <div className="mt-20 mb-10 text-center">
        <p className='text-[23px] text-color font-semibold relative service-style'>Our Articles</p>
        <h1 className='2xl:text-5xl text-4xl black font-bold leading-[50px] mb-5'>Our Latest Blog Post </h1>
      </div>
      <div className="">
        <div className="grid gap-7 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center items-center">
          <div className="z-0">
            <div className="">
              <img src={card1} alt="" />
            </div>
            <div className="bg-[#DBDADA] rounded-2xl mt-[-50px] w-full z-50 md:w-[60%] lg:w-[93%]">
              <div className="flex items-center justify-end relative rounded-t-2xl bg-[#DBDADA] ">
                <p className='bg-color pl-5 pr-1 text-white text-[16px] py-3'>12 May 21</p>
                <div className="flex gap-1 pr-3 ml-1">
                  <p className='text-[16px] black'>Posted: <span className='text-color'>karin</span></p>
                  <p className='text-[16px] black'>- 8 Comments</p>
                </div>
                <div className="absolute left-[7px] top-[-30px]">
                  <img src={card1Avatar} alt="" />
                </div>
              </div>
              <div className="py-3 mt-3 px-7">
                <h6 className='text-[22px] font-medium pb-2 black'>Strategy For Norway's Peion Fund Global</h6>
                <p className='text-[16px] font-normal black pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src={card1} alt="" />
            </div>
            <div className="bg-[#DBDADA] rounded-2xl mt-[-50px] w-full md:w-[60%] lg:w-[93%]">
              <div className="flex items-center justify-end relative bg-[#dbd6d6] rounded-t-2xl">
                <p className='bg-color pl-5 pr-1 text-white text-[16px] py-3'>12 May 21</p>
                <div className="flex gap-1 pr-3 ml-1">
                  <p className='text-[16px] black'>Posted: <span className='text-color'>karin</span></p>
                  <p className='text-[16px] black'>- 8 Comments</p>
                </div>
                <div className="absolute left-[7px] top-[-30px]">
                  <img src={card1Avatar} alt="" />
                </div>
              </div>
              <div className="py-3 px-7">
                <h6 className='text-[22px] font-medium pb-2 black'>Strategy For Norway's Peion Fund Global</h6>
                <p className='text-[16px] font-normal black pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga!</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <img src={card1} alt="" />
            </div>
            <div className="bg-[#DBDADA] rounded-2xl mt-[-50px] w-full md:w-[60%] lg:w-[93%]">
              <div className="flex items-center justify-end relative bg-[#dbd6d6] rounded-t-2xl">
                <p className='bg-color pl-5 pr-1 text-white text-[16px] py-3'>12 May 21</p>
                <div className="flex gap-1 pr-3 ml-1">
                  <p className='text-[16px] black'>Posted: <span className='text-color'>karin</span></p>
                  <p className='text-[16px] black'>- 8 Comments</p>
                </div>
                <div className="absolute left-[7px] top-[-30px]">
                  <img src={card1Avatar} alt="" />
                </div>
              </div>
              <div className="py-3 px-7">
                <h6 className='text-[22px] font-medium pb-2 black'>Strategy For Norway's Peion Fund Global</h6>
                <p className='text-[16px] font-normal black pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fuga!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwoOurArticle;

