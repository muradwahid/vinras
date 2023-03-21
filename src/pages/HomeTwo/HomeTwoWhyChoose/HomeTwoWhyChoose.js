import React from 'react';
const bg = 'https://i.ibb.co/QCncyW2/02-Home.png';
const heading1 = "https://i.ibb.co/r6kqKjY/02-Home.png";
const heading2 = "https://i.ibb.co/m6jtLWY/02-Home-3.png";
const card1 = "https://i.ibb.co/Pzdw8HD/02-Home-4.png";
const card1White = "https://i.ibb.co/5BLPzb2/02-Home-5.png"
const card2 = "https://i.ibb.co/tbghzjh/02-Home-8.png"
const card2White = "https://i.ibb.co/4svfTrp/02-Home-7.png"
const card3 = "https://i.ibb.co/SNxpnBC/02-Home-10.png"
const card3White = "https://i.ibb.co/ByW0ZCr/02-Home-9.png"
const card4 = "https://i.ibb.co/N9m48MB/02-Home-12.png"
const card4White = "https://i.ibb.co/dJXcvDk/02-Home-11.png"
const background = "https://i.ibb.co/9pQPN62/02-Home-6.png"
const map = 'https://i.ibb.co/4THWC8C/02-Home.png';
const HomeTwoWhyChoose = () => {
  return (
    <div className='bg-cover bg-no-repeat pb-7' style={{backgroundImage:`url(${bg})`}}>
      <div className='w-[82%] mx-auto flex items-center justify-between pt-20 pb-28 gap-8 flex-wrap'>
        <div>
          <h3 className='2xl:text-5xl text-4xl black font-bold'>Client Choose Wisely</h3>
          <p className='text-color 2xl:text-[18px]'>Why Choose Us</p>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <img src={heading1} alt="" />
          </div>
          <div>
            <h2 className='2xl:text-[60px] text-[55px] leading-[55px]'>28K</h2>
            <p className='text-[#1a1a1a]'>Successfull Project</p>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div>
            <img src={heading2} alt="" />
          </div>
          <div>
            <h2 className='2xl:text-[60px] text-[55px] leading-[55px]'>10K</h2>
            <p className='text-[#1a1a1a]'>Satisfied Work Member</p>
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-8 relative lg:flex-row flex-col'>
        <div className='grid lg:grid-cols-2 ml-[10%] gap-10 lg:w-1/2'>
          <div className='grid gap-4'>
            <div className='lg:h-[270px] bg-white px-8 py-12 transition-all duration-300 chooseParent'>
              <div className=''>
                <img className='bg-color p-2 rounded-md rounded-br-3xl image-shadow chooseImageFirst' src={card1White} alt="" />
                <img src={card1} className='hidden bg-white p-2 rounded-md rounded-br-3xl image-shadow2 chooseImage' alt="" />
              </div>
              <h4 className='2xl:text-[22px] text-[20px] font-semibold mb-3 mt-5'>Free Consulting</h4>
              <p className='text-[#878c8f] 2xl:text-[17px] chooseText'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
            </div>
            <div className='lg:h-[270px] bg-white px-8 py-12 transition-all duration-300 chooseParent'>
              <div className=''>
                <img className='bg-color p-2 rounded-md rounded-br-3xl image-shadow chooseImageFirst' src={card3White} alt="" />
                <img src={card3} className='hidden bg-white p-2 rounded-md rounded-br-3xl image-shadow2 chooseImage' alt="" />
              </div>
              <h4 className='2xl:text-[22px] text-[20px] font-semibold mb-3 mt-5'>Satisfied Services</h4>
              <p className='text-[#878c8f] 2xl:text-[17px] chooseText'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
            </div>
            </div>
          <div className='grid  -mt-12'>
            <div className='lg:h-[270px] bg-white px-8 py-12 transition-all duration-300 chooseParent'>
              <div className=''>
                <img className='bg-color p-2 rounded-md rounded-br-3xl image-shadow chooseImageFirst' src={card2White} alt="" />
                <img src={card2} className='hidden bg-white p-2 rounded-md rounded-br-3xl image-shadow2 chooseImage' alt="" />
              </div>
              <h4 className='2xl:text-[22px] text-[20px] font-semibold mb-3 mt-5'>Expert Member</h4>
              <p className='text-[#878c8f] 2xl:text-[17px] chooseText'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
            </div>
            <div className='lg:h-[270px] bg-white px-8 py-12 transition-all duration-300 chooseParent -mt-6'>
              <div className=''>
                <img className='bg-color p-2 rounded-md rounded-br-3xl image-shadow chooseImageFirst' src={card4White} alt="" />
                <img src={card4} className='hidden bg-white p-2 rounded-md rounded-br-3xl image-shadow2 chooseImage' alt="" />
              </div>
              <h4 className='2xl:text-[22px] text-[20px] font-semibold mb-3 mt-5'>Advertising Ideas</h4>
              <p className='text-[#878c8f] 2xl:text-[17px] chooseText'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
            </div>
          </div>
        </div>
        <div className='w-[50%]'>
          <img className=' h-[700px] absolute object-cover' src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeTwoWhyChoose;