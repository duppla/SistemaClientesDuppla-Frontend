import React, { useState } from 'react'

import './../custumer/inicio.css'
import { Link } from 'react-router-dom';

import Idupplanaranja from "../../src/img/Idupplanaranja.png";
import Iperfil from "../../src/img/iconoperfil.png"
import Istatec from "../../src/img/Istatec.png";
import Istatem from "../../src/img/Istatem.png";
import Istaten from "../../src/img/Istaten.png";
import Iconpago from "../../src/img/Iconpago.png";

import Igendacita from "../../src/img/Iagendacita.svg";
import Iayuda from "../../src/img/Iayuda.svg";
import Ihistorialpago from "../../src/img/Ihistorialpago.svg";
import Imantenimiento from "../../src/img/Imantenimiento.svg";
import Vline from "../../src/img/Vline.svg";
import Ipagofac from "../../src/img/Iconmodalpago.svg";
import Ipagoadm from "../../src/img/Iconmodalpagoadm.svg";


import Progressbar from './../custumer/Progressbar';
import Navbarcustumer from './Navbarcustumer';
import Logout from '../../src/componentes/pages/Logout'










function Inicio() {

    // Función fecha del día actual

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let fecha = `${dd}/${mm}/${yyyy}`;



    const value = 50;
    const maxValue = 100;
    const color = '#3e98c7';



    const [progress, setProgress] = useState(15);

    return (
        <div className=" container-fluid continer-inicio">
            <div className="profile">
                <div className="row contenedor-img-duppla">
                    <img src={Idupplanaranja} className=" img-duppla" alt="" />
                </div>
                <div className="col-4 ">
                    <Link to='/profile' className="link-styles"> <img src={Iperfil}
                        className="  img-user"
                        alt="perfil" />
                    </Link>
                </div><hr className="hr-position" />
                <div className="col-8  card-perfil-datos">
                    <div className="card-body">
                        <h5 className="card-title card-home text-white" > María Fernanda Caicedo{ }</h5>
                        <p className="text-orange">{fecha}</p>
                    </div>
                </div>
            </div>
            {/*Sección grafica- semi-donut*/}
            <div className='container-progress '>
                <div className='progress-section'>
                    <div className='title-init'>
                        <b><h3 className='title-init-progressbar'>Actividad mensual</h3></b>
                    </div>
                    <br />
                    {/*componente de estados*/}
                    <div className="centrado  container-fluid">
                        <div className='prueba-dunut'>
                           {/* <Logout/>*/}
                            
                            <Progressbar />
                        </div>
                    </div>
                    <div className="card-docs-init  ">
                        <div className="col-6">
                            <p></p>
                        </div>
                        <div className="col-6 ">
                            <p></p>
                        </div>
                    </div>

                    {/*Pago mínimo */}
                    <div className="card-docs-init ">
                        <div className="card-body-docs col-1">
                            <img src={Istatec} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 ">
                            Pago mínimo
                        </div>
                        <div className="col-4  ">
                            $1,694,150
                        </div>
                    </div>
                    {/*Abono inmueble */}
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-1">
                            <img src={Istatem} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8">
                            Abono inmueble
                        </div>
                        <div className="col-4 outline">
                            $1,865,250
                        </div>
                    </div>
                    {/*Meta mensual */}
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-1">
                            <img src={Istaten} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 ">
                            Meta mensual
                        </div>
                        <div className="col-4 outline">
                            <p>$1,900,000</p>
                        </div>
                    </div>
                </div>

            </div>
            {/*Sección dropdown Mes*/}
            <div className='dropdown'>
                <div className="card-dropdown ">
                    <div className='col-2'>
                        <h6>Febrero</h6>
                    </div>
                    <div className=" col-2 icon-drop ">
                        <div className="btn-group ">
                            <button type="button" className="btn  dropdown-toggle  " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-xxl-end row dropdown-menu-init">
                                <br />
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Factura</p>
                                    </div>
                                    <div className="col-6 outline">
                                        <p>#02</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Costo financiero</p>
                                    </div>
                                    <div className="col-6 outline">
                                        <p>$1,900,000</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Gastos</p>
                                    </div>
                                    <div className="col-6 outline">
                                        <p>$22,165</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Abono sugerido</p>
                                    </div>
                                    <div className="col-6 outline">
                                        <p>$277,408</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Meta mes a mes</p>
                                    </div>
                                    <div className="col-6   outline">
                                        <p>$1,900,000</p>
                                    </div>
                                </div>
                                <br />
                                <li>
                                    <button className=" btn btn-primary " type="button">Pagar</button>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
            {/*componente pago*/}
            <div className="row centrado" >
                <div className="col-2 btn input-group btn-pago-custumer centrado-btn " width="400px" height="68px" >
                    <img src={Iconpago} className="img-btn-pagos-custumer" alt="" width="32px" height="32px" />
                    <button type="button" id="" className="btn btn-cerrar text-white " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <h5>Pagar factura</h5>
                    </button>
                </div>
                {/*Modal */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="btn-modal-cerrar">
                                <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body centrado">
                                <div className='btn-modal-pago'>
                                    <Link to='/pagos'>
                                        <button type="button" className="btn " data-bs-dismiss="modal" aria-label="Close">
                                            <div>
                                                <img src={Ipagofac} className="" alt="" width="32px" height="32px" />
                                            </div>
                                            <div>
                                                <p className=' text-blue-modal'><b>Pago factura</b></p>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="modal-body centrado">
                                <div className='btn-modal-pago'>
                                    <Link to='/pagos'>
                                        <button type="button" className="btn " data-bs-dismiss="modal" aria-label="Close">
                                            <div>
                                                <img src={Ipagoadm} className="" alt="" width="32px" height="32px" />
                                            </div>
                                            <div>
                                                <p className=' text-blue-modal'><b>Pago administración</b></p>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className='centrado'>
                <img src={Vline} className="line-custumer centrado" alt="" />
            </div>
            {/*componentes de menú*/}
            <div className='container-fluid container-btns centrado'>
                <div className="card-docs-init centrado ">
                    <div className=" col-3">
                        <Link to='/pagos'><img src={Ihistorialpago} className="  warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        </Link>
                        <p className='text-btn-custuner-menu'>Historial
                            de pago</p>
                    </div>
                    <div className=" col-3 ">
                        <img src={Iayuda} className="  warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p className='text-btn-custuner-menu'>Tengo un problema</p>
                    </div>
                    <div className="col-3 outline">
                        <img src={Igendacita} className="  warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p className='text-btn-custuner-menu'>Agendar una cita</p>
                    </div>
                    <div className="col-3 ">
                        <img src={Imantenimiento} className=" warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p className='text-btn-custuner-menu'>Mantenimiento </p>

                    </div>
                </div>

            </div>
            {/*componente navbar fijo*/}
            <div>
                <Navbarcustumer />
            </div>





        </div>
    )
}

export default Inicio;