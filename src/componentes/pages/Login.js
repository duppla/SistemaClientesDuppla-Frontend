import React from "react";
/*import { GoogleLogin } from '@react-oauth/google';*/
import { Link } from "react-router-dom";
import Iduppla from "../../img/Iduppla.png"
import Btngoogle from "../../img/google.png"
import Btnfacebook from "../../img/facebook.png"

import { Box, Container, CssBaseline, Grid, Toolbar, Typography, Button, CardContent } from "@mui/material";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
/*import { googleLogout } from "@react-oauth/google";*/
/*import FacebookLogin from 'react-facebook-login';*/


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


function login() {

    // pruebas ingreso Facebook
    /*const responseFacebook = (response) => {
        console.log(response);
    }
    const componentClicked = () => {
        alert("evento de clik")
    };*/

    return (
        <ThemeProvider theme={themeLogin} sx={{ m: 0, p: 0, }}>
        <div className="container-fluid">   
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
                            width: '327px',
                            height: '269px',
                        }} />
                    </div>
                    <Typography component="h1" variant="" sx={{
                        mt: 3,

                        textAlign: 'center',
                        fontFamily: 'Rustica',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: '20px',
                        color: '#0A3323',
                        lineHeight: '20px',
                    }}>
                        <h1>Sistema Clientes
                        </h1>
                    </Typography>

                    <Box component="form" noValidate sx={{ marginTop: '24px', alignItems: 'center', }}>
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

                        <Link to='/register' className="btn-decoration">
                            <Button

                                fullWidth
                                variant="contained"
                                sx={{
                                    marginTop: '30px',
                                    mb: 1,
                                    background: '#81A1F8',
                                    borderRadius: '10px',
                                    color: '#FFFFFF',
                                    borderRadius: '10px',
                                    height: '56px',
                                    textTransform: 'none',
                                    fontSize: '18px',
                                    alignItems: 'center',
                                    width: '100',

                                }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Link>
                        <Button

                            fullWidth
                            variant="contained"
                            startIcon={<GoogleIcon style={{ color: '#4285F4', width: '32px', height: '32px' }} />}
                            sx={{
                                marginTop: '10px',
                                mb: 1,
                                background: '#ffffff',
                                borderRadius: '10px',
                                color: '#0A3323',
                                borderRadius: '10px',
                                height: '56px',
                                textTransform: 'none',
                                borderColor: '#81A1F8',

                            }}
                        >
                            Sign in with Google
                        </Button>
                      {/*   <Button

                            fullWidth
                            variant="contained"
                            startIcon={<FacebookIcon style={{ color: '#3b5998', width: '32px', height: '32px' }} />}
                            sx={{
                                marginTop: '10px',
                                mb: 3,
                                background: '#ffffff',
                                borderRadius: '10px',
                                color: '#0A3323',
                                borderRadius: '10px',
                                height: '56px',
                                textTransform: 'none',
                                border: '1px',
                                borderColor: '#81A1F8',

                            }}
                        >
                            Sign in with Facebook
                        </Button> */}

                     {/*    <div className="centrado">
                            <Link to='/password' className="links">Registro de contraseña</Link>

                        </div> */}


                    </Box>
                </Box>

            </Container>


        </div >


</ThemeProvider>

    );

}


export default login;