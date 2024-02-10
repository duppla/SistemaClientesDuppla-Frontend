import { Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "./../context/Contextauth";
import numeral from "numeral";

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
import Vline from "./../img/Vline.svg";


import Vayuda from "./../img/Vayudacus.svg";
import Vmoney from "./../img/money.png";
import ReactGA from 'react-ga';




import { useState } from 'react'

const NavbarCustomer = () => {

    function NavbarClick() {
        // Envía un evento cuando el componente Navbar se renderiza.
        ReactGA.event({
            'category': 'Component Interaction',
            'action': 'Profile Component',
        });

    }

    function NavbarClickMenu() {
        // Envía un evento cuando el componente Navbar se renderiza.
        ReactGA.event({
            'category': 'Component Interaction',
            'action': 'Item menu',
        });

    }

    // Función fecha del día actual
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    let fecha = `${dd}/${mm}/${yyyy}`;


    // Trae los datos del API 
    const [dataCustumer, setDataCustumer] = useState({});
    const [formattedDataCustumer, setFormattedDataCustumer] = useState(null);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };

        fetch('https://sistema-duppla-backend.herokuapp.com/users/homeCustomer', options)
            .then(response => response.json())
            .then(response => {
                setDataCustumer(response)
                setFormattedDataCustumer(numeral(dataCustumer).format('0,0.00'))
            })

            .catch(err => console.error(err));
    }, []);

    //url boton de pago
    const btnpago = dataCustumer.linkPago;
    const whatsappLink = dataCustumer.Link_whatsapp;


    //formateo de los datos en pagos
    const formatted = dataCustumer.pagoMinimo;
    const cannon = dataCustumer.canon;
    const gastos = dataCustumer.gastos;
    const reservas = dataCustumer.reservas;
    const administracion = dataCustumer.administracion;




    // trae la función  salida, que se declaro en el contexto para implementar aquí,

    const { logout } = useContext(AuthContext);
    const handleLogoutCustumer = () => {
        logout();
    };

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
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4, }}
                className=''>
                <Grid container className='centrado' maxWidth="xl" spacing={1} sx={{

                }}>
                    <Grid className='centrado' item xs={2} md={2} lg={2}>
                        <Grid container className='imgs-navbar-mui' maxWidth="xl" spacing={1} sx={{
                        }}>
                            <Grid item className='centrado' xs={8} md={8} lg={12} sx={{ mt: -4 }}>
                                <img src={Idupplanaranja} className="  img-duppla-naranja " alt="" />
                            </Grid>
                            <Grid onClick={NavbarClick} className='centrado' item xs={8} md={8} lg={12} sx={{ mt: 2 }}>
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
                                    <p className="" >{dataCustumer.nombre && <p className="text-name-home">{convertirAMinusculas(dataCustumer.nombre)}</p>}</p>
                                    {/* <p className="text-orange">{fecha}</p> */}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} md={2} lg={2} className='centrado'>
                        <Grid container className='centrado' maxWidth="xl" spacing={1} sx={{
                            mt: 4
                        }}>

                            <Grid item xs={10} md={10} lg={10} sx={{ mt: 3 }} >

                                {/* <div className="centrado">
                                    <nav className="navbar ">
                                        <div className="container-fluid">
                                            <button className="navbar-toggler" type="button"
                                                data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasNavbarr"
                                                aria-controls="offcanvasNavbarr">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="bell-mui" width="24" height="24" viewBox="0 0 24 24" ><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
                                            </button>
                                            <div className="offcanvas offcanvas-bottom navbar-move-bell" tabindex="-1" id="offcanvasNavbarr"
                                                aria-labelledby="offcanvasNavbarLabell">
                                                <div className="offcanvas-header ">
                                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabell">Notificaciones</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div className="img-navbar-home">
                                                    <img src={Vline} className="line-custumer centrado" data-bs-dismiss="offcanvas" alt="" />
                                                </div>
                                                <div className="offcanvas-body">
                                                    <p>{dataCustumer.mensaje}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div> */}
                            </Grid>
                            <Grid item xs={10} md={10} lg={10} className='centrado'>
                                <nav onClick={NavbarClickMenu} className=" col-2 navbar  " >
                                    <div className="icon-navbar-customer">
                                        <button className="navbar-toggler border-none"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasNavbar"
                                            aria-controls="offcanvasNavbar">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="menu-navbar-customer" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>
                                        </button>
                                        <div className="">
                                            <div className=" offcanvas offcanvas-bottom navbar-container navbar-move " id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                                <div className="offcanvas-body ">
                                                    <div className="img-navbar-home">

                                                        <img src={Vrectangulo} className=" img-navbar centrado " data-bs-dismiss="offcanvas" alt="" />
                                                    </div>
                                                    <ul className="navbar-nav " >
                                                        <li onClick={NavbarClickMenu} className="nav-item ">
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
                                                        <li onClick={NavbarClickMenu} className="nav-item  nav-section">
                                                            <Link to="/pagos" className="links text-white"
                                                            >
                                                                <div className="row ">
                                                                    <div className="col-8 outline ">
                                                                        <div className="row">
                                                                            <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                                                                <div className="card-body col-1  img-state-propety">
                                                                                    <img src={Vmoney} className="" alt="" height='24px' width='24px' />
                                                                                </div>
                                                                                <div className="col-10 outline">
                                                                                    <p className=" text-docs"><b >Pagar factura</b></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>                                                        
                                                        <li onClick={NavbarClickMenu} className="">
                                                            <div className="row ">
                                                                <Link to="/formulario">
                                                                    <div className="col-8 outline ">
                                                                        <div className="row">
                                                                            <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                                <div className="card-body col-1  img-state-propety">
                                                                                    <img src={Vayuda} className="" alt="" height='24px' width='24px' />
                                                                                </div>
                                                                                <div className="col-10 outline">
                                                                                    <p className=" text-docs"><b>Ayuda</b></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </li>
                                                        <li onClick={NavbarClickMenu} className="nav-item  nav-section">
                                                            <Link to="/documents">
                                                                <div className="row ">
                                                                    <div className="col-8 outline ">
                                                                        <div className="row">
                                                                            <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
                                                                                <div className="card-body col-1  img-state-propety">
                                                                                    <img src={Vdocs} className="" alt="" height='24px' width='24px' />
                                                                                </div>
                                                                                <div className="col-10 outline">
                                                                                    <p className=" text-docs"><b >Documentos</b></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li onClick={NavbarClickMenu} className="nav-item  nav-section">
                                                            <Link to="/property">
                                                                <div className="row ">
                                                                    <div className="col-8 outline ">
                                                                        <div className="row">
                                                                            <div className="card-state-properties-home nav-section nav-link active text-navbar-options">
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
                                                        <li onClick={NavbarClickMenu} className="nav-item">
                                                            <div className="row ">
                                                                <div className="col-8 outline ">
                                                                    <div className="row">
                                                                        <div className="card-state-properties-home nav-link active text-navbar-options">
                                                                            <div className="card-body col-1  img-state-propety">
                                                                                <img src={Vlogout} className="" alt="" height='24px' width='24px' />
                                                                            </div>
                                                                            <div className="col-10 outline" onClick={handleLogoutCustumer}>
                                                                                <p className=" text-docs"><b >Cerrar sesión</b></p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </Grid>

                        </Grid>


                    </Grid>
                </Grid>



            </Container>






        </Box>
    )
}

export default NavbarCustomer