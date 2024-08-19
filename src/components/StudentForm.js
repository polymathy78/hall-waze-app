import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { createStudentRecord } from '../graphql/mutations';

const API = generateClient();

const StudentForm = () => {
  const [studentID, setStudentID] = useState('');
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');

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

    console.log(studentRecord);

    try {
      await API.graphql({
        query: createStudentRecord,
        variables: { input: studentRecord },
      });
      alert('Student record created successfully');
    } catch (error) {
      console.error('Error creating student record:', error);
    }
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
        <option value="Library">Library</option>
        <option value="Gym">Gym</option>
        <option value="Cafeteria">Cafeteria</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
