import React from 'react';
const image = 'https://warptexbd.com/uploads/Research-&-Development-2_1675241769.jpg';
const Production = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500]'>Production</h1>
      <h4 className='tikoFont text-[22px]'>Experienced & Dedicated Production Team</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p>Warptex has more than 14 factories under its belt for productions of various RMG products; which are all compliance factories. We comprise of multiple and separate factories for our knit, woven, denim & sweater productions, so there is close to no chance of orders overlapping. For maximum efficiency these factories employ only experienced workers and are always wary and prompt about worker welfare. As Warptex has always believed in women empowerment, we can proudly say that almost 70% of all the workers in all our factories combined are women. </p>
        <p className='my-4'><strong>Production processes:</strong></p>
        <ul className='ml-2 mb-4'>
          <li>
            <p>1. Firstly the PP sample is approved by the buyer.</p>
          </li>
          <li>
            <p>2. Patterns are finalized.</p>
          </li>
          <li>
            <p>3. The whole process of production is planned out.</p>
          </li>
          <li>
            <p>4. Desired fabric is manufactured or sourced.</p>
          </li>
          <li>
            <p>5. The fabric is dyed, washed and other chemical treatments are carried out as per order instructions.</p>
          </li>
          <li>
            <p>6. Accessories and trims are manufactured or sourced as per client’s requirement.</p>
          </li>
          <li>
            <p>7. The fabric is cut out to the measurements of the finalized patterns.</p>
          </li>
          <li>
            <p>8. Printing process is carried out.</p>
          </li>
          <li>
            <p>9. Garment sewing and additions of the accessories are done.</p>
          </li>
          <li>
            <p>10. The final ready products are checked and packed as per buyer’s requirements.</p>
          </li>
          <li>
            <p>11. The consignment is shipped to the buyer’s desired country port either by ship/air.</p>
          </li>
        </ul>
        <p className='mb-3'><strong>Quality check steps:</strong></p>
        <ul className='ml-2'>
          <li><p>1. An order is deemed to be active only after the PP sample is approved by the buyer.</p></li>
          <li><p>2. Quality of the yarns used is checked by our professionals.</p></li>
          <li><p>3. Knitting/weaving process is monitored and each roll of fabric is individually checked through digital infrared check-tables.</p></li>
          <li><p>4. After dyeing and washing procedures, the fabric rolls are checked again for defects.</p></li>
          <li><p>5. Accessories are checked both manually and automatically after production by our quality control team.</p></li>
          <li><p>6. After pattern cutting, quality check is carried out by QCs.</p></li>
          <li><p>7. In-line QC is carried out.</p></li>
          <li><p>8. Pre-final inspection is performed.</p></li>
          <li><p>9. Only after the pre-final inspection is carried out the goods are ready for the final inspection.</p></li>
          <li><p>10. After the final inspection is done, if only we are certain that all the client’s requirements have been carried out to the point, only then we let the shipment to go through.</p></li>
        </ul>
        <p className='mt-3'>International compliance codes and national compliances are strictly maintained throughout the whole process of manufacturing of our RMG products. As our client’s satisfaction is a matter of importance to us, we leave no stones unturned in the fact of quality and we make sure our footprint on the market is eco-friendly.</p>
      </div>
    </div>
  );
};

export default Production;