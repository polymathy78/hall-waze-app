import React, { useState } from 'react';

const StudentForm = ({ onSubmit }) => {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');

  // Array of destinations
  const destinations = [
    'Library',
    'Gym',
    'Cafeteria',
    'Auditorium',
    'Playground',
    'Laboratory',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const studentRecord = {
      StudentID: studentID,
      Name: name,
      Destination: destination,
      DepartureTime: new Date().toISOString(),
      SchoolID: 'SchoolIDPlaceholder', // Replace with actual SchoolID
      TeacherID: 'TeacherIDPlaceholder', // Replace with actual TeacherID
    };

    // Call the onSubmit function passed as a prop
    onSubmit(studentRecord);

    // Optionally reset the form fields after submission
    setStudentID('');
    setName('');
    setDestination('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={studentID}
        onChange={(e) => setStudentID(e.target.value)}
        placeholder="Student ID"
        required
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Student Name"
        required
      />
      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        required
      >
        <option value="" disabled>
          Select Destination
        </option>
        {destinations.map((dest, index) => (
          <option key={index} value={dest}>
            {dest}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
