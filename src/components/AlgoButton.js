import React from 'react';
import '../App.css';

export default function AlgoButton({ type, algorithm, changeAlgorithm }) {
  return (
    <div
      className={
        algorithm === type ? 'algobutton algobuttonFocus' : 'algobutton'
      }
    >
      <button onClick={(e) => changeAlgorithm(e, type)}>{type}</button>
    </div>
  );
}
