import React, {useState} from 'react'

import './../custumer/inicio.css'
import { Link } from 'react-router-dom';
import Duppla_logotipo from "../../src/img/Duppla_Logotipo_V2.png";
import Iperfilcustumer from "../../src/img/Iperfilcustumer.png"
import Istateb from "../../src/img/Istateb.png";
import Istatem from "../../src/img/Istatem.png";
import Istaten from "../../src/img/Istaten.png";
import Iconpago from "../../src/img/Iconpago.png";
import Iprogresbar from "../../src/img/Iprogresbar.png";
import Igendacita from "../../src/img/Iagendacita.svg";
import Iayuda from "../../src/img/Iayuda.svg";
import Ihistorialpago from "../../src/img/Ihistorialpago.svg";
import Imantenimiento from "../../src/img/Imantenimiento.svg";


import ProgressBar from './../componentes/pages/Logout';









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

            <div className="profile-inicio container-fluid">
                <div className="row">
                    <img src={Duppla_logotipo} className=" img-duppla" alt="" />
                </div>
                <div className="col-4 ">
                    <Link to='/profile' className="link-styles"> <img src={Iperfilcustumer}
                        className="  img-user"
                        alt="perfil" />
                    </Link>
                </div><hr className="hr-init" />
                <div className="col-8  card-perfil-datos">
                    <div className="card-body">
                        <h5 className="card-title card-home text-green-init" >María Fernanda Caicedo</h5>
                        <p className="text-blue-init">{fecha}</p>
                    </div>
                </div>
            </div>
            {/*Sección progress-bar*/}
            <div className='container-progress '>
                <div className='progress-section'>
                    <div className='title-init'>
                        <b><h1 className='title-init-progressbar  '>Actividad mensual</h1></b>
                    </div>

                    {/*componente de estados*/}
                    <div className="centrado  container-fluid">
                        {/*<div className="row ">

                            <img src={Iprogresbar} className="progres-img" alt="  " />


    </div>*/}

                        <div>
                            <ProgressBar value={value} maxValue={maxValue} color={color} />
                        </div>
                   
                    </div>
                    {/*Pago mínimo */}
                    <div className="card-docs-init ">
                        <div className="card-body-docs col-1">
                            <img src={Istaten} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-space">
                            <b>Pago mínimo</b>
                        </div>
                        <div className="col-4 ">
                            $1,694,150
                        </div>
                    </div>
                    {/*Abono inmueble */}
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-1">
                            <img src={Istateb} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-space">
                            Abono inmueble
                        </div>
                        <div className="col-4 outline">
                            $1,694,150
                        </div>
                    </div>
                    {/*Meta mensual */}
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-1">
                            <img src={Istatem} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-space">
                            <b>Meta mensual</b>
                        </div>
                        <div className="col-4 outline">
                            <p>$1,694,150</p>
                        </div>
                    </div>
                </div>

            </div>
            {/*Sección dropdown Mes*/}
            <div className='dropdown'>
                <div className="card-docs-m  ">
                    <div className='col-2'>
                        <h5>Mes</h5>
                    </div>

                    <div className=" col-8 ">
                        <button type="button" class="btn dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            <small >Mes actual</small>
                        </button>
                        <div className=" dropdown-menu dropdown-menu-init  " >
                            <ul >
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/*componente pago*/}

            <div className="btn btn-init-pago  centrado-btn  " >
                <img src={Iconpago} className=" img-ingreso" id="btnIngresoFacebook" alt="ingreso google" width="32px" height="32px" />
                <div className='text-white'>Pagar factura</div>

            </div>

            <hr />

            <div className='container-fluid container-btns'>
                <div className="card-docs-init   ">
                    <div className=" col-3">
                        <img src={Ihistorialpago} className="  warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p>Historial
                            de pago</p>
                    </div>
                    <div className=" col-3 ">
                        <img src={Iayuda} className="  warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p>Tengo un problema</p>
                    </div>
                    <div className="col-3 outline">
                        <img src={Igendacita} className="  warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p>Agendar una cita</p>
                    </div>
                    <div className="col-3 ">
                        <img src={Imantenimiento} className=" warning font-medium-2 mr-2" alt="" height='60px' width='60px' />
                        <p>Mantenimien to </p>

                    </div>
                </div>

            </div>












        </div>
    )
}

export default Inicio;