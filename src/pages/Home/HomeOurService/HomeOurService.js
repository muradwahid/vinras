import React from 'react';
import serviceBg from '../../../assets/bg/our-servicebg.png';
const serviceLogo = 'https://i.ibb.co/6RcY7WF/01-Home-1.png';
const HomeOurService = () => {
  const serviceData = [
    { heading: 'Business Planning' },
    { heading: 'Manage Investment' },
    { heading: 'Insurance Strategy' },
    { heading: 'Audit Marketing' },
    { heading: 'Digital Marketing' },
    { heading: 'Web Development' },
  ]
  return (
    <div className='py-20' style={{ backgroundImage: `url(${serviceBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='w-[70%] mx-auto poppins'>
        <div className='text-center'>
          <p className='text-color text-[22px] relative font-semibold my-3 service-style'>Our Service</p>
          <h2 className='text-5xl black font-bold'>Our Popular Service</h2>
        </div>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-7 mt-16 ' >
          {
            serviceData.map((service, idx) => <div key={idx} className='bg-white'>
              <div className=''>
                <p className='bg-color inline-block mt-[32px] py-1 pr-3 pl-6 rounded-r text-white rounded-'>Business</p>
                <div className='float-right'>
                  <img className='p-4 bg-color rounded-md mr-7' src={serviceLogo} alt="" />
                </div>
              </div>
              <div className='px-5 py-5'>
                <h3 className='text-[22px] black font-bold mb-2'>{service.heading}</h3>
                <p className='leading-7'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut</p>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default HomeOurService;