import React from 'react';
import Bar from './Bar';

export default function Visualizer({ numbers, visual }) {
  const largestNumber = Math.max(...numbers);

  // All heights have a minimum of 50px
  // Get proportions based off of largest element
  // and calculate each element's height
  const getHeight = (value) => {
    const height = 50;
    const multiplier = 300 / largestNumber;
    return height + value * multiplier;
  };

  // Render the bars when there is currently no animation occuring
  const renderBars = () =>
    numbers.map((value, index) => {
      if (value != null) {
        const height = getHeight(value);
        return (
          <Bar value={value} height={height} key={index} styleColor="#a1e9ff" />
        );
      }
    });

  // Iterate over each element in the list
  // Apply the correct styling for current element and minimum element
  const renderAnimation = () => {
    for (let i = 0; i < visual.length - 2; i++) {
      //setTimeout(() => console.log(i), 10000);
      const value = visual[i];
      const height = getHeight(value);
      if (i === visual[visual.length - 2] || i === visual[visual.length - 1]) {
        // current and minimum element
        return (
          <Bar value={value} height={height} key={i} styleColor="#ffe959" />
        );
      } else if (i < visual[visual.length - 2]) {
        // already sorted
        return (
          <Bar value={value} height={height} key={i} styleColor="#61ff59" />
        );
      } else {
        // not sorted
        return (
          <Bar value={value} height={height} key={i} styleColor="#a1e9ff" />
        );
      }
    }
  };

  return (
    <div className="visualContainer">
      {visual === null ? renderBars() : renderAnimation()}
    </div>
  );
}
