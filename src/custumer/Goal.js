import React from 'react'
import { Link } from 'react-router-dom'
import './../custumer/Goal.css'
import Vline from "../../src/img/Vline.svg";

const Goal = () => {
  return (
    <div className='container-fluid'>
      <div>
        <div className="">
          <div className="arrow-return">
            <Link to='/inicio'>
              <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
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
          <h1 className=''><b>30%</b></h1>
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
      {/*Barra de progreso */}
      <div className="progress progress-goal ">
        <div className="progress-bar bar-one" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar bar-two " role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div className="progress-bar bar-three" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      {/*Sección datos */}

      <div class="">
        <div class="data-goal">
          <h5 className=''><b>Recálculo</b></h5>
        </div>
        <div class="">
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
          <button type="button" className="btn btn-prueba text-center links text-white" width="400px" height="46px" >
            Ajustar meta
          </button>

        </div>






      </div>



    </div>
  )
}

export default Goal;