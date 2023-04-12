import React from 'react';
import GaugeChart from 'react-gauge-chart'


function SpeedometerTwo(pagoMinimo) {
  const minValue = 0;
  const maxValue = pagoMinimo;


  return (

    <GaugeChart id="gauge-chart3" 
    
    nrOfLevels={30} 
    colors={["#C5F5CA", "#0A3323"]} 
    arcWidth={0.3} 
    percent={1} 
    textColor={"#0A3323"}
    needleColor={"#FF864B"}
    needleBaseColor={"#FF864B"}
    formatTextValue={() => ''}
    minValue={minValue}
    maxValue={maxValue}
  />


  );
}

export default SpeedometerTwo;



