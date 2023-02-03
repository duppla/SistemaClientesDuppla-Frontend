import React from "react";
import { Link } from "react-router-dom";



function Password() {
    return (

        <div className="container-fluid">
            <div className="container-register">
                <div className="arrow-return">
                    <Link to='/login'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                        </svg>
                    </Link>
                </div>
                <div className="title-register">
                    <h2> <b>Registro de contraseña</b>
                    </h2>
                </div>
                <div className="form-register centrado container-sm">
                    <form>
                        <div className="mb-3">

                            <input type="password" value="" className="form-control input-register" placeholder="Contraseña" id="InputPassword" height="46px" />
                        </div>
                        <div className="mb-3">

                            <input type="password" className="form-control input-register" placeholder="Confirmar contraseña" id="confirmarInputPassword" height="46px" />
                        </div>

                        <button type="submit" className="btn btn-prueba-ingreso text-center links text-white btn-mover">ACCEDER</button>
                    </form>


                </div>



            </div>

        </div>


    );

};


export default Password;