import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Garment = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500] mb-4'>Garment Dyeing & Wash</h1>
      <h4 className='tikoFont text-[22px]'>All Types Of Dyeing And Washing</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p className='my-4'>To ensure the best quality & execute fast delivery, we are working with compliant dyeing and washing plants in close vicinity of our Factory which include in-house washing plants. All of these dyeing & washing plants are environmentally friendly, who have international certifications such as DETOX, BEPI, BSCI, GOTS Etc. Local regulations are also maintained strictly and all of these plants are equipped with individual water treatment plants for the waste water, to minimize the environmental effects, of which one of the most vital is water pollution. All of our dyeing & washing plants are capable of carrying out all kind of regular & advanced washes as per requirements of the client, on all types of apparel (Knit, Woven, Denim & Sweater)</p>
        <p className='my-3'>Here is a list of the types of washing processes as per our existing customer requirement:</p>
        <ul className='list-disc ml-6'>
          <li>
            <p>Normal Wash.</p>
          </li>
          <li>
            <p>Pigment Wash</p>
          </li>
          <li>
            <p>Bleach Wash.</p>
          </li>
          <li>
            <p>Stone Wash.</p>
          </li>
          <li>
            <p>Acid Wash.</p>
          </li>
          <li>
            <p>Enzyme Wash.</p>
          </li>
          <li>
            <p>Sand Blasting.</p>
          </li>
          <li>
            <p>Super white Wash.</p>
          </li>
        </ul>
        <p className='my-3'>Here is a list of all types of Dyeing processes as per our existing client requirements:</p>
        <ul className='list-disc ml-6'>
          <li>
            <p>Disperse dye</p>
          </li>
          <li>
            <p>Reactive dye</p>
          </li>
          <li>
            <p>Direct Dye</p>
          </li>
          <li>
            <p>Vat dye</p>
          </li>
          <li>
            <p>Acid dye</p>
          </li>
          <li>
            <p>Substantive dye</p>
          </li>
          <li>
            <p>Sulfur dye</p>
          </li>
          <li>
            <p>Natural dye</p>
          </li>
          <li>
            <p>Beam dyeing</p>
          </li>
          <li>
            <p>Indigo dyeing</p>
          </li>
          <li>
            <p>Batik dyeing</p>
          </li>
          <li>
            <p>Skein dyeing</p>
          </li>
          <li>
            <p>Tie-dye</p>
          </li>
          <li>
            <p>Batik dyeing</p>
          </li>
          <li>
            <p>Warp beam dyeing</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Garment;