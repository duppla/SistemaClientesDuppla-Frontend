import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Istateg from "../../img/Istateg.png";
import Istatev from "../../img/Istatev.png";
import { Box, Button, CardActions, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Typography, createTheme } from "@mui/material";
import Idefaultoffer from "../../img/Idefaultoffer.png";
import VideoPlayer from './VideoPlayer';
import swal from 'sweetalert';
import ReactGA from 'react-ga';
import { LoadingSpinner } from '../../App';

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

const NoDocuments = () => {
    return (
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

const DocumentHeader = ({ file, isSignedDoc }) => (
    <Grid container spacing={2} sx={{
      maxWidth: '600px',
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '280px',
    }}>
      <Grid item sx={2} sm={2} md={3} lg={3}>
        <img 
          src={isSignedDoc ? Istatev : Istateg} 
          className="warning font-medium-2 mr-2" 
          alt="" 
          height='12px' 
          width='12px' 
        />
      </Grid>
      <Grid item sx={8} sm={8} md={9} lg={9}>
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
        }}>
          {file.name}
        </Typography>
      </Grid>
    </Grid>
  );

DocumentHeader.propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  isSignedDoc: PropTypes.bool.isRequired
};

const DateDisplay = ({ documentName, date }) => (
  <div className='video-docs-text-date'>
    <Grid container spacing={0.5} sx={{ width: '100%' }}>
      <Grid item sx={10} sm={10} md={10} lg={10}>
        <Typography sx={{
          mt: 2,
          textAlign: 'start',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '14px',
          color: '#0A3323',
          lineHeight: '20px',
          ml: 1,
        }}>
          Acepto que he visto la información anterior el día: {date}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

DateDisplay.propTypes = {
  documentName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

const ConfirmationText = () => (
    <Grid item sx={8} sm={8} md={10} lg={10}>
        <Typography className='text-autorizacion-form'>
            Confirmo que he visto y comprendido la explicación del documento que se muestra en el video.
        </Typography>
    </Grid>
);

const ReadDocumentButton = ({ file, isDisabled, onClickRead }) => (
    <Grid item sx={12} sm={12} md={12} lg={12}>
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
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={() => onClickRead(file)}
                disabled={isDisabled}
                data-document-name={file.name}
            >
                <b>Leer documento</b>
            </Button>
            <br />
        </div>
    </Grid>
);

ReadDocumentButton.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onClickRead: PropTypes.func.isRequired
};

function Docs() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    const estado = localStorage.getItem('estado');
    const email = localStorage.getItem('email');


    const [docsBuyer, setDocsBuyer] = useState({});
    const [loading, setLoading] = useState(true);   
    const [documentTypes, setDocumentTypes] = useState({}); /* UseState get estado actual de los campos de video en sF */


    useEffect(() => {
        const emailWithQuotes = localStorage.getItem('email');
        if (emailWithQuotes) {
            // Eliminar las comillas alrededor del correo electrónico
            const email = emailWithQuotes.replace(/"/g, '');

            const options = { method: 'GET' };

            fetch(`${process.env.REACT_APP_BACKEND_URL_2}/clientes_legacy/documents?email=${email}`, options)
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

            fetch(`${process.env.REACT_APP_BACKEND_URL_2}/clientes_legacy/videos?email=${email}`, options)
                .then(response => response.json())
                .then(response => {
                    setDocumentTypes(response);
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
        ReactGA.event({
            'category': 'Document Interaction',
            'action': `Clicked on Document Link: ${file.name}`,
            'label': 'Botón generar documento',
        });
        window.open(file.drive_url, '_blank');
    };

    const VIDEO_URLS = {
        "Promesa compra venta cliente": "https://d2g37sbj1xsk90.cloudfront.net/contrato-promesa.mp4",
        "Anexo 1": "https://d2g37sbj1xsk90.cloudfront.net/anexo-1-final.mp4",
        "Contrato Arriendo": "https://d2g37sbj1xsk90.cloudfront.net/contrato-de-arrendamiento.mp4"
    };

    function getVideoUrl(documentName) {
        return VIDEO_URLS[documentName] || "";
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

            setDocumentTypes(updatedDocumentTypes);

            const event = new Event('enableButtonEvent');
            document.dispatchEvent(event);

            const email = localStorage.getItem('email');

            let data = {
                anexo_c: anexo_c,
                compraventa_c: compraventa_c,
                carriendo_c: carriendo_c,
                email: email.replace(/"/g, '')
            }

            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL_2}/clientes_legacy/videos`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }   

                // Refetch the video status data to get updated dates
                const getResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL_2}/clientes_legacy/videos?email=${email.replace(/"/g, '')}`, {
                    method: 'GET'
                });
                
                if (!getResponse.ok) {
                    throw new Error('Failed to fetch updated video status');
                }

                const updatedData = await getResponse.json();
                setDocumentTypes(updatedData);

                swal({
                    title: "¡Listo!",
                    text: "Se ha registrado tu confirmación",
                    icon: "success",
                    button: "Aceptar",
                });

            } catch (error) {
                console.error('Fetch error: ', error);
                swal({
                    title: "Error",
                    text: "Hubo un problema al registrar tu confirmación",
                    icon: "error",
                    button: "Aceptar",
                });
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
            window.open(docsLink.drive_url, '_blank'); // Abre el enlace en una nueva pestaña.
        }
    }

    /* Función que cambia el formato de fecha del check */

    function formatFecha(fecha) {
        if (!fecha) return 'Fecha no disponible';
        
        const date = new Date(fecha);
        if (isNaN(date.getTime())) return 'Fecha no disponible';

        const dia = date.getDate();
        const mes = date.getMonth() + 1;
        const año = date.getFullYear();
        const horas = date.getHours();
        const minutos = date.getMinutes();
        const ampm = horas >= 12 ? 'pm' : 'am';
        const hora12 = horas % 12 || 12;

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

    const getFormattedDate = (documentName) => {
        if (documentName === "Anexo 1") return fechaFormateada;
        if (documentName === "Promesa compra venta cliente") return fechaFormateadaCompraventa;
        return fechaFormateadaArriendo;
    };

    const shouldShowDate = (documentName, documentTypes, isChecked) => {
        const checkMap = {
            "Anexo 1": documentTypes.Check_video_Anexo1__c,
            "Promesa compra venta cliente": documentTypes.Check_video_Promesa_C__c,
            "Contrato Arriendo": documentTypes.Check_video_Contrato_Arrendamiento__c
        };
        return checkMap[documentName] === true && !isChecked;
    };

    return (
        <div className="Documents container-fluid">
            {testRedireccion(estado)}
            <div className="title-register">
                <h1><b>Documentos</b></h1>
            </div>
            {loading ? (
                <LoadingSpinner />
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
                    {(docsBuyer.length > 0) ? (
                        <Container maxWidth="xl" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            mb: 4,
                        }}
                            className=''>
                            {docsBuyer.filter(file => file.signed).map((file, index, element) => (
                                <div key={`signed-${index}`} className="card-docs-grid-mui ">
                                    <div className="accordion " id={`accordionExample-signed-${index}`}>
                                        <div className=" ">
                                            <h2 className="" id={`headingTwo-signed-${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#mesDos-signed-${index}`} aria-expanded="false" aria-controls={`mesDos-signed-${index}`}>

                                                    <Grid container className="" justifyContent="center" alignItems="center" spacing={2} sx={{
                                                    }}>
                                                        <Grid item sx={12} sm={12} md={12} lg={12} >
                                                            <DocumentHeader file={file} isSignedDoc={file.signed} />
                                                        </Grid>
                                                    </Grid>
                                                </button>
                                            </h2>
                                            {/*---------------------------------------------------------------------------------------------------------------------------------*/}
                                            <div className=" ">
                                                <div className="collapse" id={`mesDos-signed-${index}`}>
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
                                                                    {shouldShowDate(file.name, documentTypes, element.isChecked) ? (
                                                                        <DateDisplay 
                                                                            documentName={file.name} 
                                                                            date={getFormattedDate(file.name)} 
                                                                        />
                                                                    ) : (
                                                                        <div className='centrado'>
                                                                            <Grid container spacing={0.5} sx={{}}>
                                                                                <Grid item sx={2} sm={2} md={2} lg={2}>
                                                                                    <FormControlLabel
                                                                                        key={element.id}
                                                                                        control={
                                                                                            <Checkbox
                                                                                                checked={element.isChecked}
                                                                                                onChange={() => handleCheckboxChangePrueba(file)}
                                                                                                value={elementos}
                                                                                                id={`check${file.name.replace(/\s+/g, "_")}`}                                                                                            />
                                                                                        }
                                                                                    />
                                                                                </Grid>
                                                                                <ConfirmationText />
                                                                            </Grid>

                                                                        </div>
                                                                    )}
                                                                </CardActions>

                                                                <br />
                                                            </div>
                                                        ) : null}
                                                        <br />
                                                        <div className=' centrado '>
                                                            <ReadDocumentButton 
                                                                file={file} 
                                                                isDisabled={isButtonDisabled(file)}
                                                                onClickRead={linkDocs}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {docsBuyer.filter(file => !file.signed).map((file, index, element) => (
                                <div key={`unsigned-${index}`} className="card-docs-grid-mui ">

                                    <div className="accordion " id={`accordionExample-unsigned-${index}`}>
                                        <div className=" ">
                                            <h2 className="" id={`headingTwo-unsigned-${index}`}>
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#mesDos-unsigned-${index}`} aria-expanded="false" aria-controls={`mesDos-unsigned-${index}`}>

                                                    <Grid container className="" justifyContent="center" alignItems="center" spacing={2} sx={{
                                                    }}>
                                                        <Grid item sx={12} sm={12} md={12} lg={12} >
                                                            <DocumentHeader file={file} isSignedDoc={file.signed} />
                                                        </Grid>
                                                    </Grid>
                                                </button>
                                            </h2>
                                            {/*---------------------------------------------------------------------------------------------------------------------------------*/}
                                            <div className=" ">
                                                <div className="collapse" id={`mesDos-unsigned-${index}`}>
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
                                                                    {shouldShowDate(file.name, documentTypes, element.isChecked) ? (
                                                                        <DateDisplay 
                                                                            documentName={file.name} 
                                                                            date={getFormattedDate(file.name)} 
                                                                        />
                                                                    ) : (
                                                                        <div className='centrado'>
                                                                            <Grid container spacing={0.5} sx={{}}>
                                                                                <Grid item sx={2} sm={2} md={2} lg={2}>
                                                                                    <FormControlLabel
                                                                                        key={element.id}
                                                                                        control={
                                                                                            <Checkbox
                                                                                                checked={element.isChecked}
                                                                                                onChange={() => handleCheckboxChangePrueba(file)}
                                                                                                value={elementos}
                                                                                                id={`check${file.name.replace(/\s+/g, "_")}`}                                                                                            />
                                                                                        }
                                                                                    />
                                                                                </Grid>
                                                                                <ConfirmationText />
                                                                            </Grid>

                                                                        </div>
                                                                    )}
                                                                </CardActions>

                                                                <br />
                                                            </div>
                                                        ) : null}
                                                        <br />
                                                        <div className=' centrado '>
                                                            <ReadDocumentButton 
                                                                file={file} 
                                                                isDisabled={isButtonDisabled(file)}
                                                                onClickRead={linkDocs}
                                                            />
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
                        <NoDocuments />
                    )
                    }
                </Box >
            )}
        </div >
    );
}
export default Docs

