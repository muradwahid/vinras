import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Merchandising = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500]'>Merchandising</h1>
      <h4 className='tikoFont text-[22px]'>Dedicated Merchandising Team</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p>In Warptex, our main concern is the satisfaction of our client and one of our core strengths is merchandising by our vibrant, experienced and committed merchandisers. Our dedicated team of merchandisers are always proactive in communicating with all the parties and maintain constant follow up on all orders. We maintain and track order status through OPS (Order Progress Schedule).This ensure the timely submissions to maintain delivery in the given lead-time. Our team is constantly involved with the QA and QC team to ensure correct sample submission and systematic bulk productions. We review each and every submission thoroughly to ensure that the buyer’s requirements are understood and fulfilled to the point.</p>
      </div>
    </div>
  );
};

export default Merchandising;