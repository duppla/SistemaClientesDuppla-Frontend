import React from 'react'
import { Link } from 'react-router-dom';
import './../custumer/History.css'

import Progressbar from './Progressbar';
import LineGraph from './GrafictLine';
import Vline from "../../src/img/Vline.svg";
import Istatec from "../../src/img/Istatec.png";
import Istatem from "../../src/img/Istatem.png";
import Iajustemeta from "../../src/img/Vajustarmeta.svg";
import Vexcerpts from "../../src/img/Vexcerpts.svg";
import Vannual from "../../src/img/Vannual.svg";


function History() {
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
                    <h3><b>Historial</b></h3>
                </div>
            </div>

            {/*Sección de gráfica */}
            <div className=" container-history-graph container-fluid ">
                <div className='grafict-container-one container-fluid '>
                    <div className=" row">
                        <h5 className='text-graph-one'><b>Actividad anual</b></h5>
                    </div>
                    <br />
                    <div className="">
                        <div className='centrado'>
                            <img src={Vline} className="line-data-goal centrado" alt="" />
                        </div>
                    </div>
                    <br />
                    <div className='centrado '>
                        <Progressbar />
                    </div>
                    <div className="card-docs-init  ">
                        <div className="col-5">
                            <p>15%</p>
                        </div >
                        <div className='col-2'></div>
                        <div className="col-5  centrado">
                            <p>25%</p>
                        </div>
                    </div>

                    {/*Pago mínimo */}
                    <div className="card-docs-init ">
                        <div className="card-body-docs col-1">
                            <img src={Istatec} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-number-custumer  ">
                            Año 2023
                        </div>
                        <div className="col-4  text-number-custumer ">
                            15%
                        </div>
                    </div>
                    {/*Meta mensual */}
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-1">
                            <img src={Istatem} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-number-custumer">
                            Año 2028
                        </div>
                        <div className="col-4 outline text-number-custumer">
                            <p>25%</p>
                        </div>
                    </div>
                    <br />
                    <div className='centrado'>
                        <img src={Vline} className="line-data-goal centrado" alt="" />
                    </div>
                    <br />
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6">
                            <p>Abono a capital</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end text-space-goal-data '>$47,000,000</p>
                        </div>
                        <br />
                    </div>



                </div>

                {/**GRafica de linea */}
                <div className='grafict-container-two container-fluid '>
                    <div className=" row">
                        <div className='centrado'>
                            <div className="dropdown">
                                <div className='col-6'>
                                    <h6 className='text-graph-two'><b>Valorización inmueble</b></h6>
                                </div>
                                <div className='col-6 icon-drop'>
                                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                        <b>2023</b>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
                                        <li><button className="dropdown-item" type="button">2023</button></li>
                                        {/*<li><button className="dropdown-item" type="button">2022</button></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="">
                        <div className='centrado'>
                            <img src={Vline} className="line-data-goal centrado" alt="" />
                        </div>
                    </div>
                    <br />
                    <div className='container-graph-linear'>

                        <LineGraph />
                    </div>
                    <br />
                    <div className='centrado'>
                        <img src={Vline} className="line-data-goal centrado" alt="" />
                    </div>
                    <br />
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6">
                            <p>Abono a capital</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end text-space-goal-data '>$47,000,000</p>
                        </div>
                        <br />
                    </div>
                </div>


            </div>

            {/*Sección de btn */}
            <div className='container-btn-wrapper'>

                <div className='space-btn-wrapper'>
                    <Link to='/Ajustemeta' className='links'>
                        <div className='btn-wrapper'>
                            <img src={Iajustemeta} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                            <br />
                        </div>
                    </Link>
                    <div>
                        <p className='text-btn-wrapper'>Ajustar meta </p>
                    </div>
                </div>
                <div className='space-btn-wrapper'>
                    <Link to='/consolidado' className='links'> <div className='btn-wrapper'>
                        <img src={Vexcerpts} className=" img-btn-wrapper-history warning font-medium-2 mr-2" alt="" height='24px' width='24px' />
                        <br />
                    </div>
                    </Link>
                    <div>
                        <p className='text-btn-wrapper links'>Ver extractos </p>
                    </div>
                </div>


            </div>

            {/*Componente btn anual */}
            <div className='centrado'>
                <div className="col-2 btn input-group btn-annual-history centrado-btn " width="400px" height="68px" >
                    <Link to='/consolidado'>
                        <img src={Vannual} className="img-btn-pagos-custumer" alt="" width="32px" height="32px" />
                        <button type="button" id="" className="btn btn-cerrar text-blue " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <h5>2023</h5>
                        </button>
                    </Link>
                </div>
            </div>
           
           {/* <div className='centrado'>
                <div className="col-2 btn input-group btn-annual-history centrado-btn " width="400px" height="68px" >
                    <Link to='/consolidado'>
                        <img src={Vannual} className="img-btn-pagos-custumer" alt="" width="32px" height="32px" />
                        <button type="button" id="" className="btn btn-cerrar text-blue " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <h5>2022</h5>
                        </button>
                    </Link>
                </div>
                <br />
            </div>
        */}

            <div>
                <br />

            </div>








        </div >
    )
}

export default History;