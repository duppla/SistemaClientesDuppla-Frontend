import React from 'react'
import './../custumer/Notification.css'
import { Link } from 'react-router-dom';
import Vline from "../../src/img/Vline.svg";


function Notification() {
    return (
        <div className='container-fluid'>
            <div className="arrow-return">
                <Link to='/consolidado'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="#0A3323" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div><br />
            <div className="title-register">
                <h1> <b>Febrero{ }</b>
                </h1>
            </div>

            {/*pago oportuno */}

            <div className='container-notice-date'>
                <div className='notice-up-to-date '>
                    <div className='text-notice-date centrado'>
                        <h5><b>Pago mínimo : $0.000.000 { }</b></h5>
                    </div>
                    <div className='text-notice centrado '>
                        <p>Abono a capital: $0.000.000 { }</p>
                    </div>

                    <div className='text-notice centrado '>
                        <p>Pagaste: 08 de Febrero { }</p>
                    </div>
                    <div className='text-notice-two centrado '>
                        <p>Periodo de facturado 25 DIC - 25 ENE { }</p>
                    </div>

                </div>
            </div>
            <br />
            <div className='invoice-details container-fluid'>
                <div className="card-docs-init centrado  ">
                    <div className="card-body-docs col-6">
                        <p>Saldo anterior</p>
                    </div>
                    <div className="col-6 outline text-dropdown-right">
                        <p className='text-end text-space-dropdown '>$0.000.000{ }</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Abono a capital</p>
                    </div>
                    <div className="col-6 outline">
                        <p className='text-end text-space-dropdown '>$0.000.000</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Costos de intereses</p>
                    </div>
                    <div className="col-6 outline">
                        <p className='text-end text-space-dropdown '>$0.000.000</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Mantenimiento</p>
                    </div>
                    <div className="col-6 outline">
                        < p className='text-end text-space-dropdown'>$0.000.000</p>
                    </div>
                </div>
            </div>
            <div className='centrado'>
                <img src={Vline} className="line-data-goal centrado" alt="" />
            </div>
            <br />
            <div className=''>
                <div>
                    <div className='date-history'>
                        <h5>24 DIC</h5>
                    </div>
                    <br />
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-10">
                            <p>Mantenimiento de las duchas</p>
                        </div>
                        <div className="col-2 outline">
                            < p className='text-end text-space-dropdown'></p>
                        </div>

                    </div>
                    <br />
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-10">
                            <p>Duñas dañadas, se quebraron y no salia agua caliente</p>
                        </div>
                        <div className="col-2 outline">
                            < p className='text-end text-space-dropdown'></p>
                        </div>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-6">
                            <p></p>
                        </div>
                        <div className="col-6 outline">
                            < p className='text-end text-space-dropdown'>$600,000</p>
                        </div>
                    </div>
                </div>


            </div>

            {/*pago con demora */}

            <div className='container-notice-date-two'>
                <div className='notice-up-to-date '>
                    <div className='text-notice-date-two centrado'>
                        <h5><b>Pago mínimo : $0.000.000 { }</b></h5>
                    </div>
                    <div className='text-notice-second centrado '>
                        <p>Abono a capital: $0.080.000 { }</p>
                    </div>

                    <div className='text-notice-second centrado '>
                        <p>Pagaste: 08 de Febrero { }</p>
                    </div>
                    <div className='text-notice-second-s centrado '>
                        <p>Periodo de facturado 25 DIC - 25 ENE { }</p>
                    </div>

                </div>
            </div>
            <br />
            <div className='invoice-details container-fluid'>
                <div className="card-docs-init centrado  ">
                    <div className="card-body-docs col-6">
                        <p>Saldo anterior</p>
                    </div>
                    <div className="col-6 outline text-dropdown-right">
                        <p className='text-end text-space-dropdown '>$0.000.000{ }</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Abono a capital</p>
                    </div>
                    <div className="col-6 outline">
                        <p className='text-end text-space-dropdown '>$0.000.000</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Costos de intereses</p>
                    </div>
                    <div className="col-6 outline">
                        <p className='text-end text-space-dropdown '>$0.000.000</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Mantenimiento</p>
                    </div>
                    <div className="col-6 outline">
                        < p className='text-end text-space-dropdown'>$0.000.000</p>
                    </div>
                </div>
            </div>
            <div className='centrado'>
                <img src={Vline} className="line-data-goal centrado" alt="" />
            </div>
            <br />

            {/*pago pendiente */}

            <div className='container-notice-date-three'>
                <div className='notice-up-to-date '>
                    <div className='text-notice-date-two  centrado'>
                        <h5><b>Pago mínimo : $0.000.000 { }</b></h5>
                    </div>
                    <div className='text-notice-second centrado '>
                        <p>Abono a capital: $0.000.000 { }</p>
                    </div>

                    <div className='text-notice-second centrado '>
                        <p>Pagaste: 08 de Febrero { }</p>
                    </div>
                    <div className='text-notice-second-s centrado '>
                        <p>Periodo de facturado 25 DIC - 25 ENE { }</p>
                    </div>

                </div>
            </div>
            <br />
            <div className='invoice-details container-fluid'>
                <div className="card-docs-init centrado  ">
                    <div className="card-body-docs col-6">
                        <p>Saldo anterior</p>
                    </div>
                    <div className="col-6 outline text-dropdown-right">
                        <p className='text-end text-space-dropdown '>$0.000.000{ }</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Abono a capital</p>
                    </div>
                    <div className="col-6 outline">
                        <p className='text-end text-space-dropdown '>$0.000.000</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Costos de intereses</p>
                    </div>
                    <div className="col-6 outline">
                        <p className='text-end text-space-dropdown '>$0.000.000</p>
                    </div>
                </div>
                <div className="card-docs-init  ">
                    <div className="card-body-docs col-6">
                        <p>Mantenimiento</p>
                    </div>
                    <div className="col-6 outline">
                        < p className='text-end text-space-dropdown'>$0.000.000</p>
                    </div>
                </div>
            </div>
            <div className='centrado'>
                <img src={Vline} className="line-data-goal centrado" alt="" />
            </div>
            <br />







        </div>
    )
}

export default Notification;