import React from 'react';
import Progressbar from './Progressbar';
import Speedbar from './Speedbar';

export default function Controller() {
  return (
    <div className="controller">
      <Speedbar />
      <Progressbar />
    </div>
  );
}
