import React, { useEffect, useState } from 'react';

function App() {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((response) => response.text())
      .then((data) => setApiResponse(data));
  }, []);

  return (
    <div className="App">
      <h1>React Web App</h1>
      <p>{apiResponse}</p>
    </div>
  );
}

export default App;