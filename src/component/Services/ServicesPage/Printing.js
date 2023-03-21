import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Printing = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500] mb-4'>Printing</h1>
      <h4 className='tikoFont text-[22px]'>All Types Of Printing</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p className='my-4'>Our printing facilities are capable of carrying out bulk productions of all sorts of RMG printing. Our factories have both manual printing section and digital printing section. We also have our dedicated Design making department to execute any kind of designs.</p>
        <p className='my-3'>Types of Printing offered to our clients:</p>
        <ul className='ml-4'>
          <li>
            <p>1. Pigment/Water print</p>
          </li>
          <li>
            <p>2. Semi rubber print</p>
          </li>
          <li>
            <p>3. Rubber print</p>
          </li>
          <li>
            <p>4. Crack print</p>
          </li>
          <li>
            <p>5. Flock print</p>
          </li>
          <li>
            <p>6. Reflective print</p>
          </li>
          <li>
            <p>7. Puff print</p>
          </li>
          <li>
            <p>8. Glitter print</p>
          </li>
          <li>
            <p>9. High-density print/HD print</p>
          </li>
          <li>
            <p>10. 3D Print</p>
          </li>
          <li>
            <p>11. Foil Print</p>
          </li>
          <li>
            <p>12. Sublimation print</p>
          </li>
          <li>
            <p>13. Process/Photo print</p>
          </li>
          <li>
            <p>14. Discharge print</p>
          </li>
          <li>
            <p>15. Gel print</p>
          </li>
          <li>
            <p>16. Beats print</p>
          </li>
          <li>
            <p>17. Sugar print</p>
          </li>
          <li>
            <p>18. Embossed print</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Printing;