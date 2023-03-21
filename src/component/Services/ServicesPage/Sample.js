import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Sample = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500]'>Sample Development</h1>
      <h4 className='tikoFont text-[22px]'>Dynamic & Experienced Team</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p>Warptex always give extra priority for all kind of Samples based on customer requirement. Sampling is very important in Apparel industry because the buyers usually place orders after reviewing the quality of the samples. It is one of the key elements of the pre-production processes. The process of developing sample varies based on the buyer’s requirement and the style / type of the garment they are dealing with.</p>
        <p className='my-4'><strong>Types of garment Samples are provided by Warptex as per customer requirement,</strong></p>
        <ul className='list-disc ml-6 mb-4'>
          <li>
            <p>Development sample</p>
          </li>
          <li>
            <p>Proto sample</p>
          </li>
          <li>
            <p>Fit sample</p>
          </li>
          <li>
            <p>Size set sample</p>
          </li>
          <li>
            <p>Counter sample</p>
          </li>
          <li>
            <p>Ad or photo shoot sample</p>
          </li>
          <li>
            <p>Sales man /Marketing /Showroom sample</p>
          </li>
          <li>
            <p>Garment performance test (GPT) sample</p>
          </li>
          <li>
            <p>Pre-production (PP) sample</p>
          </li>
          <li>
            <p>Wash sample</p>
          </li>
          <li>
            <p>Top of production (TOP) sample</p>
          </li>
          <li>
            <p>Shipment sample</p>
          </li>
        </ul>
        <p className='mb-3'><strong>The main purposes of the sampling process are given below:</strong></p>
        <ul className='ml-2'>
          <li><p>1. To allow the buyer to judge the production capabilities.</p></li>
          <li><p>2. To provide a means for making revisions in the bulk production process.</p></li>
          <li><p>3. To let the manufacturer estimates the thread and fabric consumption, and develop cost quotations.</p></li>
          <li><p>4. To let the buyer knows the potential of an exporter.</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Sample;