import React from 'react';
import Progressbar from './Progressbar';
import Speedbar from './Speedbar';

export default function Controller({
  runAlgorithm,
  getNextStep,
  getPrevStep,
  isRunning,
  setSpeed,
}) {
  return (
    <div className="controller">
      <Speedbar setSpeed={setSpeed} />
      <Progressbar
        runAlgorithm={runAlgorithm}
        getNextStep={getNextStep}
        getPrevStep={getPrevStep}
        isRunning={isRunning}
      />
    </div>
  );
}
