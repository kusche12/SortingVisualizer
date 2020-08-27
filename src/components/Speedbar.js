import React from 'react';
import Draggable from 'react-draggable';

export default function Speedbar() {
  return (
    <div className="speedbar">
      <p>Slow</p>
      <div className="speedContainer">
        <Draggable
          axis="x"
          bounds={'parent'}
          onStop={() => console.log('set new speed')}
        >
          <div className="speedController"></div>
        </Draggable>
      </div>
      <p>Fast</p>
    </div>
  );
}
