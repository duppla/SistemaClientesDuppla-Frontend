import React from 'react'
import { Link } from 'react-router-dom';
import './../custumer/Payment.css'



function Payment() {
    return (
        <div className='payment'>
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
            <div className=' payment-instructions centrado'>
                <p className='text-payment-methods '>
                    Para realizar el pago correspondiente al mes, te ofrecemos dos opciones. Por favor, elige la que mejor se adapte a tus necesidades.
                </p>
            </div>
            <div className="description-payment-methods container-fluid  "><br />
                <div className='payment-methods centrado'>
                    <p className='text-payment-methods '>
                        1. Puedes dirigirte al banco y efectuar el pago directamente a través del número de cuenta correspondiente a la fiduciaria.
                    </p>
                </div>
                <div className='card-payment-methods '>
                    <div className='title-card-payment'        >
                        <p>Acción fiduciaria</p>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6 ">
                            <p className='description-payment'>Referencia:</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end  text-blue-payment'>00017000224519</p>
                        </div>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6 ">
                            <p className='description-payment'>Bancolombia</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end  text-blue-payment'>Convenio 26096</p>
                        </div>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6 ">
                            <p className='description-payment'>Banco de occidente</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end  text-blue-payment'>Nit: 800.193.824-8</p>
                        </div>

                    </div>

                </div>
                <div className='payment-methods'>
                    <p className='text-payment-methods '>
                        2. También puedes realizar la transacción directamente a nuestra cuenta.
                    </p>
                </div>

                <div className='card-payment-methods '>
                    <div className='title-card-payment'        >
                        <p>COMPRA MIENTRASALQUILAS S.A.S</p>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6 ">
                            <p className='description-payment'>NIT 901.573.094-9</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end  text-blue-payment'></p>
                        </div>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6 ">
                            <p className='description-payment'>Davivienda ahorros</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end  text-blue-payment'>#000000000</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Payment;