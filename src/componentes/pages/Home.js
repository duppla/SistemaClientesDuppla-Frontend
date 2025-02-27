import React, { useEffect, useState, useContext } from "react";
import Idocumento from "../../img/iconodocumentos.png"
import Iinmueble from "../../img/iconoinmueble.png"
import BarraProgreso from "../../img/barraprogreso.png"
import Iprogresive1 from "../../img/Iprogresive1.png"
import Iprogresive2 from "../../img/Iprogresive2.png"
import Iprogresive3 from "../../img/Iprogresive3.png"
import Iprogresive4 from "../../img/Iprogresive4.png"


import Istateg from "../../img/Istateg.png"
import Istatev from "../../img/Istatev.svg"
import Istater from "../../img/Istater.svg"

import Istateblue from "../../img/Istateblue.svg"
import IconDocs from "../../img/folderDocs.svg"

import Igo from "../../img/go.png"

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Contextauth";
import Navbar from "../../Components/Navbar";
import Lottie from 'lottie-react';
import animationData from '../../Components/loanding.json';
import ReactGA from 'react-ga';
import { Box, Button, Container, CssBaseline, Grid, ThemeProvider, createTheme } from "@mui/material";



const themeLogin = createTheme({
  status: {
    danger: '#FF111F',
  },
  palette: {
    primary: {
      main: '#5782F2',
      darker: '#0A3323',
    },
    neutral: {
      main: '#6C9FFF',
      contrastText: '#fff',
    },
  },
});

