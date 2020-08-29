import React from 'react';
import Progressbar from './Progressbar';
import Speedbar from './Speedbar';

export default function Controller({ runAlgorithm, getNextStep, getPrevStep }) {
  return (
    <div className="controller">
      <Speedbar />
      <Progressbar
        runAlgorithm={runAlgorithm}
        getNextStep={getNextStep}
        getPrevStep={getPrevStep}
      />
    </div>
  );
}
