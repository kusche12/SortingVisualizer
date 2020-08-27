import React from 'react';
import Bar from './Bar';

export default function Visualizer({ numbers }) {
  const list = numbers.split(', ');
  const largestNumber = Math.max(...list);

  // All heights have a minimum of 50px
  // Get proportions based off of largest element
  // and calculate each element's height
  const getHeight = (value) => {
    const height = 50;
    const multiplier = 300 / largestNumber;
    return height + value * multiplier;
  };

  const renderBars = () =>
    list.map((value, index) => {
      const height = getHeight(value);
      return <Bar value={value} height={height} key={index} />;
    });

  return <div className="visualContainer">{renderBars()}</div>;
}
