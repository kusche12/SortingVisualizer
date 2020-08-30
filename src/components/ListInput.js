import React, { useState } from 'react';
import '../App.css';

export default function ListInput({
  userInput,
  setUserInput,
  randomize,
  setNumbers,
}) {
  const [error, setError] = useState('');

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
      userInput.charAt(0) === ',' ||
      userInput.charAt(userInput.length - 1) === ','
    ) {
      setError('Make sure to format your list correctly.');
      return;
    }

    // Check that the numbers, commas, and spaces are formatted correctly
    for (let i = 1; i < userInput.length; i++) {
      let c1 = userInput.charAt(i);
      let c0 = userInput.charAt(i - 1);
      if (c0 === c1) {
        if (c0 === ',' || c0 === ' ' || c0 === '-') {
          setError('Make sure to format your list correctly.');
          return;
        }
      }
    }

    // String is valid, set to the current list of numbers
    setError('');
    let inputToNums = userInput.split(',');
    for (let i = 0; i < inputToNums.length; i++) {
      let val = parseInt(inputToNums[i], 10);
      inputToNums[i] = val;
    }
    setNumbers(inputToNums.concat([null, null, null]));
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

      <button onClick={randomize}>Randomize</button>
    </div>
  );
}
