import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Iubicacion from "../../img/Iubicacion.png";
import Ivalidacioninmueble from "../../img/Ivalidacioninmueble.png";
import Ievaluacionprecio from "../../img/Ievaluacionprecio.png";
import numeral from 'numeral';
import Istateg from "../../img/Istateg.png"
import Istatev from "../../img/Istatev.png"
import swal from 'sweetalert';
import Imgdefault from "../../img/Imgdefault.png"
import { Container } from "@mui/material";




function Property() {


    const estado = localStorage.getItem('estado');

    // consumo del Api de inmueble
    const [datos, setDatos] = useState({});

    const [fotos, setFotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const [formattedData, setFormattedData] = useState();


    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const email = localStorage.getItem('email');

        async function fetchData() {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{ "email": ' + email + '}'
            };
            const response = await fetch('https://sistema-duppla-backend.herokuapp.com/inm/getInm', options)
            const datos = await response.json();
            //console.log(datos);
            setDatos(datos);
            setIsLoading(false);
        }

        async function fetchFotos() {
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{"codigo":"' + datos.name + '"}'
            };

            const response = await fetch('https://sistema-duppla-backend.herokuapp.com/inm/fotos', options)
            const data = await response.json();
            //console.log(data);
            setFotos(data);
            //console.log(fotos)
        }
        fetchData();
        if (datos.name) {
            //console.log(datos.name)
            fetchFotos();
        }
    }, [datos.name]);

    //Cambio de estado Ficha técnica   

    const statefichaTecnica = datos.estado;
    // console.log(statefichaTecnica);

    
    const comprobanteContendio = datos;
    
    function comprobtContendio() {
        if (isLoading) {
          return <p>Cargando...</p>;
        }
      
        if (!comprobanteContendio || Object.keys(comprobanteContendio).length === 0) {
          return (
            <div className='img-offer-conatiner'>
              <p>Aún no se encuentra información asociada al inmueble</p>
            </div>
          );
        }
    }
    
    const stateFtecnica = (statefichaTecnica) => {
        
        switch (statefichaTecnica) {
            case "No evaluado":
                return <div className="col-4">
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istatev} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            No evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Pendiente por aprobar
                        </div>
                    </div>

                    <div className="card-state-properties ">
                        <div className="card-body col-1  ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Aprobado
                        </div>
                    </div><div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Rechazado
                        </div>
                    </div></div>
            case "Evaluado":
                return <div className="col-4">
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            No evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istatev} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Pendiente por aprobar
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1  ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Aprobado
                        </div>
                    </div><div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Rechazado
                        </div>
                    </div></div>
            case "Pendiente por aprobar":
                return <div className="col-4">
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            No evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istatev} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Pendiente por aprobar
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1  ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Aprobado
                        </div>
                    </div><div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Rechazado
                        </div>
                    </div></div>
            case "Aprobado":
                return <div className="col-4">
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            No evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Pendiente por aprobar
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1  ">
                            <img src={Istatev} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Aprobado
                        </div>
                    </div><div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Rechazado
                        </div>
                    </div></div>
            case "Rechazado":
                return <div className="col-4">
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            No evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Evaluado
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Pendiente por aprobar
                        </div>
                    </div>
                    <div className="card-state-properties ">
                        <div className="card-body col-1  ">
                            <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Aprobado
                        </div>
                    </div><div className="card-state-properties ">
                        <div className="card-body col-1 ">
                            <img src={Istatev} className="" height="12px" width="12px" alt="..." />
                        </div>
                        <div className="col-10 outline">
                            Rechazado
                        </div>
                    </div></div>

            default: return <div className="col-4">
                <div className="card-state-properties ">
                    <div className="card-body col-1 ">
                        <img src={Istatev} className="" height="12px" width="12px" alt="..." />
                    </div>
                    <div className="col-10 outline">
                        No evaluado
                    </div>
                </div>
                <div className="card-state-properties ">
                    <div className="card-body col-1 ">
                        <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                    </div>
                    <div className="col-10 outline">
                        Evaluado
                    </div>
                </div>
                <div className="card-state-properties ">
                    <div className="card-body col-1 ">
                        <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                    </div>
                    <div className="col-10 outline">
                        Pendiente por aprobar
                    </div>
                </div>
                <div className="card-state-properties ">
                    <div className="card-body col-1  ">
                        <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                    </div>
                    <div className="col-10 outline">
                        Aprobado
                    </div>
                </div><div className="card-state-properties ">
                    <div className="card-body col-1 ">
                        <img src={Istateg} className="" height="12px" width="12px" alt="..." />
                    </div>
                    <div className="col-10 outline">
                        Rechazado
                    </div>
                </div></div>
        }
    }

    //formateo de los datos de valor inmueble duppla
    const number = datos.Valor_inmueble_compra_duppla;
    const costm = datos.Evaluacion_m2;
    const compraDuppla = datos.valor_opcion_compra;

    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const formattedNumber = formatter.format(number);
    const formattedcostm = formatter.format(costm);
    const formattedCompraDuppla = formatter.format(compraDuppla);

    // Función para 
    const handleInm = () => {
        swal({
            text: "Se redireccionará a WhatsApp.",
            icon: "success",
            button: "Cerrar",
            timer: 5000,
        });

    }

    //Ayuda con la visualización de datos al usuario
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)

    }, []);

    // función que muestra las imagenes del inmueble
    function carrusel() {
        if (fotos && fotos.length > 0) {
            return fotos.map((foto, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={foto.url} className='btn-state-home' alt='' height='340px' width='380px' />
                </div>
            ));
        } else {
            return (
                <div className='carousel-item active'>
                    <img src={Imgdefault} className='btn-state-home' alt='' height='340px' width='380px' />
                </div>
            );
        }
    }
    // función que redirecciona al usuario de buyer a custumer

    function testRedireccion() {
        const estado = localStorage.getItem('estado');
        if (estado === "true") {
            return <div className="arrow-return">
                <Link to='/inicio'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
        }
        else {
            return <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
        }

    }




    return (
        <div>
            { comprobtContendio ?  <div className="container-property container-fluid">
                {testRedireccion(estado)}
                {/*Carrusel de imagenes */}
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0" className="active" aria-current="true"
                            aria-label="Slide 1"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="7" aria-label="Slide 8"></button>
                    </div>
                    <div className="carousel-inner">
                        {carrusel()}
                    </div>
                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div><br />
                {/*información inmueble */}
                <div className="container-movil">
                    <div className="text-title-property container-sm">
                        <div className="description-apt">
                            <h1 className="text-title-property-title"><b>{datos.Tipo_de_inmueble}</b></h1>
                            {/*<p><b>{ formattedData(datos.Valor_inmueble_compra_duppla)}</b></p><br />*/}
                            <p><b>${formattedNumber}</b></p>
                            <p><b>Observaciones:</b>{datos.observaciones}
                            </p>
                        </div>
                    </div><br />

                    <div className="card-inmueble-first container-fluid ">
                        <div className="row ">
                            <div className="col-2">
                                <img src={Iubicacion} className=" " alt="..." width='24px' height='24px' />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="">Ubicación</h5><br />
                                    <p className=""><b>{datos.Direccion}</b></p>
                                    <p className=""><b>{datos.Barrio}</b></p>
                                </div>

                                {/*card con dropdown */}
                            </div>
                        </div>

                    </div>
                    {/*Tarjetas estado del inmueble */}
                    <div className="accordion accordion-property " id="accordionExample">
                        <div className="accordion-item acordion-item-border">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <div className=" text-blue space-title-p " id="basic-addon4"><h5>Ver más</h5></div>
                                    <div className="  text-space-property" id="basic-addon4"></div>
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
                                                            <p className="space-title-dop">Área: </p>
                                                        </div>
                                                        <div className="col-2 tooltip-customer">

                                                        </div>
                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Area}m²</p>
                                                    </div>
                                                </div>
                                                <div className="card-docs-init  ">
                                                    <div className="card-body-docs-c  row col-6">
                                                        <div className=" col-5">
                                                            <p className="space-title-dop">Antigüedad:</p>
                                                        </div>
                                                        <div className="col-2 tooltip-customer">

                                                        </div>
                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Antiguedad} años</p>
                                                    </div>
                                                </div>
                                                <div className="card-docs-init  ">
                                                    <div className="card-body-docs-c  row col-6">
                                                        <div className=" col-5">
                                                            <p className="space-title-dop">Estrato: </p>
                                                        </div>

                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Estrato}</p>
                                                    </div>
                                                </div>
                                                <div className="card-docs-init  ">
                                                    <div className="card-body-docs-c  row col-6">
                                                        <div className=" col-5">
                                                            <p className="space-title-dop">Habitaciones: </p>
                                                        </div>
                                                        <div className="col-2 tooltip-customer">
                                                        </div>
                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Habitaciones}</p>
                                                    </div>
                                                </div>
                                                <div className="card-docs-init  ">
                                                    <div className="card-body-docs-c  row col-6">
                                                        <div className=" col-5">
                                                            <p className="space-title-dop">Baños: </p>
                                                        </div>
                                                        <div className="col-2 tooltip-customer">

                                                        </div>
                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Banos}</p>
                                                    </div>
                                                </div>
                                                <div className="card-docs-init  ">
                                                    <div className="card-body-docs-c  row col-6">
                                                        <div className=" col-5">
                                                            <p className="space-title-dop">Parqueadero: </p>
                                                        </div>
                                                        <div className="col-2 tooltip-customer">

                                                        </div>
                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Parqueadero}</p>
                                                    </div>
                                                </div>
                                                <div className="card-docs-init  ">
                                                    <div className="card-body-docs-c  row col-6">
                                                        <div className=" col-5">
                                                            <p className="space-title-dop">Piso: </p>
                                                        </div>
                                                        <div className="col-2 tooltip-customer">

                                                        </div>
                                                    </div>
                                                    <div className="col-6 outline text-dropdown-right">
                                                        <p className='text-end text-space-card-c '>{datos.Piso}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-inm-value container-sm  ">
                        <div className="row ">
                            <div className="col-2">
                                <img src={Ievaluacionprecio} className="" alt="..." width='24px' height='24px' />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="">Evaluación de precio</h5><br />
                                    <p className=""><b>Precio oferta m²: ${formattedcostm} </b></p>
                                    <p className=""><b>Precio oferta: $ {formattedCompraDuppla}</b></p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="card-inmueble container-sm space-property-evaluation">
                        <div className="row ">
                            <div className="col-2">
                                <img src={Ivalidacioninmueble} className="" alt="..." width='24px' height='24px' />
                            </div>
                            <div className="col-8 ">
                                <div className="card-body">
                                    <h5 className="">Evaluación técnica</h5><br />
                                    {stateFtecnica(statefichaTecnica)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>

                {/*Botón*/}
                <div className="centrado">
                    <span className="space-text-span">¿Los datos no son los que corresponden?</span>
                </div>
                <div className="centrado  container-sm" id="btnIniciarSesion">
                    <a className="links" href="https://api.whatsapp.com/send?phone=573152559261">
                        <button type="button" id="" className="btn btn-prueba text-white" onClick={handleInm} width="400px" height="46px" >
                            Reporta aquí los datos incorrectos
                        </button>
                    </a>
                </div>
                <br />
            </div > : <div className='img-offer-conatiner '>
              {/*<img src={Idefaultoffer} className="container fluid" alt="..." />*/}
           <p>Aún no se encuentra información asociada al inmueble</p>
            </div>}
        </div>


    );
}


export default Property;