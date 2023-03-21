import React from 'react';
const first = 'https://i.ibb.co/d7d9hyL/01-Home-15.png';
const second = 'https://i.ibb.co/zQGbcf5/01-Home-16.png';
const third = 'https://i.ibb.co/4dSSKrM/01-Home-17.png';
const HomeOurArticles = () => {
  return (
    <div className='mt-20'>
      <div className='mb-10'>
        <p className='text-color text-[18px] relative text-center font-semibold service-style'>Our Articles</p>
        <p className='text-4xl black font-bold text-center mt-3'>Our Latest Blog Post</p>
      </div>
      <div className='w-[70%] mx-auto grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
        <div className=''>
          <div>
            <img className='w-full' src={first} alt="" />
          </div>
          <div className='px-6 shadow-lg rounded-lg mb-6'>
            <div className='flex justify-between text-[15px] text-[#878c8f] font-semibold mt-4'>
              <p><i className="fa-regular fa-bookmark text-color"></i> Admin</p>
              <p><i className="fa-regular fa-comments text-color"></i> 02 Comment</p>
              <div className='bg-color text-white px-3 pt-3 text-center rounded-lg -mt-12'>
                <p>20</p>
                <p>May</p>
              </div>
            </div>
            <div>
              <h2 className='text-[#1a1a1a] text-[22px] font-semibold mb-3 mt-2'>You Business Advice For Growth</h2>
              <p className='text-[#878c8f] mb-4'>Lorem ipsum is simply is text used by copytyping refreshing.</p>
            </div>
            <div className='py-3 flex justify-between items-center border-t text-[#878c8f]'>
              <p className='text-[14px] font-semibold'>Read more</p>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
      </div>
        <div className=''>
          <div>
            <img className='w-full' src={second} alt="" />
          </div>
          <div className='px-6 shadow-lg rounded-lg mb-6'>
            <div className='flex justify-between text-[15px] text-[#878c8f] font-semibold mt-4'>
              <p><i className="fa-regular fa-bookmark text-color"></i> Admin</p>
              <p><i className="fa-regular fa-comments text-color"></i> 02 Comment</p>
              <div className='bg-color text-white px-3 pt-3 text-center rounded-lg -mt-12'>
                <p>20</p>
                <p>May</p>
              </div>
            </div>
            <div>
              <h2 className='text-[#1a1a1a] text-[22px] font-semibold mb-3 mt-2'>You Business Advice For Growth</h2>
              <p className='text-[#878c8f] mb-4'>Lorem ipsum is simply is text used by copytyping refreshing.</p>
            </div>
            <div className='py-3 flex justify-between items-center border-t text-[#878c8f]'>
              <p className='text-[14px] font-semibold'>Read more</p>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
      </div>
        <div className=''>
          <div>
            <img className='w-full' src={third} alt="" />
          </div>
          <div className='px-6 shadow-lg rounded-lg mb-6'>
            <div className='flex justify-between text-[15px] text-[#878c8f] font-semibold mt-4'>
              <p><i className="fa-regular fa-bookmark text-color"></i> Admin</p>
              <p><i className="fa-regular fa-comments text-color"></i> 02 Comment</p>
              <div className='bg-color text-white px-3 pt-3 text-center rounded-lg -mt-12'>
                <p>20</p>
                <p>May</p>
              </div>
            </div>
            <div>
              <h2 className='text-[#1a1a1a] text-[22px] font-semibold mb-3 mt-2'>You Business Advice For Growth</h2>
              <p className='text-[#878c8f] mb-4'>Lorem ipsum is simply is text used by copytyping refreshing.</p>
            </div>
            <div className='py-3 flex justify-between items-center border-t text-[#878c8f]'>
              <p className='text-[14px] font-semibold'>Read more</p>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomeOurArticles;