import React from 'react';
import GaugeChart from 'react-gauge-chart'


function SpeedometerTwo() {


  return (

    <GaugeChart id="gauge-chart3" 
    
    nrOfLevels={30} 
    colors={["#C5F5CA", "#0A3323"]} 
    arcWidth={0.3} 
    percent={0.26} 
    textColor={"#0A3323"}
    needleColor={"#FF864B"}
    needleBaseColor={"#FF864B"}
  />


  );
}

export default SpeedometerTwo;



