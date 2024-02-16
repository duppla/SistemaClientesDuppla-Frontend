// InconformidadForm.js
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';




function MantenimientoForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tipo_afectacion: '',
        subtipo_afectacion: '',
        ubicacion_mmto: '',
        asunto: '',
        comentario: '',
        calificacion: '',
        email: localStorage.getItem('email').replace(/"/g, '') || '',
        picklistMantenimiento: 'Mantenimiento',
 // Obtener el email del localStorage
    });

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Cambiar el nombre del campo 'rating' a 'calificacion'
        const updatedName = name === 'rating' ? 'calificacion' : name;
        const updatedFormData = { ...formData, [updatedName]: value };
        setFormData(updatedFormData);
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Establecer isSubmitting en true mientras se envía el formulario
       

        try {
            const response = await fetch('https://salesforce-gdrive-conn.herokuapp.com/case_mantenimiento', {
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
            /* console.error('Error al enviar los datos:', error); */
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
                <h2 style={h2Style}>Mantenimiento</h2>
            </div>
            <form style={formStyle} onSubmit={handleSubmit} id="modern-form">

                <div class="dropdown">
                    <label for="afectacion">Tipo de Afectación:</label>
                    <select style={selectStyle} id="00N8V00000IUPiP" name="tipo_afectacion" title="tipo_afectacion" onChange={handleChange} ><option value="">--Elegir--</option>
                        <option value="electricidad_">Eléctrico</option>
                        <option value="plomeria">Plomería</option>
                        <option value="climatizacion">Calefacción/Ventilación/Aire Acondicionado</option>
                        <option value="electrodomesticos">Electrodomésticos</option>
                        <option value="pintura">Pintura</option>
                        <option value="mobiliario">Mobiliario</option>
                        <option value="seguridad">Seguridad</option>
                        <option value="iluminacion">Iluminación</option>
                        <option value="suelos">Suelos/Revestimientos</option>
                        <option value="otro">otro</option>
                    </select>
                </div>

                <div class="dropdown">
                    <label for="specific-issue">Sub-tipo de afectación:</label>
                    <select style={selectStyle} id="00N8V00000IUPiy" name="subtipo_afectacion" title="subtipo_afectacion" onChange={handleChange}><option value="">--Elegir--</option>
                        <option value="interrupcionEnergia">Interrupción de Suministro Eléctrico</option>
                        <option value="problemasTomasCorriente">Problemas con Tomas de Corriente</option>
                        <option value="fallosInterruptores">Fallos en Interruptores/Lámparas</option>
                        <option value="cableadoDanado">Cableado Dañado</option>
                        <option value="fugasAgua">Fugas de Agua</option>
                        <option value="problemasDrenaje">Problemas de Drenaje</option>
                        <option value="malCalefaccion">Mal Funcionamiento de Calefacción</option>
                        <option value="malVentilacion">Mal Funcionamiento de Ventilación</option>
                        <option value="malAireAcondicionado">Mal Funcionamiento de Aire Acondicionado</option>
                        <option value="electrodomesticoDefectuoso">Electrodoméstico Defectuoso</option>
                        <option value="pinturaDescascarada">Pintura Descascarada</option>
                        <option value="agujerosParedes">Agujeros/Desperfectos en Paredes</option>
                        <option value="mueblesDanados">Muebles Dañados/Roturas</option>
                        <option value="problemasCerraduras">Problemas con Cerraduras</option>
                        <option value="problemasIluminacion">Problemas de Iluminación</option>
                        <option value="suelosDanados">Suelos/Revestimientos Dañados</option>
                        <option value="Otro">otro</option>
                        <option value="Tiempos de respuesta">Tiempos de respuesta</option>
                        <option value="Calidad del proceso">Calidad del proceso</option>
                        <option value="Solución de dudas">Solución de dudas</option>
                    </select>
                </div>

                <div class="dropdown">
                    <label for="ubicacion">Ubicación del mantenimiento:</label>
                    <select style={selectStyle} id="00N8V00000IUPj3" name="ubicacion_mmto" title="ubicacion_mmto"onChange={handleChange}><option value="">--Elegir--</option>
                        <option value="salaEstar">Sala de estar</option>
                        <option value="dormitorioPrincipal">Dormitorio principal</option>
                        <option value="dormitorioSecundario">Dormitorio secundario</option>
                        <option value="Cocina">cocina</option>
                        <option value="banoPrincipal">Baño principal</option>
                        <option value="banoSecundario">Baño secundario</option>
                        <option value="Comedor">comedor</option>
                        <option value="balconTerraza">Balcón/Terraza</option>
                        <option value="areaLavanderia">Área de lavandería</option>
                        <option value="Pasillos">pasillos</option>
                        <option value="areaAlmacenamiento">Área de almacenamiento</option>
                        <option value="Otro">otro</option>
                    </select>
                </div>

                <div class="input-field">
                    <label for="short-text">Asunto:</label>
                    <input style={inputStyle} type="text" id="00N8V00000IUPj8" name="asunto" onChange={handleChange} />
                </div>

               <div class="rating-field">
                    <label for="rating">Evalúe nuestro servicio (0 a 5):</label>
                    <input style={inputStyle} type="number" id="rating" name="rating" min="0" max="5" onChange={handleChange} oninput="this.value=this.value.slice(0,1)" />
                </div> 

                <div class="textarea-field">
                    <label for="comment">Comentario:</label>
                    <textarea style={inputStyle} id="comment" name="comentario" rows="4" onChange={handleChange}></textarea>
                </div>

                <button style={buttonStyle} disabled={isSubmitting} type="submit"> {isSubmitting ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
}

export default MantenimientoForm;
