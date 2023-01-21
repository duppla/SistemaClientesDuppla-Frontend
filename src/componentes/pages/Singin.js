import React from "react";
import Logotipo from "../../img/Duppla_Logotipo_V2.png"
import Simbolo from "../../img/Duppla_Simbolo_V1.png"
import { Link } from "react-router-dom";


function SingIn() {

    return (
        <div className=".container-fluid">
            <div className=" d-flex justify-content-center">
                <div className="container-sing">
                    <div className="img-logotipo">
                        <img src={Simbolo} 
                        className="rounded justify-content-center" 
                        alt="Simbolo duppla" width="60px" height="67px" />
                    </div>
                    <div className="img-simbolo">
                        <img src={Logotipo} 
                        className="rounded" 
                        alt="duppla" width="240px" height="88px" />
                    </div>
                    <div className="centrado-btn">
                        <button  litype="button" 
                        className="btn btn-primary btn-registro text-center"
                         width="400px" height="52px">
                          <Link to='/password' className="links text-white">REGISTRO DE CONTRASEÑA</Link>  
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SingIn;