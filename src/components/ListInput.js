import React, { useState } from 'react';
import '../App.css';

export default function ListInput({ userInput, setUserInput, setNumbers }) {
  const [error, setError] = useState('');

  // TODO: Continue error handling, check for edge cases
  const handleConfirm = () => {
    // Check for errors in the input string
    console.log(/^[0-9, ]+$/.test(userInput));
    const isValid = /^[0-9, ]+$/.test(userInput);

    if (!isValid) {
      setError('Make sure to format your list correctly');
    } else {
      setNumbers(userInput);
    }
  };

  return (
    <div className="listinput">
      <div className="textAndConfirm">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ backgroundColor: '#333333' }}
        />
        <button onClick={handleConfirm}>Go</button>
        <p className="error">{error}</p>
      </div>

      <button onClick={() => console.log('hey')}>Randomize</button>
    </div>
  );
}
