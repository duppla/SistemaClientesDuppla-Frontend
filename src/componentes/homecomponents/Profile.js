import React, { useContext, useEffect, useState } from "react";
import Iperfil from "../../img/iconoperfil.png";
import Idata from "../../img/imgdata.png";
import Icerrarsesion from "../../img/imgcerrarsesion.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Contextauth";
import swal from 'sweetalert';
import Lottie from 'lottie-react';
import animationData from '../../Components/loanding.json';


import { Box, Button, Container, CssBaseline, Grid } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SavingsIcon from '@mui/icons-material/Savings';
import ReactGA from 'react-ga';




import { createTheme, ThemeProvider } from '@mui/material/styles';



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


function Profile() {



    useEffect(() => {
        // Envía un evento cuando el componente Docs se monta (se renderiza).
        ReactGA.pageview(window.location.pathname);
    }, []);

    const estado = localStorage.getItem('estado');

    // trae la función  salida, que se declaro en el contexto para implementar aquí

    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
              
            // Envía un evento cuando el componente Mantenimiento se monta (se renderiza).
             ReactGA.event({
                'category': 'clic',
                'action': `Clicked on button Logout`,
                'label': 'Button Logout',
    
            });
          
    };

    // Consumo de datos desde el API

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

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
            .then(response => {
                setData(response)
                setLoading(false)
            })
            .catch(err => console.error(err));




        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const whatsappLink = data.link_whatsapp;
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="#0A3323" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
        }
        else {
            return <div className="arrow-return">
                <Link to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" fill="#0A3323" className=" arrow-return bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                </Link>
            </div>
        }
    }


    function handleHometLinkClickWhasApp() {
        // Envía un evento cuando se hace clic en un enlace de documento.
      
            // Envía un evento cuando el componente Mantenimiento se monta (se renderiza).
            ReactGA.event({
                'category': 'clic',
                'action': `Clicked on button WhatsApp`,
                'label': 'Button WhatsApp',
            });
       
    };


    return (

        <ThemeProvider theme={themeLogin} sx={{ m: 0, p: 0, }}>
            <div className=" container-fluid">
                {testRedireccion(estado)}
                <div className="title-register container sm ">
                    <h1> <b>Perfil</b>
                    </h1>
                </div>

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
                        {/*Sesión de perfil */}
                        <div className="profile-data container-fluid">
                            <div className="">
                                <Grid container spacing={2} sx={{
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <img src={Iperfil} className="img-fluid  img-user-img" alt="perfil" />
                                                </div>
                                            </Grid>
                                            <Grid className="text-profile-mui" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">
                                                    <p className="text-white-profile" >{data.nombre && <p className="text-name-profile">{convertirAMinusculas(data.nombre)}</p>}</p>
                                                    <p className=" text-white-email ">{data.email}</p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>


                        {/*Sección de datos- hay que traerlos de salesforce*/}

                        {/*componente cards */}
                        <Container maxWidth="xl" sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            mb: 4,
                        }}
                            className=''>

                            <div className="user-data-card container-fluid">
                                <Grid container spacing={2} sx={{
                                    mt: 1,
                                    ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <FingerprintIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">
                                                    <p className=""> <small className="text-muted">Cédula</small><br /></p>
                                                    <p className="separacion-text-mui"><b>{data.cedula}</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{
                                    mt: 1,
                                    ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <PhoneIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">
                                                    <p className=""> <small className="text-muted">Teléfono</small><br /></p>
                                                    <p className="separacion-text-mui"><b>{data.celular}</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{
                                    mt: 1,
                                    ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <MailOutlineIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">
                                                    <p className=""> <small className="text-muted">Correo</small><br /></p>
                                                    <p className="separacion-text-mui"><b>{data.email}</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{
                                    mt: 1, ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <RequestQuoteIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">
                                                    <p className=""> <small className="text-muted">Ingreso</small><br /></p>
                                                    <p className="separacion-text-mui"><b>$ {formattedNumber}</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{
                                    mt: 1, ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <WorkOutlineIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">

                                                    <p className=""> <small className="text-muted">Ocupación</small><br /></p>
                                                    <p className="separacion-text-mui"><b>{data.profesion}</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{
                                    mt: 1, ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <PriceCheckIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">

                                                    <p className=""> <small className="text-muted">Ingresos adicionales</small><br /></p>
                                                    <p className="separacion-text-mui"><b>No</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} sx={{
                                    mt: 1, ml: 1
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <Grid container spacing={2} sx={{
                                        }}>
                                            <Grid item sx={4} sm={2} md={2} lg={4} >
                                                <div className="centrado">
                                                    <SavingsIcon style={{ color: '#3b5998', width: '48px', height: '48px', marginTop: '18px' }} />
                                                </div>
                                            </Grid>
                                            <Grid className="" item sx={8} sm={8} md={8} lg={8} >
                                                <div className="size-text-card-profile-mui">
                                                    <p className=""> <small className="text-muted">Ahorro</small><br /></p>
                                                    <p className="separacion-text-mui"><b>$ {formattedNumberr}</b></p>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                        {/*componente botones cerrar sesión y whatsApp */}
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
                                        <a className="links" href={whatsappLink}>
                                            <Button
                                                fullWidth
                                                onClick={handleHometLinkClickWhasApp}
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

                )}
            </div>
        </ThemeProvider>

    )
}


export default Profile;