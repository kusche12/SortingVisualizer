import React from 'react';
import Bar from './Bar';

export default function Visualizer({ numbers }) {
  let currentStep = numbers.slice(0, numbers.length - 3);
  const largestNumber = currentStep.reduce((a, b) => Math.max(a, b));

  // All heights have a minimum of 50px
  // Get proportions based off of largest element
  // and calculate each element's height
  const getHeight = (value) => {
    const height = 50;
    const multiplier = 300 / largestNumber;
    return height + value * multiplier;
  };

  // Render the bars due to the current step in algorithm
  const renderBars = () =>
    currentStep.map((value, index) => {
      const height = getHeight(value);
      // First step in algorithm
      if (numbers[numbers.length - 3] === null) {
        return (
          <Bar value={value} height={height} key={index} styleColor="#a1e9ff" />
        );
      }
      // All other steps in algorithm
      // minimum element
      if (index === numbers[numbers.length - 2]) {
        return (
          <Bar value={value} height={height} key={index} styleColor="#ff6969" />
        );
        // compare element
      } else if (index === numbers[numbers.length - 1]) {
        return (
          <Bar value={value} height={height} key={index} styleColor="#61ff59" />
        );
        // already sorted
      } else if (index < numbers[numbers.length - 3]) {
        return (
          <Bar value={value} height={height} key={index} styleColor="#ffad42" />
        );
        // not yet sorted
      } else {
        return (
          <Bar value={value} height={height} key={index} styleColor="#a1e9ff" />
        );
      }
    });

  return <div className="visualContainer">{renderBars()}</div>;
}
