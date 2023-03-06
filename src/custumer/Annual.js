import React from 'react'
import { Link } from 'react-router-dom';
import './../custumer/Annual.css'

function Annual() {
    return (
        <div className='container-consolidated-annual container-fluid'>
            <div className="arrow-return">
                <Link to='/historial'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div><br />
            <div className="title-register">
                <h1> <b>2023</b>
                </h1>
            </div>

            {/*Componente facturas */}

            <div className='container-fluid'>
            <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/pagos'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Enero</h5>
                            </button>
                        </Link>
                    </div>
                </div>                
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/pagos'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Febrero</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Marzo</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Abril</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Mayo</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Junio</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Julio</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Agosto</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Septiembre</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Octubre</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Nombre</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Diciembre</h5>
                            </button>
                        </Link>
                    </div>
                </div>


            </div>









        </div>
    )
}

export default Annual;