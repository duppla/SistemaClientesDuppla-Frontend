import React, { useState, useEffect } from 'react'
import './../custumer/Form.css'

import { Link, useNavigate } from 'react-router-dom'
import { Box, Button, Grid, Container, Typography, createTheme, ThemeProvider, Stack } from '@mui/material';
import ReactGA from 'react-ga';

import Lottie from 'lottie-react';
import animationData from './../Components/loanding.json';
import Pqr from './Pqr';
import InconformidadForm from './FormInconformidad';
import MantenimientoForm from './FormMantenimienvtov2';



const themeFormMantenimiento = createTheme({
  status: {
    danger: '#FF111F',
  },
  palette: {
    primary: {
      main: '#6C9FFF',
      darker: '#0A3323',
    },
    neutral: {
      main: '#6C9FFF',
      contrastText: '#fff',
    },
  },
});


const FormMentenimiento = () => {
  useEffect(() => {
    // Envía un evento cuando el componente Mantenimiento se monta (se renderiza).
    ReactGA.event({
      category: 'Component Interaction',
      action: 'Entered formulario Mantenimiento Component',
    });
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const [showButtons, setShowButtons] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  
  const estado = localStorage.getItem('estado');
  const emailWithQuotes = localStorage.getItem('email');
  const email = emailWithQuotes ? emailWithQuotes.replace(/"/g, '') : '';

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
  // Función para volver a mostrar los botones de opción
  const handleBackToOptions = () => {
    setSelectedForm(null);
    setShowButtons(true);
  };

  return (
    <ThemeProvider theme={themeFormMantenimiento} sx={{ m: 0, p: 0, }}>

      <Box sx={{ display: 'flex', height: '96px' }} className='profile ' >
      </Box>
      {testRedireccion(estado)}

      <div className="title-register ">
        <h1> <b></b>
        </h1>
      </div>
      {isLoading ? (
        <div className='loading '>
          <div className='loading-container '>
            <h2 className='text-loading'>Cargando...</h2>
            <div className='text-loading centrado '>
              <div className='loading-state-mui' style={{ width: '160px', height: '160px', }} >
                <div>

                  {/* Agrega tu animación de carga aquí */}
                  <Lottie animationData={animationData}
                    loop
                    autoplay />

                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (

        <Container maxWidth="xl" sx={{ mt: 2, mb: 4, }}
          className=''>
          <Grid container className='centrado' maxWidth="xl" spacing={1} sx={{
          }}>

            {showButtons && (
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center', }}>
                <Typography variant="h5" sx={{ mt: 2, mb: 2, color: '#0A3323', fontWeight: 400, textAlign: 'center', fontFamily: 'Rustica', fontSize: '68px' }}>
                  PQR
                </Typography>
              </Grid>
            )}
            {showButtons && (
              <Grid item xs={12} sm={12} md={12} lg={12} sx={{
                display: 'flex', justifyContent: 'center',
                justifyItems: 'center',
                alignItems: 'center',
              }}>
                <Stack direction="column" spacing={1} sx={{ justifyContent: 'center' }}>

                  <Button variant="outlined"
                    onClick={() => {
                      setSelectedForm('mantenimiento');
                      setShowButtons(false); // Oculta los botones después de hacer clic
                    }}
                    sx={{
                      mt: '20px',
                      mb: 3,
                      background: '#6C9FFF',
                      borderRadius: '10px',
                      color: '#ffffff',
                      textTransform: 'none',
                      border: '1px solid #5682F2',
                      height: '58px',
                      fontFamily: 'Helvetica',
                      fontSize: '0.8rem',
                      maxWidth: '390px',
                      width: '100%',
                      minWidth: '340px',
                      fontWeight: 700,

                      '&:hover': {
                        backgroundColor: '#3158A3', // Cambia el fondo al pasar el mouse
                        borderColor: '#3158A3', // Cambia el borde al pasar el mouse
                      },
                      '&.Mui-disabled': {
                        color: '#9A9A9A',
                        backgroundColor: '#6C9FFF',
                      },
                    }}>
                    Mantenimiento
                  </Button>

                  <Button variant="outlined"
                    onClick={() => {
                      setSelectedForm('inconformidad');
                      setShowButtons(false); // Oculta los botones después de hacer clic
                    }}
                    sx={{
                      mt: '20px',
                      mb: 3,
                      background: '#6C9FFF',
                      borderRadius: '10px',
                      color: '#ffffff',
                      textTransform: 'none',
                      border: '1px solid #5682F2',
                      height: '58px',
                      fontFamily: 'Helvetica',
                      fontSize: '0.8rem',
                      maxWidth: '390px',
                      width: '100%',
                      minWidth: '340px',
                      fontWeight: 700,
                      '&:hover': {
                        backgroundColor: '#3158A3', // Cambia el fondo al pasar el mouse
                        borderColor: '#3158A3', // Cambia el borde al pasar el mouse
                      },
                      '&.Mui-disabled': {
                        color: '#9A9A9A',
                        backgroundColor: '#6C9FFF',
                        // Letra blanca cuando está deshabilitado
                      },
                    }}>
                    Inconformidad con el servicio
                  </Button>

                  <Button variant="outlined"
                    onClick={() => {
                      setSelectedForm('solicitudes');
                      setShowButtons(false); // Oculta los botones después de hacer clic
                    }}
                    sx={{

                      mt: '20px',
                      mb: 3,
                      background: '#6C9FFF',
                      borderRadius: '10px',
                      color: '#ffffff',
                      textTransform: 'none',
                      border: '1px solid #81A1F8',
                      height: '58px',
                      fontFamily: 'Helvetica',
                      fontSize: '0.8rem',
                      maxWidth: '390px',
                      width: '100%',
                      minWidth: '340px',
                      fontWeight: 700,

                      '&:hover': {
                        backgroundColor: '#3158A3', // Cambia el fondo al pasar el mouse
                        borderColor: '#3158A3', // Cambia el borde al pasar el mouse
                      },
                      '&.Mui-disabled': {
                        color: '#9A9A9A',
                        backgroundColor: '#6C9FFF',
                        // Letra blanca cuando está deshabilitado
                      },
                    }}>
                    Solicitudes inmueble, cuenta o contrato
                  </Button>

                </Stack>
              </Grid>

            )}

            < Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', alignItems: 'center' }}>
              {selectedForm === 'inconformidad' && <InconformidadForm />}
              {selectedForm === 'mantenimiento' && <MantenimientoForm />}
              {selectedForm === 'solicitudes' && <Pqr />}
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {selectedForm && (
              <Button variant="outlined" onClick={handleBackToOptions} sx={{
                marginTop: '20px',
                mb: 3,
                background: '#ffffff',
                borderRadius: '4px',
                color: '#3158A3',
                textTransform: 'none',
                border: '1px solid #3158A3',
                height: '42px',
                fontFamily: 'Helvetica',
                fontSize: '0.8rem',
                maxWidth: '340px',
                width: '100%',
                minWidth: '290px',
                fontWeight: 700,         
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
               
              }}>
                Regresar al menú de PQR
              </Button>
            )}
            </Grid>

          </Grid>
        </Container>
      )
      }
    </ThemeProvider >
  )
}

export default FormMentenimiento;