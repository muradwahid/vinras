import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Embroidery = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500] mb-4'>Embroidery</h1>
      <h4 className='tikoFont text-[22px]'>Advanced Embroidery Process</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p className='my-4'>We provide our clients with all types of computer embroidery services, which are bound to be accurate to the last stitch. Our facilities are equipped with state of the art digital embroidery machineries from the top brands and are run by experienced engineers for delivering the top notch output that we always promise our clients.</p>
        <p className='my-3'>List of embroidery services carried out as per requirements of our existing clients;</p>
        <ul className='list-disc ml-7'>
          <li>
            <p>General embroidery</p>
          </li>
          <li>
            <p>Applique embroidery</p>
          </li>
          <li>
            <p>Sequence embroidery</p>
          </li>
          <li>
            <p>Lurex Embroidery</p>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Embroidery;