import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUndoAlt, faPause } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';

export default function Progressbar({
  runAlgorithm,
  restartAlgorithm,
  stopAlgorithm,
  getNextStep,
  getPrevStep,
  isRunning,
  current,
  processed,
}) {
  // Set the position of the progress bar in relation to the step in the algorithm
  let posX = 0;
  if (processed !== null) {
    posX = (current / processed.length) * 400;
  }
  // Keep inside progress bar bounds
  posX = posX >= 400 ? 400 - 15 : posX;

  // Show play while not running, show pause while running
  const pausePlayButton = () => {
    if (isRunning) {
      return (
        <button onClick={() => stopAlgorithm()}>
          <FontAwesomeIcon icon={faPause} color={'white'} />
        </button>
      );
    } else {
      return (
        <button onClick={() => runAlgorithm()}>
          <FontAwesomeIcon icon={faPlay} color={'white'} />
        </button>
      );
    }
  };

  return (
    <div className="progressbar">
      {pausePlayButton()}
      <div className="progressContainer speedContainer">
        <div className="prevContainer" style={{ width: posX }}></div>
        <Draggable
          axis="x"
          bounds={'parent'}
          onStop={() => console.log('set new step in algorithm')}
        >
          <div
            style={{ left: posX }}
            className="speedController progressController"
          ></div>
        </Draggable>
      </div>
      <button onClick={() => restartAlgorithm()}>
        <FontAwesomeIcon icon={faUndoAlt} color={'white'} />
      </button>
    </div>
  );
}
