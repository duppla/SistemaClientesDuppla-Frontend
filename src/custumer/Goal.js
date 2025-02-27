import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './../custumer/Goal.css'
import Vline from "../../src/img/Vline.svg";

function Goal() {

  const [data, setData] = useState([]);

  const [value, setValue] = useState(30);

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const updateMeta = (meta,id) =>{

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: '{"id":"'+id+'","meta":"'+meta+'"}'
    };
    
    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/editMeta`, options)
      .then(response => window.location.reload())
      .catch(err => console.error(err));
  }

  useEffect(() => {
    async function fetchData() {
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: '{"email":"pgutierrez@duppla.co"}'
      };
      
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/meta`, options)
      const jsonData = await response.json();
      //console.log(JSON.stringify(jsonData[0].Meta__c));
      setData(jsonData[0]);
    }

    fetchData();
  }, []);

 

  return (
    <div className='container-fluid'>
      <div>
        <div className="">
          <div className="arrow-return">
            <Link to='/inicio'>
              <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="#0A3323" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="title-register">
          <h3><b>Ajustar meta</b></h3>
        </div>
      </div>

      {/*Sección de datos en porcentaje */}
      <div className="percentage-goal">

        <div className="centrado">
          <h1 className=''><b>{data.Meta__c}%</b></h1>
        </div>
        <br />
        <div className="">
          <div className='centrado'>
            <img src={Vline} className="line-bar-goal centrado" alt="" />
          </div>
        </div>
        <br />
        <div className="">
          <p className='text-bar-goal '>Haz clic para indicar el % que quieres lograr</p>
        </div>
      </div>
      {/*Barra de progreso en rango */}
      <div className=' container-range centrado d-grid'>

        <div className='text-range'>

        <p className='number-range'>{value}%</p>
        </div>
      <div className=''>
        <input 
         className='custom-slider'
          type="range" 
          color="rgb(255, 134, 75)"
          min="0" 
          max="100"          
          value={value} 
          onChange={handleChange}          
          
        />

      </div>
      </div>

      {/*Sección datos */}

      <div className="">
        <div className="data-goal">
          <h5 className=''><b>Recálculo</b></h5>
        </div>
        <div className="">
          <div className='centrado'>
            <img src={Vline} className="line-data-goal centrado" alt="" />
          </div>
        </div>
        <br />
        <div className="card-docs-init  ">
          <div className="card-body-docs col-6">
            <p>Cuota mínima</p>
          </div>

          <div className="col-6 outline text-dropdown-right">
            <p className='text-end text-space-goal-data '>$3,120,407</p>
          </div>
        </div>
        <div className="card-docs-init  ">
          <div className="card-body-docs col-6">
            <p>Nuevo abono a capital</p>
          </div>

          <div className="col-6 outline text-dropdown-right">
            <p className='text-end text-space-goal-data '>$881,118</p>
          </div>
        </div>
        <div className="card-docs-init  ">
          <div className="card-body-docs col-6">
            <p>Cuota total</p>
          </div>

          <div className="col-6 outline text-dropdown-right">
            <p className='text-end text-space-goal-data '>$4,001,526</p>
          </div>
        </div>
        <br />
        {/*componente  soporte*/}
        <div className="  btn-m" id="btnIniciarSesion">
          <button onClick={() => updateMeta(value,data.Id)} type="button" className="btn btn-prueba text-center links text-white" width="400px" height="46px" >
            Ajustar meta
          </button>

        </div>
      </div>
    </div>
  )
}

export default Goal;