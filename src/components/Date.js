import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div>
      <h2>Current Date and Time:</h2>
      <p>{currentDateTime.toLocaleString()}</p>
    </div>
  );
};

export default CurrentDateTime;
