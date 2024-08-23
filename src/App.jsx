import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [currentId, setCurrentId] = useState(1);
  const handleNextUserId = () => {
    setCurrentId((prevId) => prevId + 1);
  };
  // Format the user ID to always have 4 digits with leading zeros
  const formattedId = String(currentId).padStart(4, "0");
  return (
    <div className="container">
      <h3> Sequential User ID Generator</h3>
      <button onClick={handleNextUserId}>Generate Next User ID</button>
      <p className="result">
        Your User ID is: <span className="display-id">{formattedId}</span>
      </p>
    </div>
  );
};

export default App;
