import React from "react";
import Logotipo from "../img/Duppla_Logotipo_V2.png"
import Simbolo from "../img/Duppla_Simbolo_V1.png"
import Btngoogle from "../img/google.png"
import Btnfacebook from "../img/facebook.png"
 

function login() {
    return (
        <div className="login">
            <div className=".container-fluid">
                <div className=" d-flex justify-content-center">
                    <div className="container-sing">
                        <div className="img-logotipo">
                            <img src={Simbolo} className="rounded justify-content-center" alt="Simbolo duppla" width="60px" height="67px" />

                        </div>
                        <div className="img-simbolo">

                            <img src={Logotipo} className="rounded" alt="duppla" width="240px" height="88px" />
                        </div>

                        <div className="btn-registro">
                            <button type="button" className="btn btn-registro text-center" width="400px" height="46px" p-5>
                                REGISTRO DE CONTRASEÑA
                            </button>
                          
                                <div className="btn btn-ingreso-google">                                                                  
                                <img src={Btngoogle} className="input-group-img" id="btnIngresoGoogle" alt="ingreso google" width="32px" height="16px" />
                                <div>Sing in with Google</div>                          
                            
                                </div>
                                <div className="btn btn-ingreso-google">                                                                  
                                <img src={Btnfacebook} className="input-group-img" id="btnIngresoGoogle" alt="ingreso google" width="32px" height="16px" />
                                <div>Sing in with Google</div>                          
                            
                                </div>



                        </div>
                    </div>
                </div>
            </div>


        </div>



    );

}


export default login;