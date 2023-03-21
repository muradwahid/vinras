import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Knitting = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500] mb-4'>Knitting</h1>
      <h4 className='tikoFont text-[22px]'>Advanced Knitting Techniques</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p className='my-4'>Our Knitting factories are equipped with the latest machines; containing machines in both tube and open dia of almost all the important and widely used gauges. Our circular knit machine dia starts from 20 inches all the way to 68 inches capable of running all usable yarn counts. Only the best needles, sinkers and other accessories are used in our machines. Our machines have the ability to run on high RPMs to deliver faster productions. For perfect quality assurance our facilities contain digital infrared check-tables which can detect the imperfections which are usually ignored by common human errors. Locally sourced yarns used in our production are only of the finest grade and if the client requires we also work with custom bonded yarns imported on their behalf.</p>
        <p className='my-3'><strong>Types of our Knitting machine:</strong></p>
        <ul className='list-disc ml-7'>
          <li>
            <p>Weft knitting machine.</p>
          </li>
          <li>
            <p>Warp knitting machine.</p>
          </li>
          <li>
            <p>Single jersey circular knitting machine.</p>
          </li>
          <li>
            <p>Double jersey circular knitting machine.</p>
          </li>
          <li>
            <p>Single needle straight bar knitting machine.</p>
          </li>
          <li>
            <p>Double needle straight bar knitting machine.</p>
          </li>
          <li>
            <p>Flat bed or v-bed flat knitting machine.</p>
          </li>
          <li>
            <p>Semi jacq. collar machine</p>
          </li>
          <li>
            <p>Rib electronics jacquard machine</p>
          </li>
          <li>
            <p>Fleece machine</p>
          </li>
          <li>
            <p>6 colours auto striper machine</p>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Knitting;