
import React, { useState } from 'react';
import PropTypes from 'prop-types';


import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts';
import ReactApexChart from "react-apexcharts";







function Graf() {

  const [stateGrafic, setStateGrafic] = useState({

    series: [44, 55, 41],
    options: {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          offsetY: 10
        }
      },
      grid: {
        padding: {
          bottom: -80
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 260
            
          },
          legend: {
            position: 'center'
          }
        }
      }]
    },

  })


  return (
    <div className="">
      <div className="row">
        <div className="mixed-chart">
         {/*} <Chart
            options={stateGrafic.options}
            series={stateGrafic.series}
            type="bar"
            width="500"
          />*/}
          <div id="chart">
            <ReactApexChart 
            options={stateGrafic.options} 
            series={stateGrafic.series} 
            type="donut" />
          </div>
        </div>
      </div>
    </div>
  );

}
export default Graf;