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
    const [datos, setDatos] = useState({});

    const [fotos, setFotos] = useState([]);

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
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    const formattedNumber = formatter.format(number);
    const formattedcostm = formatter.format(costm);
    const formattedCompraDuppla = formatter.format(compraDuppla);

    // Función para aceptar inmueble
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


    return (
        !loading && <div className="container-property container-fluid">
            <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
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

            {/*Carrusel dos Prueba 


            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {carrusel()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
*/}


            {/*información inmueble */}
            <div className="text-title-property container-sm">
                <div className="description-apt">
                    <h1 className="text-title-property-title"><b>{datos.Tipo_de_inmueble}</b></h1>
                    {/*<p><b>{ formattedData(datos.Valor_inmueble_compra_duppla)}</b></p><br />*/}
                    <p><b>${formattedNumber}</b></p>
                    <p><b>Observaciones:</b>{datos.observaciones}
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
                            <p className=""><b>{datos.Direccion}</b></p>
                            <p className=""><b>{datos.Barrio}</b></p>
                        </div>
                        <div className="dropdown ">
                            <button type="button" className="btn dropdown-toggle text-blue" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                Ver más
                            </button>
                            <div className="dropdown-menu dropdown-menu-cambio  " >
                                <ul className=" list-group  ">{/*list-group-numbered*/}

                                    <li className=" list-group-item ">
                                        <div className="" >
                                            <div className="fw-bold col-8">Área: {datos.Area}m²</div>

                                        </div>
                                    </li>
                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-12">Antigüedad: {datos.Antiguedad} años</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Estrato: {datos.Estrato}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-8">Habitaciones: {datos.Habitaciones}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Baños: {datos.Banos}</div>

                                        </div>
                                    </li>

                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-8">Parqueadero: {datos.Parqueadero}</div>

                                        </div>
                                    </li>
                                    <li className=" list-group-item ">
                                        <div className="row" >
                                            <div className="fw-bold col-6">Piso: {datos.Piso}</div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className='dropdown'>
                            <div className="card-dropdown-inm ">
                                <div className='col-4'>
                                    <p className='text-space-inm-dropdown text-blue' >
                                        <b>Ver más</b></p>
                                </div>
                                <div className=" col-4 icon-drop ">
                                    <div className="btn-group ">
                                        <button type="button" className="btn  dropdown-toggle  " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-xxl-end row dropdown-menu-init">
                                            <br />
                                            <div className="card-docs-init  ">
                                                <div className="card-body-docs col-6">
                                                    <p>Referencia de pago</p>
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

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Tarjetas estado del inmeble */}
            <div className="card-inm-value container-sm ">
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