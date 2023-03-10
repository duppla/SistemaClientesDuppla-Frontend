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

    //Cambio de estado Ficha técnica
    const statePhoto = datosIn.Foto_exterior;

    const statefichaTecnica = datosIn.estado;


    const stateFtecnica = (statefichaTecnica) => {

        switch (statefichaTecnica) {
            case "Noevaluado":
                return <img src={Istatev} className="" alt="" height="12px" width="12px" />;
            case "Aprobado":
                return <img src={Istatev} className="" alt="" height="12px" width="12px" />;
            case "Rechazado":
                return <img src={Istatev} className="" alt="" height="12px" width="12px" />;

            default: return <img src={Istatev} className="" alt="" height="12px" width="12px" />;

        }
    }

    //formateo de los datos de valor inmueble duppla
    const number = datosIn.Valor_inmueble_compra_duppla;
    const costm = datosIn.Evaluacion_m2;
    const compraDuppla = datosIn.valor_opcion_compra;
    
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const formattedNumber = formatter.format(number);


    
    const formattedcostm = formatter.format(costm);
    const formattedCompraDuppla = formatter.format(compraDuppla);

    // Función para aceptar inmueble

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


    return (
        !loading && <div className="container-property container-fluid">
            <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>


            {/*Loading... 
            
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
    </div>
            */}



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
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {statePhoto ? <img src={datosIn.Foto_exterior} className="d-block w-100" alt="..." /> : <img src={Imgdefault} className="btn-state-home" alt="" height='340px' width='380px' />}                     </div>
                    <div className="carousel-item">
                        {statePhoto ? <img src={datosIn.Foto_sala} className="d-block w-100" alt="..." /> : <img src={Imgdefault} className="btn-state-home" alt="" height='340px' width='380px' />}
                    </div>
                    <div className="carousel-item">
                        {statePhoto ? <img src={datosIn.Foto_cocina} className="d-block w-100" alt="..." /> : <img src={Imgdefault} className="btn-state-home" alt="" height='340px' width='380px' />}
                    </div>
                    <div className="carousel-item">
                        {statePhoto ? <img src={datosIn.Foto_bano} className="d-block w-100" alt="..." /> : <img src={Imgdefault} className="btn-state-home" alt="" height='340px' width='380px' />}
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
                    <p><b>${formattedNumber}</b></p>
                    <p><b>Observaciones:</b>{datosIn.observaciones}
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
                            <button type="button" className="btn dropdown-toggle text-blue" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                Ver más
                            </button>
                            <div className="dropdown-menu dropdown-menu-cambio  " >
                                <ul className=" list-group  ">{/*list-group-numbered*/}

                                    <li className=" list-group-item ">
                                        <div className="" >
                                            <div className="fw-bold col-8">Área: {datosIn.Area}m²</div>

                                        </div>
                                    </li>
                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-12">Antigüedad: {datosIn.Antiguedad} años</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Estrato: {datosIn.Estrato}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-8">Habitaciones: {datosIn.Habitaciones}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Baños: {datosIn.Banos}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-8">Parqueadero: {datosIn.Parqueadero}</div>

                                        </div>
                                    </li>
                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Piso: {datosIn.Piso}</div>

                                        </div>
                                    </li>
                                </ul>
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
                            <div className="col-4">
                                <div className="card-state-properties ">
                                    <div className="card-body col-1 ">
                                        {stateFtecnica(statefichaTecnica)}
                                    </div>
                                    <div className="col-10 outline">
                                        No evaluado
                                    </div>
                                </div>
                                <div className="card-state-properties ">
                                    <div className="card-body col-1  img-state-propety">
                                        <img src={Istateg} className="" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-10 outline">
                                        Aprobado
                                    </div>
                                </div>
                                <div className="card-state-properties ">
                                    <div className="card-body col-1 ">
                                        <img src={Istateg} className="" alt="" height='12px' width='12px' />
                                    </div>
                                    <div className="col-10 outline">
                                        Rechazado
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br />
            <br />

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



        </div>/*div de cierre*/
    );
}


export default Property;