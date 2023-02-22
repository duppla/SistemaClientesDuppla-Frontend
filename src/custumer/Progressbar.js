import React from 'react'
import './../custumer/progressbar.css'
import Chart from "react-apexcharts"

function Progressbar() {


     const options = {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      }
    
    const series = [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    

     

  return (

<div className=' contenedor-progress-donut'>



  <div className='ProgressGradient'>
    <ul class="chart-skills">
  <li>
    <span></span>
  </li>
  <li>
    <span></span>
  </li>
  <li>
    <span></span>
  </li>
  <li>
    <span></span>
   </li>
</ul>
</div> 




</div>





  )

}
export default Progressbar;
