import React from 'react';
import { Link } from 'react-router-dom';
const cardData=[
  {
    heading: 'Research & Development',
    txt: 'In-house Technical and R&D Team',
    image:'https://www.warptexbd.com/image/service/119306705463b13e2e3d520.jpg'
  },
  {
    heading: 'Sample Development',
    txt: 'Dynamic & Experienced Team',
    image: 'https://www.warptexbd.com/image/service/32624675063b13e6e91735.jpg'
  },
  {
    heading: 'Merchandising',
    txt: 'Dedicated merchandising team',
    image: 'https://www.warptexbd.com/image/service/156739797163b569bd4d8cc.jpg'
  },
  {
    heading: 'Fabric Sourcing',
    txt: 'Fabric sourcing team on local & imported',
    image:'https://www.warptexbd.com/image/service/209118739163b51aec786a8.jpg'
  },
  {
    heading: 'Production',
    txt: 'Experienced & Dedicated Production Team',
    image:'https://www.warptexbd.com/image/service/78895329463b13d47ee4dc.jpg'
  },
  {
    heading: 'QA And QC',
    txt: 'Experienced quality assurance team',
    image: 'https://www.warptexbd.com/image/service/64273066663b56b6bbba1a.jpg'
  },
  {
    heading: 'Delivery And Shipment',
    txt: 'Delivery and Shipment',
    image:'https://www.warptexbd.com/image/service/139460280463bbcf4e83eb4.jpg'
  },
  {
    heading: 'Knitting',
    txt: 'Advanced knitting techniques',
    image:'https://www.warptexbd.com/image/service/205214260163b51b1674543.jpg'
  },
  {
    heading: 'Embroidery',
    txt: 'Advanced embroidery process',
    image:'https://www.warptexbd.com/image/service/82282120063b13d9b21d87.jpg'
  },
  {
    heading: 'Garment Dyeing & Wash',
    txt: 'All types of dyeing and washing',
    image:'https://www.warptexbd.com/image/service/28650171563b51b076dd55.jpg'
  },
  {
    heading: 'Printing',
    txt: 'All types of printing',
    image:'https://www.warptexbd.com/image/service/80945985363b51b22d37fd.jpg'
  },
  {
    heading: 'Trimming & Accessories',
    txt: 'Trimming & Accessories Production & Sourcing Team',
    image:'https://www.warptexbd.com/image/service/154915333563b13e4ec8e26.jpg'
  },
]
const Services = () => {
  return (
    <div className='pt-52 tikoFont w-[85%] mx-auto'>
      <div className='text-center'>
        <h3 className='text-[#deba27] text-[26px] font-normal leading-[29px] tracking-[1.2px] text-center'>OUR SERVICES</h3>
        <h2 className='text-[60px] text-[#222429] font-normal leading-[65px]'>Warptex Ensure The Best Production From <b>Every Angle</b></h2>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        {
          cardData.map((singleCard,idx) => <div key={idx} className='p-4 service-card-shadow card-items-style cursor-pointer'>
            <div className='max-h-[315px] overflow-hidden relative'>
              <div className='service-thumbnail'>
                <img className='h-full transition-all duration-500' src={singleCard.image} alt="" />
              </div>
            </div>
            <h3 className='text-[26px] leading-8 flex justify-between pt-4 pb-2'><Link>{singleCard.heading}</Link> <span className=''><i className="fa-solid fa-arrow-up-long icon-style text-[20px] transition-all duration-500"></i></span></h3>
            <p>{singleCard.txt}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default Services;