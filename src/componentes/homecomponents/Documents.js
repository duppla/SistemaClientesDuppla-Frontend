import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Istateg from "../../img/Istateg.png";
import Istatev from "../../img/Istatev.png";
import { Box, Button, Card, CardActions, CardContent, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Typography, createTheme } from "@mui/material";
import Idefaultoffer from "../../img/Idefaultoffer.png";
import VideoPlayer from './VideoPlayer';
import Lottie from 'lottie-react';
import animationData from '../../Components/loanding.json';
import swal from 'sweetalert';
import ReactGA from 'react-ga';

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


function Docs() {

    useEffect(() => {
        // Envía un evento cuando el componente Docs se monta (se renderiza).
        ReactGA.pageview(window.location.pathname);
    }, []);

    // uso del localsotrage para traer estado del usuario
    const estado = localStorage.getItem('estado');


    const [docsBuyer, setDocsBuyer] = useState({});
    /* Estado que maneja el loading generar */
    const [loading, setLoading] = useState(true);

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [documentStates, setDocumentStates] = useState({});


    useEffect(() => {
        const emailWithQuotes = localStorage.getItem('email');

        if (emailWithQuotes) {
            // Eliminar las comillas alrededor del correo electrónico
            const email = emailWithQuotes.replace(/"/g, '');

            const options = { method: 'GET' };

            fetch(`https://salesforce-gdrive-conn.herokuapp.com/clientes/documentos?email=${email}`, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(response => {
                    setDocsBuyer(response);
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                    setLoading(false);
                });
        }
    }, []);


    /* Función que según el estado general direcciona a inicio de prospecto o customer */

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

    // envia la data recolectada de los documentos a google analytics

    const handleDocumentLinkClick = (file) => {
        // Envía un evento cuando se hace clic en un enlace de documento.
        ReactGA.event({

            'category': 'Document Interaction',
            'action': `Clicked on Document Link: ${file.name}`,
            'label': 'Botón generar documento',


        });


        // Tu lógica para abrir el enlace del documento.
        window.open(file.drive_url, '_blank'); // Abre el enlace en una nueva pestaña.
        /*  console.log(file.drive_url + 'prueba del documento'); */
    };


    /* Función condicional video */
    function getVideoUrl(documentName) {
        /*  const videoId = "FtPnAfYpI-o"; // Reemplaza con el ID de tu video
         const videoUrl = `https://www.youtube.com/embed/${videoId}`; */

        switch (documentName) {
            case "Promesa compra venta cliente":
                return "https://www.youtube.com/embed/FtPnAfYpI-o?si=D4bhYVT9Ltf8S_5h&showinfo=0&controls=0&autohide=1";
            case "Anexo 1":
                return "https://drive.google.com/uc?id=1ybtMVxOkVa6w-9SlsEB79XaDI2Veuoo-";
            case "Contrato Arriendo":
                return "https://drive.google.com/uc?id=1ybtMVxOkVa6w-9SlsEB79XaDI2Veuoo-";
            default:
                return ""; // Si no coincide con ninguno, devolver una URL vacía o la URL por defecto
        }
    }

    /*  <iframe width="560" height="315" https://www.youtube.com/watch?v=FtPnAfYpI-o src="https://www.youtube.com/embed/FtPnAfYpI-o?si=D4bhYVT9Ltf8S_5h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */


    const handleCheckboxChange = (documentName) => {
        setDocumentStates((prevDocumentStates) => ({
            ...prevDocumentStates,
            [documentName]: !prevDocumentStates[documentName], // Cambiar el estado del documento
        }));
    };

    const handleDocumentLinkClickk = (file) => {
        window.open(file.drive_url, '_blank'); // Abre el enlace en una nueva pestaña o ventana del navegador
    };

    return (
        <div className="Documents container-fluid">
            {testRedireccion(estado)}
            <div className="title-register">
                <h1><b>Documentos</b></h1>
            </div>
            {loading ? (
                <div className='loanding '>
                    <div className='loanding-container'>
                        <h2 className='text-loandig'>Cargando...</h2>
                        <div className='text-loandig'>
                            <div className='loanding-state-mui'>
                                <Lottie
                                    animationData={animationData}
                                    loop
                                    autoplay
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    textAlign: 'start',
                }}>
                    <CssBaseline />

                    {/* Componente cards-acordeón */}
                    {((docsBuyer.signed_files && docsBuyer.signed_files.length > 0) ||
                        (docsBuyer.unsigned_files && docsBuyer.unsigned_files.length > 0)) ? (
                        <Container maxWidth="xl" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            mb: 4,
                        }}
                            className=''>
                            {(docsBuyer.signed_files || []).map((file, index) => (
                                <div key={index} className="card-docs-grid-mui ">

                                    <div className="accordion " id={`accordionExample-${index}`}>
                                        <div className=" ">
                                            <h2 className="" id={`headingTwo-${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#mesDos-${index}`} aria-expanded="false" aria-controls={`mesDos-${index}`}>

                                                    <Grid container className="" justifyContent="center" alignItems="center" spacing={2} sx={{
                                                    }}>
                                                        <Grid item sx={12} sm={12} md={12} lg={12} >
                                                            <Grid container spacing={2} sx={{
                                                                maxWidth: '600px',
                                                                width: '100%',
                                                                margin: '0 auto',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                minWidth: '280px',
                                                            }}>
                                                                <Grid item sx={2} sm={2} md={3} lg={3} >
                                                                    <img src={Istatev} className="warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                                                                </Grid>
                                                                <Grid item sx={8} sm={8} md={9} lg={9} >
                                                                    <Typography component="h1" variant="" sx={{
                                                                        mt: 0,
                                                                        textAlign: 'start',
                                                                        fontFamily: 'Rustica',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '500',
                                                                        fontSize: '18px',
                                                                        color: '#0A3323',
                                                                        lineHeight: '20px',
                                                                        width: '220px',
                                                                    }}
                                                                    //onClick={() => handleDocumentLinkClick(file)} // Llama a la función al hacer clic en el enlace.
                                                                    >
                                                                        {file.name}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </button>
                                            </h2>
                                            {/*---------------------------------------------------------------------------------------------------------------------------------*/}
                                            <div className=" ">
                                                <div className="collapse" id={`mesDos-${index}`}>
                                                    <div className=''>
                                                        {file.name === "Promesa compra venta cliente" || file.name === "Anexo 1" || file.name === "Contrato Arriendo" ? (
                                                            <div className='notice-up-to-date '>

                                                                {/*   <div className='text-notice-date-two '>
                                                                    <Typography component="h1" variant="" sx={{
                                                                        mt: 0,
                                                                        textAlign: 'start',
                                                                        fontFamily: 'Roboto',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '500',
                                                                        fontSize: '18px',
                                                                        color: '#005116',
                                                                        lineHeight: '20px',
                                                                        width: '220px',
                                                                    }}
                                                                    //onClick={() => handleDocumentLinkClick(file)} // Llama a la función al hacer clic en el enlace.
                                                                    >
                                                                        Video informativo:
                                                                    </Typography>
                                                                </div> */}
                                                                {/* Titulo de la sección de video */}
                                                                {/* <div className='  '>
                                                                    <p>Todo lo que necesitas saber sobre la promesa de compraventa, explicado en menos de 5 minutos.</p>
                                                                </div>
                                                                <br /> */}





                                                                {/* Aqui deberia ir el reproductor de video para documentos firmados */}
                                                                <div className="App">
                                                                    <h1>Reproductor de Video</h1>
                                                                    <VideoPlayer src="https://drive.google.com/uc?id=1ybtMVxOkVa6w-9SlsEB79XaDI2Veuoo-" />
                                                                </div>










                                                                {/*  <div className=' centrado '>
                                                                    <iframe
                                                                        controls
                                                                        width="60%"
                                                                        height="380"
                                                                        src={getVideoUrl(file.name)}
                                                                    >
                                                                    </iframe>
                                                                </div */}

                                                                {/* <CardActions className='centrado'>
                                                                    <FormControlLabel control={<Checkbox />} />
                                                                    <FormControlLabel
                                                                        control={<Checkbox checked={documentStates[file.name]} onChange={() => handleCheckboxChange(file.name)} />}
                                                                    />
                                                                    <Typography className='text-autorizacion-form'>
                                                                        Confirmo que he visto y comprendido la explicación del documento que se muestra en el video.
                                                                    </Typography>
                                                                </CardActions>

                                                                <br /> */}
                                                            </div>
                                                        ) : null}
                                                        <br />
                                                        <div className=' centrado '>
                                                            <Grid item sx={12} sm={12} md={12} lg={12} >
                                                                <div className="">
                                                                    <a href={file.drive_url} target="_blank" rel="noopener noreferrer">
                                                                        <Button
                                                                            fullWidth
                                                                            variant="contained"

                                                                            sx={{
                                                                                marginTop: '20px',
                                                                                mb: 3,
                                                                                background: '#81A1F8',
                                                                                borderRadius: '10px',
                                                                                color: '#ffffff',

                                                                                textTransform: 'none',
                                                                                border: '1px solid #81A1F8',
                                                                                height: '58px',

                                                                                fontFamily: 'Helvetica',
                                                                                fontSize: '20px',
                                                                                width: '100%',
                                                                                //maxWidth: '390px', // Utiliza maxWidth en lugar de width
                                                                                // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                                                                                margin: '0 auto', // Centrar horizontalmente
                                                                                display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                                                                                justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                                                                                alignItems: 'center', // Centrar verticalmente el contenido


                                                                            }}
                                                                        /*  disabled={!documentStates[file.name]}
 
                                                                         onClick={() => handleDocumentLinkClickk(documentStates[file.drive_url])} */
                                                                        >
                                                                            <b> Leer documento</b>
                                                                        </Button>
                                                                        <br />
                                                                    </a>
                                                                </div>
                                                            </Grid>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {(docsBuyer.unsigned_files || []).map((file, index) => (
                                /*  <div key={index} className="card-docs-grid-mui ">
 
                                     <Grid container className="" justifyContent="center" alignItems="center" spacing={2} sx={{
                                     }}>
 
                                         <Grid item sx={12} sm={12} md={12} lg={12} >
                                             <a href={file.drive_url} target="_blank" rel="noopener noreferrer">
                                                 <Grid container spacing={2} sx={{
                                                     maxWidth: '600px', // Utiliza maxWidth en lugar de width
                                                     width: '100%', // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                                                     margin: '0 auto', // Centrar horizontalmente
                                                     display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                                                     justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                                                     alignItems: 'center', // Centrar verticalmente el contenido
                                                     minWidth: '280px',
 
                                                 }}>
                                                     <Grid item sx={2} sm={2} md={3} lg={3} >
                                                         <img src={Istateg} className="warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                                                     </Grid>
                                                     <Grid item sx={8} sm={6} md={6} lg={6} >
                                                         <Typography component="h1" variant="" sx={{
                                                             mt: 0,
                                                             textAlign: 'start',
                                                             fontFamily: 'Rustica',
                                                             fontStyle: 'normal',
                                                             fontWeight: '500',
                                                             fontSize: '18px',
                                                             color: '#0A3323',
                                                             lineHeight: '20px',
                                                             width: '180px',
 
                                                         }}>
                                                             {file.name}
 
                                                         </Typography>
                                                     </Grid>
                                                     <Grid item sx={2} sm={2} md={3} lg={3} >
                                                         <a href={file.drive_url} target="_blank" rel="noopener noreferrer">
                                                             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAgFJREFUeF7t2z1KxEAYxvH/XkAQPIKgYGMvinoiSys/Kks7jyOK1hZroeARRMUbyMAGRNzsJEPeeQae1BOS/OaZN5PZ2Rk+egVm9ukXMNCKhBjIQGVFxAlygpygMgEnqMzPNcgJcoLKBJygMj/XIOEErQNfZf07/dm1EnQDHAEHwPv0jzn+CjWAroGTxS2/qiNFA10Bp3/6UxopEugcuFgSdlmkKKCUmpSevkMSKQIo1ZtUd3IOOaQIoBdgO0dn0Wa+eMN9DjhnsqYRQBvAI7A14CmegUOgOlIEUHJpFikKqFmkSKAmkaKBmkOqAdQh3QE76oW7FlBySV/zD+pINYFKkPaB7wHpG920NtBYpCfgOAJJAUgaSQVIFkkJSBJJDUgOSRGoQ7oFdge8fiYp3KpAa8C9gf6PhwxOuj21BKXZtcTQ6vpOCWjMp8ckded3sFWAJHFUhtgYnLQkG/I9VjtBY3HC1qtrAsnj1BxiaRHfC2ZLZsFN/cIRPcSawokeYs3hRAI1iRMF1CxOFNAbsDlg2SJNAtP2vI8B50zWNKJID93+sqewaSH6YzUHSW5vUNQQ6zrjDLhcMhYkcaKB0vW8iTOjWnobcAaSN5JnIPmvCBlI8k0i5kHyCH03aKAV3WcgA5WNcCfICXKCygScoDI/1yAnyAkqE3CCyvxcg1b4/QBf035JQzfVwQAAAABJRU5ErkJggg=="
                                                                 className="arrow-menu" /></a>
                                                     </Grid>
                                                 </Grid>
                                             </a>
                                         </Grid>
                                     </Grid>
 
                                 </div> */
                                <div key={index} className="card-docs-grid-mui ">

                                    <div className="accordion " id={`accordionExample-${index}`}>
                                        <div className=" ">
                                            <h2 className="" id={`headingTwo-${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#mesDos-${index}`} aria-expanded="false" aria-controls={`mesDos-${index}`}>

                                                    <Grid container className="" justifyContent="center" alignItems="center" spacing={2} sx={{
                                                    }}>
                                                        <Grid item sx={12} sm={12} md={12} lg={12} >
                                                            <Grid container spacing={2} sx={{
                                                                maxWidth: '600px',
                                                                width: '100%',
                                                                margin: '0 auto',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                minWidth: '280px',
                                                            }}>
                                                                <Grid item sx={2} sm={2} md={3} lg={3} >
                                                                    <img src={Istateg} className="warning font-medium-2 mr-2" alt="" height='12px' width='12px' />
                                                                </Grid>
                                                                <Grid item sx={8} sm={8} md={9} lg={9} >
                                                                    <Typography component="h1" variant="" sx={{
                                                                        mt: 0,
                                                                        textAlign: 'start',
                                                                        fontFamily: 'Rustica',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '500',
                                                                        fontSize: '18px',
                                                                        color: '#0A3323',
                                                                        lineHeight: '20px',
                                                                        width: '220px',
                                                                    }}
                                                                    //onClick={() => handleDocumentLinkClick(file)} // Llama a la función al hacer clic en el enlace.
                                                                    >
                                                                        {file.name}
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </button>
                                            </h2>
                                            {/*---------------------------------------------------------------------------------------------------------------------------------*/}
                                            <div className=" ">
                                                <div className="collapse" id={`mesDos-${index}`}>
                                                    <div className=''>
                                                        {file.name === "Promesa compra venta cliente" || file.name === "Anexo 1" || file.name === "Contrato Arriendo" ? (
                                                            <div className='notice-up-to-date '>

                                                                {/*   <div className='text-notice-date-two '>
                                                                    <Typography component="h1" variant="" sx={{
                                                                        mt: 0,
                                                                        textAlign: 'start',
                                                                        fontFamily: 'Roboto',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '500',
                                                                        fontSize: '18px',
                                                                        color: '#005116',
                                                                        lineHeight: '20px',
                                                                        width: '220px',
                                                                    }}
                                                                    //onClick={() => handleDocumentLinkClick(file)} // Llama a la función al hacer clic en el enlace.
                                                                    >
                                                                        Video informativo:
                                                                    </Typography>
                                                                </div>
                                                                <div className='  '>
                                                                    <p>Todo lo que necesitas saber sobre la promesa de compraventa, explicado en menos de 5 minutos.</p>
                                                                </div>
                                                                <br />
                                                                <div className=' centrado '>
                                                                    <video
                                                                        controls
                                                                        width="80%"
                                                                        src={getVideoUrl(file.name)}
                                                                    />
                                                                </div>

                                                                <CardActions className='centrado'>
                                                                    <FormControlLabel control={<Checkbox />} />
                                                                    <Typography className='text-autorizacion-form'>
                                                                        Confirmo que he visto y comprendido la explicación del documento que se muestra en el video.
                                                                    </Typography>
                                                                </CardActions> */}

                                                                <br />
                                                            </div>
                                                        ) : null}
                                                        <br />
                                                        <div className=' centrado '>
                                                            <Grid item sx={12} sm={12} md={12} lg={12} >
                                                                <div className="">
                                                                    <a href={file.drive_url} target="_blank" rel="noopener noreferrer">
                                                                        <Button
                                                                            fullWidth
                                                                            variant="contained"

                                                                            sx={{
                                                                                marginTop: '20px',
                                                                                mb: 3,
                                                                                background: '#81A1F8',
                                                                                borderRadius: '10px',
                                                                                color: '#ffffff',

                                                                                textTransform: 'none',
                                                                                border: '1px solid #81A1F8',
                                                                                height: '58px',

                                                                                fontFamily: 'Helvetica',
                                                                                fontSize: '20px',
                                                                                width: '100%',
                                                                                //maxWidth: '390px', // Utiliza maxWidth en lugar de width
                                                                                // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                                                                                margin: '0 auto', // Centrar horizontalmente
                                                                                display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                                                                                justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                                                                                alignItems: 'center', // Centrar verticalmente el contenido


                                                                            }}
                                                                        >
                                                                            <b> Leer documento</b>
                                                                        </Button>
                                                                        <br />
                                                                    </a>
                                                                </div>
                                                            </Grid>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Container>
                    ) : (
                        <Container maxWidth="xl" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            mb: 4,
                        }}>
                            <div className='img-offer-conatiner '>
                                <Typography component="h1" variant="" sx={{
                                    /*  ml: 2, */
                                    fontFamily: 'Rustica',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    color: '#0A3323',
                                    lineHeight: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: 4,
                                }}>
                                    <h4>No cuenta con documentos</h4>
                                </Typography>
                                {/* <p>No cuenta con documentos</p> */}
                                <img src={Idefaultoffer} className="container fluid" alt="..." />
                            </div>
                        </Container>
                    )}
                </Box>
            )}
        </div >
    );
}
export default Docs