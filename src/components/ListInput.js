import React, { useState } from 'react';
import '../App.css';

export default function ListInput({ userInput, setUserInput, setNumbers }) {
  const [error, setError] = useState('');

  // TODO: Continue error handling, check for edge cases
  const handleConfirm = () => {
    // Check that string only consists of numbers, commas, spaces, and negative (-)
    const isValid = /^[0-9, -]+$/.test(userInput);
    if (!isValid) {
      setError(
        'Make sure your input only consists of number, commas, and spaces.'
      );
      return;
    }

    // Check that string does not begin or end with a comma
    if (
      userInput.charAt(0) == ',' ||
      userInput.charAt(userInput.length - 1) == ','
    ) {
      setError('Make sure to format your list correctly.');
      return;
    }

    // Check that the numbers, commas, and spaces are formatted correctly
    for (let i = 1; i < userInput.length; i++) {
      let c1 = userInput.charAt(i);
      let c0 = userInput.charAt(i - 1);
      if (c0 == c1) {
        if (c0 == ',' || c0 == ' ' || c0 == '-') {
          setError('Make sure to format your list correctly.');
          return;
        }
      }
    }

    // String is valid
    setError('');
    setNumbers(userInput);
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
