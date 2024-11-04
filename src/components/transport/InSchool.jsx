import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InSchool = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState('');
  const [schoolId, setSchoolId] = useState('');
  const [route, setRoute] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, schoolId, route, selectedDate, selectedTime });
    onClose(); // Close the modal after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">Book Transport - Within School</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border-gray-300 rounded-md px-2 py-1"
          required
        />
      </div>
      <div className="mt-3">
        <label htmlFor="schoolId" className="block text-sm font-medium text-gray-700">School ID</label>
        <input
          type="text"
          id="schoolId"
          value={schoolId}
          onChange={(e) => setSchoolId(e.target.value)}
          className="mt-1 w-full border-gray-300 rounded-md px-2 py-1"
          required
        />
      </div>
      <div className="mt-3">
        <label htmlFor="route" className="block text-sm font-medium text-gray-700">Choose a route</label>
        <select
          id="route"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          className="mt-1 w-full border-gray-300 rounded-md px-2 py-1"
          required
        >
          <option value="">Select a route</option>
          <option>Gate A to Humanities</option>
          <option>Gate A to Students Centre</option>
          <option>Gate A to Gate B</option>
          <option>Gate B to Gate A</option>
          <option>Gate B to Lilian Beam</option>
          <option>Gate A to Hockey Pitch</option>
        </select>
      </div>
      <div className="mt-3 flex gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="mt-1 w-full border-gray-300 rounded-md px-2 py-1"
            dateFormat="MM/dd/yyyy"
            placeholderText="Select a date"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="h:mm aa"
            className="mt-1 w-full border-gray-300 rounded-md px-2 py-1"
            placeholderText="Select a time"
            required
          />
        </div>
      </div>
      <button type="submit" className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded">Book Transport</button>
    </form>
  );
};

export default InSchool;
