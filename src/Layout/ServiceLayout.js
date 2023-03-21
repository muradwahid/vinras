import React from 'react';
import { Outlet } from 'react-router-dom';
import ServiceSideBar from '../component/ServiceSideBar/ServiceSideBar';

const ServiceLayout = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto'>
        <div className='flex gap-8 lg:flex-row flex-col-reverse'>
          <div className='lg:w-[30%]'>
            <ServiceSideBar />
          </div>
          <div className='lg:w-[70%]'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;