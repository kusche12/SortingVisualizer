import React from 'react';

export default function Bar({ value, height }) {
  const styleHeight = height;
  return (
    <div className="bar" style={{ height: styleHeight }}>
      <h1>{value}</h1>
    </div>
  );
}
