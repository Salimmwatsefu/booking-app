import React, { useState } from 'react';

const SportsPitchModal = ({ isOpen, onClose }) => {
  const [selectedPitch, setSelectedPitch] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [name, setName] = useState('');
  const [schoolID, setSchoolID] = useState('');
  const [reason, setReason] = useState('');
  
  // List of sports pitches
  const pitches = [
    'Basketball',
    'Hockey Pitch',
    'Football Pitch',
    'Rugby Pitch',
    'Swimming Pool',
    'Taekwondo',
  ];

  // Mock state for booked slots (in a real app, this data would come from a database)
  const bookedSlots = {
    Basketball: ['Morning'],
    'Hockey Pitch': [],
    'Football Pitch': ['Afternoon'],
    'Rugby Pitch': [],
    'Swimming Pool': [],
    Taekwondo: ['Morning', 'Afternoon'],
  };

  // Handle pitch selection
  const handlePitchSelect = (pitch) => {
    setSelectedPitch(pitch);
    setSelectedSlot('');
  };

  // Handle time slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Pitch:', selectedPitch);
    console.log('Selected Slot:', selectedSlot);
    console.log('Name:', name);
    console.log('School ID:', schoolID);
    console.log('Reason for Booking:', reason);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-90" onClick={onClose} />
      <div className="bg-white p-6 rounded-lg z-10 w-[700px]  shadow-lg relative max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Select Sports Pitch</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Sports pitch selection */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            {pitches.map((pitch) => (
              <button
                key={pitch}
                type="button"
                className={`w-full text-left border border-gray-300 rounded-lg p-3 hover:bg-indigo-100 ${
                  selectedPitch === pitch ? 'bg-indigo-200 font-semibold' : ''
                }`}
                onClick={() => handlePitchSelect(pitch)}
              >
                {pitch}
              </button>
            ))}
          </div>

          {/* Time slot selection */}
          {selectedPitch && (
            <div className="mb-4">
              <h3 className="text-md font-semibold mb-2">Select a Time Slot</h3>
              {['Morning', 'Afternoon'].map((slot) => {
                const isBooked = bookedSlots[selectedPitch]?.includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    className={`w-full text-left border border-gray-300 rounded-lg p-3 mb-2 ${
                      isBooked ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-indigo-100'
                    } ${selectedSlot === slot && !isBooked ? 'bg-indigo-200 font-semibold' : ''}`}
                    onClick={() => !isBooked && handleSlotSelect(slot)}
                    disabled={isBooked}
                  >
                    {slot} ({slot === 'Morning' ? '8 AM - 1 PM' : '2 PM - 7 PM'})
                    {isBooked && ' - Already Booked'}
                  </button>
                );
              })}
            </div>
          )}

          {/* User details */}
          <div className='flex gap-10'>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="schoolID">School ID</label>
            <input
              type="text"
              id="schoolID"
              value={schoolID}
              onChange={(e) => setSchoolID(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="reason">Reason for Booking</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition duration-200"
            disabled={!selectedPitch || !selectedSlot}
          >
            Book Pitch
          </button>
        </form>

        {/* Display selected pitch and slot */}
        <div className="mt-4">
          {selectedPitch && (
            <div className="text-gray-700">
              <p className="font-semibold">Selected Pitch: {selectedPitch}</p>
              <p className="font-semibold">Selected Time Slot: {selectedSlot}</p>
            </div>
          )}
        </div>

        <button className="mt-4 text-indigo-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default SportsPitchModal;
