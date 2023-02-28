import React from 'react'
import { Link } from 'react-router-dom';
import './../custumer/History.css'
import Navbarcustumer from './Navbarcustumer';



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

                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className=''>



                    </div>
                </div>



            </div>
            <div>


            </div>








        </div>
    )
}

export default History;