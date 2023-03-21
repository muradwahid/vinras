import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const QaQc = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500] mb-4'>QA And QC</h1>
      <h4 className='tikoFont text-[22px]'>Experienced Quality Assurance Team</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p className='my-4'>Warptex has a team of experienced and well qualified QA & QCs. They are involved in each and every stage of production at all production units round the clock, right after the pre-cutting approval is given.</p>
        <p>The QCs deployed at our factories constantly monitor the production and conduct size, set, Inline, midline, pre-final and final inspections; making certain that everything is up to the mark.</p>
        <p className='my-4'>All inspection reports are reviewed and signed by the Quality & Merchant team.</p>
        <p>Final inspection can only be carried out, if the results of the pre-final inspection conducted by us is satisfactory. After getting all quality approval from the client’s end & final inspection, goods are ready for Shipment.</p>
      </div>
    </div>
  );
};

export default QaQc;