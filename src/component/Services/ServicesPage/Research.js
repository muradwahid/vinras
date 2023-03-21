import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Research = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500]'>Research & Development</h1>
      <h4 className='tikoFont text-[22px]'>In-House Technical And R&D Team</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p>Warptex Bangladesh Limited emphasis on Research & Development as the core for our business. As an Innovative and Sustainable company we have integrated R&D infrastructure and built a team to lead the work of discovering new processes, product developments & improvement of current production infrastructure.</p>
        <p className='my-4'>The objective of the R&D division:</p>
        <ul className='list-disc ml-5 mb-4'>
          <li>
            <p>Improve process and product by optimization.</p>
          </li>
          <li>
            <p>Enhancing the efficiency in a sustainable way.</p>
          </li>
          <li>
            <p>Reducing the utilization of natural resource.</p>
          </li>
          <li>
            <p>Innovate the sustainable product and process.</p>
          </li>
        </ul>
        <p>The effective research and development lead us to advance in sustainability in manufacturing apparel products. The research & development activities aim to manufacture products with effective sustainable methods, which are environmental friendly and improve the lifetime of product optimization; and increase the efficiency of different processes. The integrated R&D supports future beyond objectives of Warptex and our partners.</p>
        <p className='mt-4'>Research – ‘Re-to do again’, ‘search-to look for–and Development–growth, progress and positive change in RMG– work directed towards the novelty, presenting new styles and improvement of garment styles.</p>
      </div>
    </div>
  );
};

export default Research;