import React from "react";
import Usuario from "../img/usuario.png"

function profile() {
    return (
        <div className="container-profile ">
            <div className="profile">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={Usuario} className="img-fluid rounded-start img-user" alt="perfil" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Nombre Usuario</h5>
                                <p className="card-text"><small className="text-muted">Fecha</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Nombre usurio { }</p>
                    <date>fecha</date>
                </div>
            </div>
            <h2>OFERTA</h2>
            <div className="card-documentes">
                <input>
                </input>
            </div>




        </div>
    );
}


export default profile;