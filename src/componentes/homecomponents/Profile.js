import React, { useContext, useEffect, useState } from "react";
import Iperfil from "../../img/iconoperfil.png";
import Idata from "../../img/imgdata.png";
import Icerrarsesion from "../../img/imgcerrarsesion.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Contextauth";
import swal from 'sweetalert';
import { Box, Button, Container, CssBaseline, Grid } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import { createTheme, ThemeProvider } from '@mui/material/styles';



const themeLogin = createTheme({
    status: {
        danger: '#FF111F',
    },
    palette: {
        primary: {
            main: '#81A1F8',
            darker: '#0A3323',
        },
        neutral: {
            main: '#6C9FFF',
            contrastText: '#fff',
        },
    },
});


function profile() {

    const estado = localStorage.getItem('estado');

    // trae la función  salida, que se declaro en el contexto para implementar aquí

    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    };

    // Consumo de datos desde el API

    const [data, setData] = useState({});

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        const email = localStorage.getItem('email');
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };
        fetch('https://sistema-duppla-backend.herokuapp.com/users/perfil', options)
            .then(response => response.json())
            .then(response => setData(response))
            .catch(err => console.error(err));




        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    //formateo de los datos de valor inmueble duppla
    const number = data.ingresos;
    const numberr = data.cuota_inicial;
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const formattedNumber = formatter.format(number);
    const formattedNumberr = formatter.format(numberr);

    const handleNotification = () => {
        swal({

            text: "Se redireccionará a WhatsApp",
            icon: "info",
            button: "Cerrar",
            timer: 5000,
        });
    };

    // convertidor de mayusculas a minusculas
    function convertirAMinusculas(texto) {
        return texto.toLowerCase().replace(/\b\w/g, (letra) => letra.toUpperCase());
    }

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

        <ThemeProvider theme={themeLogin} sx={{ m: 0, p: 0, }}>
        <div className=" container-fluid">
            {testRedireccion(estado)}
            <div className="title-register container sm ">
                <h1> <b>Perfil</b>
                </h1>
            </div>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                textAlign: 'start',
            }}>
                <CssBaseline />
                {/*Sesión de perfil */}
                <div className="profile-data container-fluid">
                    <div className="">
                        <div className="row ">
                            <div className="col-4">
                                <img src={Iperfil} className="img-fluid  img-user-img" alt="perfil" />
                            </div>
                            <div className="col-8 ">
                                <div className="card-body"><br />
                                    <p className="card-title card-home text-white-profile" >{data.nombre && <p className="text-name-profile">{convertirAMinusculas(data.nombre)}</p>}</p>
                                    <p className=" text-white-email ">{data.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Sección de datos- hay que traerlos de salesforce*/}
                <div className="user-data-card container-fluid">
                    <div className="tarjetas-datos-usuario d-grid " id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className=" img-data-perfil" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Cédula</small><br /></p>
                                        <p className=""><b>{data.cedula}</b></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className="img-data-perfil" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Teléfono</small><br /></p>
                                        <p className=""><b>{data.celular}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className="img-data-perfil" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Correo</small><br /></p>
                                        <p className=""><b>{data.email}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className="img-data-perfil" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Ingreso</small><br /></p>
                                        <p className=""><b>{formattedNumber}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className="img-data-perfil" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Ocupación</small><br /></p>
                                        <p className=""><b>{data.profecion}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className="img-data-perfil" alt="" />
                                </div>
                                <div className="col-6">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Ingresos adicionales</small><br /></p>
                                        <p className=""><b>No</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tarjetas-datos-usuario d-grid" id="cardComponet">
                        <div className="card-seccion">
                            <div className="row ">
                                <div className="col-4">
                                    <img src={Idata} className="img-data-perfil" alt="" />
                                </div>
                                <div className="col-4">
                                    <div className="card-body">
                                        <p className=""> <small className="text-muted">Ahorro</small><br /></p>
                                        <p className=""><b>{formattedNumberr}</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/*componente botones  calendario y whatsApp */}
                <Container maxWidth="xl" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    mb: 4,
                }}
                    className=''>
                    <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{
                    }}>

                        <Grid item sx={12} sm={12} md={12} lg={12} >
                            <div className="">
                                <a className="links" href="https://api.whatsapp.com/send?phone=573152559261">
                                    <Button
                                        fullWidth
                                        variant="contained"
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
                                            fontSize: '16px',

                                            maxWidth: '430px', // Utiliza maxWidth en lugar de width
                                            width: '100%', // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                                            margin: '0 auto', // Centrar horizontalmente
                                            display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                                            justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                                            alignItems: 'center', // Centrar verticalmente el contenido
                                            minWidth: '300px',
                                        }}
                                    >
                                        <b>  Quiero editar mis datos</b>
                                    </Button>
                                </a>
                            </div>

                        </Grid>
                        <Grid item sx={12} sm={12} md={12} lg={12} >
                            <div className="">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleLogout}
                                    startIcon={<LogoutIcon style={{ color: '#3b5998', width: '32px', height: '32px' }} />}

                                    sx={{

                                        marginTop: '10px',
                                        mb: 3,
                                        background: '#ffffff',
                                        borderRadius: '10px',
                                        color: '#0A3323',

                                        textTransform: 'none',
                                        border: '1px solid #6C9FFF',
                                        height: '58px',

                                        fontFamily: 'Helvetica',
                                        fontSize: '16px',

                                        maxWidth: '430px', // Utiliza maxWidth en lugar de width
                                        width: '100%', // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                                        margin: '0 auto', // Centrar horizontalmente
                                        display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                                        justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                                        alignItems: 'center', // Centrar verticalmente el contenido
                                        minWidth: '300px',
                                    }}
                                >
                                    <b>  Cerrar sesión</b>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>

            </Box>

        </div>
        </ThemeProvider>

    )
}


export default profile;