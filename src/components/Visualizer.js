import React from 'react';
import Bar from './Bar';

export default function Visualizer({ numbers }) {
  let currentStep = numbers.slice(0, numbers.length - 2);
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
    numbers.map((value, index) => {
      // Starting position
      if (value !== null && currentStep[currentStep.length - 2] !== null) {
        const height = getHeight(value);
        return (
          <Bar value={value} height={height} key={index} styleColor="#a1e9ff" />
        );
      } else if (value !== null) {
        // Every other step in algorithm
        const height = getHeight(value);
        // current and minimum element
        if (
          index === currentStep[currentStep.length - 2] ||
          index === currentStep[currentStep.length - 1]
        ) {
          return (
            <Bar
              value={value}
              height={height}
              key={index}
              styleColor="#ffe959"
            />
          );
          // already sorted
        } else if (index < currentStep[currentStep.length - 2]) {
          return (
            <Bar
              value={value}
              height={height}
              key={index}
              styleColor="#61ff59"
            />
          );
          // not yet sorted
        } else {
          return (
            <Bar
              value={value}
              height={height}
              key={index}
              styleColor="#a1e9ff"
            />
          );
        }
      }
    });

  return <div className="visualContainer">{renderBars()}</div>;
}
