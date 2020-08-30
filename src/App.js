import React, { useState, useEffect } from 'react';
import './App.css';
import SortingAlgorithms from './components/SortingAlgorithms';
import Visualizer from './components/Visualizer';
import Controller from './components/Controller';
import ListInput from './components/ListInput';

import SelectionSort from './algos/selection';

function App() {
  const [algorithm, setAlgorithm] = useState('SELECTION');
  // List of numbers being displayed in algorithm [LIST, current, minimum, compare]
  const [numbers, setNumbers] = useState([10, 9, 5, 3, 2, null, null, null]);
  const [userInput, setUserInput] = useState('1, 2, 5, 3, 10, 2, 12');
  const [processed, setProcessed] = useState(null); // Each step of the sorting algorithm in order
  const [current, setCurrent] = useState(0); // Current step within the algorithm

  useEffect(() => {
    if (processed) {
      getNextStep();
    }
  }, [processed]);

  // User chooses the sorting algorithm that they want to view
  const changeAlgorithm = (algorithmType) => {
    setAlgorithm(algorithmType);
  };

  // Generates a random list of range [5-12] and values [1-50]
  const randomize = () => {
    let random = [];
    let numOfElements = Math.floor(Math.random() * 7) + 5;
    for (let i = 0; i < numOfElements; i++) {
      let num = Math.floor(Math.random() * 50) + 1;
      random.push(num);
    }
    setUserInput(random.toString());
    setNumbers(random.concat([null, null, null]));
  };

  // Run the sorting algorithm on the list
  // Save each step of the algorithm in the Processed state
  const runAlgorithm = () => {
    const numbersToProcess = [...numbers.slice(0, numbers.length - 3)];
    setProcessed(SelectionSort(numbersToProcess));
  };

  // Sets the list of numbers to the current step in the algorithm
  // 0 <= current < processed.length
  const getNextStep = () => {
    if (current < processed.length) {
      setNumbers(processed[current]);
      setCurrent(current + 1);
    }
  };

  const getPrevStep = () => {
    if (current > 0) {
      setNumbers(processed[current - 1]);
      setCurrent(current - 1);
    }
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
        randomize={randomize}
      />
      <Controller
        runAlgorithm={runAlgorithm}
        getNextStep={getNextStep}
        getPrevStep={getPrevStep}
      />
    </div>
  );
}

export default App;

/*
TODO LIST:
-- Handle resizing of numbers when the bars have very different sizes. Poorly worded, but you get the idea.
-- Change the speed of the algorithm due to the speedbar component
-- Get the algorithm to run
-- Visualize the algorithm

WARNING: 
-- You may need to add a third item in the numbers state to represent which number the algorithm is comparing
---- Right now, it only tracks the current number and the smallest number.
*/
