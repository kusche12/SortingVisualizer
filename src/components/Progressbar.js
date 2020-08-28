import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import Draggable from 'react-draggable';

export default function Progressbar({ runAlgorithm }) {
  return (
    <div className="progressbar speedbar">
      {/* TODO: MAKE THIS A TERNARY EXPRESSION, SUBSTITUTE PAUSE BUTTON WHILE RUNNING ALGO */}
      <button onClick={runAlgorithm}>
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
