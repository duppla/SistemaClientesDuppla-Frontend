import React, { useState, useEffect } from 'react'
import './../custumer/Form.css'
import { AuthContext } from "./../context/Contextauth";
import swal from 'sweetalert';

import { Link, useNavigate } from 'react-router-dom'
import { Box, CssBaseline, Button, TextField, Select, MenuItem, FormControl, InputLabel, TextareaAutosize, Grid, Container, Typography, createTheme, ThemeProvider } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ReactGA from 'react-ga';

import Lottie from 'lottie-react';
import animationData from './../Components/loanding.json';



const themeFormMantenimiento = createTheme({
  status: {
    danger: '#FF111F',
  },
  palette: {
    primary: {
      main: '#FF864B',
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
  const estado = localStorage.getItem('estado');
  /*  const email = localStorage.getItem('email'); */
  const emailWithQuotes = localStorage.getItem('email');

  if (emailWithQuotes) {
    // Eliminar las comillas alrededor del correo electrónico
    const email = emailWithQuotes.replace(/"/g, '');



    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
      email: email,
      /* inmueble: '', */
      tipo_reclamacion_garantia: '',
      tipo_afectacion: '',
      subtipo_afectacion: '',
      ubicacion_mmto: '',
      asunto: '',
      actividades_solicitadas: ''

    });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true); // Mostrar la animación de carga

      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(formData)
      };

      try {
        // Envía la solicitud y espera la respuesta
        const response = await fetch('https://salesforce-gdrive-conn.herokuapp.com/cases_app_clientes', options);
        const data = await response.json();
        console.log(data + "Prueba de envio 1");
        // Si la respuesta es exitosa, marca que se ha enviado la solicitud
        if (response.status === 200) {
          setIsSubmitted(true);


          // Luego de un tiempo (por ejemplo, 3 segundos), redirige al usuario al componente de inicio
          
            setIsLoading(false); // Ocultar la animación de carga
            swal({
              text: "Tu requerimiento ha sido creado con éxito, recibirás una confirmación en tu correo",
              icon: "success",
              button: "Ok",
              timer: 5000,
            });
            navigate(`/inicio`);
         
        } else {
          setIsLoading(false);
          alert("Solicitud no enviada");
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error al enviar la solicitud', error);
      }
      finally {
        setIsLoading(false); // Ocultar la animación de carga independientemente del resultado de la solicitud
      }
    };



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
      <ThemeProvider theme={themeFormMantenimiento} sx={{ m: 0, p: 0, }}>
        {testRedireccion(estado)}
        <div className="title-register ">
          <h1> <b></b>
          </h1>
        </div>
        {isLoading ? (
          <div className='loading'>
            <div className='loading-container'>
              <h2 className='text-loading'>Cargando...</h2>
              <div className='text-loading'>
                <div className='loading-state-mui' style={{ width: '150px', height: '150px', }} >
                  {/* Agrega tu animación de carga aquí */}
                  <Lottie animationData={animationData} 
                  loop 
                  autoplay />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="element-container">

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            alignItems: 'center',
            textAlign: 'start',
            marginTop: '-60px',

          }}>
            <CssBaseline />

            {/*componente botones cerrar sesión y whatsApp */}
            <Container maxWidth="xl" sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              mb: 4,
              mt: 4,
            }}
              className=''>
              <Typography component="h1" variant="" sx={{

                fontFamily: 'Rustica',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '18px',
                color: '#42723f',
                lineHeight: '20px',
                textAlign: 'center',
              }}>
                <h3>Generar solicitud de reparación / mantenimiento
                </h3>
              </Typography>
              <form className='' onSubmit={handleSubmit}>
                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{
                  mt: 4
                }}>

                  <Grid item sx={12} sm={12} md={12} lg={12} >
                    <div className="card-body-form">
                      <div className="">
                        <FormControl required variant="outlined" fullWidth sx={{ mt: 2 }}>
                          <InputLabel id="tipoReclamacion-label">Tipo de Reclamación / Garantía</InputLabel>
                          <Select required labelId="tipoReclamacion-label"
                            name="tipo_reclamacion_garantia" // 
                            value={formData.tipo_reclamacion_garantia}
                            onChange={handleInputChange}
                            label="Tipo de Reclamación / Garantía">
                            <MenuItem value="mantenimientoReparacion">Mantenimiento/Reparación</MenuItem>
                            <MenuItem value="administraciones_">Administraciones</MenuItem>
                            <MenuItem value="cuponClavePSE">Cupón o Clave PSE</MenuItem>
                            <MenuItem value="entregaInmueble">Entrega del Inmueble</MenuItem>
                            <MenuItem value="estadoCuentaPropietarios">Estado de Cuenta Propietarios</MenuItem>
                            <MenuItem value="negociacionCanon">Negociación Canon</MenuItem>
                            <MenuItem value="reclamaciones_">Reclamaciones</MenuItem>
                            <MenuItem value="semilleroPropietarios">Semillero de Propietarios</MenuItem>
                            <MenuItem value="serviciosPublicos">Servicios Públicos</MenuItem>
                            <MenuItem value="terminacionesProrrogas">Terminaciones o Prórrogas</MenuItem>
                            {/* Agrega los otros elementos de menú */}
                          </Select>
                        </FormControl>
                      </div>

                      <div className="form-group">

                        <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
                          <InputLabel id="tipoAfectacion-label">Tipo de Afectación</InputLabel>
                          <Select required labelId="tipoAfectacion-label"
                            onChange={handleInputChange}
                            name="tipo_afectacion" // Asegura que el name sea correcto
                            value={formData.tipo_afectacion}

                            label="Tipo de Afectación">
                            <MenuItem value="electricidad_">Electricidad</MenuItem>
                            <MenuItem value="plomeria">Plomería</MenuItem>
                            <MenuItem value="climatizacion">Calefacción/Ventilación/Aire Acondicionado</MenuItem>
                            <MenuItem value="electrodomesticos">Electrodomésticos</MenuItem>
                            <MenuItem value="pintura">Pintura/Reparaciones en Paredes</MenuItem>
                            <MenuItem value="mobiliario_">Mobiliario</MenuItem>
                            <MenuItem value="seguridad">Seguridad/Cerraduras</MenuItem>
                            <MenuItem value="iluminacion">Iluminación</MenuItem>
                            <MenuItem value="suelos">Suelos/Revestimientos</MenuItem>
                            <MenuItem value="otro">Otro</MenuItem>

                          </Select>
                        </FormControl>


                      </div>
                      <div className="form-group">
                        <FormControl required variant="outlined" fullWidth sx={{ mt: 2 }}>
                          <InputLabel id="subtipoAfectacion-label">Subtipo de Afectación</InputLabel>
                          <Select  required labelId="subtipoAfectacion-label"
                            onChange={handleInputChange}
                            name="subtipo_afectacion" // Asegura que el name sea correcto
                            value={formData.subtipo_afectacion}
                            label="Subtipo de Afectación">
                            <MenuItem value="interrupcionEnergia">Interrupción de Suministro Eléctrico</MenuItem>
                            <MenuItem value="problemasTomasCorriente">Problemas con Tomas de Corriente</MenuItem>
                            <MenuItem value="fallosInterruptores">Fallos en Interruptores/Lámparas</MenuItem>
                            <MenuItem value="cableadoDanado">Cableado Dañado</MenuItem>
                            <MenuItem value="fugasAgua">Fugas de Agua</MenuItem>
                            <MenuItem value="problemasDrenaje">Problemas de Drenaje</MenuItem>
                            <MenuItem value="malCalefaccion">Mal Funcionamiento de Calefacción</MenuItem>
                            <MenuItem value="malVentilacion">Mal Funcionamiento de Ventilación</MenuItem>
                            <MenuItem value="malAireAcondicionado">Mal Funcionamiento de Aire Acondicionado</MenuItem>
                            <MenuItem value="electrodomesticoDefectuoso">Electrodoméstico Defectuoso</MenuItem>
                            <MenuItem value="pinturaDescascarada">Pintura Descascarada</MenuItem>
                            <MenuItem value="agujerosParedes">Agujeros/Desperfectos en Paredes</MenuItem>
                            <MenuItem value="mueblesDanados">Muebles Dañados/Roturas</MenuItem>
                            <MenuItem value="problemasCerraduras">Problemas con Cerraduras</MenuItem>
                            <MenuItem value="problemasIluminacion">Problemas de Iluminación</MenuItem>
                            <MenuItem value="suelosDanados">Suelos/Revestimientos Dañados</MenuItem>
                            <MenuItem value="otro">Otro</MenuItem>
                          </Select>
                        </FormControl>
                      </div>

                      <div className="form-group">
                        <FormControl required variant="outlined" fullWidth sx={{ mt: 2 }}>
                          <InputLabel id="ubicacionMantenimiento-label">Ubicación del Mantenimiento</InputLabel>
                          <Select required labelId="ubicacionMantenimiento-label"
                            onChange={handleInputChange}
                            name="ubicacion_mmto" // Asegura que el name sea correcto
                            value={formData.ubicacion_mmto}
                            label="Ubicación del Mantenimiento">
                            <MenuItem value="salaEstar">Sala de estar</MenuItem>
                            <MenuItem value="dormitorioPrincipal">Dormitorio principal</MenuItem>
                            <MenuItem value="dormitorioSecundario">Dormitorio secundario</MenuItem>
                            <MenuItem value="cocina">Cocina</MenuItem>
                            <MenuItem value="banoPrincipal">Baño principal</MenuItem>
                            <MenuItem value="banoSecundario">Baño secundario</MenuItem>
                            <MenuItem value="comedor">Comedor</MenuItem>
                            <MenuItem value="balconTerraza">Balcón/Terraza</MenuItem>
                            <MenuItem value="areaLavanderia">Área de lavandería</MenuItem>
                            <MenuItem value="pasillos">Pasillos</MenuItem>
                            <MenuItem value="areaAlmacenamiento">Área de almacenamiento</MenuItem>
                            <MenuItem value="otro">Otro</MenuItem>
                          </Select>
                        </FormControl>


                      </div>
                      <div>
                        <TextareaAutosize
                          minRows={1}
                          onChange={handleInputChange}
                          name="asunto" // Asegura que el name sea correcto
                          value={formData.asunto}
                          placeholder="   Asunto"
                          style={{ width: '100%', marginTop: '1rem' }}
                        />
                      </div>
                      <div>
                        <TextareaAutosize
                          minRows={3}
                          onChange={handleInputChange}
                          name="actividades_solicitadas" // Asegura que el name sea correcto
                          value={formData.actividades_solicitadas}
                          placeholder="   Escribe aquí tu petición"
                          style={{ width: '100%', marginTop: '1rem' }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item sx={12} sm={12} md={12} lg={12} >
                    <div className="">
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"

                        sx={{
                          marginTop: '20px',
                          mb: 3,
                          background: '#FF864B',
                          borderRadius: '10px',
                          color: '#ffffff',

                          textTransform: 'none',
                          border: '1px solid #FF864B',
                          height: '58px',

                          fontFamily: 'Helvetica',
                          fontSize: '16px',

                          maxWidth: '390px', // Utiliza maxWidth en lugar de width
                          width: '100%', // Opcionalmente, puedes agregar width: '100%' para mantenerlo sensible
                          margin: '0 auto', // Centrar horizontalmente
                          display: 'flex', // Agrega display: flex para centrar el contenido dentro del botón
                          justifyContent: 'center', // Asegura que el contenido comience desde la izquierda
                          alignItems: 'center', // Centrar verticalmente el contenido
                          minWidth: '300px',
                        }}
                      >
                        Enviar solicitud

                      </Button>

                    </div>
                  </Grid>
                </Grid>
              </form>
            </Container>
            <br />
          </Box>
        </div>

        )
        
        }
       
      </ThemeProvider>
    )
  }
}

export default FormMentenimiento