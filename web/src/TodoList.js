import React, { useEffect, useState } from 'react';

const TodoList = () => {

const [apiResponse, setApiResponse] = useState('');
console.log({apiResponse})

  useEffect(() => {
    fetch('http://localhost:3001/todo-list')
      .then((response) => response.text())
      .then((data) => setApiResponse(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

return (
    <div className="App">
      <h1>API Todo List Response: </h1>
      <p>{apiResponse}</p>
    </div>
)
}

export default TodoList;