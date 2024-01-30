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
import { type } from "@testing-library/user-event/dist/type";

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
    const email = localStorage.getItem('email');



    const [docsBuyer, setDocsBuyer] = useState({});
    /* Estado que maneja el loading generar */
    const [loading, setLoading] = useState(true);   
    const [documentTypes, setDocumentTypes] = useState({}); /* UseState get estado actual de los campos de video en sF */


    /*Consulta al primer enpoint de documentos formados y no  */
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
                    /* console.log(response); */
                    setLoading(false);
                })

            fetch(`https://salesforce-gdrive-conn.herokuapp.com/consultar/estado/videos?email=${email}`, options)
                .then(response => response.json())
                .then(response => {
                    setDocumentTypes(response);
                    /* console.log(setDocumentTypes + 'prueba estado campos'); */
                })
                .catch(err => {
                    console.error('Fetch error:', err);
                    setLoading(false);
                });
        }
    }, []);

    /* Campos de los checkbox en sf */
    var anexo_c = documentTypes.Check_video_Anexo1__c;
    var compraventa_c = documentTypes.Check_video_Promesa_C__c;
    var carriendo_c = documentTypes.Check_video_Contrato_Arrendamiento__c;
 
    const [statesVideo, setStatesVideo] = useState({
        anexo_c: anexo_c,
        compraventa_c: compraventa_c,
        carriendo_c: carriendo_c,
    });

    /* console.log(anexo_c + 'anexo' + compraventa_c + 'compraventa' + carriendo_c + 'arriendo' + ''  + 'fechaVideo' + email);  */
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

    function getVideoUrl(documentName) {
        switch (documentName) {
            case "Promesa compra venta cliente":
                return "https://d2g37sbj1xsk90.cloudfront.net/contrato-promesa.mp4";
            case "Anexo 1":
                return "https://d2g37sbj1xsk90.cloudfront.net/anexo-1-final.mp4";
            case "Contrato Arriendo":
                return "https://d2g37sbj1xsk90.cloudfront.net/contrato-de-arrendamiento.mp4";
            default:
                return "";
        }
    }    
      
    /* Cambio de texto según video <p>Todo lo que necesitas saber sobre la promesa de compraventa, explicado en menos de 5 minutos.</p> */
    function textVideoUrl(documentNameText) {
        switch (documentNameText) {
            case "Promesa compra venta cliente":
                return <Typography component="h5" variant="" sx={{
                    mt: 0,
                    textAlign: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#0A3323',
                    lineHeight: '20px',
                    ml: 1,
                    mb: 2,

                }}>Todo lo que necesitas saber sobre la promesa de compraventa, explicado en menos de 5 minutos.</Typography>;
            case "Anexo 1":
                return <Typography component="h5" variant="" sx={{
                    mt: 2,
                    textAlign: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#0A3323',
                    lineHeight: '20px',
                    ml: 1,
                    mb: 2,

                }}>Todo lo que necesitas saber sobre el anexo 1: Pagos Anticipados, explicado en menos de 5 minutos.</Typography>;
            case "Contrato Arriendo":
                return <Typography component="h5" variant="" sx={{
                    mt: 2,
                    textAlign: 'start',
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    fontSize: '16px',
                    color: '#0A3323',
                    lineHeight: '20px',
                    ml: 1,
                    mb: 2,

                }}>Todo lo que necesitas saber sobre el contrato de arrendamiento, explicado en menos de 5 minutos.</Typography>;
            default:
                return ""; // Si no coincide con ninguno, devolver una URL vacía o la URL por defecto
        }
    }
    /* Estados Función condicional checkbox */
    const [elementos, setElementos] = useState([
        { id: 'anexo_c', nombre: 'Anexo 1', isChecked: false },
        { id: 'compraventa_c', nombre: 'Promesa compra venta cliente', isChecked: false },
        { id: 'carriendo_c', nombre: 'Contrato Arriendo', isChecked: false },
    ]);

    /* Función que maneja el cambio de estado de los checkbox del api a Salesforce */
    const handleCheckboxChangePrueba = async (element) => {

        if (element == undefined) {
            return;
        } else {
            const updatedDocumentTypes = { ...documentTypes };
            if (carriendo_c === false && element.name === "Contrato Arriendo") {
                updatedDocumentTypes.Check_video_Contrato_Arrendamiento__c = true;
                carriendo_c = true;
            }
            if (compraventa_c === false && element.name === "Promesa compra venta cliente") {
                updatedDocumentTypes.Check_video_Promesa_C__c = true;
                compraventa_c = true;
            }
            if (anexo_c === false && element.name === "Anexo 1") {
                updatedDocumentTypes.Check_video_Anexo1__c = true;
                anexo_c = true;
            }

            setDocumentTypes(updatedDocumentTypes); // Actualiza el estado

            // Emitir un evento para habilitar el botón
            const event = new Event('enableButtonEvent');
            document.dispatchEvent(event);

            const email = localStorage.getItem('email');

            //console.log(email + 'email prueba');

            let data = {
                anexo_c: anexo_c,
                compraventa_c: compraventa_c,
                carriendo_c: carriendo_c,
                email: email.replace(/"/g, '')
            }

           /*  console.log(JSON.stringify(data) + 'data prueba'); */
            try {
                 const response = await fetch("https://salesforce-gdrive-conn.herokuapp.com/actualizar/video", {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
              });
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }   

                swal({
                    title: "¡Listo!",
                    text: "Se ha registrado tu confirmación",
                    icon: "success",
                    button: "Aceptar",
                });

                // handle successful response here
            } catch (error) {
                console.error('Fetch error: ', error);
            }
            
        }
    }/* cierre función */

    useEffect(() => {
        const enableButtonHandler = () => {
            const buttons = document.querySelectorAll('button[data-document-name]');
            buttons.forEach((button) => {
                const documentName = button.getAttribute('data-document-name');
                const isDisabled = isButtonDisabled({ name: documentName });
                button.disabled = isDisabled;
            });
        };
        document.addEventListener('enableButtonEvent', enableButtonHandler);

        return () => {
            document.removeEventListener('enableButtonEvent', enableButtonHandler);
        };
    }, []);


    /* Función que maneja el boton leer documento según el estado */
    function isButtonDisabled(documentName) {
        if (documentName == undefined) {
            return true; // Botón deshabilitado por defecto si el documento es undefined
        } else if (
            documentName.name === "Contrato Arriendo" &&
            carriendo_c === false
        ) {
            // Si el nombre del documento es "Contrato Arriendo" y carriendo_c es false, deshabilita el botón
            return true;
        } else if (
            documentName.name === "Promesa compra venta cliente" &&
            compraventa_c === false
        ) {
            // Si el nombre del documento es "Promesa compra venta cliente" y compraventa_c es false, deshabilita el botón
            return true;
        } else if (
            documentName.name === "Anexo 1" &&
            anexo_c === false
        ) {
            // Si el nombre del documento es "Anexo 1" y anexo_c es false, deshabilita el botón
            return true;
        } else {

            // Si el nombre del documento no está en la lista de opciones deshabilitadas, habilita el botón
            return false;
        }
    }

    /* Función que maneja el la url del documento */

    function linkDocs(docsLink) {
        if (docsLink == undefined) {
            return;
        } else {
            /* console.log(docsLink.drive_url + 'prueba del documento'); */
            window.open(docsLink.drive_url, '_blank'); // Abre el enlace en una nueva pestaña.
        }
    }

    /* Función que cambia el formato de fecha del check */

    function formatFecha(fecha) {
        const date = new Date(fecha);

        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const año = date.getFullYear();
        const horas = date.getHours();
        const minutos = date.getMinutes();
        const ampm = horas >= 12 ? 'pm' : 'am';
        const hora12 = horas % 12 || 12; // Convierte la hora en formato 12 horas

        const fechaFormateada = `${dia}/${mes}/${año}`;
        const horaFormateada = `${hora12}:${minutos.toString().padStart(2, '0')} ${ampm}`;

        return `${fechaFormateada} a las ${horaFormateada}`;
    }

    const fechaOriginal = documentTypes.Date_video_Anexo1__c;
    const fechaVideoCompraventa = documentTypes.Date_video_Promesa_Compraventa__c;
    const fechaVideoArriendo = documentTypes.Date_video_Contrato_Arrendamiento__c;
    const fechaFormateada = formatFecha(fechaOriginal);
    const fechaFormateadaCompraventa = formatFecha(fechaVideoCompraventa);
    const fechaFormateadaArriendo = formatFecha(fechaVideoArriendo);




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
                            {(docsBuyer.signed_files || []).map((file, index, element) => (
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
                                                                <div className='text-notice-date-two '>
                                                                    <Typography component="h1" variant="" sx={{
                                                                        mt: 0,
                                                                        textAlign: 'start',
                                                                        fontFamily: 'Roboto',
                                                                        fontStyle: 'normal',
                                                                        fontWeight: '500',
                                                                        fontSize: '18px',
                                                                        color: '#0A3323',
                                                                        lineHeight: '20px',
                                                                        width: '220px',
                                                                        ml: 1,
                                                                    }}
                                                                    //onClick={() => handleDocumentLinkClick(file)} // Llama a la función al hacer clic en el enlace.
                                                                    >
                                                                        Video informativo:
                                                                    </Typography>
                                                                </div>
                                                                {/* Titulo y texto de la sección de video dependiendo el documento seleccionado*/}
                                                                <div className='  '>
                                                                    {textVideoUrl(file.name)}
                                                                </div>

                                                                {/* Reproductor de video */}
                                                                <div className=' centrado '>
                                                                    <VideoPlayer src={getVideoUrl(file.name)} />
                                                                </div >
                                                                <br />
                                                                {/* sección checkbox */}
                                                                <CardActions>
                                                                    {file.name === "Anexo 1" && documentTypes.Check_video_Anexo1__c === true && !element.isChecked ? (
                                                                        <div className='video-docs-text-date'>
                                                                            <Grid container spacing={0.5} sx={{ width: '100%' }} >
                                                                                <Grid item sx={10} sm={10} md={10} lg={10} >
                                                                                    <Typography sx={{
                                                                                        mt: 0,
                                                                                        textAlign: 'start',
                                                                                        fontFamily: 'Roboto',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '300',
                                                                                        fontSize: '14px',
                                                                                        color: '#0A3323',
                                                                                        lineHeight: '20px',
                                                                                        /* width: '300px',
                                                                                        maxWidth: '1290px', */
                                                                                        ml: 1,
                                                                                    }} >
                                                                                        Acepto que he visto la información anterior el día: {fechaFormateada}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>

                                                                    ) : file.name === "Promesa compra venta cliente" && documentTypes.Check_video_Promesa_C__c === true && !element.isChecked ? (
                                                                        <div className='video-docs-text-date'>
                                                                            <Grid container spacing={0.5} sx={{ width: '100%' }} >
                                                                                <Grid item sx={10} sm={10} md={10} lg={10} >
                                                                                    <Typography sx={{
                                                                                        mt: 0,
                                                                                        textAlign: 'start',
                                                                                        fontFamily: 'Roboto',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '300',
                                                                                        fontSize: '14px',
                                                                                        color: '#0A3323',
                                                                                        lineHeight: '20px',
                                                                                        /* width: '300px',
                                                                                        maxWidth: '1290px', */
                                                                                        ml: 1,
                                                                                    }} >
                                                                                        Acepto que he visto la información anterior el día: {fechaFormateadaCompraventa}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    ) : file.name === "Contrato Arriendo" && documentTypes.Check_video_Contrato_Arrendamiento__c === true && !element.isChecked ? (
                                                                        <div className='video-docs-text-date'>
                                                                            <Grid container spacing={0.5} sx={{ width: '100%' }} >
                                                                                <Grid item sx={10} sm={10} md={10} lg={10} >
                                                                                    <Typography sx={{
                                                                                        mt: 0,
                                                                                        textAlign: 'start',
                                                                                        fontFamily: 'Roboto',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '300',
                                                                                        fontSize: '14px',
                                                                                        color: '#0A3323',
                                                                                        lineHeight: '20px',
                                                                                        /* width: '300px',
                                                                                        maxWidth: '1290px', */
                                                                                        ml: 1,
                                                                                    }} >
                                                                                        Acepto que he visto la información anterior el día: {fechaFormateadaArriendo}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    ) : (
                                                                        <div className='centrado'>
                                                                            <Grid container spacing={0.5} sx={{}} >
                                                                                <Grid item sx={2} sm={2} md={2} lg={2} >
                                                                                    <FormControlLabel
                                                                                        key={element.id}
                                                                                        control={
                                                                                            <Checkbox
                                                                                                checked={element.isChecked}
                                                                                                onChange={() => {
                                                                                                    handleCheckboxChangePrueba(file);
                                                                                                }}
                                                                                                value={elementos}
                                                                                                id={`check${file.name.replace(/\s+/g, "_")}`}
                                                                                            />
                                                                                        }
                                                                                    />
                                                                                </Grid>

                                                                                <Grid item sx={8} sm={8} md={10} lg={10} >
                                                                                    <Typography className='text-autorizacion-form'>
                                                                                        Confirmo que he visto y comprendido la explicación del documento que se muestra en el video.
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>

                                                                        </div>
                                                                    )}
                                                                </CardActions>

                                                                <br />
                                                            </div>
                                                        ) : null}
                                                        <br />
                                                        <div className=' centrado '>
                                                            <Grid item sx={12} sm={12} md={12} lg={12} >
                                                                <div className="">
                                                                    <Button
                                                                        fullWidth
                                                                        id={file.name.replace(/\s+/g, "_")}
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
                                                                        onClick={() => linkDocs(file)}// función que trae el link del documento
                                                                        disabled={isButtonDisabled(file)}//controla el boton si esta habilitado
                                                                        data-document-name={file.name}
                                                                    >
                                                                        <b> Leer documento</b>
                                                                    </Button>
                                                                    <br />
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

                            {(docsBuyer.unsigned_files || []).map((file, index, element) => (
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

                                                                <div className='text-notice-date-two '>
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
                                                                {/* Titulo y texto de la sección de video dependiendo el documento seleccionado*/}
                                                                <div className='  '>
                                                                    {textVideoUrl(file.name)}
                                                                </div>
                                                                <br />
                                                                <div className=' centrado '>
                                                                    <VideoPlayer src={getVideoUrl(file.name)} />
                                                                </div >

                                                                <CardActions>
                                                                    {file.name === "Anexo 1" && documentTypes.Check_video_Anexo1__c === true && !element.isChecked ? (
                                                                        <div className='video-docs-text-date'>
                                                                            <Grid container spacing={0.5} sx={{ width: '100%' }} >
                                                                                <Grid item sx={10} sm={10} md={10} lg={10} >
                                                                                    <Typography sx={{
                                                                                        mt: 2,
                                                                                        textAlign: 'start',
                                                                                        fontFamily: 'Roboto',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '300',
                                                                                        fontSize: '14px',
                                                                                        color: '#0A3323',
                                                                                        lineHeight: '20px',
                                                                                        /* width: '300px',
                                                                                        maxWidth: '1290px', */
                                                                                        ml: 1,
                                                                                    }} >
                                                                                        Acepto que he visto la información anterior el día: {fechaFormateada}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>

                                                                    ) : file.name === "Promesa compra venta cliente" && documentTypes.Check_video_Promesa_C__c === true && !element.isChecked ? (
                                                                        <div className='video-docs-text-date'>
                                                                            <Grid container spacing={0.5} sx={{ width: '100%' }} >
                                                                                <Grid item sx={10} sm={10} md={10} lg={10} >
                                                                                    <Typography sx={{
                                                                                        mt: 2,
                                                                                        textAlign: 'start',
                                                                                        fontFamily: 'Roboto',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '300',
                                                                                        fontSize: '14px',
                                                                                        color: '#0A3323',
                                                                                        lineHeight: '20px',
                                                                                        /* width: '300px',
                                                                                        maxWidth: '1290px', */
                                                                                        ml: 1,
                                                                                    }} >
                                                                                        Acepto que he visto la información anterior el día: {fechaFormateadaCompraventa}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    ) : file.name === "Contrato Arriendo" && documentTypes.Check_video_Contrato_Arrendamiento__c === true && !element.isChecked ? (
                                                                        <div className='video-docs-text-date'>
                                                                            <Grid container spacing={0.5} sx={{ width: '100%' }} >
                                                                                <Grid item sx={10} sm={10} md={10} lg={10} >
                                                                                    <Typography sx={{
                                                                                        mt: 2,
                                                                                        textAlign: 'start',
                                                                                        fontFamily: 'Roboto',
                                                                                        fontStyle: 'normal',
                                                                                        fontWeight: '300',
                                                                                        fontSize: '14px',
                                                                                        color: '#0A3323',
                                                                                        lineHeight: '20px',
                                                                                        /* width: '300px',
                                                                                        maxWidth: '1290px', */
                                                                                        ml: 1,
                                                                                    }} >
                                                                                        Acepto que he visto la información anterior el día: {fechaFormateadaArriendo}
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                        </div>
                                                                    ) : (
                                                                        <div className='centrado'>
                                                                            <Grid container spacing={0.5} sx={{}} >
                                                                                <Grid item sx={2} sm={2} md={2} lg={2} >
                                                                                    <FormControlLabel
                                                                                        key={element.id}
                                                                                        control={
                                                                                            <Checkbox
                                                                                                checked={element.isChecked}
                                                                                                onChange={() => {
                                                                                                    handleCheckboxChangePrueba(file);
                                                                                                }}
                                                                                                value={elementos}
                                                                                                id={`check${file.name.replace(/\s+/g, "_")}`}
                                                                                            />
                                                                                        }
                                                                                    />
                                                                                </Grid>

                                                                                <Grid item sx={8} sm={8} md={10} lg={10} >
                                                                                    <Typography className='text-autorizacion-form'>
                                                                                        Confirmo que he visto y comprendido la explicación del documento que se muestra en el video.
                                                                                    </Typography>
                                                                                </Grid>
                                                                            </Grid>

                                                                        </div>
                                                                    )}
                                                                </CardActions>

                                                                <br />
                                                            </div>
                                                        ) : null}
                                                        <br />
                                                        <div className=' centrado '>
                                                            <Grid item sx={12} sm={12} md={12} lg={12} >
                                                                <div className="">

                                                                    <Button
                                                                        fullWidth
                                                                        id={file.name.replace(/\s+/g, "_")}
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
                                                                        onClick={() => linkDocs(file)}// función que trae el link del documento
                                                                        disabled={isButtonDisabled(file)}//controla el boton si esta habilitado
                                                                        data-document-name={file.name}
                                                                    >
                                                                        <b> Leer documento</b>
                                                                    </Button>
                                                                    <br />

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
                    )
                    }
                </Box >
            )}
        </div >
    );
}
export default Docs