function Home() {

  useEffect(() => {
    // Envía un evento cuando el componente Docs se monta (se renderiza).
    ReactGA.pageview(window.location.pathname);
  }, []);

  // Función fecha del día actual

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let fecha = `${dd}/${mm}/${yyyy}`;



  //Datos del usuario
  const [data, setData] = useState({});
  const [state, setState] = useState({});
  const estado = localStorage.getItem('estado');
  const [stateInmu, setStateInmu] = useState({});
  const [loading, setLoading] = useState(true);


  //console.log(estado);

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const email = localStorage.getItem('email');
    const estado = localStorage.getItem('estado');

    async function fetchDatos() {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{ "email": ' + email + '}'
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/home`, options)
      const data = await response.json();
      setData(data)
      setState(estado);
      setLoading(false);
    }

    async function handleProgress() {

      const email = localStorage.getItem('email');

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{ "email": ' + email + '}'
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/inm/getInm`, options)
      const datos = await response.json();
      setStateInmu(datos);
      
    }
    fetchDatos();
    handleProgress();

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  // trae la función  salida, que se declaro en el contexto para implementar aquí

  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  };

  // 
  const stateUser = data.estado;
  const stateInm = data.estado_inm;
  const stateOffer = data.estado_oferta;
  const whatsappLink = data.link_whatsapp;





  const stateChange = (stateUser) => {

    switch (stateUser) {
      case "Pendiente":
        return <img src={BarraProgreso} className="img-fluid" alt="" />;
      case "Propuesta inicial / Visita virtual":
        return <img src={Iprogresive1} className="img-fluid" alt="" />;
      case "Aprobación Inmueble":
        return <img src={Iprogresive2} className="img-fluid" alt="" />;
      case "Proceso documental":
        return <img src={Iprogresive3} className="img-fluid" alt="" />;
      case "Cerrada ganada":
        return <img src={Iprogresive4} className="img-fluid" alt="" />;

      default: return <img src={BarraProgreso} className="img-fluid" alt="" />;

    }
  }
  const stateChangeProgress = (stateUser) => {

    switch (stateUser) {
      case "Pendiente":
        return <p>Por aprobar la oferta vinculante</p>;
      case "Aceptado":
        return <p>Realizando el estudio de titulos</p>;
      case "AceptadoInm":
        return <p>Falta la firma de promesa de compraventa</p>;
      case "AceptadoDocs":
        return <p>Falta firma de documentos</p>;
      case "Escritura":
        return <p>Falta firma de escritura</p>;
      case "Mudarse":
        return <p>Estas listo para mudarse</p>;

      default: return <p>Por aprobar la oferta vinculante</p>;
    }
  }

  function testOffer() {
    {/*true-false verificar si esta */ }
    const testOne = stateOffer;
    if (testOne === null || testOne === false) {
      return <img src={Istateg} className="btn-state-home-grid-gris" alt="" height='12px' width='12px' />
    }
    else {
      return <img src={Istatev} className="btn-state-home-grid" alt="" height='12px' width='12px' />
    }
    
  }


  // muestra el boton de ir a custumer usando el estado del usuaruio
  function testEstado() {
    const estado = localStorage.getItem('estado');
    if (estado === "true") {
      return <li className="nav-item  nav-section">
        <Link to="/inicio">
          <div className="row ">
            <div className="col-8 outline ">
              <div className="row">
                <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                  <div className="card-body col-1  img-state-propety">
                    <img src={Igo} className="" alt="" height='24px' width='24px' />
                  </div>
                  <div className="col-10 outline">
                    <p className=" text-docs"><b >Sección cliente</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </li>
    }
    else {
      return null
    }

  }
  useEffect(() => {
    const stateChangeInm = stateInmu.estado;
    // console.log(stateChangeInm);
    stateChangeAprovacioninm(stateChangeInm);
  }, [stateInmu]);

  {/*Cambio en estado inmueble */ }
  const stateChangeAprovacioninm = () => {
    const stateChangeInm = stateInmu.estado;
    switch (stateChangeInm) {
      case "No evaluado":
        return <Grid item xs={2} md={2} lg={2}>
          <Grid container maxWidth="xl" spacing={1} sx={{
          }}>
            <Grid item xs={3} md={3} lg={3}>
              <div className="">
                <img src={Istateg} className="btn-state-home-grid-gris" alt="" height='14px' width='14px' />
              </div>
            </Grid>
            <Grid item xs={7} md={7} lg={7}>

              {/* card-text-grid  card-text-aprov-grid */}
              <div className="">
                <p className="">{funcionFechaInm()}</p>
                <p className="text-inm-home-width">No evaluado</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

      case "Evaluado":
        return <Grid item xs={2} md={2} lg={2}>
          <Grid container maxWidth="xl" spacing={1} sx={{

          }}>
            <Grid item xs={3} md={3} lg={3}>
              <div className="">
                <img src={Istateblue} className="btn-state-home-grid" alt="" height='14px' width='14px' />
              </div>
            </Grid>
            <Grid item xs={7} md={7} lg={7}>
              <div className="">
                <p className="card-text-grid">{funcionFechaInm()}</p>
                <p className="card-text-aprov-grid">Evaluado</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

      case "Aprobado":
        return <Grid item xs={2} md={2} lg={2}>
          <Grid container maxWidth="xl" spacing={1} sx={{
          }}>
            <Grid item xs={3} md={3} lg={3}>
              <div className="">
                <img src={Istatev} className="btn-state-home-grid" alt="" height='14px' width='14px' />
              </div>
            </Grid>
            <Grid item xs={7} md={7} lg={7}>

              {/* card-text-grid  card-text-aprov-grid */}
              <div className="">
                <p className="">{funcionFechaInm()}</p>
                <p className="">Aprobado</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

      case "Rechazado":
        return <Grid item xs={2} md={2} lg={2}>
          <Grid container maxWidth="xl" spacing={1} sx={{
          }}>
            <Grid item xs={3} md={3} lg={3}>
              <div className="">
                <img src={Istater} className="btn-state-home-grid" alt="" height='14px' width='14px' />
              </div>
            </Grid>
            <Grid item xs={7} md={7} lg={7}>

              {/* card-text-grid  card-text-aprov-grid */}
              <div className="">
                <p className="">{funcionFechaInm()}</p>
                <p className="">Rechazado</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

      default: return <Grid item xs={2} md={2} lg={2}>
        <Grid container maxWidth="xl" spacing={1} sx={{
        }}>
          <Grid item xs={3} md={3} lg={3}>
            <div className="">
              <img src={Istateblue} className="btn-state-home-grid-blue" alt="" height='14px' width='14px' />
            </div>
          </Grid>
          <Grid item xs={7} md={7} lg={7}>

            {/* card-text-grid  card-text-aprov-grid */}
            <div className="">
              <p className="">{funcionFechaInm()}</p>
              <p className="text-inm-home-width">No evaluado</p>
            </div>
          </Grid>
        </Grid>
      </Grid>

    }
  }

  {/** consicional mostrar mensaje desde legal o ventasm  */ }
  function mensajeSf() {

    const msjLegal = data.mensaje;
    const msjOportunidad = data.mensaje_oportunidad;

    if (msjLegal !== null || msjLegal !== undefined) {
      return <div>
        <div><p className="card-text-aprov"> {msjOportunidad}</p></div>
        <div><p className="card-text-aprov"> {msjLegal}</p></div>
      </div>
    }
    else if (msjOportunidad !== null || msjOportunidad !== undefined) {
      return <div>
        <div><p className="card-text-aprov"> {msjLegal}</p></div>
        <div><p className="card-text-aprov"> {msjOportunidad}</p></div>
      </div>
    } else {
      return <p className="card-text-aprov"> No tienen notificaciones nuevas</p>
    }

  }

  function funcionFecha() {
    if (data && data.fecha_ofer) {
      const fechaOriginal = data.fecha_ofer;
      const fechaPartes = fechaOriginal.split('T')[0].split('-'); // Dividir la fecha en partes
      const fechaFormateada = `${fechaPartes[2]}/${fechaPartes[1]}/${fechaPartes[0]}`;

      return (
        <div>
          <p> {fechaFormateada}</p>
        </div>
      );
    } else {
      // Manejo de casos en los que data.fecha_ofer no está definida o es nula
      return (
        <div>
          <p className="text-white">Sin fecha </p>
        </div>
      );
    }
  }
  /* Función que cambia el formato de fecha en la aprovación del inmueble */
  function funcionFechaInm() {
    if (data && data.fecha_inm) {
      const fechaOriginal = data.fecha_inm;
      const fechaPartes = fechaOriginal.split('T')[0].split('-'); // Dividir la fecha en partes
      const fechaFormateada = `${fechaPartes[2]}/${fechaPartes[1]}/${fechaPartes[0]}`;

      return (
        <div>
          <p> {fechaFormateada}</p>
        </div>
      );
    } else {
      // Manejo de casos en los que data.fecha_ofer no está definida o es nula
      return (
        <div>
          <p className="text-white">Sin fecha </p>
        </div>
      );
    }
  }


  function handleHometLinkClick() {
    // Envía un evento cuando se hace clic en un enlace de documento.
    ReactGA.event({
      'category': 'clic',
      'action': `Clicked on button`,
      'label': 'Botón cards',

    });

  };
  function handleHometLinkClickWhasApp() {
    // Envía un evento cuando se hace clic en un enlace de documento.
    ReactGA.event({
      'category': 'clic',
      'action': `Clicked on button WhatsApp`,
      'label': 'Button WhatsApp',

    });

  };

  function handleHometLinkClickCalendly() {
    // Envía un evento cuando se hace clic en un enlace de documento.
    ReactGA.event({
      'category': 'clic',
      'action': `Clicked on button Calendly`,
      'label': 'Button Calendly',

    });

  };


  return (
    <ThemeProvider theme={themeLogin} sx={{ m: 0, p: 0, }}>
      <div className="  ">
        <Navbar />
        {loading ? (<div className='loanding '>
          <div className='loanding-container'>
            <h2 className='text-loandig '>Cargando...</h2>
            <div className='text-loandig '
            >
              <div className='loanding-state-mui' /* style={{ width: '150px', height: '150px', background:'#F1FFEB' }} */>
                <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>) : (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'start',
          }}>
            <CssBaseline />


            <div className="">
              {/*Contenedor de Propuesta Comercial  container-sm  Container-cards-seccion-m centrado card-seccion" */}


              <div className=" Container-cards-seccion-mui" onClick={handleHometLinkClick()} id="cardComponet">
                <Link to='/offer' className="link-style">
                  <Container maxWidth='xl' className="">
                    <Grid container className="" sx={{
                      ml: 1
                    }}>
                      <Grid item xs={10} md={10} lg={10}>
                        <Grid container maxWidth="xl" spacing={2} sx={{
                          mt: 2,
                        }}>
                          <Grid item xs={2} md={2} lg={2}>
                            <div className="">
                              <img src={Idocumento} className="img-icono-card-grid" alt="" />
                            </div>
                          </Grid>
                          <Grid item xs={8} md={8} lg={8}>
                            {/*card-home-offer   card-title-home card-top-grid */}
                            <div className="">
                              <h4 className="card-title-home"><b>Propuesta Comercial</b></h4>
                              < p className="link-style">Abrir</p>
                            </div>
                          </Grid>
                          <Grid item xs={2} md={2} lg={2}>
                            <Grid container maxWidth="xl" spacing={1} sx={{
                            }}>
                              <Grid item xs={3} md={3} lg={3}>
                                <div className="">
                                  {testOffer(stateOffer)}
                                </div>
                              </Grid>
                              <Grid item xs={7} md={7} lg={7}>

                                {/* card-text-grid  card-text-aprov-grid */}
                                <div className="">
                                  <p className="card-text-grid-prc">{funcionFecha()}</p>
                                  <p className="card-text-aprov-grid ">{stateOffer ? "Aceptado" : "Pendiente"}</p>
                                </div>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Link>
              </div>
              {/*Contenedor de inmueble */}
              {/* Container-cards-seccion-m centrado */}
              <div className=" Container-cards-seccion-mui" onClick={handleHometLinkClick()} id="cardComponet">
                <Link to='/property' className="link-style">
                  <Container maxWidth='xl' className="">
                    <Grid container className="" sx={{
                      ml: 1
                    }}>
                      <Grid item xs={10} md={10} lg={10}>
                        <Grid container maxWidth="xl" spacing={2} sx={{
                          mt: 2,
                        }}>
                          <Grid item xs={2} md={2} lg={2}>
                            <div className="">
                              <img src={Iinmueble} className="img-icono-card-grid" alt="" />
                            </div>
                          </Grid>
                          <Grid item xs={8} md={8} lg={8}>
                            {/*card-home-offer   card-title-home card-top-grid */}
                            <div className="">
                              <h4 className="card-title-home"><b>Inmueble</b></h4>
                              < p className="link-style">Abrir</p>
                            </div>
                          </Grid>
                          {stateChangeAprovacioninm(stateInmu)}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>
                </Link>
              </div>


              {/*Menú documentos*/}
              <div className="Container-cards-seccion-mui " id="cardComponet">
                <Link to='/documents' className="links text-black">
                  <Container maxWidth='xl' className="">
                    <Grid container className="" sx={{
                      ml: 1
                    }}>
                      <Grid item xs={10} md={10} lg={10}>
                        <Grid container className="centrado" maxWidth="xl" spacing={2} sx={{
                          mt: 2,
                        }}>
                          <Grid item xs={2} md={2} lg={2}>
                            <div className="">
                              <img src={IconDocs} className="img-icono-card-grid-folder" alt="" />

                            </div>
                          </Grid>
                          <Grid item xs={8} md={8} lg={8}>
                            {/*card-home-offer   card-title-home card-top-grid */}
                            <div className="">
                              <h4 className="card-title-home-mui"><b>Menú documentos</b></h4>

                            </div>
                          </Grid>
                          <Grid item xs={2} md={2} lg={2}>
                            <div className="">
                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAgFJREFUeF7t2z1KxEAYxvH/XkAQPIKgYGMvinoiSys/Kks7jyOK1hZroeARRMUbyMAGRNzsJEPeeQae1BOS/OaZN5PZ2Rk+egVm9ukXMNCKhBjIQGVFxAlygpygMgEnqMzPNcgJcoLKBJygMj/XIOEErQNfZf07/dm1EnQDHAEHwPv0jzn+CjWAroGTxS2/qiNFA10Bp3/6UxopEugcuFgSdlmkKKCUmpSevkMSKQIo1ZtUd3IOOaQIoBdgO0dn0Wa+eMN9DjhnsqYRQBvAI7A14CmegUOgOlIEUHJpFikKqFmkSKAmkaKBmkOqAdQh3QE76oW7FlBySV/zD+pINYFKkPaB7wHpG920NtBYpCfgOAJJAUgaSQVIFkkJSBJJDUgOSRGoQ7oFdge8fiYp3KpAa8C9gf6PhwxOuj21BKXZtcTQ6vpOCWjMp8ckded3sFWAJHFUhtgYnLQkG/I9VjtBY3HC1qtrAsnj1BxiaRHfC2ZLZsFN/cIRPcSawokeYs3hRAI1iRMF1CxOFNAbsDlg2SJNAtP2vI8B50zWNKJID93+sqewaSH6YzUHSW5vUNQQ6zrjDLhcMhYkcaKB0vW8iTOjWnobcAaSN5JnIPmvCBlI8k0i5kHyCH03aKAV3WcgA5WNcCfICXKCygScoDI/1yAnyAkqE3CCyvxcg1b4/QBf035JQzfVwQAAAABJRU5ErkJggg=="
                                className="arrow-menu-home-mui" />
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Container>

                </Link>
              </div>



              {/*componente de estados*/}
              <div className="centrado space-docs-home container-fluid">
                <div className="row ">
                  {stateChange(stateUser)}
                </div>
              </div>


              {/*componente de estados*/}

              <div className=" Container-cards-seccion-mui-mensajesalesforce" id="cardComponet">

                <Container maxWidth='xl' className="">
                  <Grid container className="" sx={{
                    ml: 1,
                   
                  }}>
                    <Grid item xs={10} md={10} lg={10}>
                      <Grid container maxWidth="xl" spacing={2} sx={{
                        mt: 2,                        
                      }}>
                        <Grid item xs={10} sm={10} md={12} lg={12} >
                          <div className="">
                            <h6>Estado:</h6>
                            {/* */}
                            <b> {mensajeSf()} </b>                            
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Container>
              </div>

             

              <Container maxWidth="xl" sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                mb: 2,
                mt: 4,
              }}
                className=''>
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{
                }}>

                  <Grid item sx={12} sm={12} md={12} lg={12} >
                    <div className="">
                      <a className="links" href="https://calendly.com/agendadaniel">
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={handleHometLinkClickCalendly}
                          sx={{
                            marginTop: '10px',
                            mb: 3,
                            background: '#81A1F8',
                            borderRadius: '10px',
                            color: '#ffffff',

                            textTransform: 'none',
                            border: '1px solid #81A1F8',
                            height: '58px',

                            fontFamily: 'Helvetica',
                            fontSize: '18px',

                            maxWidth: '430px', // Utiliza maxWidth en lugar de width
                            width: '100%', // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                            margin: '0 auto', // Centrar horizontalmente
                            display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                            justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                            alignItems: 'center', // Centrar verticalmente el contenido
                            minWidth: '300px',
                          }}
                        >
                          Agendar una cita
                        </Button>
                      </a>
                    </div>

                  </Grid>
                  <Grid item sx={12} sm={12} md={12} lg={12} >
                    <div className="">
                      <a className="links" href={whatsappLink}>
                        <Button
                          fullWidth
                          variant="contained"
                          onClick={handleHometLinkClickWhasApp}

                          sx={{

                            marginTop: '10px',
                            mb: 3,
                            background: '#ffffff',
                            borderRadius: '10px',
                            color: '#6C9FFF',

                            textTransform: 'none',
                            border: '1px solid #6C9FFF',
                            height: '58px',

                            fontFamily: 'Helvetica',
                            fontSize: '18px',

                            maxWidth: '430px', // Utiliza maxWidth en lugar de width
                            width: '100%', // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                            margin: '0 auto', // Centrar horizontalmente
                            display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                            justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                            alignItems: 'center', // Centrar verticalmente el contenido
                            minWidth: '300px',
                          }}
                        >
                          Tengo algún problema
                        </Button>
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
          </Box>
        )}
      </div>
    </ThemeProvider>

  );
}

export default Home;
