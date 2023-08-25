import { loadGapiInsideDOM } from 'gapi-script';
import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Ioferta from "../../img/Ioferta.png";
import Idefaultoffer from "../../img/Idefaultoffer.png";
import swal from 'sweetalert';
import { Box, CssBaseline } from '@mui/material';




function Offer() {
  const navigate = useNavigate();

  const [oferta, setOferta] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [progress, setProgress] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const getOferta = async () => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{ "email": ' + email + '}'
      };

      try {
        const response = await fetch('https://sistema-duppla-backend.herokuapp.com/ofertas/getOferta', options);
        const data = await response.json();
        setOferta(data);
        setIsButtonDisabled(data.estadoOferta__c);
        //setIsButtonDisabled(data.estadoOferta__c !== null && data.estadoOferta__c !== '' && data.estadoOferta__c !== undefined);

      } catch (err) {
        console.error(err);
      }

    };
    getOferta();
   // console.log('mensaje validación' + isButtonDisabled)
  }, []);

  const handleProgress = async () => {
    const email = localStorage.getItem('email');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ "email": ' + email + '}'
    };

    try {
      const response = await fetch('https://sistema-duppla-backend.herokuapp.com/ofertas/accept', options);
     if(response.status === 200){
       setIsButtonDisabled(true);
     }
      //console.log('mensaje validación' + response.status)
    } catch (err) {
      console.error(err);
    }

    swal({
      title: "¡Oferta aceptada!",
      text: "¡Tu oferta ha sido aceptada, se redireccionará a inicio!",
      icon: "success",
      button: "Aceptar",
    }).then(() => {
      navigate('/home');
    });
  };

  const offerUrl = oferta.Oferta_URL__c;



  return (

    <div className="container-fluid">



      <div className="container-offer">
        <div className="">
          <div className="arrow-return">
            <Link to='/home'>
              <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" fill="currentColor" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="title-register">
          <h1> <b>Propuesta comercial</b>
          </h1>
        </div>
        {/* */}


        <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'start',
      }}>
        <CssBaseline />
        <div className='container-fluid '>
          {offerUrl ?
            <div className="  offer-container-link  " id="btnIniciarSesion">
              <div>
                <p className='text-offer-link'><b>Da clic en botón para ver la oferta</b></p>
              </div>
              <div className='centrado'>
                <a className="links text-white"
                  href={offerUrl} target="_blank"
                >

                  <button type="button" className="btn btn-prueba text-center links text-white " width="400px" height="46px" >
                    Oferta
                  </button>
                </a>
              </div>

            </div> : <div className='img-offer-conatiner '>
              <p>Todavía no tenemos tu propuesta comercial, te avisaremos cuando esté disponible</p>
              <img src={Idefaultoffer} className="container fluid" alt="..." />
            </div>}
        </div>
        <br />
        <br />
        {/*Sección botones oferta */}
        <div className="d-flex justify-content-center align-items-center container-sm">
          <div>
            <Link to='/home'>
              <button type="button"
                className={` btn-d-cancel ${isButtonDisabled ? 'btn-disabled-offert' : ''}`}
                disabled={isButtonDisabled}
              >Rechazar</button>
            </Link>
          </div><br />
          <div className="">
            <button type="button"
              id='btnAceptar'
              className={`btn-d-cancel ${isButtonDisabled ? 'btn-disabled-offert' : ''}`}
              onClick={handleProgress}
              disabled={isButtonDisabled}>Aceptar</button>
          </div>
        </div>

    </Box>

      </div>
    </div>
  );

}

export default Offer;