import React from 'react'
import { Link } from 'react-router-dom';
import './../custumer/Payment.css'



function Payment() {
    return (
        <div>
            <div className="container-fluid">
                <div className="container-offer">
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
                        <h1> <b>Pago factura</b>
                        </h1>
                    </div>

                    <div className="d-flex justify-content-center align-items-center container-sm">
                        <div>
                            <Link to='/'>
                                <button type="button" class=" btn btn-imp-factura " >
                                    <p className='text-blue-pagos'>Imprimir factura</p>
                                    </button>
                            </Link>
                        </div><br />
                        <div className="">
                            <button type="button" class="btn btn-imp-factura text-blue"  >
                            <p className='text-blue-pagos'>PSE</p>
                                
                                </button>
                        </div>
                    </div>

                </div>
            </div>







        </div>
    )
}

export default Payment;