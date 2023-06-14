import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function pagosHistorial() {
    // uso del localsotrage para traer estado del usuario
    const estado = localStorage.getItem('estado');

    const [dataPago, setDatapago] = useState({});
   
    
    useEffect(() => {
      const email = localStorage.getItem('email');

        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            //body: '{"id":'+ id +' }'
           // body: '{"id":"ENGATIVA_C28_2301"}'
           body: '{ "email": ' + email + '}'
          };
          
          fetch('https://sistema-duppla-backend.herokuapp.com/pagos/sigo', options)
            .then(response => response.json())
            .then(response => setDatapago(response))
            .catch(err => console.error(err));

    },[]);

    const dato = dataPago.document;


    console.log("Aqui debria haber algo", dato);

    // función que redirecciona al usuario de buyer a custumer

    function testRedireccion() {
        const estado = localStorage.getItem('estado');
        if (estado === "true") {
            return <div className="arrow-return">
                <Link to='/inicio'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
        }
        else {
            return <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
        }

    }


    return (
        <div className="Documents container-fluid">
            {testRedireccion(estado)}
            <div className="title-register">
                <h1> <b>Historial de pagos</b>
                </h1>
            </div>
            {/* Div de docs*/}

            <div className="content-docs  container-sm ">
                <div className="card-docs-m   ">
                    <div>
                    <h4>Pagos</h4>

                    </div>
                    <div className="card-body-docs col-2">

                    </div>
                    <div className="card-body col-8 text-space">
                        <b className="">Oferta vinculante</b>
                        <p className="card-text-docs"><small className="text-muted">{ }</small></p>
                    </div>

                    <div className="col-2 outline">
                       
                    </div>

                </div>



            </div>

        </div>/*Div de cierre*/
    );
}


export default pagosHistorial;