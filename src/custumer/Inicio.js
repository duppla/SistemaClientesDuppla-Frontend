import React, { useState, createContext, useEffect, useContext } from "react";
import './../custumer/inicio.css'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../src/context/Contextauth";

import Idupplanaranja from "../../src/img/Idupplanaranja.png";
import Iperfil from "../../src/img/iconoperfil.png"
import Istatec from "../../src/img/Istatec.png";
import Istatem from "../../src/img/Istatem.png";
import Istateb from "../../src/img/Istateb.png";
import Istaten from "../../src/img/Istaten.png";
import Iconpago from "../../src/img/Iconpago.png";

import Igendacita from "../../src/img/Vagendar.svg";
import Iayuda from "../../src/img/Vtengoproblemas.svg";
import Ihistorialpago from "../../src/img/Vhistoriall.png";
import Imantenimiento from "../../src/img/Vmantenimiento.svg";
import Iajustemeta from "../../src/img/Vajustarmeta.svg";
import Vline from "../../src/img/Vline.svg";
import Vperfil from "../../src/img/vperfil.svg";
import Vlogout from "../../src/img/vlogout.svg";
import Vrectangulo from "../../src/img/vrectanguler.svg";
import Vayuda from "../../src/img/Vayudacus.svg";
import Vmoney from "../../src/img/money.png";
import Ireturn from "../../src/img/Ireturn.png"
import Vinmueble from "../../src/img/vinmueble.svg"
import Vdocs from "../../src/img/vdocs.svg"

//import Speedometer from './Speedometer';
import { useNavigate } from "react-router-dom";
import numeral from "numeral";
import GrafictHome from "./GrafictHome";
import IconToolytip from "../../src/img/IconTooltip.svg";




