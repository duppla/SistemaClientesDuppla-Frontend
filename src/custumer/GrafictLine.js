import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: ['01', '02', '03', '04', '05', '06', '07', '08' , '09' , '10', '11', '12'],
          datasets: [
            {
              label: 'Valorización inmueble',
              data: [10, 12, 47, 96, 186, 298, 320, 400],
              fill: false,
              borderColor: 'rgb(255, 134, 75)',
              tension: 0.2
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  }, []);

  return <canvas ref={chartRef} />;
};

export default LineGraph;