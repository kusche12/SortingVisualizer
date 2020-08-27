import React from 'react';
import Bar from './Bar';

export default function Visualizer({ numbers }) {
  const list = numbers.split(', ');
  const renderBars = () =>
    list.map((value) => {
      return <Bar value={value} />;
    });

  return (
    <div className="visualContainer">
      <h1>Hello</h1>
      {renderBars}
    </div>
  );
}
