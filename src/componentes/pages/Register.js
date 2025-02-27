import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
/*import { serialize } from 'cookie';*/
import { AuthContext } from '../../context/Contextauth';
import swal from 'sweetalert';
import Iduppla from "../../img/Iduppla.png"
import { Button, Container, CssBaseline, TextField, Typography, Box, createTheme, ThemeProvider } from '@mui/material';


import ReactGA from 'react-ga';

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

function Register() {
    useEffect(() => {
        // Envía un evento cuando el componente Docs se monta (se renderiza).
      ReactGA.pageview(window.location.pathname);
      }, []);
    // estados 

    const [showMessage, setShowMessage] = useState(false);

    //Función de login traido desde el contexto
    const { login } = useContext(AuthContext);

    /*Datos enviados a través del servicio*/
    const [datos, setDatos] = useState({
        email: '',
        password: ''
    });

    /*Función manejo de cambios en los inputs, maneja un evento e*/

    const handleInputChance = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }


    /*Función que maneja el envio de la información del formulario */

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar si el correo es válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(datos.email)) {
            alert('El correo no es válido');
            return;
        }

        // Validar que los campos no estén vacíos
        if (!datos.email || !datos.password) {
            alert('Por favor, ingrese su correo y contraseña');
            return;
        }

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: datos.email,
                password: datos.password,
            }),
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/users/login`, options);
            const responseData = await response.json();

            if (response.status === 200) {
                login(responseData.token, datos.email, responseData.estado);
                setDatos('');
            } else {
                //console.log('Error de login');
                handleNotification();
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleNotification = () => {
        swal({

            text: "Correo o  contraseña incorrecta",
            icon: "info",
            button: "Cerrar",
            timer: 2000,
        });
    };

    const handleButtonClickGA = () => {
        // Envía un evento personalizado a Google Analytics cuando se hace clic en el botón.
        ReactGA.event({
         'category': 'Button',
          'action': 'Button Clicked Login',
        });
    
       
      };

    return (
        <ThemeProvider theme={themeLogin} sx={{ m: 0, p: 0, }}>
            <div className="container-fluid" id="formAuthLogin">
              {/* Form de ingreso al portal clientes */}
                <Container className='cetrado' component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            mt: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            alignItems: 'center',
                            textAlign: 'start',
                        }}
                    >
                        <div >
                            <img src={Iduppla} alt="" style={{
                                width: '280px',
                                height: '220px',     
                          }} />
                        </div>
                        <Typography component="h1" variant="" sx={{
                            mt: 2,
                            color: '#0A3323',
                            textAlign: 'center',
                            fontFamily: 'Rustica',
                            fontSize: '20px',
                            fontWeight: '500',
                            fontStyle: 'normal',
                            lineHeight: '20px',
                        }}>
                            <h1>Sistema Clientes
                            </h1>
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ marginTop: '30px', alignItems: 'center', }}>

                            <Typography component="h1" variant="" sx={{
                                mt: 1,

                                textAlign: 'start',
                                fontFamily: 'Rustica',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '16px',
                                color: '#0A3323',
                                lineHeight: '20px',


                            }}>
                                <p>Iniciar sesión
                                </p>
                            </Typography>

                            {/*  <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                             onChange={handleChange} 
                            autoComplete="email"
                            autoFocus
                        /> */}
                            <input type="email"
                                name='email'
                                onChange={handleInputChance}
                                value={datos.email}
                                className="form-control input-register"
                                id="exampleInputEmail1"
                                placeholder="Correo electrónico"
                                aria-describedby="emailHelp"
                                required />

                            <input type="password"
                                name='password'
                                onChange={handleInputChance}
                                value={datos.password}
                                className="form-control input-register"
                                placeholder="Contraseña"
                                id="exampleInputPassword1"
                                required />


                            {showMessage && (handleNotification(true))

                            }
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    marginTop: '26px',
                                    mb: 2,
                                    background: '#81A1F8',
                                    borderRadius: '10px',
                                    color: '#FFFFFF',
                                    borderRadius: '10px',
                                    height: '56px',
                                    textTransform: 'none',

                                }}
                                onSubmit={handleSubmit}
                                onClick={handleButtonClickGA}

                            >
                                Siguiente
                            </Button>
                        </Box>
                    </Box>

                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Register;