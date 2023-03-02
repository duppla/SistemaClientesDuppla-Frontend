import React from 'react'
import { Link } from 'react-router-dom';
import './../custumer/History.css'
import Navbarcustumer from './Navbarcustumer';
import LineGraph from './GrafictLine';
import Vline from "../../src/img/Vline.svg";



function History() {
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
                    <h3><b>Historial</b></h3>
                </div>
            </div>

            {/*Sección de gráfica */}

            <div className='container-actividad'>

                <div className=' modal-content '>
                    <br />
                    <div className='modal-header'>
                        <h3>Actividad anual</h3>
                    </div>
                    <br />
                    <div className=' centrado modal-body'>
                        <div className='ProgressGradient'>
                            <ul className="chart-skills">
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
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                </div>
            </div>

            {/**GRafica de linea */}
            <div className='grafict-container-two container-fluid '>
                <div class=" row">
                    <div className='centrado'>
                        <div class="dropdown">
                            <div className='col-6'>
                                <h6 className='text-graph-two'><b>Valorización inmueble</b></h6>
                            </div>
                            <div className='col-6 icon-drop'>
                                <button class="btn  dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>2023</b>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenu2">
                                    <li><button className="dropdown-item" type="button">2023</button></li>
                                    <li><button className="dropdown-item" type="button">2022</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="">
                    <div className='centrado'>
                        <img src={Vline} className="line-data-goal centrado" alt="" />
                    </div>
                </div>
                <br />
                <LineGraph />
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

            <div>


            </div>








        </div>
    )
}

export default History;