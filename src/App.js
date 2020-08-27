import React, { useState } from 'react';
import './App.css';
import SortingAlgorithms from './components/SortingAlgorithms';
import Visualizer from './components/Visualizer';
import Controller from './components/Controller';

function App() {
  const [algorithm, setAlgorithm] = useState('SELECTION');
  const [numbers, setNumbers] = useState('5, 3, 10, 2');
  const changeAlgorithm = (e, algorithmType) => {
    setAlgorithm(algorithmType);
  };

  return (
    <div className="App">
      <SortingAlgorithms
        algorithm={algorithm}
        changeAlgorithm={changeAlgorithm}
      />
      <Visualizer numbers={numbers} />
      <Controller />
    </div>
  );
}

export default App;
