import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Homepage() {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    axios.get('/api/tests')
      .then(response => {
        setTests(response.data);
      })
      .catch(error => {
        console.error('Error fetching tests:', error);
      });
  }, []);

  return (
    <div className="homepage">
      <h1>Welcome to Grow</h1>
      <h2>Tests Available:</h2>
      <ul>
        {tests.map(test => (
          <li key={test.id}>{test.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homepage;
