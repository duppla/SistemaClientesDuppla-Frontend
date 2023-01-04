import React from "react";


function register() {
    return (

        <div className="register">
            <div className="container-register">
                <div className="arrow-return">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </div>
                <div className="title-register">
                    <h2> <b>Iniciar Sesión</b>
                    </h2>
                </div>
                <div className="form-register">
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control input-register" id="exampleInputEmail1" placeholder="Correo electrónico" aria-describedby="emailHelp" height="46px" />

                        </div>
                        <div className="mb-3">

                            <input type="password" className="form-control input-register" placeholder="Contraseña" id="exampleInputPassword1" height="46px" />
                        </div>

                        <button type="submit" className="btn btn-primary centrado-btn">SIGUIENTE</button>
                    </form>


                </div>



            </div>

        </div>


    );

};


export default register;