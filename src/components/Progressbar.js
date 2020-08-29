import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';

export default function Progressbar({
  runAlgorithm,
  getNextStep,
  getPrevStep,
}) {
  // TODO: On clicking the play button, make the animation run from start to finish
  // DO NOT try to work with the draggable component unti you get the animation to run on its own
  // Begin the animation for the algorithm
  const runAlgoAnimation = () => {
    runAlgorithm();
    getNextStep();
  };

  return (
    <div className="progressbar speedbar">
      {/* TODO: MAKE THIS A TERNARY EXPRESSION, SUBSTITUTE PAUSE BUTTON WHILE RUNNING ALGO */}
      <button onClick={runAlgoAnimation}>
        <FontAwesomeIcon icon={faPlay} color={'white'} />
      </button>
      <div className="progressContainer speedContainer">
        <Draggable
          axis="x"
          bounds={'parent'}
          onStop={() => console.log('set new step in alagorithm')}
        >
          <div className="progressControler speedController"></div>
        </Draggable>
      </div>
      <button>
        <FontAwesomeIcon icon={faUndoAlt} color={'white'} />
      </button>
    </div>
  );
}
