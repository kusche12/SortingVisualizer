import React from 'react';
import Progressbar from './Progressbar';
import Speedbar from './Speedbar';

export default function Controller({
  runAlgorithm,
  getNextStep,
  getPrevStep,
  isRunning,
  setSpeed,
  current,
  processed,
  restartAlgorithm,
  stopAlgorithm,
}) {
  return (
    <div className="controller">
      <Speedbar setSpeed={setSpeed} />
      <Progressbar
        runAlgorithm={runAlgorithm}
        restartAlgorithm={restartAlgorithm}
        getNextStep={getNextStep}
        getPrevStep={getPrevStep}
        isRunning={isRunning}
        current={current}
        processed={processed}
        stopAlgorithm={stopAlgorithm}
      />
    </div>
  );
}
