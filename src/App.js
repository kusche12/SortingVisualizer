import React, { useState, useEffect } from 'react';
import './App.css';
import SortingAlgorithms from './components/SortingAlgorithms';
import Visualizer from './components/Visualizer';
import Controller from './components/Controller';
import ListInput from './components/ListInput';

import SelectionSort from './algos/selection';

function App() {
  const [algorithm, setAlgorithm] = useState('SELECTION');
  const [numbers, setNumbers] = useState([5, 3, 10, 2]); // Current list of numbers to be sorted
  const [userInput, setUserInput] = useState('5, 3, 10, 2');
  //const [speed, setSpeed] = useState(500); // Speed that algorithm runs from 1000 (slow) to 100 (fast)
  const [processed, setProcessed] = useState(null); // Each step of the sorting algorithm in order
  const [visual, setVisual] = useState(null); // Current step of sorting algorithm being visualized

  // Once the user has chosen a sorting algorithm and list of numbers
  // Visualize the algorithm
  useEffect(() => {
    if (processed !== null) {
      visualizeAlgorithm();
    }
  }, [processed]);

  // User chooses the sorting algorithm that they want to view
  const changeAlgorithm = (algorithmType) => {
    setAlgorithm(algorithmType);
  };

  // Generates a random list of range [3-10] and values [1-50]
  const randomize = () => {
    let random = [];
    let numOfElements = Math.floor(Math.random() * 7) + 3;
    for (let i = 0; i < numOfElements; i++) {
      let num = Math.floor(Math.random() * 50) + 1;
      random.push(num);
    }
    setUserInput(random.toString());
    setNumbers(random);
  };

  // Run the sorting algorithm on the list
  const runAlgorithm = () => {
    const numbersToProcess = [...numbers];
    setProcessed(SelectionSort(numbersToProcess));
  };

  // Insert the next step of the algorithm every time
  // that step has been visualized
  // TODO: Right now it runs every 1 second, but it should only run once the visualizer is done processing the step
  const visualizeAlgorithm = () => {
    for (let i = 0; i < processed.length; i++) {
      delayAlgorithmStep(i);
    }
  };

  const delayAlgorithmStep = (i) => {
    setTimeout(() => {
      setVisual(processed[i]);
    }, i * 100);
  };

  return (
    <div className="App">
      <SortingAlgorithms
        algorithm={algorithm}
        changeAlgorithm={changeAlgorithm}
      />
      <Visualizer numbers={numbers} visual={visual} />
      <ListInput
        userInput={userInput}
        setUserInput={setUserInput}
        setNumbers={setNumbers}
        randomize={randomize}
      />
      <Controller runAlgorithm={runAlgorithm} />
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

*/
