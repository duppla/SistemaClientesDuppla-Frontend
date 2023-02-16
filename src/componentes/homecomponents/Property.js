import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Iubicacion from "../../img/Iubicacion.png";
import Ivalidacioninmueble from "../../img/Ivalidacioninmueble.png";
import Duppla_logotipo from "../../img/Duppla_Logotipo_V2.png";
import Ievaluacionprecio from "../../img/Ievaluacionprecio.png";
import numeral from 'numeral';
import Istateg from "../../img/Istateg.png"
import swal from 'sweetalert';




function Property() {

    // consumo del Api de inmueble
    const [datosIn, setDatosIn] = useState({});
    const [formattedData, setFormattedData] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const email = localStorage.getItem('email');
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };
        fetch('https://sistema-duppla-backend.herokuapp.com/inm/getInm', options)
            .then(response => response.json())
            .then(response => {
                setDatosIn(response);
                setFormattedData(numeral(datosIn).format('0,0.00'));
            })

            .catch(err => console.error(err));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    //formateo de los datos de valor inmueble duppla
    const number = datosIn.Valor_inmueble_compra_duppla;
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const formattedNumber = formatter.format(number);

    // Función para acpetar inmueble

    const handleInm = () => {

       {/*} const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{"email":"pgutierrez@duppla.co"}'
        };

        fetch('https://sistema-duppla-backend.herokuapp.com/inm/accept', options)
            .then(response => response.json())
            .then(response => console.log(response))
    .catch(err => console.error(err)); */}

        swal({
           
            text: "Se envió correctamente la solicitd de cambio en la información.",
            icon: "info",
            button: "Cerrar",
            timer: 5000,
        });

    }


    return (
        <div className="container-property container-fluid">
            <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div><br />
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
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Duppla_logotipo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Duppla_logotipo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Duppla_logotipo} className="d-block w-100" alt="..." />
                    </div>
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
            <div className="text-title-property container-sm">
                <div className="description-apt">
                    <h1 className="text-title-property-title"><b>{datosIn.Tipo_de_inmueble}</b></h1>
                    {/*<p><b>{ formattedData(datosIn.Valor_inmueble_compra_duppla)}</b></p><br />*/}
                    <p><b> {formattedNumber}</b></p><br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sed consequat purus nulla faucibus morbi amet. Leo, aliquam amet at senectus et.
                    </p>
                </div>
            </div><br />
            <div className="card-inmueble container-fluid">
                <div className="row ">
                    <div className="col-2">
                        <img src={Iubicacion} className=" " alt="..." width='24px' height='24px' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="">Ubicación</h5><br />
                            <p className=""><b>{datosIn.Direccion}</b></p>
                            <p className=""><b>{datosIn.Barrio}</b></p>
                        </div>
                        <div className="dropdown ">
                            <button type="button" class="btn dropdown-toggle text-blue" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                Ver más
                            </button>
                            <div className="dropdown-menu dropdown-menu-cambio  " >
                                <ol className=" list-group  ">{/*list-group-numbered*/}

                                    <li className=" list-group-item d-flex justify-content-start align-items-start">
                                        <div className="row" >
                                            <div className="fw-bold col-6">m²:{datosIn.Area}</div>

                                        </div>
                                    </li>
                                    <li className=" list-group-item d-flex justify-content-start align-items-start">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Antigüedad:{datosIn.Antiguedad}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item d-flex justify-content-start align-items-start">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Estrato:{datosIn.Estrato}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item d-flex justify-content-start align-items-start">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Habitaciones:{datosIn.Habitaciones}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item d-flex justify-content-start align-items-start">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Baños:{datosIn.Banos}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item d-flex justify-content-start align-items-start"> 
                                        <div className="row" >
                                            <div className="fw-bold col-6">Parqueadero:{datosIn.Parqueadero}</div>

                                        </div>
                                    </li>
                                    <li className=" list-group-item d-flex justify-content-start align-items-start">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Piso:{datosIn.Piso}</div>

                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Tarjetas estado del inmeble */}
            <div className="card-inmueble container-sm ">
                <div className="row ">
                    <div className="col-2">
                        <img src={Ievaluacionprecio} className="" alt="..." width='24px' height='24px' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="">Evaluación de precio</h5><br />
                            <p className=""><b>Precio oferta M2:{datosIn.Evaluacion_m2} </b></p>
                            <p className=""><b>Precio oferta: $ 3.900.000</b></p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card-inmueble container-sm">
                <div className="row ">
                    <div className="col-2">
                        <img src={Ivalidacioninmueble} className="" alt="..." width='24px' height='24px' />
                    </div>
                    <div className="col-8 ">
                        <div className="card-body">
                            <h5 className="">Evaluación técnica</h5><br />
                            <div className="col-4">
                                <div className="card-state-properties ">
                                    <div className="card-body col-1 ">
                                        <img src={Istateg} className="" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-10 outline">
                                        <b>Pendiente </b>
                                    </div>
                                </div>
                                <div className="card-state-properties ">
                                    <div className="card-body col-1  img-state-propety">
                                        <img src={Istateg} className="" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-10 outline">
                                        <b>Programada </b>
                                    </div>
                                </div>
                                <div className="card-state-properties ">
                                    <div className="card-body col-1 ">
                                        <img src={Istateg} className="" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-10 outline">
                                        <b>Realizada </b>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/*Menú documentos*/}

                <div className="centrado  container-sm" id="btnIniciarSesion">
                    <Link to='' className="links">
                        <button type="button" id="" className="btn btn-prueba text-white" onClick={handleInm} width="400px" height="46px" >
                            Los datos del inmueble son incorrectos
                        </button>
                    </Link>
                </div>

            <div className="centrado  ">

               {/*} <div>
                    <Link to='/home'>
                        <button type="button" class="btn btn-outline-primary btn-d-aceptar">CANCELAR</button>
                    </Link>
                </div><br />
                <div className="">
                    <button type="button" class="btn btn-outline-primary btn-d-cancel " onClick={handleInm}>ACEPTAR</button>

                </div>*/}
            </div>




        </div>/*div de cierre*/
    );
}


export default Property;