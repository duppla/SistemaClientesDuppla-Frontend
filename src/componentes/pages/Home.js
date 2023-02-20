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
import Istatev from "../../img/Istatev.png"
import Idupplanaranja from "../../img/Idupplanaranja.png"
import Vperfil from "../../img/vperfil.svg"
import Voferta from "../../img/voferta.svg"
import Vinmueble from "../../img/vinmueble.svg"
import Vdocs from "../../img/vdocs.svg"
import Vlogout from "../../img/vlogout.svg"
import Vrectangulo from "../../img/vrectanguler.svg"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Contextauth";
import Iconinm from "../../img/Iconinm.png"
import Iconx from "../../img/Iconx.svg"




function Home() {

  // Función fecha del día actual

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let fecha = `${dd}/${mm}/${yyyy}`;

  //Datos del usuario
  const [data, setData] = useState({});

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const email = localStorage.getItem('email');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ "email": ' + email + '}'
    };

    fetch('https://sistema-duppla-backend.herokuapp.com/users/home', options)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(err => console.error(err));


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

  const stateChange = (stateUser) => {

    switch (stateUser) {
      case "Pendiente":
        return <img src={BarraProgreso} className="img-fluid" alt="" />;
      case "Aceptado":
        return <img src={Iprogresive1} className="img-fluid" alt="" />;
      case "AceptadoInm":
        return <img src={Iprogresive2} className="img-fluid" alt="" />;
      case "AceptadoDocs":
        return <img src={Iprogresive3} className="img-fluid" alt="" />;

      case "Mudarse":
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

  return (

    <div className=" container-fluid ">
      <div className="container-sm">
        {/*Contenedor de perfil */}
        <div className="profile container-fluid">
          <div className="row contenedor-img-duppla">
            <img src={Idupplanaranja} className=" img-duppla" alt="" />
          </div>
          <div className="col-4 ">
            <Link to='/profile' className="link-styles"> <img src={Iperfil}
              className="  img-user"
              alt="perfil" />
            </Link>
          </div><hr className="hr-position" />
          <div className="col-6  card-perfil-datos">
            <div className="card-body">
              <h5 className="card-title card-home text-white" >{data.nombre}</h5>
              <p className="text-orange">{fecha}</p>
            </div>
          </div>
          <nav className=" col-2 navbar ">
            <div className="container-fluid ">
              <button className="navbar-toggler border-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon navbar-dark"></span>
              </button>
              <div className="">
                <div className=" offcanvas offcanvas-bottom navbar-container " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div className="offcanvas-body ">
                    <img src={Vrectangulo} className=" img-navbar centrado " data-bs-dismiss="offcanvas" alt="" />
                    <ul className="navbar-nav " >
                      <li className="nav-item ">
                        <Link to="/profile">
                          <div className="row ">
                            <div className="col-8 outline ">
                              <div className="row">
                                <div className="card-state-properties-home nav-link active text-navbar-options">
                                  <div className="card-body col-1  img-state-propety">
                                    <img src={Vperfil} className="" alt="" height='24px' width='24px' />
                                  </div>
                                  <div className="col-10 outline">
                                    <p className=" text-docs "><b >Perfil </b></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item  nav-section">
                        <Link to="/offer">
                          <div className="row ">
                            <div className="col-8 outline ">
                              <div className="row">
                                <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                  <div className="card-body col-1  img-state-propety">
                                    <img src={Voferta} className="" alt="" height='24px' width='24px' />
                                  </div>
                                  <div className="col-10 outline">
                                    <p className=" text-docs"><b >Ultima oferta</b></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/property">
                          <div className="row ">
                            <div className="col-8 outline ">
                              <div className="row">
                                <div className="card-state-properties-home nav-link active text-navbar-options">
                                  <div className="card-body col-1  img-state-propety">
                                    <img src={Vinmueble} className="" alt="" height='24px' width='24px' />
                                  </div>
                                  <div className="col-10 outline">
                                    <p className=" text-docs"><b >Inmueble</b></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="">
                        <Link to="/documents">
                          <div className="row ">
                            <div className="col-8 outline ">
                              <div className="row">
                                <div className="card-state-properties-home nav-link active text-navbar-options">
                                  <div className="card-body col-1  img-state-propety">
                                    <img src={Vdocs} className="" alt="" height='24px' width='24px' />
                                  </div>
                                  <div className="col-10 outline">
                                    <p className=" text-docs"><b>Documentos</b></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="">
                          <div className="row ">
                            <div className="col-8 outline ">
                              <div className="row">
                                <div className="card-state-properties-home nav-link active text-navbar-options">
                                  <div className="card-body col-1  img-state-propety">
                                    <img src={Vlogout} className="" alt="" height='24px' width='24px' />
                                  </div>
                                  <div className="col-10 outline" onClick={handleLogout}>
                                    <p className=" text-docs"><b >Cerrar sesión</b></p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/*Contenedor de oferta */}
        <div className="Container-cards-seccion-m centrado " id="cardComponet">
          <Link to='/offer' className="link-style">
            <div className="card-seccion ">
              <div className="row ">
                <div className="col-1">
                  <img src={Idocumento} className="img-icono-card" alt="" />
                </div>
                <div className="col-4 card-home-offer">
                  <h4 className="card-title card-top"><b>Ultima oferta</b></h4>
                  < p className="link-style">Abrir</p>
                </div>
                <div className="col-1">
                  {stateOffer ? <img src={Istatev} className="btn-state-home" alt="" height='12px' width='12px' /> : <img src={Istateg} className="btn-state-home" alt="" height='12px' width='12px' />}
                </div>
                <div className="col-4">
                  <div className="card-body">
                    <p className="card-text">03/02/2023</p>
                    <p className="card-text-aprov">{stateOffer ? "Aceptado" : "Pendiente"}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

        </div>
        {/*Contenedor de inmueble */}
        <div className="Container-cards-seccion-m centrado " id="cardComponet">
          <Link to='/property' className="link-style">
            <div className="card-seccion"  >
              <div className="row ">
                <div className="col-1">
                  <img src={Iconinm} className="img-icono-card-inm" alt="" />
                </div>
                <div className="col-4 card-home-offer">
                  <h4 className="card-title card-top "><b>Inmueble</b></h4>
                  <p className="link-style">Abrir</p>
                </div>
                <div className="col-1">
                  {stateInm ? <img src={Istatev} className="btn-state-home" alt="" height='12px' width='12px' /> : <img src={Istateg} className="btn-state-home" alt="" height='12px' width='12px' />}
                </div>
                <div className="col-4">
                  <div className="card-body">
                    <p className="card-text more">03/02/2023</p>
                    <p className="card-text-aprov">{stateInm ? "Aceptado" : "Pendiente"}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/*Menú documentos*/}
        <Link to='/documents' className="links text-black">
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
        {/*componente de estados*/}
        <div className="centrado  container-fluid">
          <div className="row ">
            {stateChange(stateUser)}
          </div>
        </div>
        {/*Cambio de estado*/}
        {/*<div className="d-grid" id="cardComponet">
          <div className="card-seccion">
            <div className="row ">
              <div className="col-2">
                <img src={Iconx} className="img-state-progress" alt="" />
              </div>
              <div className="col-4">
                <div className="card-body">
                  <p className=""> <small className="text-muted">Estado</small></p>
                  <p className="text-state-progress"><b>{stateChangeProgress()}</b></p>
                </div>
              </div>
            </div>
          </div>
        </div> */}


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
          <a className="links  btn-m  "
            href="https://api.whatsapp.com/send?phone=573152559261">
            <button type="button" className="btn btn-prueba-blanco text-blue btn-m"  >
              Tengo algún problema
            </button>
          </a>
        </div>
      </div>
    </div>

  );
}

export default Home;
