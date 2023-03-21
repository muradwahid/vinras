import React from 'react';
const bg = 'https://i.ibb.co/6RBxXBx/02-Home.png';
const image = 'https://i.ibb.co/2MTNwpQ/02-Home.png';
const image2 = 'https://i.ibb.co/h20VYS1/02-Home.png';
const image3 = 'https://i.ibb.co/dfHZYFp/02-Home.png';
const logo = 'https://i.ibb.co/82ZkHBN/02-Home.png';
const logoSecond = 'https://i.ibb.co/svmRbT8/02-Home.png';
const logoThird = 'https://i.ibb.co/znh43WQ/02-Home.png';
const logoFourth = 'https://i.ibb.co/KhxJ0yd/02-Home.png';
const HomeTwoAdd = () => {
  return (
    <div className='bg-cover bg-no-repeat bg-center md:h-[147vh] pt-12' style={{backgroundImage:`url(${bg})`}}>
      <div className='w-[82%] mx-auto mt-[-280px]'>
        <div className='relative'>
          <img className='' src={image} alt="" />
          <div className='absolute flex items-center justify-center top-0 bottom-0 left-0 right-0'>
            <i className="fa-solid fa-play text-[26px] bg-color py-4 px-[20px] rounded-full animation-style text-white"></i>
          </div>
          <div className='bg-white p-10 absolute md:bottom-0 -bottom-20 md:left-6 left-12'>
            <p className='text-[20px] font-semibold black'>We're committed to <br /> trusted financial advisors</p>
            <p className='text-color tracking-[1.5px] text-[12px] mt-4'>GET STARTED</p>
          </div>
          <div className='absolute flex h-[150px] -bottom-6 right-0'>
            <img src={image2} className='-mx-6 lg:block hidden' alt="" />
            <img src={image3} className='lg:block hidden' alt="" />
          </div>
        </div>
        <div className='mt-32 flex gap-5 lg:flex-row flex-col'>
          <div className='lg:w-[60%] grid md:grid-cols-2 grid-cols-1 gap-4'>
            <div className='bg-white py-6'>
              <p className='text-[#878c8f] text-[15px] px-5'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde omnis iste</p>
              <div className='flex items-center justify-between mt-5'>
                <div className='grid gap-2'>
                  <div>
                    <p className='text-[14px] text-[#7f8080] poppins bg-[#f0f0f0] w-24 px-5 py-1 rounded-r-md'>Business</p>
                  </div>
                  <h3 className='2xl:text-[22px] text-[20p] font-bold ml-5'>App Development</h3>
                </div>
                <div>
                  <img className='bg-color p-3 mr-5' src={logo} alt="" />
                </div>
              </div>
            </div>
            <div className='bg-white py-6'>
              <p className='text-[#878c8f] text-[15px] px-5'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde omnis iste</p>
              <div className='flex items-center justify-between mt-5'>
                <div className='grid gap-2'>
                  <div>
                    <p className='text-[14px] text-[#7f8080] poppins bg-[#f0f0f0] w-24 px-5 py-1 rounded-r-md'>Business</p>
                  </div>
                  <h3 className='2xl:text-[22px] text-[20p] font-bold ml-5'>Media Marketing</h3>
                </div>
                <div>
                  <img className='bg-color p-3 mr-5' src={logoSecond} alt="" />
                </div>
              </div>
            </div>
            <div className='bg-white py-6'>
              <p className='text-[#878c8f] text-[15px] px-5'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde omnis iste</p>
              <div className='flex items-center justify-between mt-5'>
                <div className='grid gap-2'>
                  <div>
                    <p className='text-[14px] text-[#7f8080] poppins bg-[#f0f0f0] w-24 px-5 py-1 rounded-r-md'>Business</p>
                  </div>
                  <h3 className='2xl:text-[22px] text-[20p] font-bold ml-5'>Ui/Ux Design</h3>
                </div>
                <div>
                  <img className='bg-color p-3 mr-5' src={logoThird} alt="" />
                </div>
              </div>
            </div>
            <div className='bg-white py-6'>
              <p className='text-[#878c8f] text-[15px] px-5'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde omnis iste</p>
              <div className='flex items-center justify-between mt-5'>
                <div className='grid gap-2'>
                  <div>
                    <p className='text-[14px] text-[#7f8080] poppins bg-[#f0f0f0] w-24 px-5 py-1 rounded-r-md'>Business</p>
                  </div>
                  <h3 className='2xl:text-[22px] text-[20p] font-bold ml-5'>Digital Marketing</h3>
                </div>
                <div>
                  <img className='bg-color p-3 mr-5' src={logoFourth} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:w-[40%]'>
            <div tabIndex={0} className="collapse collapse-plus group">
              <div className="collapse-title bg-white group-focus:bg-[#f94d1c] ">
                <p className='black ml-5 group-focus:text-white'>What Are The Page & Storage Limits?</p>
              </div>
              <div className="collapse-content bg-transparent my-2 text-[#878c8f]">
                <p>Lorem Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae, sodales commodo nisl. Nulla facilisi. Pellentesque est metus. There are many variations of passages.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus group">
              <div className="collapse-title bg-white group-focus:bg-[#f94d1c] ">
                <p className='black ml-5 group-focus:text-white'>We can help your business to grow</p>
              </div>
              <div className="collapse-content bg-transparent my-2 text-[#878c8f]">
                <p>Lorem Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae, sodales commodo nisl. Nulla facilisi. Pellentesque est metus. There are many variations of passages.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus group">
              <div className="collapse-title bg-white group-focus:bg-[#f94d1c] ">
                <p className='black ml-5 group-focus:text-white'>Best financial and consultancy advisors</p>
              </div>
              <div className="collapse-content bg-transparent my-2 text-[#878c8f]">
                <p>Lorem Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae, sodales commodo nisl. Nulla facilisi. Pellentesque est metus. There are many variations of passages.</p>
              </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus group">
              <div className="collapse-title bg-white group-focus:bg-[#f94d1c] ">
                <p className='black ml-5 group-focus:text-white'>3 Tips For Offshore Software Development</p>
              </div>
              <div className="collapse-content bg-transparent my-2 text-[#878c8f]">
                <p>Lorem Suspendisse finibus urna mauris, vitae consequat quam blandit vel. Vestibulum leo ligula, molestie ullamcorper vulputate vitae, sodales commodo nisl. Nulla facilisi. Pellentesque est metus. There are many variations of passages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeTwoAdd;