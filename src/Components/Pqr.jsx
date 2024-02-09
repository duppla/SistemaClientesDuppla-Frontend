// InconformidadForm.js
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';




function SolitudForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tipo_solicitud: '',            
        asunto: '',     
        comentario: '',       
        email: localStorage.getItem('email').replace(/"/g, '') || '', // Obtener el email del localStorage
   
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
     

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Establecer isSubmitting en true mientras se envía el formulario
        /* console.log('Datos del formulario:', formData); */

        try {
            const response = await fetch('https://salesforce-gdrive-conn.herokuapp.com/case_solicitud', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Éxito: mostrar una alerta de éxito y redirigir al usuario al home de la app
                swal({

                    text: "¡El formulario se envió con éxito!",
                    icon: "success",
                    button: "Cerrar",
                    timer: 4000,
                });

                navigate('/inicio'); // Redireccionar al home de la app
            } else {
                // Error: mostrar un mensaje de error al usuario
                
                swal({
                    text: "¡Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.!",
                    icon: "info",
                    button: "Cerrar",
                    timer: 4000,
                });
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            swal({
                text: "¡Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.!",
                icon: "info",
                button: "Cerrar",
                timer: 4000,
            });
        } finally {
            setIsSubmitting(false); // Establecer isSubmitting en false después de completar el envío o en caso de error
        }
    };



    useEffect(() => {
        try {
            restrictRatingInput();

        } catch (error) {
            console.error('Error en el componente Mantenimiento:', error);
        }
        return () => {

        };
    }, []);

    function restrictRatingInput() {
        let ratingInput = document.getElementById('rating');
        ratingInput.addEventListener('input', function () {
            let value = ratingInput.value;
            if (value !== '' && (value < 0 || value > 5)) {
                ratingInput.value = '';
            }
        });
    }

    const formStyle = {
        maxWidth: '400px',
        margin: 'auto',
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    const selectStyle = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#5782F2',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#4169c9',
    };

    const h2Style = {
        color: '#5782F2',
        testAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <div>
            <div className='centrado'>
                <h2 style={h2Style}>Solicitudes</h2>
            </div>
            <form style={formStyle} onSubmit={handleSubmit} id="modern-form">

             
                <div class="dropdown">
                    <label for="afectacion">¿Qué tipo de solicitud desea realizar?:</label>
                    <select style={selectStyle} id="00NRb000001ZLCH" name="tipo_solicitud" onChange={handleChange} title="Problemas con:">
                        <option value="Administraciones">Administraciones</option>
                        <option value="Servicios Públicos">Servicios Públicos</option>
                        <option value="Canon">Canon</option>
                        <option value="Estado de cuenta">Estado de cuenta</option>
                        <option value="Terminación contrato y Prorrogas">Terminación contrato y Prórrogas</option>
                    </select>
                </div>

                <div class="input-field">
                    <label for="short-text">Asunto:</label>
                    <input style={inputStyle} type="text" id="00N8V00000IUPj8" name="asunto" onChange={handleChange} />
                </div>


                <div class="textarea-field">
                    <label for="comment">Comentario:</label>
                    <textarea style={inputStyle} id="comment" name="comentario" rows="4" onChange={handleChange} ></textarea>
                </div>

                <button style={buttonStyle} type="submit">{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
}

export default SolitudForm;
