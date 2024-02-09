// InconformidadForm.js
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';




function InconformidadForm() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        servicio_inconformidad: '',
        tipo_inconformidad: '',       
        asunto: '',
        calificacion: '',
        comentario: '',
        tipo: 'Inconformidad con servicio prestado',
        email: localStorage.getItem('email').replace(/"/g, '') || '', // Obtener el email del localStorage
   
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Cambiar el nombre del campo 'rating' a 'calificacion'
        const updatedName = name === 'rating' ? 'calificacion' : name;
        const updatedFormData = { ...formData, [updatedName]: value };
        setFormData(updatedFormData);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    
  

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true); // Establecer isSubmitting en true mientras se envía el formulario
        

        try {
            const response = await fetch('https://salesforce-gdrive-conn.herokuapp.com/case_inconformidad_cliente', {
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
            console.error('Error en el componente InconformidadForm:', error);
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
                <h2 style={h2Style}>Inconformidad con el Servicio Prestado</h2>
            </div>
            <form style={formStyle} onSubmit={handleSubmit} id="modern-form">
                <div class="dropdown">
                    <label for="afectacion">Servicio con el que se encuentra inconforme:</label>
                    <select style={selectStyle} id="00NRb000001ZLCH" name="servicio_inconformidad" onChange={handleChange} title="Problemas con:"><option value="" >--Elegir--</option>
                        <option value="Proceso comercial">Proceso comercial</option>
                        <option value="Proceso contable">Proceso contable</option>
                        <option value="Solución de dudas">Solución de dudas</option>
                        <option value="Proceso postventa">Proceso postventa</option>
                    </select>
                </div>

                <div class="dropdown">
                    <label for="dropdown2">¿Con qué se encuentra inconforme?</label>
                    <select style={selectStyle} id="00N8V00000IUPiy" name="tipo_inconformidad" onChange={handleChange} title="subtipo_afectacion"><option value="">--Elegir--</option>
                        <option value="Tiempos de respuesta">Tiempos de respuesta</option>
                        <option value="Calidad del proceso">Calidad del proceso</option>
                        <option value="Solución de dudas">Solución de dudas</option>
                    </select>
                </div>

                <div class="input-field">
                    <label for="short-text">Asunto:</label>
                    <input style={inputStyle} type="text" id="asunto" name="asunto" onChange={handleChange} />
                </div>

                <div class="rating-field">
                    <label for="rating">Evalúe nuestro servicio (0 a 5):</label>
                    <input style={inputStyle} type="number" id="rating" name="rating" min="0" max="5" oninput="this.value=this.value.slice(0,1)" onChange={handleChange} />
                </div>

                <div class="textarea-field">
                    <label for="comment">Comentario:</label>
                    <textarea style={inputStyle} id="comment" name="comentario" rows="4" onChange={handleChange}></textarea>
                </div>

                <button style={buttonStyle} type="submit">{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
}

export default InconformidadForm;
