import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUndoAlt, faPause } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';

export default function Progressbar({
  runAlgorithm,
  getNextStep,
  getPrevStep,
  isRunning,
}) {
  // Begin the animation for the algorithm
  const runAlgoAnimation = () => {
    runAlgorithm();
  };

  return (
    <div className="progressbar speedbar">
      <button onClick={runAlgoAnimation}>
        {isRunning ? (
          <FontAwesomeIcon icon={faPause} color={'white'} />
        ) : (
          <FontAwesomeIcon icon={faPlay} color={'white'} />
        )}
      </button>
      <div className="progressContainer speedContainer">
        <Draggable
          axis="x"
          bounds={'parent'}
          onStop={() => console.log('set new step in alagorithm')}
        >
          <div className="speedController progressController"></div>
        </Draggable>
      </div>
      <button>
        <FontAwesomeIcon icon={faUndoAlt} color={'white'} />
      </button>
    </div>
  );
}
