import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import React, { useState, useEffect } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import StudentForm from './components/StudentForm';
import StudentCard from './components/StudentCard';
import { generateClient } from 'aws-amplify/api';
import { listStudentRecords } from './graphql/queries';
import { updateStudentRecord } from './graphql/mutations';

Amplify.configure(awsExports);

const API = generateClient();

function App() {
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const result = await API.graphql({ query: listStudentRecords });
      setRecords(result.data.listStudentRecords.items);
    } catch (error) {
      console.error('Error fetching student records:', error);
    }
  };

  // Use useEffect to call fetchRecords when the component mounts
  useEffect(() => {
    fetchRecords();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
      fetchRecords();
    } catch (error) {
      console.error('Error updating student record:', error);
    }
  };

  return (
    <div className="App">
      <h1>Hall-Waze </h1>
      <StudentForm />
      <div className="student-records">
        {records.map((record) => (
          <StudentCard
            key={record.id}
            record={record}
            handleReturn={handleReturn}
          />
        ))}
      </div>
    </div>
  );
}

export default withAuthenticator(App);
