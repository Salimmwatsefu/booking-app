import React, { useState } from 'react';
import TransportModal from '../transport/TransportModal';
import VenueModal from '../venue/VenueModal';
import SportsPitchModal from '../sports/SportsPitchModal';
import AppointmentsModal from '../appointments/AppointmentsModal';

 

function Section1() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isVenueModalOpen, setVenueModalOpen] = useState(false);
  const [isSportsPitchModalOpen, setSportsPitchModalOpen] = useState(false);
  const [isAppointmentsModalOpen, setAppointmentsModalOpen] = useState(false);

  const cards = [
    {
      title: 'Transport',
      image1: 'https://images.unsplash.com/photo-1503676685182-2531a01b5b5c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Venue',
      image1: 'https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      
    },
    {
      title: 'Sports pitch',
      image1: 'https://plus.unsplash.com/premium_photo-1684106554224-1df87e5c2e29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },
    {
      title: 'Appointments',
      image1: 'https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     
    },
  ];

  return (
    <div className='mb-20'>
      <h1 className='mt-14 font-bold ml-10 text-3xl text-indigo-700'>What do you want to book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-3 mx-1 mt-20">
        {cards.map((card, index) => (
          <div key={index} className="mx-3 ml-10">
            <div className="block overflow-hidden cursor-pointer" onClick={() => {
              if (card.title === 'Transport') {
                setModalOpen(true); // Open the modal on click
              } else if (card.title === 'Venue') {
                setVenueModalOpen(true)
              } else if (card.title === 'Sports Pitch') {
                setSportsPitchModalOpen(true)
              } else if (card.title === 'Appointments') {
                setAppointmentsModalOpen(true)
              }
            }}>
              <div className="relative sm:h-[250px]">
                <img
                  src={card.image1}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading='lazy'
                />
              </div>
              <div className="relative bg-white pt-3">
                <h3 className="font-semibold text-lg">{card.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <TransportModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <VenueModal isOpen={isVenueModalOpen} onClose={() => setVenueModalOpen(false)} />
      <SportsPitchModal isOpen={isSportsPitchModalOpen} onClose={() => setSportsPitchModalOpen(false)} />
      <AppointmentsModal isOpen={isAppointmentsModalOpen} onClose={() => setAppointmentsModalOpen(false)} />
    </div>
  );
}

export default Section1;
