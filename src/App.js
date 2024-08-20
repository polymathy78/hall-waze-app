import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';

import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';
import { listStudentRecords } from './graphql/queries';
import {
  createStudentRecord,
  updateStudentRecord,
} from './graphql/mutations';
import './App.css';

Amplify.configure(awsExports);

const API = generateClient();

function App() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const result = await API.graphql({ query: listStudentRecords });
      const fetchedRecords = result.data.listStudentRecords.items.map(
        (record) => ({
          ...record,
          returned: false, // Initially, set returned to false for all records
        })
      );
      setRecords(fetchedRecords);
    } catch (error) {
      console.error('Error fetching student records:', error);
    }
  };

  // Use useEffect to call fetchRecords when the component mounts
  useEffect(() => {
    fetchRecords();
  }, [records]); // Empty dependency array ensures this runs only once when the component mounts

  const handleSubmit = async (studentRecord) => {
    try {
      // Fetch the latest record for this student
      const variables = {
        filter: { StudentID: { eq: studentRecord.StudentID } },
      };
      const result = await API.graphql({
        query: listStudentRecords,
        variables: variables,
      });
      const studentRecords = result.data.listStudentRecords.items;

      if (studentRecords.length > 0) {
        // Sort records by DepartureTime in descending order to get the most recent record
        studentRecords.sort(
          (a, b) =>
            new Date(b.DepartureTime) - new Date(a.DepartureTime)
        );
        const latestRecord = studentRecords[0];
        const currentTime = new Date();
        const lastDepartureTime = new Date(
          latestRecord.DepartureTime
        );

        // Check if the last submission was within the last hour
        const timeDifference = currentTime - lastDepartureTime;
        const oneHourInMilliseconds = 60 * 60 * 1000;

        if (timeDifference < oneHourInMilliseconds) {
          alert(
            'You cannot make a new submission within an hour of your last submission.'
          );
          return; // Prevent submission
        }
      }

      // Proceed with creating the record if no recent submission was found
      await API.graphql({
        query: createStudentRecord,
        variables: { input: studentRecord },
      });
      alert('Student record created successfully');
      fetchRecords(); // Re-fetch records after submission
    } catch (error) {
      console.error('Error creating student record:', error);
    }
  };

  const handleReturn = async (id) => {
    try {
      const updatedRecord = {
        id,
        ReturnTime: new Date().toISOString(),
      };
      await API.graphql({
        query: updateStudentRecord,
        variables: { input: updatedRecord },
      });
      alert('Student has returned.');

      // fetchRecords();
    } catch (error) {
      console.error('Error updating student record:', error);
    }
  };

  return (
    <div className="App">
      <img src="/hall-waze.png" alt="Logo" className="logo" />
      <StudentForm onSubmit={handleSubmit} />
      <hr />
      <div className="student-records">
        {records.map((record) =>
          !record.ReturnTime ? (
            <StudentCard
              key={record.id}
              record={record}
              handleReturn={handleReturn}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
