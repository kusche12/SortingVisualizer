import React, { useState } from 'react';
import './App.css';
import SortingAlgorithms from './components/SortingAlgorithms';
import Visualizer from './components/Visualizer';
import Controller from './components/Controller';
import ListInput from './components/ListInput';

function App() {
  const [algorithm, setAlgorithm] = useState('SELECTION');
  const [numbers, setNumbers] = useState('5, 3, 10, 2');
  const [userInput, setUserInput] = useState('5, 3, 10, 2');

  // User chooses the sorting algorithm that they want to view
  const changeAlgorithm = (algorithmType) => {
    setAlgorithm(algorithmType);
  };

  return (
    <div className="App">
      <SortingAlgorithms
        algorithm={algorithm}
        changeAlgorithm={changeAlgorithm}
      />
      <Visualizer numbers={numbers} />
      <ListInput
        userInput={userInput}
        setUserInput={setUserInput}
        setNumbers={setNumbers}
      />
      <Controller />
    </div>
  );
}

export default App;

/*
TODO LIST:
-- Continue checking for bad input values
-- Handle resizing of numbers when the bars have very different sizes. Poorly worded, but you get the idea.
-- Build out the controller component
-- Get the algorithm to run
-- Visualize the algorithm

*/
