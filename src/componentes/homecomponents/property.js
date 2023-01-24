import React from "react";
import { Link } from "react-router-dom";
import Iperfil from "../../img/iconoperfil.png";
import Idata from "../../img/imgdata.png";
import Icerrarsesion from "../../img/imgcerrarsesion.png";
import Iubicacion from "../../img/Iubicacion.png";
import Ivalidacioninmueble from "../../img/Ivalidacioninmueble.png";
import Ievaluacionprecio from "../../img/Ievaluacionprecio.png";

function Property() {

// consumo del Api de inmueble













    return (
        <div className="container-property">
            <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div><br />

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
                        <img src={Idata} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Iperfil} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Icerrarsesion} className="d-block w-100" alt="..." />
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

            <div className="text-title-property">

                <div>
                    <h1 className="text-title-property-title"><b>Apartamento</b></h1>
                    <p><b>240'000.000</b></p><br />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sed consequat purus nulla faucibus morbi amet. Leo, aliquam amet at senectus et.

                    </p>
                </div>
            </div><br />
            <div className="card-inmueble">
                <div className="row ">
                    <div className="col-2">
                        <img src={Iubicacion} className="img-fluid rounded-start " alt="..." width='24px' height='24px' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Ubicación</h5><br />
                            <p className="card-text"><b>Calle:----</b></p>
                            <p className="card-text"><b>Barrio:----</b></p>
                        </div>
                        <div className="dropdown">
                            <button type="button" class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                Ver más
                            </button>
                            <div className="dropdown-menu p-4 text-muted" >
                                <ol className="list-group ">{/*list-group-numbered*/}
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">* m2: 48</div>

                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">* Edad: 2 años</div>

                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">*Estrato: 3</div>

                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">*Habitaciones: 2 </div>

                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">*Baños: 1</div>

                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">*Parqueadero: 3</div>

                                        </div>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-start">
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">*Piso: 4</div>

                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-inmueble">
                <div className="row ">
                    <div className="col-2">
                        <img src={Ievaluacionprecio} className="img-fluid rounded-start " alt="..." width='24px' height='24px' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Evaluación de precio</h5><br />
                            <p className="card-text"><b>Precio oferta M2: $ 3'900.000 </b></p>
                            <p className="card-text"><b>Precio oferta: $ 3'900.000</b></p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="card-inmueble">
                <div className="row ">
                    <div className="col-2">
                        <img src={Ivalidacioninmueble} className="img-fluid rounded-start " alt="..." width='24px' height='24px' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">Evaluación técnica</h5><br />
                            <p className="card-text"><b>*Pendiente </b></p>
                            <p className="card-text"><b>*Programada</b></p>
                            <p className="card-text"><b>* Realizada </b></p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <div>
                    <button type="button" class="btn btn-outline-primary btn-xl">CANCELAR</button>
                </div><br />
                

                <div>
                    <button type="button" class="btn btn-outline-primary btn-xl btn-primary">ACEPTAR</button>

                </div>
            </div>




        </div>/*div de cierre*/
    );
}


export default Property;