import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState();

  const increaseProgress = () => {
    setProgress(prevProgress => prevProgress + 10);
  };

  return (
    <div>
      <div style={{ width: `${progress}%`, height: '20px', backgroundColor: 'red' }} />
      <button onClick={increaseProgress}>Increase Progress</button>
    </div>
  );
};

export default ProgressBar;
