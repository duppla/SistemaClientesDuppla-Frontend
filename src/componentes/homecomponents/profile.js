import React from "react";
import Iperfil from "../../img/iconoperfil.png";
import Idata from "../../img/imgdata.png";
import Icerrarsesion from "../../img/imgcerrarsesion.png";
import { Link } from "react-router-dom";
import Logout from "../pages/Logout";

function profile() {


function handleLogout() {

    const logout = Logout();
if (logout) {
    alert('Ha ocurrido un error, intente nuevamente'); 
}else
console.log('esta pasando algo pero ni idea')



    
    
}



    return (
        <div className="container-profile ">
            <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
            <div className="title-register">
                <h1> <b>Perfil</b>
                </h1>
            </div>
            <div className="profile-data">
                <div >
                    <div className="row ">
                        <div className="col-4">
                            <img src={Iperfil} className="img-fluid rounded-start img-user" alt="perfil" />
                        </div>
                        <div className="col-4">
                            <div className="card-body">
                                <h5 className="card-title text-white">Nombre Usuario</h5>
                                <p className="card-text text-white"><small className="text-muted">enrique@hotmail.com</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*Sección de datos- hay que traerlos de salesforce*/}
            <div className="user-data-card">
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-4">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Cédula</small><br /></p>
                                    <p className="card-text"><b>1020189345</b></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-4">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Teléfono</small><br /></p>
                                    <p className="card-text"><b>3118865890</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-4">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Correo</small><br /></p>
                                    <p className="card-text"><b>enrique@hotmail.com</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-4">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Ingreso</small><br /></p>
                                    <p className="card-text"><b>5'000.000</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-4">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Estado</small><br /></p>
                                    <p className="card-text"><b>Independiente</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-6">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Ingresos adicionales</small><br /></p>
                                    <p className="card-text"><b>No</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                    <div className="card-seccion">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Idata} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                            </div>
                            <div className="col-4">
                                <div className="card-body">
                                    <p className="card-text"> <small className="text-muted">Ahorro</small><br /></p>
                                    <p className="card-text"><b>25'000.000</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*componente calendario*/}
                <div className="centrado-btn " id="btnIniciarSesion">
                    <Link to='/Calendar' className="links">
                        <button type="button" id="" className="btn btn-primary btn-registro text-center" width="400px" height="46px" >
                            QUIERO EDITAR MIS DATOS    
                         </button>
                    </Link>
                </div>
                {/*componente  soporte*/}
                <div className="btn btn-ingreso-google centrado-btn"  onClick={handleLogout()}   width="400px" height="52px" >
                    <div className="col-4">
                        <img src={Icerrarsesion} className="img-fluid rounded-start img-user warning font-medium-2 mr-2" alt="" />
                    </div>
                    <Link to='' className="links">
                        <div><b>Cerrar sección</b></div>
                    </Link>

                </div>
                <div id="btnInicioGoogle">
                    <div className="btn btn-ingreso-google centrado-btn" width="400px" height="52px" >
                        <img src={Icerrarsesion} className="input-group-img img-ingreso" id="btnIngresoGoogle" alt="ingreso google" width="64px" height="64px" />
                        <div><b>Cerrar sesión</b></div>

                    </div>
                </div>



            </div>
        </div>
    );
}


export default profile;