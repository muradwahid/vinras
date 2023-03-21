import React from 'react';
import { NavLink } from 'react-router-dom';

const ServiceSideBar = () => {
  return (
    <div>
      <ul className='grid gap-3'>
        <li className=' bg-[#F7F7F7] font-[500] z-0 relative research'>
          <NavLink to='/service/research' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Research & Development</p>
          <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] font-[500] research relative'>
          <NavLink to='/service/sample' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Sample Development</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] font-[500] relative'>
          <NavLink to='/service/merchandising' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Merchandising</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] font-[500] relative'>
          <NavLink to='/service/fabric' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Fabric Sourcing</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] font-[500] relative'>
          <NavLink to='/service/production' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Production</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] relative font-[500]'>
          <NavLink to='/service/qaqc' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>QA and QC</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] relative font-[500]'>
          <NavLink to="/service/delivery" className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Delivery and Shipment</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className='bg-[#F7F7F7] relative font-[500]'>
          <NavLink to='/service/kitting' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Knitting</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] relative font-[500]'>
          <NavLink to='/service/embroidery' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Embroidery</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] relative font-[500]'>
          <NavLink to='/service/garment' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Garment Dyeing & Wash</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] relative font-[500]'>
          <NavLink to='/service/printing' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Printing</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
        <li className=' bg-[#F7F7F7] relative font-[500]'>
          <NavLink to='/service/trimming' className={({ isActive }) =>
            isActive
              ? "flex items-center px-5 py-4 justify-between widget-nav-menu text-[#DEBA27]"
              : "flex items-center px-5 py-4 justify-between"}>
            <p>Trimming & Accessories</p>
            <i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </li>
      </ul>

    </div>
  );
};

export default ServiceSideBar;