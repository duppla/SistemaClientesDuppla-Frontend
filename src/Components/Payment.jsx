import React, { useEffect, useState, useRef } from 'react'
import { Container, Box, Button, ButtonGroup, Typography, Stack, Icon, List, ListItem, ListItemAvatar, Avatar, ListItemText, TextField, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, ListItemIcon } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import IconToolytip from "./../img/IconTooltip.svg";

import Lottie from 'lottie-react';
import animationData from './loanding.json';
import ReactGA from 'react-ga';
import swal from 'sweetalert';
import numeral, { options } from 'numeral';







function Payment() {


    useEffect(() => {
        // Envía un evento cuando el componente Docs se monta (se renderiza).
        ReactGA.pageview(window.location.pathname);
    }, []);

    // Uso de estados para el endpoint de la API
    const [dataCustumer, setDataCustumer] = useState({});
    const [pendingPayments, setPendingPayments] = useState([]);
    const [balance, setBalance] = useState(0);
    const [formattedDataCustumer, setFormattedDataCustumer] = useState(null);

    /* Estado que maneja el loading generar */
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const email = localStorage.getItem('email');
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '{ "email": ' + email + '}'
        };

        fetch('https://sistema-duppla-backend.herokuapp.com/users/homeCustomer', options)
            .then(response => response.json())
            .then(response => {
                setDataCustumer(response)
                setFormattedDataCustumer(numeral(dataCustumer).format('0,0.00'))

                const options2 = { method: 'GET', headers: { 'User-Agent': 'insomnia/2023.5.8' } };

                fetch('https://salesforce-gdrive-conn.herokuapp.com/deuda?customer=' + response.cedula, options2)
                    .then(response => response.json())
                    .then(response => {
                        setBalance(response.balance)
                    })
                    .catch(err => console.error(err));

                // Agregamos un nuevo endpoint aquí
                fetch('https://sistema-duppla-backend.herokuapp.com/pagos/pendingPayments', options)
                    .then(response => response.json())
                    .then(response => {
                        setPendingPayments(response)
                    })
                    .catch(err => console.error(err));
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.error(err);
            });
    }, []);
    // Uso de estados para el endpoint de la API de manera global en el componente
    const pagoMinimo = dataCustumer.pagoMinimo;
    const formatoSugerido = pagoMinimo + (pagoMinimo * 0.17);
    const gastos = dataCustumer.gastos;
    const administracion = dataCustumer.administracion;
    const periodosPendientes = pendingPayments.map(pago => pago.billingPeriod);

    //función que formatea el número
    const formatNumber = (number) => {
        const formatter = new Intl.NumberFormat('es-ES', {
            style: 'decimal',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return formatter.format(number);
    };
    const formatter = new Intl.NumberFormat('es-ES', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });
    const formatterPagoMinimo = formatter.format(pagoMinimo);
    const formatoSug = formatter.format(formatoSugerido);
    const balanceformat = formatter.format(balance);


    {/* Función que crea el link de ago que redirecciona a Paloma*/ }

    const [valoresApi, setValoresApi] = useState({
        comercio: "duppla",
        precio: dataCustumer.inmuebleValor,
        descripcion: dataCustumer.inmuebleName,
    });

    /* Funcion que crea el enlace para pago en paloma */
    const generarEnlace = () => {
        const enlaceBase = "https://www.pay.palomma.com/?";
        const { comercio } = valoresApi;

        let precio, descripcion;

        if (selectedOption === "option1") {
            precio = pagoMinimo;
            descripcion = dataCustumer.inmuebleName;
        } else if (selectedOption === "option2") {
            precio = pagoMinimo + (pagoMinimo * 0.17);
            descripcion = dataCustumer.inmuebleName;
        } else if (selectedOption === "option3") {
            precio = balance;
            descripcion = dataCustumer.inmuebleName;

        } else if (selectedOption.startsWith("dynamicOption")) {
            const index = parseInt(selectedOption.replace("dynamicOption", ""), 10);
            const payment = pendingPayments[index];
            precio = payment.balance;
            descripcion = `Pago para ${payment.billingPeriod}`;
        }
        else {
            // borrar los punto y comas cuando se ingresa el monto
            precio = paymentValue.replace(/[.,]/g, "");
            descripcion = dataCustumer.inmuebleName;
        }
        const enlaceModificado = `${enlaceBase}comercio=${comercio}&precio=${precio}&descripcion=${descripcion}`;
        setValoresApi({ comercio, precio, descripcion });
        setPaymentURL(enlaceModificado);
        return enlaceModificado;
    };

    // estados para el formulario

    const [selectedOption, setSelectedOption] = useState();
    const [paymentURL, setPaymentURL] = useState();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);//estado para el botón
    const [paymentValue, setPaymentValue] = useState("");//para el input number

    // se usa para crear el enlace de pago
    useEffect(() => {
        if (paymentURL) {
            window.location.href = paymentURL;
        }
    }, [paymentURL]);

    // cambio del estado en los input del formulario
    function handleOptionChange(event) {
        event.preventDefault();
        setSelectedOption(event.target.value);
        setIsButtonDisabled(false);
    }

    // Función que controla el input del formulario
    function handlePayment(e) {
        e.preventDefault();
        let enlace;

        if (selectedOption === 'option1' || selectedOption === 'option2' || selectedOption === 'option3') {
            const enlace = generarEnlace();
            window.location.href = enlace;
        }

        else {
            const valor = paymentValue.replace(/[.,]/g, "");
            const precio = parseFloat(valor);

            const sumaValores = gastos + administracion;
            const cambioValores = numeral(sumaValores).format('0,0')
            //validación de digitos 5, 6, 7, 8, 9
            console.log('precio prueba', precio);
            console.log('sumaValores', sumaValores);
            if (precio <= sumaValores) {
                const mensajeAlert = "El valor mínimo a pagar es $" + cambioValores + "";
                swal({
                    text: mensajeAlert,
                    icon: "info",
                    button: "Cerrar",
                    timer: 5000,
                });
                return;
            } else if (precio >= 50000001) {
                const mensajeAlert = "El valor máximo de pago que permite la plataforma es de 50 millones de pesos. Si desea realizar un pago mayor, por favor, póngase en contacto con el asesor";
                swal({
                    text: mensajeAlert,
                    icon: "info",
                    button: "Cerrar",
                    timer: 7000,
                });
            }
            else {
                // Aquí puedes realizar alguna acción con el enlace generado
                enlace = generarEnlace(precio);
            }
        }
    }

    // Estados y funciones que manejan los tooltips
    const [tooltips, setTooltips] = useState([]);
    const handleMouseEnter = (index) => {
        setTooltips((prevState) => {
            const updatedTooltips = [...prevState];
            updatedTooltips[index] = true;
            return updatedTooltips;
        });
    };
    const handleMouseLeave = (index) => {
        setTooltips((prevState) => {
            const updatedTooltips = [...prevState];
            updatedTooltips[index] = false;
            return updatedTooltips;
        });
    }


    return (

        <Box sx={{ flexGrow: 1, mt: 1, ml: 1, mr: 1, borderRadius: '20px' }} >
            {/* sección 1 titulo */}
            <Box maxWidth="xl" sx={{}}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={12} md={12} lg={12}>
                        <Stack direction="row" spacing={2}
                            sx={{
                                marginTop: '24px',
                                /* marginLeft: '8px', */
                            }}>
                            <Link to="/inicio" style={{ textDecoration: 'none' }}>
                                <ArrowBackRoundedIcon style={{ color: '#0A3323', fontSize: 30 }} />
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid xs={12} sm={12} md={12} lg={12} sx={{
                    }}>
                        <Typography variant="h2" sx={{
                            marginTop: '28px',
                            /*   marginLeft: '8px', */
                            fontFamily: 'Helvetica',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '18px',
                            color: '#0A3323',
                            lineHeight: '20px',
                            padding: '0 0 5px 5px',
                            textAlign: 'start',
                        }}>
                            <h2><b>Seleccione o ingrese el monto a pagar</b>
                            </h2>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

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

                <Container maxWidth="xxl" sx={{ mt: 2, mb: 4, width: '100%', borderRadius: '20px', padding: '0px' }}
                    className='centrado'>
                    {/* Componente resemen de pagos*/}
                    <Grid container sx={{ backgroundColor: '#093323', borderRadius: '24px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', }}>

                        <Grid className='' xs={12} sm={12} md={12} lg={12} sx={{
                            width: '100%',
                        }}>
                            <List sx={{}}>
                                <Typography variant="h6" sx={{ color: '#ffffff', ml: 2, mt: 1, }}>Facturas pendientes: </Typography>
                                {periodosPendientes.length > 0 ? (
                                    periodosPendientes.slice().reverse().map((periodo, index) => (
                                        <ListItem key={index}>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon sx={{ color: '#ffffff', width: '12px', height: '12px' }} />
                                            </ListItemIcon>
                                            <ListItemText sx={{ color: '#ffffff' }} primary={periodo.charAt(0).toUpperCase() + periodo.slice(1)} />
                                        </ListItem>
                                    ))
                                ) : (
                                    <ListItem>
                                        <ListItemText sx={{ color: '#ffffff' }} primary="Estás al día, no hay facturas pendientes." />
                                    </ListItem>
                                )}
                            </List>
                        </Grid>
                    </Grid>
                    {/* Componente opciones de pago*/}
                    <Grid container gap={0} columnSpacing={{ md: 1, lg: 1, }} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        minWidth: 'auto',
                        width: '100%',
                        mb: 4,
                        mt: 4,

                    }}>
                        {/*Grafica principal-datos del inmueble*/}
                        <Grid className='' xs={12} sm={12} md={12} lg={12} sx={{

                        }}>
                            <form onSubmit={handlePayment} >
                                <RadioGroup
                                    name="flexRadioDefault"
                                    value={selectedOption}
                                    onChange={handleOptionChange}
                                >
                                    <Grid container justifyContent="center" alignItems="stretch" sx={{
                                        mt: 2
                                    }}>
                                        <Grid xs={12} sm={12} md={12} lg={12} >

                                            {/* Radio button Dinamico*/}
                                            {pendingPayments
                                                .sort((a, b) => new Date(a.date) - new Date(b.date)) // Ordenar por fecha
                                                .map((payment, index) => (
                                                    <Grid key={index} xs={12} sm={12} md={12} lg={12} sx={{
                                                        width: '100%',


                                                    }}>
                                                        <Grid container className={`Container-cards-payment-customer-mui ${selectedOption === `dynamicOption${index}` ? 'selected' : ''}`} sx={{ mt: 2, justifyContent: 'space-between', paddingTop: '16px', paddingBottom: '16px', paddingRight: '4px', paddingLeft: '4px' }}>
                                                            {/* Radio button opción dinámica */}
                                                            <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                                alignItems: "center",
                                                                mt: 1
                                                            }}>
                                                                <FormControlLabel
                                                                    value={`dynamicOption${index}`}
                                                                    control={<Radio />}
                                                                    label={<Typography className='text-label-form-payment' >{`Arriendo ${payment.billingPeriod}`}</Typography>}
                                                                    checked={selectedOption === `dynamicOption${index}`}
                                                                />
                                                            </Grid>
                                                            {/* Espacio para mostrar el total del pago */}
                                                            <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                                alignItems: "center",
                                                                mt: 1
                                                            }}>
                                                                <Typography className='text-label-form-payment' sx={{ mt: 1 }}>$ {new Intl.NumberFormat('es-ES').format(payment.balance)}</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                ))}

                                        </Grid>
                                        {balanceformat !== '0' && pendingPayments.length >= 2 && (
                                            <Grid xs={12} sm={12} md={12} lg={12} >
                                                <Grid container className={`Container-cards-payment-customer-mui ${selectedOption === 'option3' ? 'selected' : ''}`} sx={{
                                                    mt: 2, justifyContent: 'space-between', paddingTop: '16px', paddingBottom: '16px', paddingRight: '4px', paddingLeft: '4px'
                                                }}>
                                                    {/* Radio button opción 3 */}
                                                    <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                        alignItems: "center",
                                                        mt: 2
                                                    }}>
                                                        <FormControlLabel
                                                       
                                                            value="option3"
                                                            control={<Radio />}                                                          
                                                            label={<Typography  className='text-label-form-payment' >Todos los arriendos pendientes</Typography>}
                                                            checked={selectedOption === "option3"}
                                                        />
                                                    </Grid>
                                                    <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                        alignItems: "center",
                                                        mt: 2
                                                    }}>
                                                        <Typography className='text-label-form-payment' sx={{ mt: 1 }}>$ {balanceformat}</Typography>
                                                    </Grid>

                                                </Grid>
                                            </Grid>)}
                                        {/* Radio button opción 1  Mes actual */}
                                        {/* <Grid xs={12} sm={12} md={12} lg={12} >
                                            <Grid container className={`Container-cards-payment-customer-mui ${selectedOption === 'option1' ? 'selected' : ''}`} sx={{
                                                mt: 2, justifyContent: 'space-between', padding: '16px'
                                            }}>
                                                <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                    alignItems: "center",
                                                    mt: 1
                                                }}>
                                                    <FormControlLabel
                                                        value="option1"
                                                        control={<Radio />}
                                                        label="Arriendo mes actual"
                                                        checked={selectedOption === "option1"}
                                                    />
                                                </Grid>
                                                <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                    alignItems: "center",
                                                    mt: 1
                                                }}>
                                                    <Typography sx={{ mt: 1 }}>$ {formatterPagoMinimo}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid> */}
                                        {/* Radio button opción 2 */}
                                        <Grid xs={12} sm={12} md={12} lg={12} >
                                            <Grid container className={`Container-cards-payment-customer-mui ${selectedOption === 'option2' ? 'selected' : ''}`} sx={{
                                                mt: 2, mt: 2, justifyContent: 'space-between', paddingTop: '16px', paddingBottom: '16px', paddingRight: '4px', paddingLeft: '4px',  

                                            }}>
                                                <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                    alignItems: "center",
                                                    mt: 1
                                                }}>
                                                    <FormControlLabel
                                                        value="option2"
                                                        control={<Radio />}                                                       
                                                        label={<Typography className='text-label-form-payment '  >{balanceformat !== '0' ? "Arriendo + inversión sugerida" : "Inversión sugerida"}</Typography>}
                                                        checked={selectedOption === "option2"}
                                                        
                                                    />
                                                </Grid>
                                                <Grid xs={6} sm={6} md={6} lg={6} sx={{
                                                    alignItems: "center",
                                                    mt: 1
                                                }}>
                                                    <Typography className='text-label-form-payment' sx={{ mt: 1 }}>$ {formatoSug}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        {/* Radio button opción 4 */}
                                        <Grid xs={12} sm={12} md={12} lg={12}  >
                                            <Grid container gap={0.5} columnSpacing={{ md: 1, lg: 1, }}   
                                                className={` Container-cards-payment-customer-mui ${selectedOption === 'option4' ? 'selected' : ''}`} sx={{
                                                    mt: 2, justifyContent: 'space-between', paddingLeft: '4px', paddingRight: '4px'
                                                }}>
                                                {/* /* Container-cards-payment-c  */}
                                                <Grid xs={5} sm={5} md={6} lg={6} >
                                                    <Grid container
                                                        sx={{
                                                            mt: 2,
                                                            alignItems: "center",

                                                        }}>
                                                        <Grid sx={4} sm={4} md={4} lg={4} >
                                                            <FormControlLabel
                                                                value="option4"
                                                                control={<Radio />}
                                                                checked={selectedOption === "option4"}
                                                                label={<Typography className='text-label-form-payment' sx={{ mt: 1 }}>Otro valor</Typography>}
                                                            />
                                                        </Grid>
                                                        <Grid sx={1} sm={1} md={1} lg={1} >
                                                            <div
                                                                className="tooltip-container"
                                                                onMouseEnter={() => handleMouseEnter(0)}
                                                                onMouseLeave={() => handleMouseLeave(0)}                                                            >
                                                                <img src={IconToolytip} className="space-tooltip-mui" alt="" height='14px' width='14px' />
                                                                {tooltips[0] && <div className="tooltip-payment-mui ">Este valor abonará a tu cuenta, si el valor a pagar es mayor al pago mínimo, el excedente se abonará a tu participación.</div>}
                                                            </div>

                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={6} sm={6} md={6} lg={6} >
                                                    {selectedOption === 'option4' && (
                                                        <TextField
                                                            id="paymentValue"
                                                            label="Ingrese otro valor"
                                                            name="otrovalornumero"
                                                            value={numeral(paymentValue).format('0,0')}// Vincula el valor del input text al estado paymentValue
                                                            placeholder="$"
                                                            maxLength={11}
                                                            onChange={(event) => setPaymentValue(event.target.value)}
                                                            sx={{
                                                                mb: 1,
                                                                mt: { xs: 2, sm: 2, md: 2, lg: 2 },  // Ajusta el margen superior según el tamaño de la pantalla
                                                                width: '100%',  // Hace que el TextField ocupe todo el ancho del contenedor
                                                            }}
                                                        />
                                                    )}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </RadioGroup>
                            </form>
                        </Grid>
                        <Grid className='' xs={12} sm={12} md={12} lg={12} sx={{
                        }}>
                            <Container maxWidth="xl" sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                                mb: 4,
                                mt: 4,
                            }} >
                                <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{
                                }}>
                                    <Grid item sx={12} sm={12} md={12} lg={12} >
                                        <div>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                disabled={isButtonDisabled || (selectedOption === 'option4' && paymentValue === '')}
                                                className={`btn-payment-custumer  ${isButtonDisabled ? "disabled" : "enabled"}`}
                                                onClick={handlePayment}
                                                /*  onChange={handleInputPrueba} */
                                                sx={{
                                                    mt: 2
                                                }}
                                            >
                                                Continuar
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            )}

        </Box >
    )
}

export default Payment