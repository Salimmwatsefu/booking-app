import React, { useState } from 'react';

const AppointmentsModal = ({ isOpen, onClose }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [name, setName] = useState('');
  const [schoolID, setSchoolID] = useState('');
  const [reason, setReason] = useState('');
  
  const departments = {
    Offices: ['VC', 'DVC', 'Admissions Office', 'Finance Office'],
    Deans: ['Dean SHSS', 'Dean SCOB', 'Dean SST', 'Dean SPHS', 'Dean Film'],
    'Course Advisors': [
      'Course Advisor SHSS',
      'Course Advisor SCOB',
      'Course Advisor SST',
      'Course Advisor SPHS',
      'Course Advisor Film',
    ],
  };

  // Example of booked slots
  const bookedSlots = {
    'VC': ['10 AM - 11 AM'],
    'Dean SHSS': ['2 PM - 3 PM'],
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
    setSelectedSlot('');
  };

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Department:', selectedDepartment);
    console.log('Selected Slot:', selectedSlot);
    console.log('Name:', name);
    console.log('School ID:', schoolID);
    console.log('Reason for Appointment:', reason);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-90" onClick={onClose} />
      <div className="bg-white p-6 rounded-lg z-10 w-11/12 max-w-lg shadow-lg relative max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
        
        <form onSubmit={handleSubmit}>
          {/* Scrollable Content */}
          <div className="">
            {/* Department selection */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.keys(departments).map((category) => (
                <div key={category} className="col-span-2">
                  <h3 className="font-semibold mb-2">{category}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {departments[category].map((dept) => (
                      <button
                        key={dept}
                        type="button"
                        className={`w-full text-left border border-gray-300 rounded-lg p-3 hover:bg-indigo-100 ${
                          selectedDepartment === dept ? 'bg-indigo-200 font-semibold' : ''
                        }`}
                        onClick={() => handleDepartmentSelect(dept)}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Time slot selection */}
            {selectedDepartment && (
              <div className="mb-4">
                <h3 className="text-md font-semibold mb-2">Select a Time Slot</h3>
                {['10 AM - 11 AM', '2 PM - 3 PM'].map((slot) => {
                  const isBooked = bookedSlots[selectedDepartment]?.includes(slot);
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
                      {slot}
                      {isBooked && ' - Already Booked'}
                    </button>
                  );
                })}
              </div>
            )}

            {/* User details */}
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
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="reason">Reason for Appointment</label>
              <textarea
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-500 transition duration-200"
            disabled={!selectedDepartment || !selectedSlot}
          >
            Book Appointment
          </button>
        </form>

        <button className="mt-4 text-indigo-600" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AppointmentsModal;