function Inicio() {

    const navigate = useNavigate();

    useEffect(() => {
        // This will run only once when the component loads
        const estado = localStorage.getItem('estado');
        if (estado != "true") {
            navigate('/')
        }

    }, []);

    // Función fecha del día actual

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let fecha = `${dd}/${mm}/${yyyy}`;


    //Función fecha de corte

    let fechacorte = new Date(),
        date = '05' + '/' + (fechacorte.getMonth() + 1) + '/' + fechacorte.getFullYear();


    // Función fecha del mes actual
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const d = new Date();
    let mes = monthNames[d.getMonth()];

    // trae la función  salida, que se declaro en el contexto para implementar aquí,

    const { logout } = useContext(AuthContext);
    const handleLogoutCustumer = () => {
        logout();
    };

    // Trae los datos del API 
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

    //url boton de pago
    const btnpago = dataCustumer.linkPago;
    

    //formateo de los datos en pagos
    const formatted = dataCustumer.pagoMinimo;
    const cannon = dataCustumer.canon;
    const gastos = dataCustumer.gastos;
    const reservas = dataCustumer.reservas;
    const administracion = dataCustumer.administracion;


    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    const formatterPagoMinimo = formatter.format(formatted);
    const formatterCannon = formatter.format(cannon);
    const formatterGastos = formatter.format(gastos);
    const formatterReservas = formatter.format(reservas);
    const formatterAdministracion = formatter.format(administracion);



    {/*Función que cambia el nobre de usurio a minuscula */ }

    function convertirAMinusculas(texto) {
        return texto.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase());
    }

    function btnLinkPago() {

        if (btnpago == null || btnpago == "" || btnpago == undefined) {
            return <div className="col-2 btn input-group btn-pago-custumer centrado-btn btn-disabled" width="400px" height="68px">
                <img src={Iconpago} className="img-btn-pagos-custumer btn-disabled " alt="" width="32px" height="32px" />
                <button className="btn btn-custumer-disabled btn-disabled text-white" type="button" disabled>
                    <h5>Pagar factura</h5>
                </button>
            </div>

        } else {
            return <div className="col-2 btn input-group btn-pago-custumer centrado-btn " width="400px" height="68px" >
                <a className="links text-white"
                    href={btnpago} >
                    <img src={Iconpago} className="img-btn-pagos-custumer" alt="" width="32px" height="32px" />
                    <button type="button" id="" className="btn btn-cerrar text-white " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <h5>Pagar factura</h5>
                    </button>
                </a>
            </div>

        }

    }

    // estados y funciones que manejan los tooltips
    const [tooltips, setTooltips] = useState([]);

    const handleMouseEnter = (index) => {
        setTooltips((prevState) => {
            const updatedTooltips = [...prevState];
            updatedTooltips[index] = true;
            return updatedTooltips;
        });
    };

    const handleMouseLeave = (index) => {
        setTooltips((prevState) => {
            const updatedTooltips = [...prevState];
            updatedTooltips[index] = false;
            return updatedTooltips;
        });
    }

    const GrafictPie = () => {
        const fecha1 = new Date();
        const fecha2 = new Date(dataCustumer.fechaEntrega);
        const diffYears = 1 + (fecha2.getFullYear() - fecha1.getFullYear()) * -1;
        //console.log(diffYears); // Número de años entre las dos fechas 

        let metaPorcentaje = 30;
        let years = 5;
        let metaAnual = (metaPorcentaje - dataCustumer.participacion) / years;
        let porcentajeActual = dataCustumer.participacion + (metaAnual * diffYears);
        let diferenciaMeta =  porcentajeActual-metaAnual;
        let participacionacumulada = (dataCustumer.participacion / porcentajeActual) * 100;
    

        return porcentajeActual
    }

    const GrafictActual = () => {
        const fecha1 = new Date();
        const fecha2 = new Date(dataCustumer.fechaEntrega);
        const diffYears = 1 + (fecha2.getFullYear() - fecha1.getFullYear()) * -1;
        //console.log(diffYears); // Número de años entre las dos fechas 

        let metaPorcentaje = 30;
        let years = 5;
        let metaAnual = (metaPorcentaje - dataCustumer.participacion) / years;
        let porcentajeActual = dataCustumer.participacion + (metaAnual * diffYears);
        let diferenciaMeta =  porcentajeActual-metaAnual;
       
    diferenciaMeta = diferenciaMeta.toFixed(1); // Limitar a 1 decimal
    diferenciaMeta = parseFloat(diferenciaMeta); 
        let participacionacumulada = (dataCustumer.participacion / porcentajeActual) * 100;
     

        return diferenciaMeta
    }

    const GrafictMeta = () => {

        const fecha1 = new Date();
        const fecha2 = new Date(dataCustumer.fechaEntrega);
        const diffYears = 1 + (fecha2.getFullYear() - fecha1.getFullYear()) * -1;
        //console.log(diffYears); // Número de años entre las dos fechas 

        let metaPorcentaje = 30;
        let years = 5;
        let metaAnual = (metaPorcentaje - dataCustumer.participacion) / years;
        let porcentajeActual = dataCustumer.participacion + (metaAnual * diffYears);
        let participacionacumulada = (dataCustumer.participacion / porcentajeActual) * 100;


        return metaAnual
    }
    //console.log("aqui esta" + GrafictPie());

    return (
        <div className=" container-fluid continer-inicio">
            <div className="profile-custumer">
                <div className="row container-first-elements ">
                    <div className="col-6 ">
                        <img src={Idupplanaranja} className=" img-duppla-custumer" alt="" />
                    </div>
                    {/*Navbar para la campana de notificaciones */}
                    <div className="col-6 bell ">
                        <nav className="navbar ">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbarr"
                                    aria-controls="offcanvasNavbarr">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="bell" width="24" height="24" viewBox="0 0 24 24" ><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
                                </button>
                                <div className="offcanvas offcanvas-bottom navbar-move-bell" tabindex="-1" id="offcanvasNavbarr"
                                    aria-labelledby="offcanvasNavbarLabell">
                                    <div className="offcanvas-header ">
                                        <h5 className="offcanvas-title" id="offcanvasNavbarLabell">Notificaciones</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="img-navbar-home">
                                        <img src={Vline} className="line-custumer centrado" data-bs-dismiss="offcanvas" alt="" />
                                    </div>
                                    <div className="offcanvas-body">
                                        <p>{dataCustumer.mensaje}</p>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/*Navbar para el perfil del usuario */}
                <div className="row container-second-elements  ">
                    <div className="col-4 ">
                        <Link to='/profile' className="link-styles"> <img src={Iperfil}
                            className=" img-user-custumer"
                            alt="perfil" />
                        </Link>
                        <div className="vertical-line"></div>
                      
                    </div>
                    <div className="col-6  card-perfil-datos-customer">
                        <div className="card-body">
                            <p className="card-title card-home text-white-home" >{dataCustumer.nombre && <p className="text-name-home">{convertirAMinusculas(dataCustumer.nombre)}</p>}</p>
                            <p className="text-orange">{fecha}</p>
                        </div>
                    </div>
                    {/*Navbar custumer */}
                    <nav className=" col-2 navbar  ">
                        <div className="icon-navbar-customer">
                            <button className="navbar-toggler border-none" 
                            type="button"
                             data-bs-toggle="offcanvas" 
                             data-bs-target="#offcanvasNavbar" 
                             aria-controls="offcanvasNavbar">
                                <svg xmlns="http://www.w3.org/2000/svg" className="menu-navbar-customer" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                            </button>
                            <div className="">
                                <div className=" offcanvas offcanvas-bottom navbar-container navbar-move " id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className="offcanvas-body ">
                                        <div className="img-navbar-home">

                                            <img src={Vrectangulo} className=" img-navbar centrado " data-bs-dismiss="offcanvas" alt="" />
                                        </div>
                                        <ul className="navbar-nav " >
                                            <li className="nav-item ">
                                                <Link to="/profile">
                                                    <div className="row ">
                                                        <div className="col-8 outline ">
                                                            <div className="row">
                                                                <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                    <div className="card-body col-1  img-state-propety">
                                                                        <img src={Vperfil} className="" alt="" height='24px' width='24px' />
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
                                                <Link to ="/pagos" className="links text-white"
                                                    >
                                                    <div className="row ">
                                                        <div className="col-8 outline ">
                                                            <div className="row">
                                                                <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                                                    <div className="card-body col-1  img-state-propety">
                                                                        <img src={Vmoney} className="" alt="" height='24px' width='24px' />
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
                                            {/*  <li className="nav-item">
                                            <Link to="/historial">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">
                                                                <img src={Ihistorialpago} className="" alt="" height='18px' width='18px' />
                                                                </div>
                                                             
                                                                <div className="col-10 outline">
                                                                    <p className=" text-docs"><b >Historial</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>*/}
                                            <li className="">
                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <a className="links  "
                                                            href="https://api.whatsapp.com/send?phone=573152559261">
                                                            <div className="row">
                                                                <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                    <div className="card-body col-1  img-state-propety">
                                                                        <img src={Vayuda} className="" alt="" height='24px' width='24px' />
                                                                    </div>
                                                                    <div className="col-10 outline">
                                                                        <p className=" text-docs"><b>Ayuda</b></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item  nav-section">
                                                <Link to="/documents">
                                                    <div className="row ">
                                                        <div className="col-8 outline ">
                                                            <div className="row">
                                                                <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                                                    <div className="card-body col-1  img-state-propety">
                                                                        <img src={Vdocs} className="" alt="" height='24px' width='24px' />
                                                                    </div>
                                                                    <div className="col-10 outline">
                                                                        <p className=" text-docs"><b >Documentos</b></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="nav-item  nav-section">
                                                <Link to="/property">
                                                    <div className="row ">
                                                        <div className="col-8 outline ">
                                                            <div className="row">
                                                                <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                                                    <div className="card-body col-1  img-state-propety">
                                                                        <img src={Vinmueble} className="" alt="" height='24px' width='24px' />
                                                                    </div>
                                                                    <div className="col-10 outline">
                                                                        <p className=" text-docs"><b >Inmueble</b></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="nav-item">

                                                <div className="row ">
                                                    <div className="col-8 outline ">
                                                        <div className="row">
                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                <div className="card-body col-1  img-state-propety">
                                                                    <img src={Vlogout} className="" alt="" height='24px' width='24px' />
                                                                </div>
                                                                <div className="col-10 outline" onClick={handleLogoutCustumer}>
                                                                    <p className=" text-docs"><b >Cerrar sesión</b></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/*Sección grafica- semi-donut*/}
            <div className=" container-inicio-graph container-fluid ">
                <div className='grafict-container-inicio-one  '>
                    <div className='title-init'>
                        <b><p className='title-init-progressbar'>Actividad</p></b>
                    </div>
                    <div className='centrado'>
                        <GrafictHome />
                    </div>
                    <div className='sobrepuesto'>
                        <div>
                            <h1 className="d-flex-justify-content-center">{GrafictPie()}%</h1>
                        </div>
                        <div>
                            <p className="d-flex-justify-content-center">
                                Meta
                            </p>
                        </div>
                    </div>
                    <div className="card-docs-grafic  ">
                        <div className="col-6 row prueba-inicio-espacio-u">
                            <div className="col-2 prueba-espacio-img-verde">
                                <img src={Istateb} className="" alt="" height='12px' width='12px' />
                            </div>
                            <div className="col-4 ">
                                <p className="text-inicio-gra">Participación inicial</p>
                            </div>
                        </div >
                        <div className="col-4 row prueba-inicio-espacio-u">
                            <div className="col-2">
                            </div>
                            <div className="col-2 ">
                            </div>
                        </div >
                        <div className="col-6 row prueba-inicio-espacio-u">
                            <div className="col-2 ">                               
                            </div>
                            <div className="col-4 ">
                                <p className="text-inicio-gra ">{dataCustumer.participacion}%</p>
                            </div>
                        </div >
                    </div>
                    <div className="card-docs-grafic-two">
                        <div className="col-6 row prueba-inicio-espacio-u">
                            <div className="col-2 prueba-espacio-img-verde">
                            <img src={Istatec} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                            </div>
                            <div className="col-4 ">
                                <p className="text-inicio-gra">Haz comprado</p>
                            </div>
                        </div >
                        <div className="col-4 row prueba-inicio-espacio-u">
                            <div className="col-2">
                            </div>
                            <div className="col-2 ">
                            </div>
                        </div >
                        <div className="col-6 row prueba-inicio-espacio-u">
                            <div className="col-2 ">                                
                            </div>
                            <div className="col-4 ">
                                <p className="text-inicio-gra ">{GrafictActual()}%</p>
                            </div>
                        </div >
                    </div>
                    <div className="card-docs-grafic-two">
                        <div className="col-6 row prueba-inicio-espacio-u">
                            <div className="col-2 prueba-espacio-img-verde">
                            <img src={Istatem} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                            </div>
                            <div className="col-4 ">
                                <p className="text-inicio-gra">Faltante meta</p>
                            </div>
                        </div >
                        <div className="col-4 row prueba-inicio-espacio-u">
                            <div className="col-2">
                            </div>
                            <div className="col-2 ">
                            </div>
                        </div >
                        <div className="col-6 row prueba-inicio-espacio-u">
                            <div className="col-2 ">                                
                            </div>
                            <div className="col-4 ">
                                <p className="text-inicio-gra ">{GrafictMeta()}%</p>
                            </div>
                        </div >
                    </div>
                    <br />
                    <div className='horizontal-line'>                        
                    </div>
                    <br />
                    <div className="card-docs-init-customer ">
                        <div className="card-body-docs col-6">
                            <p>Pago mínimo</p>
                        </div>
                        <div className="col-6 outline text-dropdown-right">
                            <p className='text-end text-space-goal-data '>${formatterPagoMinimo}</p>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
            {/*Meta mensual 
                    <div className="card-docs-init-customer  ">
                        <div className="card-body-docs col-1">
                            <img src={Istatem} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                        </div>
                        <div className="card-body col-8 text-number-custumer">
                            Meta mensual
                        </div>
                        <div className="col-4 outline text-number-custumer">
                            <p>$1,900,000</p>
                        </div>
                    </div>*/}

            {/*Sección dropdown Mes*/}

            <div className="accordion accordion-custumer " id="accordionExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <div className=" text-start " id="basic-addon4"><h5>{mes}</h5></div>
                            <div className="form-text text-end text-space-custumer" id="basic-addon4">Fecha de corte: {date}</div>
                        </button>
                    </h2>
                    {/*---------------------------------------------------------------------------------------------------------------------------------*/}
                    <div className="card-payment-home-custumer ">
                        <div className="collapse" id="collapseExample">
                            <div className="card ">
                                <div className="card card-new" >
                                    <div className="d-grid">
                                        <br />
                                        <div className="card-docs-init  ">
                                            <div className="card-body-docs-c  row col-6">
                                                <div className=" col-5">
                                                    <p className="space-title-dop">Arrendamiento</p>
                                                </div>
                                                <div className="col-2 tooltip-customer">
                                                    <div
                                                        className="tooltip-container"
                                                        onMouseEnter={() => handleMouseEnter(0)}
                                                        onMouseLeave={() => handleMouseLeave(0)}
                                                    >
                                                        <img src={IconToolytip} className="warning font-medium-2 mr-2" alt="" height='20px' width='20px' />
                                                        {tooltips[0] && <div className="tooltip ">Pago mensual que realizas por el uso del inmueble</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 outline text-dropdown-right">
                                                <p className='text-end text-space-card-c '>${formatterCannon}</p>
                                            </div>
                                        </div>
                                        <div className="card-docs-init  ">
                                            <div className="card-body-docs-c  row col-6">
                                                <div className=" col-5">
                                                    <p className="space-title-dop">Gastos</p>
                                                </div>
                                                <div className="col-2 tooltip-customer">
                                                    <div
                                                        className="tooltip-container"
                                                        onMouseEnter={() => handleMouseEnter(1)}
                                                        onMouseLeave={() => handleMouseLeave(1)}
                                                    >
                                                        <img src={IconToolytip} className="  warning font-medium-2 mr-2" alt="" height='20px' width='20px' />
                                                        {tooltips[1] && <div className="tooltip">Pago mensual que corresponde de seguro, impuesto predial, fiducia y los honorarios de duppla.</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 outline">
                                                <p className='text-end text-space-card-c '>${formatterGastos}</p>
                                            </div>
                                        </div>
                                        <div className="card-docs-init  ">
                                            <div className="card-body-docs-c row col-6">

                                                <div className=" col-5">
                                                    <p className="space-title-dop">Reservas</p>
                                                </div>
                                                <div className="col-2 tooltip-customer">
                                                    <div
                                                        className="tooltip-container"
                                                        onMouseEnter={() => handleMouseEnter(2)}
                                                        onMouseLeave={() => handleMouseLeave(2)}
                                                    >
                                                        <img src={IconToolytip} className="  warning font-medium-2 mr-2" alt="" height='20px' width='20px' />
                                                        {tooltips[2] && <div className="tooltip">Pago mensual que corresponde a un ahorro que hacemos para cubrir mantenimientos y reparaciones.</div>}
                                                    </div>
                                                </div>


                                            </div>
                                            <div className="col-6 outline">
                                                <p className='text-end text-space-card-c'>${formatterReservas}</p>
                                            </div>
                                        </div>
                                        <div className="card-docs-init  ">
                                            <div className="card-body-docs-c row col-6">
                                                <div className=" col-5">
                                                    <p className="space-title-dop">Administración</p>
                                                </div>
                                                <div className="col-2 tooltip-customer">
                                                    <div
                                                        className="tooltip-container"
                                                        onMouseEnter={() => handleMouseEnter(3)}
                                                        onMouseLeave={() => handleMouseLeave(3)}
                                                    >
                                                        <img src={IconToolytip} className="  warning font-medium-2 mr-2" alt="" height='20px' width='20px' />
                                                        {tooltips[3] && <div className="tooltip">Pago obligatorio para cubrir gastos de seguridad, aseo, mantenimientos, etc. del edificio o conjunto donde vives.</div>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 outline">
                                                < p className='text-end text-space-card-c'>${formatterAdministracion}</p>
                                            </div>
                                        </div>

                                        <div className="card-docs-init  ">
                                            <div className="card-body-docs-c col-6">
                                                <p className="text-blue"><b>Total</b></p>
                                            </div>
                                            <div className="col-6 outline">
                                                < p className='text-end text-space-card-c text-blue'><b>${formatterPagoMinimo}</b></p>
                                            </div>
                                        </div>
                                        {/*<div className="input  input-pago">
                                            <span className="span-pago" id="inputPagos">Paga otro valor</span>
                                            <input type="number" className="form-control" placeholder="$" aria-label="Username" aria-describedby="basic-addon1" />
                </div>*/}
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*componente pago*/}
            <div className="row centrado" >
                {/* */}

                <div className="col-2 btn input-group btn-pago-custumer centrado-btn " width="400px" height="68px" >
                    <a className="links text-white"
                        href='/pagos' >
                        <img src={Iconpago} className="img-btn-pagos-custumer" alt="" width="32px" height="32px" />
                        <button type="button" id="" className="btn  text-white " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <h5>Pagar </h5>
                        </button>
                    </a>
                </div>
            </div>
            {/*Linea de división */}
            <div className='centrado'>
                <img src={Vline} className="line-custumer centrado" alt="" />
            </div>
            {/*componentes de menú*/}
            <div className='container-fluid  centrado'>
                <div className='container-btn-wrapper'>
                    <div className='space-btn-wrapper'>
                        <a className="links"
                            href="https://api.whatsapp.com/send?phone=573152559261">
                            <div className='btn-wrapper'>
                                <img src={Imantenimiento} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                                <br />
                            </div>
                        </a>
                        <div>
                            <p className='text-btn-wrapper'>Mantenimiento </p>
                        </div>
                    </div>

                    {/*<div className='space-btn-wrapper'>
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
                    </div>*/}
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


                    {/* <div className='space-btn-wrapper'>
                        <Link to='/Ajustemeta' className='links'>
                            <div className='btn-wrapper'>
                                <img src={Iajustemeta} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                                <br />
                            </div>
                        </Link>
                        <div>
                            <p className='text-btn-wrapper'>Ajustar meta </p>
                        </div>
                    </div>*/}
                    {/* <div className='space-btn-wrapper'>
                        <Link to='/historial' className='links'> <div className='btn-wrapper'>
                            <img src={Ihistorialpago} className=" img-btn-wrapper-history warning font-medium-2 mr-2" alt="" height='24px' width='24px' />
                            <br />
                        </div>
                        </Link>
                        <div>
                            <p className='text-btn-wrapper links'>Historial de pago </p>
                        </div>
                    </div> */}

                </div>
            </div>



        </div >
    )
}

export default Inicio;