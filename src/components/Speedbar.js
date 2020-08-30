import React from 'react';
import Draggable from 'react-draggable';

export default function Speedbar({ setSpeed }) {
  // Speed 1,000 = slow = left
  // Speed 200 = fast = right
  // Speed 500 = default = middle
  const handleSpeed = (e, data) => {
    let newSpeed = 1000 - data.x * 10.5;
    setSpeed(newSpeed);
  };

  return (
    <div className="speedbar">
      <p>Slow</p>
      <div className="speedContainer">
        <Draggable
          axis="x"
          bounds={'parent'}
          defaultPosition={{ x: 45, y: 0 }}
          onStop={(e, data) => handleSpeed(e, data)}
        >
          <div className="speedController"></div>
        </Draggable>
      </div>
      <p>Fast</p>
    </div>
  );
}
