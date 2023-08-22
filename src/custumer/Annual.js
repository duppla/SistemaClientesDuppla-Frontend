import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './../custumer/Annual.css'
import Idefaultoffer from "./../img/Idefaultoffer.png";

function Annual() {

    // Función fecha del mes actual
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const d = new Date();
    let mes = monthNames[d.getMonth()];


    // uso del localsotrage para traer estado del usuario
    const estado = localStorage.getItem('estado');

    const [dataPago, setDataPago] = useState([]);


    useEffect(() => {
        const email = localStorage.getItem('email');

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}' // Pasamos el email en el cuerpo como JSON
        };

        fetch('https://sistema-duppla-backend.herokuapp.com/pagos/sigo', options)
            .then(response => response.json())
            .then(jsonData => {

                const extractedData = jsonData.map(item => ({
                    id: item.id,
                    daterc: item.date,
                    date: item.items[0].due.date,
                    payment: item.payment,
                }));

                setDataPago(extractedData)
                console.log(extractedData);
            })
            .catch(err => console.error(err));
            
        }, []);
        console.log(dataPago);
        
    // redireccionamiento dependiendo si el usuario es true o false
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
        <div className='container-consolidated-annual container-fluid'>
            {testRedireccion()}
            <div className="title-register">
                <h4> <b>2023</b>
                </h4>
            </div>
            {/*Componente facturas */}

            <div>
                {dataPago.length > 0 ? (
                    <div>
                        {dataPago.map((item, index) => (
                            <div key={item.id}>
                                <div className=" accordion accordion-h-payment " id={`accordionExample-${index}`}>
                                    <div className="accordion-item ">
                                        <h2 className="accordion-header" id={`headingTwo-${index}`}>
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#mesDos-${index}`} aria-expanded="false" aria-controls={`mesDos-${index}`}>
                                                <div className=" text-start text-blue " id="basic-addon4"><h4>
                                                    {(() => {
                                                        const month = new Date(item.date).getMonth();
                                                        switch (month) {
                                                            case 0:
                                                                return 'Enero';
                                                            case 1:
                                                                return 'Febrero';
                                                            case 2:
                                                                return 'Marzo';
                                                            case 3:
                                                                return 'Abril';
                                                            case 4:
                                                                return 'Mayo';
                                                            case 5:
                                                                return 'Junio';
                                                            case 6:
                                                                return 'Julio';
                                                            case 7:
                                                                return 'Agosto';
                                                            case 8:
                                                                return 'Septiembre';
                                                            case 9:
                                                                return 'Octubre';
                                                            case 10:
                                                                return 'Noviembre';
                                                            case 11:
                                                                return 'Diciembre';
                                                            // Agrega los casos para los demás meses...
                                                            default:
                                                                return '';
                                                        }
                                                    })()}


                                                </h4></div>
                                            </button>
                                        </h2>
                                        {/*---------------------------------------------------------------------------------------------------------------------------------*/}
                                        <div className="card-payment-home-custumer ">
                                            <div className="collapse" id={`mesDos-${index}`}>
                                                <div className='container-notice-date-two'>
                                                    <div className='notice-up-to-date '>
                                                        <br/>
                                                        <div className='text-notice-date-two centrado'>
                                                            <h5><b>Pagaste: ${item.payment.value.toLocaleString()}</b></h5>
                                                        </div>
                                                        <br/>
                                                        <div className='text-notice-second centrado '>
                                                            <p>Fecha de pago:{item.daterc}</p>
                                                        </div>
                                                        {/*<div className='text-notice-second-s centrado '>
                                                            <p>Periodo de facturado:{item.date}</p>
                                                </div>*/}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                ) : (
                   
                  <div className='img-offer-conatiner '>
                      <p> No se encontraron datos relacionados al usuario... </p>                     
                  
                  <img src={Idefaultoffer} className="container-fluid"  alt="..." />
                </div>
                    
                )}
            </div>

            {/** <div className='container-fluid'>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/Facturacion'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Enero</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/pagos'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Febrero</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Marzo</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Abril</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Mayo</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Junio</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Julio</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Agosto</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Septiembre</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Octubre</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Nombre</h5>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='centrado'>
                    <div className=" btn input-group card-month centrado-btn " width="400px" height="68px" >
                        <Link to='/consolidado'>
                            <button type="button" id="" className="btn btn-cerrar text-blue " >
                                <h5>Diciembre</h5>
                            </button>
                        </Link>
                    </div>
                </div>


            </div> */}




        </div>
    )
}

export default Annual;