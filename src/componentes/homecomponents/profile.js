import React from "react";
import Iperfil from "../../img/iconoperfil.png"

function profile() {
    return (
        <div className="container-profile ">
            <h1><b>Perfil</b></h1>
            <div className="profile-data">
                <div className="mb-3" >
                    <div className="row ">
                        <div className="col-md-4">
                            <img src={Iperfil} className="img-fluid rounded-start img-user" alt="perfil" />
                            
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Nombre Usuario</h5>
                                <p className="card-text"><small className="text-muted">preubasistemaduppla@gmail.com</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
}


export default profile;