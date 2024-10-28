import React from 'react';
import { Link } from 'react-router-dom';

function Section1() {
  const cards = [
   
    {
      title: 'Transport',
      image1: 'https://images.unsplash.com/photo-1503676685182-2531a01b5b5c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },
    {
      title: 'Venue',
      price: '$39.99',
      image1: 'https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
    },
    {
      title: 'Sports pitch',
      image1: 'https://plus.unsplash.com/premium_photo-1684106554224-1df87e5c2e29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },
    {
      title: 'Appointments',
      price: '$49.99',
      image1: 'https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },
  ];

  return (
    <div className='mb-20'>
      <div>
        <h1 className=' mt-14 font-bold ml-10 text-3xl text-indigo-700'>What do you want to book</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-3 mx-1 mt-20">
        {cards.map((card, index) => (
          <div key={index} className="mx-3 ml-10">
            <Link to={"/destinations"}>
            <div  className=" block overflow-hidden">
              <div className="relative  sm:h-[250px]">
                <img
                  src={card.image1}
                  alt="hotel image 1"
                  className="absolute inset-0 h-full w-full object-cover "
                  loading='lazy'
                />
              </div>
              <div className="relative bg-white pt-3">
                <h3 className="font-semibold text-lg group-hover:underline group-hover:underline-offset-4">
                  {card.title}
                </h3>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Section1;