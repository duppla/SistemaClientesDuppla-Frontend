
import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div style={{ width: '200px' }}>
      <CircularProgressbar value={percentage} text={`${percentage}%`} styles={{ path: { stroke: color } }} />
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;