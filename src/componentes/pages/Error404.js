import React from 'react'
import { Box, Container, CssBaseline, Grid, Toolbar, Typography, Button, CardContent } from "@mui/material";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from 'react-router-dom';
/*import { googleLogout } from "@react-oauth/google";*/
/*import FacebookLogin from 'react-facebook-login';*/


const themeCustomer = createTheme({
    status: {
      danger: '#FF111F',
    },
    palette: {
      primary: {
        main: '#C5F5CA',
        darker: '#0A3323',
      },
      neutral: {
        main: '#6C9FFF',
        contrastText: '#fff',
      },
    },
  });

export default function Error404() {
  return (
    <div>Error404


      <ThemeProvider theme={themeCustomer} sx={{ m: 0, p: 0, }}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />

          <Box
            component="main"
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              marginTop: '31px',
              marginLeft: '50px'
            }}
          >
            <Toolbar />



            {/*-----------------------------------------------------------contendeor principal----------------------------------------------------- */}

            <Container maxWidth="xl" sx={{ mt: 4, mb: 4, }}
              className=''>
              <Grid container sx={{

              }}>
                <Typography gutterBottom component="div" sx={{
                  color: '#000000',
                  mt: 1,

                }}>
                  <h1 className='text-title'>Mi Dashboard</h1>
                </Typography>
                <Grid container maxWidth="xl" spacing={1} gap={0.5} sx={{

                  mt: 2,
                }}>
                  <Grid item xs={9} md={4} lg={3}>
                    <Link to="/inmueble" className='links'>
                      <Button variant="contained" endIcon={<MapsHomeWorkOutlinedIcon />}
                        sx={{
                          backgroundColor: '#FF864B',
                          color: '#ffffff',
                          fontFamily: 'Rustica',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '14px',
                          textTransform: 'none',
                          width: '260px',
                        }}
                      //onClick={handleUserNewClick}//función de nueva consulta                        
                      >
                        Consulta un Inmueble
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={3} md={12} lg={2}>
                  </Grid>
                </Grid>
                {/*Botón 2 */}
                <Grid container maxWidth="xl" spacing={1} gap={0.5} sx={{

                  mt: 2,
                }}>
                  <Grid item xs={9} md={4} lg={3}>
                    <Link to="/cliente" className='links'>
                      <Button variant="contained" endIcon={<GroupsIcon />}
                        sx={{
                          backgroundColor: '#FF864B',
                          color: '#ffffff',
                          fontFamily: 'Rustica',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '14px',
                          textTransform: 'none',
                          width: '260px',
                        }}
                      //onClick={handleUserNewClick}//función de nueva consulta                        
                      >
                        Consulta un Cliente
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={3} md={12} lg={2}>
                    <div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>

            </Container>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4, }}
              className=''>
              <Grid container sx={{
                marginTop: '10px',
              }}>
                {/*Segunda columna principal-datos del inmueble*/}
                <Grid item className='' xs={12} sm={12} md={4} lg={4}>
                  <Grid container sx={{}}>
                    <Grid item spacing={1} xs={12} sm={12} md={12} lg={12}
                      className='border-cards-componentes centrado'>
                      <div className=''>
                        {/*Sección de datos usuarios index */}
                        <Typography gutterBottom component="div" sx={{
                          textAlign: 'center',
                          fontFamily: 'Rustica',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '25px',
                          color: '#0A3323',
                          lineHeight: '20px',
                          marginTop: '5px',
                        }}>
                          <p className='title-seccion-eva'>
                            Consultas Realizadas
                          </p>
                        </Typography>
                        <div className=''>
                          {/*valores en card */}
                          <Grid className='' container sx={{

                          }}>
                            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mt: 2 }}>
                              <div className=' centrado'>
                                <div className=' disegn-container-descpt-dashboard'>
                                  <div className=''>

                                    <Typography gutterBottom component="div"
                                      sx={{
                                        textAlign: 'center',
                                        fontFamily: 'Rustica',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        fontSize: '24px',
                                        color: '#046B43',
                                        lineHeight: '23px',
                                        marginTop: '40px',
                                        marginBottom: '20px',

                                      }}>
                                      <h1></h1>{/**Suma de los dos conatores */}
                                    </Typography>
                                  </div>
                                </div>
                              </div>
                            </Grid>
                          </Grid>

                          {/*endpoint cards de especificaciones */}
                          <Grid containercontainer sx={{
                            width: '100%',
                            mt: '-20px'
                          }}>
                            <div className=' '>
                              {/*Estrato */}
                              <CardContent>
                                <Grid container sx={{ mt: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                  <Grid container sx={{}} >
                                    <Grid item xs={6} md={4} lg={4}
                                      className='centrado'>
                                      {/*Sección de datos usuarios index */}
                                      <div className=''>

                                        <Typography gutterBottom component="div" sx={{
                                          textAlign: 'center',
                                          fontFamily: 'Rustica',
                                          fontStyle: 'normal',
                                          fontWeight: '500',
                                          fontSize: '15px',
                                          color: '#0A3323',
                                          lineHeight: '20px',
                                          marginTop: '20px',
                                          // marginLeft: '20px',

                                        }}>
                                          <p className="space-text-coutas">
                                            Inmuebles:
                                          </p>
                                        </Typography>
                                        <div className='centrado changes-coutas-dashboard '>
                                          <h6 className='text-consultas-mensuales'>/10</h6>
                                        </div>

                                      </div>
                                    </Grid>
                                    <Grid xs={6} md={4} lg={4} spacing={0.1}
                                      className='centrado' >
                                      <div className='  '>
                                        <Typography gutterBottom component="div" sx={{
                                          textAlign: 'center',
                                          fontFamily: 'Rustica',
                                          fontStyle: 'normal',
                                          fontWeight: '500',
                                          fontSize: '15px',
                                          color: '#0A3323',
                                          lineHeight: '20px',
                                          marginTop: '20px',
                                          //marginLeft: '20px',

                                        }}>
                                          <p className="space-text-coutas">
                                            Clientes:
                                          </p>
                                        </Typography>
                                        <div className=' changes-coutas-dashboard'>
                                          <h5 className='text-consultas-mensuales'>/10</h5>

                                        </div>
                                      </div>
                                    </Grid>
                                    <Grid xs={12} md={4} lg={4} spacing={0.1}
                                      className='centrado' >
                                      <div className='  '>
                                        <Typography gutterBottom component="div" sx={{
                                          textAlign: 'center',
                                          fontFamily: 'Rustica',
                                          fontStyle: 'normal',
                                          fontWeight: '500',
                                          fontSize: '15px',
                                          color: '#0A3323',
                                          lineHeight: '20px',
                                          marginTop: '20px',
                                          //marginLeft: '20px',

                                        }}>
                                          <p className="space-text-coutas">
                                            Documentos:
                                          </p>
                                        </Typography>
                                        <div className=' changes-coutas-dashboard'>
                                          <h5 className='text-consultas-mensuales'>/10</h5>

                                        </div>
                                      </div>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </div>
                          </Grid>

                          {/*endpointBotones historial de especificaciones */}
                          <Grid containercontainer sx={{
                            width: '100%',
                            marginTop: '-30px',
                          }}>
                            <div className=' centrado'>
                              {/*Estrato */}
                              <CardContent>
                                <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                  <Link to="/inmueble" className='links'>
                                    <Button variant="outlined" endIcon={<MapsHomeWorkOutlinedIcon />} sx={{
                                      backgroundColor: '#ffffff',
                                      color: '#0A3323',
                                      borderColor: '#0A3323',
                                      fontFamily: 'Rustica',
                                      fontStyle: 'normal',
                                      fontWeight: '400',
                                      fontSize: '14px',
                                      textTransform: 'none',
                                      width: '240px',
                                    }}>
                                      Historial de Inmueble
                                    </Button>
                                  </Link>
                                  <Grid item xs={3} md={2} lg={3}>
                                  </Grid>
                                  <Grid item xs={5} md={4} lg={6}>
                                  </Grid>
                                  <Grid item xs={3} md={5} lg={3}>
                                  </Grid>
                                </Grid>
                                <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                                  <Link to="/cliente" className='links'>
                                    <Button variant="outlined" endIcon={<GroupsIcon />} sx={{
                                      backgroundColor: '#ffffff',
                                      color: '#0A3323',
                                      borderColor: '#0A3323',
                                      fontFamily: 'Rustica',
                                      fontStyle: 'normal',
                                      fontWeight: '400',
                                      fontSize: '14px',
                                      textTransform: 'none',
                                      width: '240px',
                                    }}>
                                      Historial de Clientes
                                    </Button>
                                  </Link >


                                  <Grid item xs={3} md={2} lg={3}>
                                    {/* <img src={Icasa} alt="img" className='iconos-inmueble-description' />*/}
                                  </Grid>
                                  <Grid item xs={5} md={4} lg={6}>

                                  </Grid>
                                  <Grid item xs={3} md={5} lg={3}>

                                  </Grid>
                                </Grid>
                                <Grid container sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >

                                  <Link to="/documentos" className='links'>
                                    <Button variant="outlined" endIcon={<ContentCopyIcon />} sx={{
                                      backgroundColor: '#ffffff',
                                      color: '#0A3323',
                                      borderColor: '#0A3323',
                                      fontFamily: 'Rustica',
                                      fontStyle: 'normal',
                                      fontWeight: '400',
                                      fontSize: '14px',
                                      textTransform: 'none',
                                      width: '240px',
                                    }}>
                                      Historial de Documentos
                                    </Button>
                                  </Link >

                                  <Grid item xs={3} md={2} lg={3}>
                                    {/* <img src={Icasa} alt="img" className='iconos-inmueble-description' />*/}
                                  </Grid>
                                  <Grid item xs={5} md={4} lg={6}>

                                  </Grid>
                                  <Grid item xs={3} md={5} lg={3}>

                                  </Grid>
                                </Grid>
                              </CardContent>

                            </div>
                          </Grid>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item className='' xs={1} sm={1} md={1} lg={1}>
                </Grid>


                {/*--------------Sección gráfica consultas disponibles ----------------------------*/}
                <Grid item className='' xs={12} sm={12} md={7} lg={7}>
                  <Grid container sx={{}}>
                    <Grid item spacing={1} xs={12} sm={12} md={12} lg={12}
                      className='border-cards-componentes '>
                      <div className=''>
                        {/*Sección de datos usuarios index */}
                        <Typography gutterBottom component="div" sx={{
                          textAlign: 'start',
                          fontFamily: 'Rustica',
                          fontStyle: 'normal',
                          fontWeight: '400',
                          fontSize: '25px',
                          color: '#0A3323',
                          lineHeight: '20px',
                          marginTop: '5px',
                          ml: 2
                        }}>
                          < p className='title-seccion-eva'>
                            Consultas Disponibles </p>
                        </Typography>

                        prueba

                      </div>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>

            </Container>
            {/*------------------------------------------------------------------------ */}
          </Box>




        </Box>
      </ThemeProvider>
    </div>
  )
}
