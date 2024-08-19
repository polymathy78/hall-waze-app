import React from 'react';

const StudentCard = ({ record, handleReturn }) => {
  return (
    <div className="student-card">
      <h3>{record.Name}</h3>
      <p>Destination: {record.Destination}</p>
      <p>
        Departure Time:{' '}
        {new Date(record.DepartureTime).toLocaleString()}
      </p>
      <button onClick={() => handleReturn(record.id)}>Return</button>
    </div>
  );
};

export default StudentCard;
