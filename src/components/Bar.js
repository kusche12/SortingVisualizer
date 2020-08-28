import React from 'react';

export default function Bar({ value, height, styleColor }) {
  const styleHeight = height;
  return (
    <div
      className="bar"
      style={{ height: styleHeight, backgroundColor: styleColor }}
    >
      <h1>{value}</h1>
    </div>
  );
}
