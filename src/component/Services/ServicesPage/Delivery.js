import React from 'react';
const image = 'https://warptexbd.com/uploads/editor/Research-&-Development-2_1675241769.jpg';
const Delivery = () => {
  return (
    <div>
      <h1 className='tikoFont text-[34px] leading-10 font-[500] mb-4'>Delivery And Shipment</h1>
      <h4 className='tikoFont text-[22px]'>Delivery And Shipment</h4>
      <div className='border w-full py-3 my-3'>
        <img src={image} alt="" />
      </div>
      <div className='leading-7'>
        <p className='my-4'>Proper Packing & on time Goods delivery is very important for both Manufacturer & importer apparel Brand. Proper & Accurate way of packing & safe arrival helps to avoid goods damage and also help to keep the goods with proper looking with ironing. </p>
        <p>In goods delivery & Shipment section, our commercial & Shipment team works very carefully to speed up the whole process and ensure the smooth delivery. Basically, we work on FOB and ensure the goods delivery to the customer nominated Forwarder. Besides, our shipping department also help all of clients to select the best Shipment & Forwarding company based on requirement & Fast delivery. .</p>
      </div>
    </div>
  );
};

export default Delivery;