import React, { useEffect, useState, useContext } from "react";
import Idocumento from "../../img/iconodocumentos.png"
import Iinmueble from "../../img/iconoinmueble.png"
import Iperfil from "../../img/iconoperfil.png"
import BarraProgreso from "../../img/barraprogreso.png"
import Iprogresive1 from "../../img/Iprogresive1.png"
import Iprogresive2 from "../../img/Iprogresive2.png"
import Iprogresive3 from "../../img/Iprogresive3.png"
import Iprogresive4 from "../../img/Iprogresive4.png"


import Istateg from "../../img/Istateg.png"
import Istaten from "../../img/Istaten.png"
import Istatem from "../../img/Istatem.png"
import Istatev from "../../img/Istatev.svg"
import Istater from "../../img/Istater.svg"
import Istatea from "../../img/Istatea.svg"
import Istateblue from "../../img/Istateblue.svg"

import Idupplanaranja from "../../img/Idupplanaranja.png"
import Vperfil from "../../img/vperfil.svg"
import Voferta from "../../img/voferta.svg"
import Vinmueble from "../../img/vinmueble.svg"
import Vdocs from "../../img/vdocs.svg"
import Vlogout from "../../img/vlogout.svg"
import Vrectangulo from "../../img/vrectanguler.svg"
import Iconinm from "../../img/Iconinm.png"
import Igo from "../../img/go.png"

import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Contextauth";
import Navbar from "../../Components/Navbar";
import { Box, CssBaseline, Grid } from "@mui/material";




