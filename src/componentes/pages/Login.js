import React from "react";
/*import { GoogleLogin } from '@react-oauth/google';*/
import { Link } from "react-router-dom";
import Iduppla from "../../img/Iduppla.png"
import Btngoogle from "../../img/google.png"
import Btnfacebook from "../../img/facebook.png"
/*import { googleLogout } from "@react-oauth/google";*/
/*import FacebookLogin from 'react-facebook-login';*/


function login() {

// pruebas ingreso Facebook
    /*const responseFacebook = (response) => {
        console.log(response);
    }
    const componentClicked = () => {
        alert("evento de clik")
    };*/

    return (
        <div className="container-fluid">
            <div className="centrado">
                <div className=" centrado" b-color="#0000">
                    <div className="container-sing">
                        <div className="img-logotipo centrado">
                            <img src={Iduppla} className="rounded justify-content-center" alt="Simbolo duppla" />
                        </div>
                        <Link to='/register' className="btn-decoration">
                            <button type="button" id="" className="btn  btn-registro text-center centrado" width="400px" height="46px" >
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

                            <div className="btn btn-ingreso-facebook centrado-btn" width="400px" height="52px">
                                <img src={Btnfacebook} className="input-group-img img-ingreso" id="btnIngresoFacebook" alt="ingreso google" width="32px" height="32px" />
                                <div><b>Sing in with Facebook</b></div>

                            </div>
                            <div className="centrado-btn">
                                <Link to='/password' className="links">Registro de contraseña</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div >


        </div >



    );

}


export default login;