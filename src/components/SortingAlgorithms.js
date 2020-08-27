import React from 'react';
import AlgoButton from './AlgoButton';
import '../App.css';

export default function SortingAlgorithms({ algorithm, changeAlgorithm }) {
  const algorithmList = ['SELECTION', 'INSERTION', 'MERGE', 'QUICK', 'HEAP'];
  const buttonItems = algorithmList.map((type) => {
    return (
      <AlgoButton
        key={type}
        type={type}
        algorithm={algorithm}
        changeAlgorithm={changeAlgorithm}
      />
    );
  });
  return <div className="sortingContainer">{buttonItems}</div>;
}
