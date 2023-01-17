import React from "react";
/*import { GoogleLogin } from '@react-oauth/google';*/
import { Link } from "react-router-dom";

/*import SingIn from "./singin";*/
import Logotipo from "../../img/Duppla_Logotipo_V2.png"
import Simbolo from "../../img/Duppla_Simbolo_V1.png"
import Btngoogle from "../../img/google.png"
import Btnfacebook from "../../img/facebook.png"
/*import { googleLogout } from "@react-oauth/google";*/
/*import FacebookLogin from 'react-facebook-login';*/
function login() {

    /*const responseFacebook = (response) => {
        console.log(response);
    }
    const componentClicked = () => {
        alert("evento de clik")
    };*/


    return (
        <div className="login">
            <div className=".container-fluid">
                <div className=" d-flex justify-content-center align-items-center" b-color="#0000">
                    <div className="container-sing">
                        <div className="img-logotipo">
                            <img src={Simbolo} className="rounded justify-content-center" alt="Simbolo duppla" width="60px" height="67px" />

                        </div>
                        <div className="img-simbolo">
                            <img src={Logotipo} className="rounded" alt="duppla" width="240px" height="88px" />
                        </div>

                        <Link to='/register' className="btn-decoration">
                            <button type="button" id="" className="btn btn-primary btn-registro text-center" width="400px" height="46px" >
                                Iniciar sesión
                            </button>
                        </Link>
                        {/*Configuración de facebook para el ingreso */}
                        {/*<div >
                                <FacebookLogin className="btn btn-ingreso-google centrado-btn" width="400px" height="52px"
                                    appId="1329413604538602"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook} />
                            </div>*/}



                        <div id="btnInicioGoogle">
                            <div className="btn btn-ingreso-google centrado-btn" width="400px" height="52px" >
                                <img src={Btngoogle} className="input-group-img img-ingreso" id="btnIngresoGoogle" alt="ingreso google" width="32px" height="32px" />
                                <div><b>Sing in with Google</b></div>

                            </div>

                            {/* < GoogleLogin
                                onSuccess={credentialResponse => {
                                    console.log(credentialResponse);
                                }}
                                onError={() => {
                                    console.log('Login Failed');
                                }}
                            />*/}

                            <div className="btn btn-ingreso-google centrado-btn" width="400px" height="52px">
                                <img src={Btnfacebook} className="input-group-img img-ingreso" id="btnIngresoFacebook" alt="ingreso google" width="32px" height="32px" />
                                <div><b>Sing in with Facebook</b></div>

                            </div>
                            <div className="centrado-btn">
                               <Link to='/password'>Registro de contraseña</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </div >



    );

}


export default login;