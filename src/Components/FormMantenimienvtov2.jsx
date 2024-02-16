// InconformidadForm.js
import React, { useEffect, useState } from 'react';
import PicklistService from '../services/PickListsService';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { PickList } from '../models/picklist';



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
     

        // Obtener el email del localStorage
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [picklists, setPicklists] = useState({});

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
        async function fetchPicklists() {
            try {
                const picklists = await PicklistService.getInstance().getPicklists();
                let picklistTipoAfectacion;
                let picklistSubtipoAfectacion;
                for (let picklist of picklists) {
                    if (picklist.apiName === 'tipo_afectacion__c') {
                        picklistTipoAfectacion = picklist;
                    }
                    if (picklist.apiName === 'subtipo_afectacion__c') {
                        picklist.picklistValues = picklist.picklistValues.filter((value) => value.validForapiName === 'Mantenimientos');
                        picklistSubtipoAfectacion = picklist;
                    }
                }
                if (picklistTipoAfectacion && picklistSubtipoAfectacion) {
                    setFormData((prevFormData) => ({
                        ...prevFormData,
                        picklist_tipo_afectacion: picklistTipoAfectacion,
                        picklist_subtipo_afectacion: picklistSubtipoAfectacion,
                    }));
                }
            } catch (error) {
                console.error('Error fetching picklists or initializing form:', error);
            }
        }
    
        //get email from local storage
        const emailLocalStorage = localStorage.getItem('email');
        if (emailLocalStorage){
            setFormData((prevFormData) => ({
                ...prevFormData,
                email: emailLocalStorage.replace(/"/g, ''),
            }));
        }
    
        fetchPicklists();
    }, []);
    

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

    const h2Style = {
        color: '#5782F2',
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <div>
            <div className='centrado'>
                <h2 style={h2Style}>Mantenimiento</h2>
            </div>
            <form style={formStyle} onSubmit={handleSubmit} id="modern-form">
                <div className="dropdown">
                    <label htmlFor="tipo_afectacion">Tipo de afectación:</label>
                    <select style={selectStyle} name="tipo_afectacion" title="Tipo de afectación" onChange={handleChange}>
                        <option value="">--Elegir--</option>
                        {/* Renderizar opciones basadas en datos de la picklist */}
                        {picklists.tipo_afectacion && picklists.tipo_afectacion.picklistValues.map(option => (
                            <option key={option.apiName} value={option.apiName}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="dropdown">
                    <label htmlFor="subtipo_afectacion">Sub-tipo de afectación:</label>
                    <select style={selectStyle} name="subtipo_afectacion" title="Sub-tipo de afectación" onChange={handleChange}>
                        <option value="">--Elegir--</option>
                        {/* Renderizar opciones basadas en datos de la picklist */}
                        {picklists.subtipo_afectacion && picklists.subtipo_afectacion.picklistValues.map(option => (
                            <option key={option.apiName} value={option.apiName}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="dropdown">
                    <label htmlFor="ubicacion_mmto">Ubicación del mantenimiento:</label>
                    <select style={selectStyle} name="ubicacion_mmto" title="Ubicación del mantenimiento" onChange={handleChange}>
                        <option value="">--Elegir--</option>
                        {/* Renderizar opciones basadas en datos de la picklist */}
                        {picklists.ubicacion_mmto && picklists.ubicacion_mmto.picklistValues.map(option => (
                            <option key={option.apiName} value={option.apiName}>{option.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-field">
                    <label htmlFor="asunto">Asunto:</label>
                    <input style={inputStyle} type="text" name="asunto" onChange={handleChange} />
                </div>

                <div className="rating-field">
                    <label htmlFor="calificacion">Evalúe nuestro servicio (0 a 5):</label>
                    <input style={inputStyle} type="number" name="calificacion" min="0" max="5" onChange={handleChange} />
                </div>

                <div className="textarea-field">
                    <label htmlFor="comentario">Comentario:</label>
                    <textarea style={inputStyle} name="comentario" rows="4" onChange={handleChange}></textarea>
                </div>

                <button style={buttonStyle} disabled={isSubmitting} type="submit">{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
}

export default MantenimientoForm;