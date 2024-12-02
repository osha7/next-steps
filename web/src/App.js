import React, { useEffect, useState } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState('');
  console.log({apiResponse})

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((response) => response.text())
      .then((data) => setApiResponse(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>API response: </h1>
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;