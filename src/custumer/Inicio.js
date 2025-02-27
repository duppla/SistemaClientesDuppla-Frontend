import React, { useState, createContext, useEffect, useContext } from "react";
import './../custumer/inicio.css'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../src/context/Contextauth";
import NavbarCustomer from "../Components/NavbarCustomer";

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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Button, Container, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip, Box } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from 'lottie-react';
import animationData from './../Components/loanding.json';
import ReactGA from 'react-ga';
import Grid from '@mui/material/Unstable_Grid2';
import { Balance } from "@mui/icons-material";



function Inicio() {

    useEffect(() => {
        // Envía un evento cuando el componente Docs se monta (se renderiza).
        ReactGA.pageview(window.location.pathname);
    }, []);

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


    const formatearFechaShort = (dueDate) => {
        const fecha = new Date(dueDate + 'T00:00:00-05:00'); // Añadir la hora y ajustar la zona horaria
        const opcionesFecha = { day: 'numeric', month: 'short' };
        const fechaFormateada = fecha.toLocaleDateString('es-CO', opcionesFecha).replace(' de', '').toLowerCase();
        return fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
    };


    // trae la función  salida, que se declaro en el contexto para implementar aquí,
    const { logout } = useContext(AuthContext);
    const handleLogoutCustumer = () => {
        logout();
    };

    /* Estado que maneja el loading generar */
    const [loading, setLoading] = useState(true);

    // Trae los datos del API 
    const [dataCustumer, setDataCustumer] = useState({});
    const [pendingPayments, setPendingPayments] = useState([]);
    const [formattedDataCustumer, setFormattedDataCustumer] = useState(null);
    const [balanceApi, setBalanceApi] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/homeCustomer`, options)
            .then(response => response.json())
            .then(response => {
                setDataCustumer(response)
                setFormattedDataCustumer(numeral(dataCustumer).format('0,0.00'))
                setLoading(false);

                const options2 = { method: 'GET', headers: { 'User-Agent': 'insomnia/2023.5.8' } };

                fetch('https://salesforce-gdrive-conn.herokuapp.com/deuda?customer=' + response.cedula, options2)
                    .then(response => response.json())
                    .then(response => {
                        setBalanceApi(response.balance)
                    })
                    .catch(err => console.error(err));
            })

            .catch(err => {
                console.error(err);
                setLoading(false);
            });
        // Segunda llamada a la API para 'pendingPayments'
        const optionsPendingPayments = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };
        fetch(`${process.env.REACT_APP_BACKEND_URL}/pagos/pendingPayments`, optionsPendingPayments)
            .then(response => response.json())
            .then(pendingPaymentsResponse => {
                setPendingPayments(pendingPaymentsResponse);

            })
            .catch(err => {
                console.error(err);
            });


    }, []);

    //url boton de pago
    const whatsappLink = dataCustumer.Link_whatsapp;

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
    const balanceformat = formatter.format(balanceApi);
    {/*Función que cambia el nobre de usurio a minuscula */ }

    function convertirAMinusculas(texto) {
        return texto.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase());
    }
    // Estados y funciones que manejan los tooltips
    const [tooltips, setTooltips] = useState([]);
    const handleMouseEnter = (index) => {
        setTooltips((prevState) => {
            const updatedTooltips = [...prevState];
            updatedTooltips[index] = true;
            ReactGA.event({
                'category': 'Clic',
                'action': `Clicked on tooltip `,
                'label': 'Tooltip',
            });

            return updatedTooltips;
        });
    };
    const handleMouseLeave = (index) => {
        setTooltips((prevState) => {
            const updatedTooltips = [...prevState];
            updatedTooltips[index] = false;
            ReactGA.event({
                'category': 'Clic',
                'action': `Clicked on tooltip `,
                'label': 'Tooltip',
            });
            return updatedTooltips;
        });
    }

    // Función que calcula el porcentaje de la meta anual      
    const GrafictPie = () => {
        const fecha1 = new Date();
        const fecha2 = new Date(dataCustumer.fechaEntrega);
        const diffYears = 1 + (fecha2.getFullYear() - fecha1.getFullYear()) * -1;
        let years = 5;
        let participacionInicialCustumer = dataCustumer.participacionInicial;
        let participacion= dataCustumer.participacion;

        if (participacionInicialCustumer > 0.3) {
            // Aplicar nuevas indicaciones cuando la participación inicial sea mayor a 30%
            const MetaTotal = participacionInicialCustumer + 10; // Sumar 10% a la participación inicial
            const metaAnual = (MetaTotal - participacionInicialCustumer) / years; // Dividir la participación inicial por 5 años

            // Resto del código que utiliza la nueva metaAnual calculada
            let porcentajeActual = Math.max(participacionInicialCustumer + (metaAnual * diffYears), participacion);


            return porcentajeActual;
        } else if (participacionInicialCustumer <= 0.15) {
            // Aplicar acciones cuando la participación inicial sea igual o menor al 15%
            let porcentajePeriodo = 30;
            let years = 5;
            let metaAnual = (porcentajePeriodo - participacionInicialCustumer) / years;
            let porcentajeActual = participacionInicialCustumer + metaAnual * diffYears;


            return porcentajeActual;
        }
    }
    // Función que calcula el porcentaje de la meta anual
    const GrafictMeta = () => {
        const grafictPieValue = GrafictPie();
        const participacionActual = dataCustumer.participacion;

        // Validar si el objetivo ya fue alcanzado
        if (participacionActual >= grafictPieValue) {
            return 0; // El objetivo ya fue alcanzado
        }

        let faltanteMeta = grafictPieValue - participacionActual;
        faltanteMeta = faltanteMeta.toFixed(1); // Limitar a 1 decimal
        faltanteMeta = parseFloat(faltanteMeta);

        return faltanteMeta;
    }
    //Función que calcula el porcentaje de la meta
    const dataGrafictT = () => {
        let porcentaje = dataCustumer.participacion - dataCustumer.participacionInicial;
        porcentaje = porcentaje.toFixed(1); // Limitar a 1 decimal
        porcentaje = parseFloat(porcentaje);

        return porcentaje;
    }
    const handleLinkClickPago = () => {
        // Envía un evento cuando se hace clic en un enlace de documento.
        ReactGA.event({
            'category': 'Clic',
            'action': `Clicked on Button Link: Pagos `,
            'label': 'Button',
        });
    };
    const handleLinkClickMenuMAH = () => {
        // Envía un evento cuando se hace clic en un enlace de documento.
        ReactGA.event({
            'category': 'Clic',
            'action': `Clicked on Button Link: Mantenimiento, Ayuda y Historial `,
            'label': 'Button',
        });
    };

    function NavbarClickMenu() {
        // Envía un evento cuando el componente Navbar se renderiza.
        ReactGA.event({
            'category': 'Component Interaction',
            'action': 'Item menu',
        });

    }



    return (
        <div className=" container-fluid ">
            <NavbarCustomer />

            {loading ? (<div className='loanding '>
                <div className='loanding-container'>
                    <h2 className='text-loandig '>Cargando...</h2>
                    <div className='text-loandig '
                    >
                        <div className='loanding-state-mui' /* style={{ width: '150px', height: '150px', background:'#F1FFEB' }} */>
                            <Lottie
                                animationData={animationData}
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>
            </div>) : (

                <div>
                    {/*Sección grafica- semi-donut*/}
                    <div className=" container-inicio-graph container-fluid ">
                        <div className='grafict-container-inicio-one  '>
                            <div className='title-init'>
                                <b><p className='title-init-progressbar'>Actividad periodo</p></b>
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
                                        Meta periodo
                                    </p>
                                </div>
                            </div>
                            <div className="card-docs-grafic  ">
                                <div className="col-6 row prueba-inicio-espacio-u">
                                    <div className="col-2 prueba-espacio-img-verde">
                                        <img src={Istatec} className="" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-4 ">
                                        <p className="text-inicio-gra">Participación inicial</p>
                                    </div>
                                </div >
                                <div className="col-4 row prueba-inicio-espacio-u">
                                    <div className="col-2">
                                        <div
                                            className="tooltip-container"
                                            onMouseEnter={() => handleMouseEnter(4)}
                                            onMouseLeave={() => handleMouseLeave(4)}
                                        >
                                            <img src={IconToolytip} className="warning font-medium-2 mr-2 tooltip-grafict " alt="" height='16px' width='16px' />
                                            {tooltips[4] && <div className="tooltip-grafict-custumer tooltip-text-c"> Participación a inicio de periodo</div>}
                                        </div>
                                    </div>
                                    <div className="col-2 ">
                                    </div>
                                </div >
                                <div className="col-6 row prueba-inicio-espacio-u">
                                    <div className="col-2 ">
                                    </div>
                                    <div className="col-4 ">
                                        <p className="text-inicio-gra ">{dataCustumer.participacionInicial}%</p>
                                    </div>
                                </div >
                            </div>
                            <div className="card-docs-grafic-two">
                                <div className="col-6 row prueba-inicio-espacio-u">
                                    <div className="col-2 prueba-espacio-img-verde">
                                        <img src={Istateb} className="  warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-4 ">
                                        <p className="text-inicio-gra">Has comprado</p>
                                    </div>
                                </div >
                                <div className="col-4 row prueba-inicio-espacio-u">
                                    <div className="col-2 ">
                                        <div
                                            className="tooltip-container"
                                            onMouseEnter={() => handleMouseEnter(5)}
                                            onMouseLeave={() => handleMouseLeave(5)}
                                        >
                                            <img src={IconToolytip} className="  warning font-medium-2 mr-2 tooltip-grafict" alt="" height='16px' width='16px' />
                                            {tooltips[5] && <div className="tooltip-grafict-custumer tooltip-text-c"> Esta es la compra que llevas en el periodo actual</div>}
                                        </div>

                                    </div>
                                    <div className="col-2 ">
                                    </div>
                                </div >
                                <div className="col-6 row prueba-inicio-espacio-u">
                                    <div className="col-2 ">
                                    </div>
                                    <div className="col-4 ">
                                        <p className="text-inicio-gra ">{dataGrafictT()}%</p>
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
                                        <div
                                            className="tooltip-container"
                                            onMouseEnter={() => handleMouseEnter(6)}
                                            onMouseLeave={() => handleMouseLeave(6)}
                                        >
                                            <img src={IconToolytip} className="  warning font-medium-2 mr-2 tooltip-grafict " alt="" height='16px' width='16px' />
                                            {tooltips[6] && <div className="tooltip-grafict-custumer tooltip-text-c ">Esta es la meta para comprar el % en el periodo actual</div>}
                                        </div>
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

                                    {balanceApi !== 0 ? (<p className='text-end text-space-goal-data '>${balanceformat}</p>) : (<p className='text-end text-space-goal-data '>¡Al día!</p>)}
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    {pendingPayments.length > 0 ? (
                        <Container maxWidth="xl" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            maxWidth: '390px',
                            width: '374px',
                            mb: 4,
                            mt: 4,
                        }}>
                            {pendingPayments.slice().reverse().map(payment => (
                                <Accordion  /* className= 'cards-payment-jsx-mui' */ sx={{ mt: 2, }} key={payment.billingPeriod} style={{ border: payment.daysUntilDueDate < 0 ? '2px solid red' : 'none' }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: 'red' }} />} sx={{ mt: 2, }}>
                                        <Grid container xs={12} sm={12} md={12} lg={12} justifyContent="space-between" alignItems="center" spacing={0.5}>
                                            <Grid item xs={6} md={6} lg={6} sx={{ textAlign: 'start' }}>
                                                <Typography variant="h6">{payment.billingPeriod.charAt(0).toUpperCase() + payment.billingPeriod.slice(1)}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} lg={6} sx={{ textAlign: 'end' }}>
                                                <Typography sx={{ color: '#0A3323', fontSize: '12px' }}>Vencimiento {formatearFechaShort(payment.due_date)}</Typography>
                                            </Grid>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ width: '100%' }}>
                                        {/* Contenido del Accordion */}
                                        <Grid container gap={1} spacing={2} sx={{}}>

                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{}}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px' }}>Arrendamiento</Typography>
                                                        </Grid>
                                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                            <Tooltip title='Pago mensual que realizas por el uso del inmueble' >

                                                                <InfoIcon sx={{ fill: '#95B1FF', background: 'none', height: '16px', width: '16px' }} />
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                            <Typography> $ {new Intl.NumberFormat('es-ES').format(payment.balance)}</Typography>
                                                            {/*    <Typography> $ {formatearBalance(payment.balance)}</Typography> */}
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>

                                            {formatterGastos !== '0' ? (
                                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                                    <Box sx={{}}>
                                                        <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                            <Grid xs={6} sm={6} md={6} lg={6}>
                                                                <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px', }}>Gastos</Typography>
                                                            </Grid>
                                                            <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                                <Tooltip title='Pago mensual que corresponde de seguro, impuesto predial, fiducia y los honorarios de duppla.'>
                                                                    <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                                </Tooltip>
                                                            </Grid>
                                                            <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                                <Typography>${formatterGastos}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            ) : null}

                                            {formatterReservas !== '0' ? (
                                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                                    <Box sx={{ width: '100%' }}>
                                                        {/* Contenido del Accordion */}
                                                        <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                            <Grid xs={6} sm={6} md={6} lg={6}>
                                                                <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px' }}>Reservas</Typography>
                                                            </Grid>
                                                            <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                                <Tooltip title=' Pago mensual que corresponde a un ahorro que hacemos para cubrir mantenimientos y reparaciones.'>
                                                                    <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                                </Tooltip>
                                                            </Grid>
                                                            <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                                <Typography>${formatterReservas}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            ) : null}
                                            {formatterAdministracion !== '0' ? (
                                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                                    <Box sx={{ width: '100%' }}>
                                                        <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                            <Grid xs={6} sm={6} md={6} lg={6}>
                                                                <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px', }}>Administración</Typography>
                                                            </Grid>
                                                            <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                                <Tooltip title=' Pago obligatorio para cubrir gastos de seguridad, aseo, mantenimientos, etc. del edificio o conjunto donde vives.'>
                                                                    <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                                </Tooltip>
                                                            </Grid>
                                                            <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                                <Typography>${formatterAdministracion}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Box>
                                                </Grid>
                                            ) : null}

                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 500, color: '#6C9FFF', fontSize: '20px', }}><strong> Total</strong></Typography>
                                                        </Grid>
                                                        <Grid xs={6} sm={6} md={6} lg={6} sx={{ textAlign: 'end' }}>
                                                            <Typography> $ {new Intl.NumberFormat('es-ES').format(payment.balance)}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Container>) : (

                        <Container maxWidth="xl" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            maxWidth: '390px',
                            width: '374px',
                            mb: 4,
                            mt: 4,
                        }}>
                            {balanceApi !== 0 ? (
                                <Accordion>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ mt: 2 }}>
                                        <Grid container xs={12} sm={12} md={12} lg={12} justifyContent="space-between" alignItems="center" spacing={0.5}>
                                            <Grid itemxs={6} md={6} lg={6} sx={{ textAlign: 'start' }}>
                                                <Typography variant="h6">{mes}</Typography>
                                            </Grid>
                                            <Grid item xs={6} md={6} lg={6} sx={{ textAlign: 'end' }}>
                                                <Typography sx={{ color: '#0A3323', fontSize: '12px' }}>Vencimiento {date}</Typography>
                                            </Grid>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails sx={{ width: '100%' }}>
                                        {/* Contenido del Accordion */}
                                        <Grid container gap={1} spacing={2} sx={{}}>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px', }}>Arrendamiento</Typography>
                                                        </Grid>
                                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                            <Tooltip title='Pago mensual que realizas por el uso del inmueble'>
                                                                <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                            <Typography>${formatterCannon}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px', }}>Gastos</Typography>
                                                        </Grid>
                                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                            <Tooltip title='Pago mensual que corresponde de seguro, impuesto predial, fiducia y los honorarios de duppla.'>
                                                                <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                            <Typography>${formatterGastos}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px', }}>Reservas</Typography>
                                                        </Grid>
                                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                            <Tooltip title=' Pago mensual que corresponde a un ahorro que hacemos para cubrir mantenimientos y reparaciones.'>
                                                                <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                            <Typography>${formatterReservas}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 300, color: '#0A3323', fontSize: '16px', }}>Administración</Typography>
                                                        </Grid>
                                                        <Grid xs={2} sm={2} md={2} lg={2} sx={{}}>
                                                            <Tooltip title=' Pago obligatorio para cubrir gastos de seguridad, aseo, mantenimientos, etc. del edificio o conjunto donde vives.'>
                                                                <InfoIcon sx={{ fill: '#95B1FF', height: '16px', width: '16px', }} />
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid xs={4} sm={4} md={4} lg={4} sx={{ textAlign: 'end' }}>
                                                            <Typography>${formatterAdministracion}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                                <Box sx={{ width: '100%' }}>
                                                    <Grid container xs={12} sm={12} md={12} lg={12} sx={{ width: '100%' }}>
                                                        <Grid xs={6} sm={6} md={6} lg={6}>
                                                            <Typography variant="subtitle1" sx={{ fontFamily: 'Helvetica', fontWeight: 500, color: '#6C9FFF', fontSize: '20px', }}><strong> Total</strong></Typography>
                                                        </Grid>
                                                        <Grid xs={6} sm={6} md={6} lg={6} sx={{ textAlign: 'end' }}>
                                                            <Typography>${formatterPagoMinimo}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            ) : (null)}
                        </Container>
                    )}
                    {/*componente botones cerrar sesión y whatsApp */}
                    <Container maxWidth="xl" sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        mb: 4,
                        mt: 4,
                    }}
                        className=''>
                        <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{
                        }}>

                            <Grid item sx={12} sm={12} md={12} lg={12} >
                                <div className="">
                                    <a className="links text-white"
                                        href='/pagos' >
                                        <Button
                                            fullWidth
                                            id='boton_pagar'
                                            variant="contained"
                                            startIcon={<MonetizationOnIcon style={{ color: '#ffffff', width: '32px', height: '32px' }} />}
                                            onClick={handleLinkClickPago}
                                            sx={{
                                                marginTop: '20px',
                                                mb: 3,
                                                background: '#81A1F8',
                                                borderRadius: '10px',
                                                color: '#ffffff',
                                                textTransform: 'none',
                                                border: '1px solid #81A1F8',
                                                height: '58px',
                                                fontFamily: 'Helvetica',
                                                fontSize: '20px',
                                                maxWidth: '390px',
                                                width: '100%',
                                                margin: '0 auto',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                minWidth: '380px',
                                            }}
                                        >
                                            <b>  Pagar</b>
                                        </Button>
                                    </a>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    {/*Linea de división */}
                    <div className='centrado'>
                        <img src={Vline} className="line-custumer centrado" alt="" />
                    </div>
                    {/*componentes de menú deslizable*/}
                    <div className='container-fluid  centrado'>
                        <div className='container-btn-wrapper'>
                        {/*     <div onClick={handleLinkClickMenuMAH} className='space-btn-wrapper'>
                                <Link to='/formulario'>
                                    <div className='btn-wrapper-one'>
                                        <img src={Imantenimiento} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                                        <br />
                                    </div>
                                </Link>
                                <div>
                                    <p className='text-btn-wrapper'>Mantenimiento </p>
                                </div>
                            </div> */}

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
                            <div onClick={handleLinkClickMenuMAH} className='space-btn-wrapper' >
                            <Link to='/formulario'>
                                    <div className='btn-wrapper'>
                                        <img src={Iayuda} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='32px' width='32px' />
                                        <br />
                                    </div>
                              </Link>
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
                            <div onClick={handleLinkClickMenuMAH} className='space-btn-wrapper'>
                                <Link to='/consolidado' className='links'> <div className='btn-wrapper'>
                                    <img src={Ihistorialpago} className=" img-btn-wrapper warning font-medium-2 mr-2" alt="" height='24px' width='24px' />
                                    <br />
                                </div>
                                </Link>
                                <div>
                                    <p className='text-btn-wrapper links'>Historial de pago </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            )}

        </div >
    )
}

export default Inicio;