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
  const [numbers, setNumbers] = useState([10, 12, 5, 10, 1, null, null, null]);
  const [isRunning, setIsRunning] = useState(false);
  const [userInput, setUserInput] = useState('10, 12, 5, 10, 1');
  const [processed, setProcessed] = useState(null); // Each step of the sorting algorithm in order
  const [current, setCurrent] = useState(0); // Current step within the algorithm
  const [speed, setSpeed] = useState(500);

  useEffect(() => {
    if (isRunning) {
      visualizeAlgorithm();
    }
  }, [isRunning]);

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
    setIsRunning(true);
  };

  // Run each step of the sorting algorithm to create an animated visual
  const visualizeAlgorithm = () => {
    let i = 0;
    while (i < processed.length) {
      visualizeNextStep(i);
      i++;
    }
    setTimeout(() => {
      setIsRunning(false);
    }, speed * i);
  };
  // Helper function to run the algorithm at the given speed
  const visualizeNextStep = (i) => {
    setTimeout(() => {
      getNextStep(i);
    }, speed * i);
  };

  // Start the algorithm over from the beginning.
  // This can be called while it is already running or after it is over
  // This cannot be called if the algorithm was never ran in the first place
  const restartAlgorithm = () => {
    this.stopAlgorithm();
    // TODO: Start algorithm from the top
  };

  // Pause the algorithm at the given step.
  // User can either continue running again from this step or change step.
  const stopAlgorithm = () => {
    setIsRunning(false);
    console.log('stopAlgorithm: ' + isRunning);
    // TODO: Stop the algorithm at the current step
  };

  // Sets the list of numbers to the current step in the algorithm
  // 0 <= current < processed.length
  const getNextStep = (i) => {
    setNumbers(processed[i]);
    setCurrent(i + 1);
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
        restartAlgorithm={restartAlgorithm}
        getNextStep={getNextStep}
        getPrevStep={getPrevStep}
        isRunning={isRunning}
        setSpeed={setSpeed}
        current={current}
        processed={processed}
        stopAlgorithm={stopAlgorithm}
      />
    </div>
  );
}

export default App;

/*
TODO LIST:
-- Allow for pausing the algorithm
-- Allow for restarting the algorithm
-- Handle resizing of numbers when the bars have very different sizes. Poorly worded, but you get the idea.
*/
