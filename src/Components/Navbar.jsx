import { Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "./../context/Contextauth";

import Idupplanaranja from "./../img/Idupplanaranja.png"
import Iperfil from "./../img/iconoperfil.png"
import Vperfil from "./../img/vperfil.svg"
import Voferta from "./../img/voferta.svg"
import Vinmueble from "./../img/vinmueble.svg"
import Vdocs from "./../img/vdocs.svg"
import Vlogout from "./../img/vlogout.svg"
import Vrectangulo from "./../img/vrectanguler.svg"
import Iconinm from "./../img/Iconinm.png"
import Igo from "./../img/go.png"





import { useState } from 'react'

const Navbar = () => {


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
    const stateUser = data.estado;
    const stateInm = data.estado_inm;
    const stateOffer = data.estado_oferta;


    {/*Función que cambia el nobre de usurio a minuscula */ }

    function convertirAMinusculas(texto) {
        return texto.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase());
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



    return (
        <Box sx={{ display: 'flex' }} className='profile '>


            {/*-----------------------------------------------------------contendeor principal----------------------------------------------------- */}

            <Container  maxWidth="xl" sx={{ mt: 4, mb: 4, }}
                className=''>
                <Grid container className='centrado' maxWidth="xl" spacing={1} sx={{

                }}>
                    <Grid className='centrado' item xs={2} md={2} lg={2}>
                        <Grid container className='imgs-navbar-mui' maxWidth="xl" spacing={1} sx={{
                        }}>
                            <Grid item className='centrado' xs={8} md={8} lg={12} sx={{ mt: -4 }}>
                                <img src={Idupplanaranja} className="  img-duppla-naranja " alt="" />
                            </Grid>
                            <Grid className='centrado' item xs={8} md={8} lg={12} sx={{ mt: 2 }}>
                                <Link to='/profile' className="link-styles"> <img src={Iperfil}
                                    className="  img-user-mui"
                                    alt="perfil" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* */}


                    <Grid item xs={8} md={8} lg={8}>

                        <Grid container maxWidth="xl" spacing={1} sx={{
                        }}>

                            <Grid item xs={2} md={2} lg={2}>
                                <hr />
                            </Grid>
                            <Grid item className='imgs-navbar-mui' xs={8} md={8} lg={8}>
                                <Typography gutterBottom component="div" sx={{
                                    mt: 1,
                                }}>
                                    <p className="text-name-space" >{data.nombre && <p className="text-name-home">{convertirAMinusculas(data.nombre)}</p>}</p>
                                    <p className="text-orange">{fecha}</p>
                                </Typography>
                            </Grid>

                        </Grid>
                    </Grid>


                    <Grid item xs={2} md={2} lg={2} className='centrado'>

                        <nav className=" col-2 navbar ">
                            <div className=" icon-navbar-home">
                                <button className="navbar-toggler border-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className="navbar-toggler-icon navbar-dark"></span>
                                </button>
                                <div className="">
                                    <div className=" offcanvas offcanvas-bottom navbar-container navbar-move" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                        <div className="offcanvas-body ">
                                            <div className="img-navbar-home">

                                                <img src={Vrectangulo} className=" img-navbar centrado " data-bs-dismiss="offcanvas" alt="" />
                                            </div>
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
                                                {testEstado(estado)}
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

                       

                    </Grid>
                </Grid>



            </Container>






        </Box>
    )
}

export default Navbar