function Home() {

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
      const response = await fetch('https://sistema-duppla-backend.herokuapp.com/users/home', options)
      const data = await response.json();
      setData(data)
      setState(estado);
    }

    async function handleProgress() {
      const email = localStorage.getItem('email');

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: '{ "email": ' + email + '}'
      };
      const response = await fetch('https://sistema-duppla-backend.herokuapp.com/inm/getInm', options)
      const datos = await response.json();
      //console.log(datos);
      setStateInmu(datos);
      //console.log(datos);

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


  {/*Función que cambia el nobre de usurio a minuscula */ }

  function convertirAMinusculas(texto) {
    return texto.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase());
  }

  const pruebaprogreso = state.estado;


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
      return <img src={Istateg} className="btn-state-home-grid" alt="" height='12px' width='12px' />
    }
    else {
      return <img src={Istatev} className="btn-state-home-grid" alt="" height='12px' width='12px' />
    }
  }

  function testInm() {
    const testTwo = stateInm;
    if (testTwo === null) {
      return <img src={Istateg} className="btn-state-home" alt="" height='12px' width='12px' />
    }
    else {
      return <img src={Istatev} className="btn-state-home" alt="" height='12px' width='12px' />
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
        return <div className=" ">
          <div className="card-seccion"  >
            <div className="row ">
              <div className="col-1">
                <img src={Iconinm} className="img-icono-card-inm" alt="" />
              </div>
              <div className="col-4 card-home-offer">
                <h4 className="card-title-home card-top "><b>Inmueble</b></h4>
                <p className="link-style">Abrir</p>
              </div>

              <div className="col-1">
                <img src={Istateg} className="btn-state-home" alt="" height='12px' width='12px' />
              </div>
              <div className="col-4">
                <div className="card-body">
                  <p className="card-text">03/03/2023</p>
                  <p className="card-text-aprov">No evaluado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      case "Evaluado":
        return <div className=" ">
          <div className="card-seccion"  >
            <div className="row ">
              <div className="col-1">
                <img src={Iconinm} className="img-icono-card-inm" alt="" />
              </div>
              <div className="col-4 card-home-offer">
                <h4 className="card-title-home card-top "><b>Inmueble</b></h4>
                <p className="link-style">Abrir</p>
              </div>

              <div className="col-1">
                <img src={Istateblue} className="btn-state-home" alt="" height='12px' width='12px' />
              </div>
              <div className="col-4">
                <div className="card-body">
                  <p className="card-text">03/03/2023</p>
                  <p className="card-text-aprov">Evaluado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      case "Pendiente por aprobar":
        return <div className=" ">
          <div className="card-seccion"  >
            <div className="row ">
              <div className="col-1">
                <img src={Iconinm} className="img-icono-card-inm" alt="" />
              </div>
              <div className="col-4 card-home-offer">
                <h4 className="card-title-home card-top "><b>Inmueble</b></h4>
                <p className="link-style">Abrir</p>
              </div>

              <div className="col-1">
                <img src={Istatea} className="btn-state-home" alt="" height='12px' width='12px' />
              </div>
              <div className="col-4">
                <div className="card-body">
                  <p className="card-text">03/03/2023</p>
                  <p className="card-text-aprov">Aprobado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      case "Aprobado":
        return <div className=" ">
          <div className="card-seccion"  >
            <div className="row ">
              <div className="col-1">
                <img src={Iconinm} className="img-icono-card-inm" alt="" />
              </div>
              <div className="col-4 card-home-offer">
                <h4 className="card-title-home card-top "><b>Inmueble</b></h4>
                <p className="link-style">Abrir</p>
              </div>

              <div className="col-1">
                <img src={Istatev} className="btn-state-home" alt="" height='12px' width='12px' />
              </div>
              <div className="col-4">
                <div className="card-body">
                  <p className="card-text">03/03/2023</p>
                  <p className="card-text-aprov">Aprobado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      case "Rechazado":
        return <div className=" ">
          <div className="card-seccion"  >
            <div className="row ">
              <div className="col-1">
                <img src={Iconinm} className="img-icono-card-inm" alt="" />
              </div>
              <div className="col-4 card-home-offer">
                <h4 className="card-title-home card-top "><b>Inmueble</b></h4>
                <p className="link-style">Abrir</p>
              </div>

              <div className="col-1">
                <img src={Istater} className="btn-state-home" alt="" height='12px' width='12px' />
              </div>
              <div className="col-4">
                <div className="card-body">
                  <p className="card-text">03/03/2023</p>
                  <p className="card-text-aprov">Rechazado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      default: return <div className=" ">
        <div className="card-seccion"  >
          <div className="row ">
            <div className="col-1">
              <img src={Iconinm} className="img-icono-card-inm" alt="" />
            </div>
            <div className="col-4 card-home-offer">
              <h4 className="card-title-home card-top "><b>Inmueble</b></h4>
              <p className="link-style">Abrir</p>
            </div>

            <div className="col-1">
              <img src={Istateg} className="btn-state-home" alt="" height='12px' width='12px' />
            </div>
            <div className="col-4">
              <div className="card-body">
                <p className="card-text">03/03/2023</p>
                <p className="card-text-aprov">No evaluado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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

  return (
    <div className="  ">
      <Navbar />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'start',
      }}>
        <CssBaseline />


        <div className="container-sm">
          {/*Contenedor de Propuesta Comercial */}

          <div className="Container-cards-seccion-m centrado " id="cardComponet">
            <Link to='/offer' className="link-style">           

              <Grid container className="card-seccion" sx={{
              }}>
                <Grid item xs={10} md={10} lg={10}>

                  <Grid container maxWidth="xl" spacing={2} sx={{
                    mt: 2,
                  }}>
                    <Grid item xs={2} md={2} lg={2}>
                      <div className="col-1">
                        <img src={Idocumento} className="img-icono-card-grid" alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={8} md={8} lg={8}>
                      <div className="col-4 card-home-offer">
                        <h4 className="card-title-home card-top-grid"><b>Propuesta Comercial</b></h4>
                        < p className="link-style">Abrir</p>
                      </div>
                    </Grid>
                    <Grid item xs={2} md={2} lg={2}>

                      <Grid container maxWidth="xl" spacing={1} sx={{
                       
                      }}>
                        <Grid item xs={3} md={3} lg={3}>
                          <div className="col-1">
                            {testOffer(stateOffer)}
                          </div>
                        </Grid>
                        <Grid item xs={7} md={7} lg={7}>
                          <div className="">
                            <p className="card-text-grid">03/03/2023</p>
                            <p className="card-text-aprov-grid">{stateOffer ? "Aceptado" : "Pendiente"}</p>
                          </div>

                        </Grid>



                      </Grid>



                    </Grid>



                  </Grid>

                </Grid>

              </Grid>


            </Link>

          </div>







          {/*Contenedor de inmueble */}
          <div className="Container-cards-seccion-m centrado " id="cardComponet">
            <Link to='/property' className="link-style">
              {stateChangeAprovacioninm(stateInmu)}

            </Link>
          </div>
          {/*Menú documentos*/}
          <Link to='/documents' className="links text-black ">
            <div className="card-docs-m  ">
              <div className="card-body  col-8 text-docs">
                <b>Menú documentos</b>
              </div>
              <div className="col-2 outline">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAgFJREFUeF7t2z1KxEAYxvH/XkAQPIKgYGMvinoiSys/Kks7jyOK1hZroeARRMUbyMAGRNzsJEPeeQae1BOS/OaZN5PZ2Rk+egVm9ukXMNCKhBjIQGVFxAlygpygMgEnqMzPNcgJcoLKBJygMj/XIOEErQNfZf07/dm1EnQDHAEHwPv0jzn+CjWAroGTxS2/qiNFA10Bp3/6UxopEugcuFgSdlmkKKCUmpSevkMSKQIo1ZtUd3IOOaQIoBdgO0dn0Wa+eMN9DjhnsqYRQBvAI7A14CmegUOgOlIEUHJpFikKqFmkSKAmkaKBmkOqAdQh3QE76oW7FlBySV/zD+pINYFKkPaB7wHpG920NtBYpCfgOAJJAUgaSQVIFkkJSBJJDUgOSRGoQ7oFdge8fiYp3KpAa8C9gf6PhwxOuj21BKXZtcTQ6vpOCWjMp8ckded3sFWAJHFUhtgYnLQkG/I9VjtBY3HC1qtrAsnj1BxiaRHfC2ZLZsFN/cIRPcSawokeYs3hRAI1iRMF1CxOFNAbsDlg2SJNAtP2vI8B50zWNKJID93+sqewaSH6YzUHSW5vUNQQ6zrjDLhcMhYkcaKB0vW8iTOjWnobcAaSN5JnIPmvCBlI8k0i5kHyCH03aKAV3WcgA5WNcCfICXKCygScoDI/1yAnyAkqE3CCyvxcg1b4/QBf035JQzfVwQAAAABJRU5ErkJggg=="
                  className="arrow-menu" />
              </div>
            </div>
          </Link>
          <br />
          {/*componente de estados*/}
          <div className="centrado space-docs-home container-fluid">
            <div className="row ">
              {stateChange(stateUser)}
            </div>
          </div>
          {/*componente de estados*/}
          <div className=" centrado-mensaje ">
            <div className="row  ">
              <h6>Estado:</h6>
              {/* */}
              <b> {mensajeSf()} </b>
            </div>
          </div>
          {/*componente calendario*/}
          <div className="  btn-m" id="btnIniciarSesion">
            <a className="links text-white"
              href="https://calendly.com/agendadaniel">
              <button type="button" className="btn btn-prueba text-center links text-white" width="400px" height="46px" >
                Agendar una cita
              </button>
            </a>
          </div>
          {/*componente  soporte*/}
          <div className=" btn-m " id="">
            <a className="links btn-m  "
              href="https://api.whatsapp.com/send?phone=573152559261">
              <button type="button" className="btn btn-prueba-blanco text-blue btn-m"  >
                Tengo algún problema
              </button>
            </a>
          </div>
        </div>

      </Box>

    </div>

  );
}

export default Home;
