import React, { useState, createContext, useEffect } from "react";

import './../custumer/inicio.css'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../src/context/Contextauth";

import Idupplanaranja from "../../src/img/Idupplanaranja.png";
import Iperfil from "../../src/img/iconoperfil.png"
import Istatec from "../../src/img/Istatec.png";
import Istatem from "../../src/img/Istatem.png";
import Istaten from "../../src/img/Istaten.png";
import Iconpago from "../../src/img/Iconpago.png";

import Igendacita from "../../src/img/Vagendar.svg";
import Iayuda from "../../src/img/Vtengoproblemas.svg";
import Ihistorialpago from "../../src/img/Vhistoriall.png";
import Imantenimiento from "../../src/img/Vmantenimiento.svg";
import Iajustemeta from "../../src/img/Vajustarmeta.svg";
import Vline from "../../src/img/Vline.svg";

import Speedometer from './Speedometer';
import { useNavigate } from "react-router-dom";
import numeral from "numeral";




function Inicio() {

    const navigate = useNavigate();

    useEffect(() => {
        // This will run only once when the component loads
        const estado = localStorage.getItem('estado');
        if (estado !== '"Cerrada ganada"') {
            console.log(estado);
            navigate('/')
        }

    }, []);

    // Función fecha del día actual

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let fecha = `${dd}/${mm}/${yyyy}`;

    // trae la función  salida, que se declaro en el contexto para implementar aquí

    {/*} const { logout } = useContext(AuthContext);
       const handleLogout = () => {
     logout();
   };*/}

    const [dataCustumer, setDataCustumer] = useState({});
    const [formattedDataCustumer, setFormattedDataCustumer] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };

        fetch('https://sistema-duppla-backend.herokuapp.com/users/homeCustomer', options)
            .then(response => response.json())
            .then(response => {
                setDataCustumer(response)
                setFormattedDataCustumer(numeral(dataCustumer).format('0,0.00'))
            })

            .catch(err => console.error(err));
    }, []);
    //formateo de los datos de valor inmueble duppla
    const formatted = dataCustumer.pagoMinimo;
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const formatterPagoMinimo = formatter.format(formatted);




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
                <div className="col-6  card-perfil-datos">
                    <div className="card-body">
                        <h5 className="card-title card-home text-white" >{dataCustumer.nombre}</h5>
                        <p className="text-orange">{fecha}</p>
                    </div>
                </div>
                {/*Navbar custumer */}
                <nav className=" col-2 navbar ">
                    <div className="container-fluid ">
                        <button className="navbar-toggler border-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div className="">
                            <div className=" offcanvas offcanvas-end navbar-container " id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-body ">
                                    <ul className="navbar-nav " >
                                        <li className="nav-item ">
                                            <Link to="/profile">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">

                                                                </div>
                                                                <div className="col-10 outline">
                                                                    <p className=" text-docs "><b >Perfil </b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item  nav-section">
                                            <Link to="/pagos">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">

                                                                </div>
                                                                <div className="col-10 outline">
                                                                    <p className=" text-docs"><b >Pagar factura</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/historial">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">

                                                                </div>
                                                                <div className="col-10 outline">
                                                                    <p className=" text-docs"><b >Historial</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link to="/inicio">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">

                                                                </div>
                                                                <div className="col-10 outline">
                                                                    <p className=" text-docs"><b>Ayuda</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">

                                                                </div>
                                                                <div className="col-10 outline" >
                                                                    <p className=" text-docs"><b >Cerrar sesión</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
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

                            <Speedometer />

                        </div>
                    </div>
                    <div className="card-docs-init centrado  ">
                        <div className="col-5">
                            <p>${formatterPagoMinimo}</p>
                        </div >
                        <div className='col-2'></div>
                        <div className="col-5  centrado">
                            <p>$1,900,000</p>
                        </div>
                    </div>

                    {/*Pago mínimo */}
                    <div className="card-docs-init ">
                        <div className="card-body-docs col-1">
                            <img src={Istatec} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-number-custumer  ">
                            Pago mínimo
                        </div>
                        <div className="col-4  text-number-custumer ">
                            ${formatterPagoMinimo}
                        </div>
                    </div>
                    {/*Meta mensual */}
                    <div className="card-docs-init  ">
                        <div className="card-body-docs col-1">
                            <img src={Istatem} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-number-custumer">
                            Meta mensual
                        </div>
                        <div className="col-4 outline text-number-custumer">
                            <p>$1,900,000</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*Sección dropdown Mes*/}
            <div className='dropdown'>
                <div className="card-dropdown ">
                    <div className='col-2'>
                        <p className='text-space-month' ><b>Febrero</b></p    >
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
                                    <div className="col-6 outline text-dropdown-right">
                                        <p className='text-end text-space-dropdown '>#02</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Costo financiero</p>
                                    </div>
                                    <div className="col-6 outline">
                                        <p className='text-end text-space-dropdown '>$1,900,000</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Gastos</p>
                                    </div>
                                    <div className="col-6 outline">
                                        <p className='text-end text-space-dropdown '>$22,165</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Abono sugerido</p>
                                    </div>
                                    <div className="col-6 outline">
                                        < p className='text-end text-space-dropdown'>$277,408</p>
                                    </div>
                                </div>
                                <div className="card-docs-init  ">
                                    <div className="card-body-docs col-6">
                                        <p>Meta mes a mes</p>
                                    </div>
                                    <div className="col-6   outline">
                                        <p className='text-end text-space-dropdown'>$1,900,000</p>
                                    </div>
                                </div>
                                <br />
                                <li className=' d-grid gap-2 d-md-flex justify-content-end'>
                                    <Link to='/pagos'>
                                        <button className=" btn btn-primary " type="button">Pagar</button>
                                    </Link>
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
                    <Link to='/pagos'>
                        <img src={Iconpago} className="img-btn-pagos-custumer" alt="" width="32px" height="32px" />
                        <button type="button" id="" className="btn btn-cerrar text-white " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <h5>Pagar factura</h5>
                        </button>
                    </Link>
                </div>
                {/*Modal 
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                </div>*/}
            </div>

            <div className='centrado'>
                <img src={Vline} className="line-custumer centrado" alt="" />
            </div>
            {/*componentes de menú*/}
            <div className='container-fluid  centrado'>
                <div className='container-btn-wrapper'>
                    <div className='space-btn-wrapper'>
                        <div className='btn-wrapper'>
                            <img src={Imantenimiento} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                            <br />
                        </div>
                        <div>
                            <p className='text-btn-wrapper'>Mantenimiento </p>
                        </div>
                    </div>
                    <div className='space-btn-wrapper'>
                        <a className="links text-white"
                            href="https://calendly.com/agendadaniel">
                            <div className='btn-wrapper'>

                                <img src={Igendacita} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                                <br />
                            </div>
                        </a>
                        <div>
                            <p className='text-btn-wrapper'>Agendar una cita </p>
                        </div>
                    </div>
                    <div className='space-btn-wrapper' >
                        <a className="links"
                            href="https://api.whatsapp.com/send?phone=573152559261">
                            <div className='btn-wrapper'>
                                <img src={Iayuda} className=" img-btn-wrapper-problem warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                                <br />
                            </div>
                        </a>
                        <div>
                            <p className='text-btn-wrapper'>Tengo un problema </p>
                        </div>
                    </div>
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
                        <Link to='/historial' className='links'> <div className='btn-wrapper'>
                            <img src={Ihistorialpago} className=" img-btn-wrapper-history warning font-medium-2 mr-2" alt="" height='24px' width='24px' />
                            <br />
                        </div>
                        </Link>
                        <div>
                            <p className='text-btn-wrapper links'>Historial de pago </p>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Inicio;