// InconformidadForm.js
import React, { CSSProperties, useEffect, useState } from 'react';
import PicklistService from '../services/PickListsService';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { PickList } from '../models/picklist';
import { Tipo } from '../models/case';




function InconformidadForm() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        servicio_inconformidad: '',
        tipo_inconformidad: '',       
        asunto: '',
        calificacion: 5,
        comentario: '',
        tipo: 'Inconformidad con servicio prestado',
        picklist_servicio_inconformidad: {
            label:          '',
            dependsOn:      '',
            apiName:        '',
            picklistValues: [],
        } as PickList,
        picklist_tipo_inconformidad: {
            label:          '',
            dependsOn:      '',
            apiName:        '',
            picklistValues: [],
        } as PickList,
        email: ''
   
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        
        // Cambiar el nombre del campo 'rating' a 'calificacion'
        const updatedName = name === 'rating' ? 'calificacion' : name;
        const updatedFormData = { ...formData, [updatedName]: value };
        setFormData(updatedFormData);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    
  

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setIsSubmitting(true); // Establecer isSubmitting en true mientras se envía el formulario
        

        try {
            const body = {
                email: formData.email,
                tipo: Tipo.INCONFORMIDAD_CON_SERVICIO_PRESTADO,
                asunto: formData.asunto,
                comentario: formData.comentario,
                calificacion: formData.calificacion,
                servicio_inconformidad: formData.servicio_inconformidad,
                tipo_inconformidad: formData.tipo_inconformidad,
                
                tipo_afectacion: 'None',
                subtipo_afectacion: 'None',
                ubicacion_mmto: 'None',
                
                tipo_solicitud: 'None'

            }
            const response = await PicklistService.getInstance().createCase(body);

            if (response) {
                // Éxito: mostrar una alerta de éxito y redirigir al usuario al home de la app
                swal({
                    text: "¡El formulario se envió con éxito!",
                    icon: "success",
                    buttons: ["Cerrar"], // Fix: Change 'button' to 'buttons'
                    timer: 4000,
                });

                navigate('/inicio'); // Redireccionar al home de la app
            } else {
               
                swal({
                    text: "¡Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.!",
                    icon: "info",
                    buttons: ["Cerrar"],
                    timer: 4000,
                });
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error); 
            swal({
                text: "¡Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.!",
                icon: "info",
                buttons: ["Cerrar"],
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
                //for picklist in picklists
                let picklistServicioInconformidad : PickList | undefined;
                let picklistTipoInconformidad : PickList | undefined;
                for (let picklist of picklists) {
                    if (picklist.apiName === 'Tipo_requerimiento__c') {
                        picklist.picklistValues = picklist.picklistValues.filter((value) => value.validForapiName === 'Inconformidad con servicio prestado');
                        picklistServicioInconformidad = picklist;
                    }
                    if (picklist.apiName === 'subtipo_afectacion__c') {
                        picklist.picklistValues = picklist.picklistValues.filter((value) => value.validForapiName === 'Inconformidad con servicio prestado');
                        picklistTipoInconformidad = picklist;
                    }
                }
                if (picklistServicioInconformidad && picklistTipoInconformidad) {
                    setFormData({
                        ...formData,
                        picklist_servicio_inconformidad: picklistServicioInconformidad,
                        picklist_tipo_inconformidad: picklistTipoInconformidad,
                    });
                }
                restrictRatingInput();
            } catch (error) {
                console.error('Error fetching picklists or initializing form:', error);
            }
        }
        console.log('fetchPicklists');
        //get email from local storage
        const emailLocalStorage = localStorage.getItem('email');
        if (emailLocalStorage){
            emailLocalStorage.replace(/"/g, '');
            setFormData({
                ...formData,
                email: emailLocalStorage,
            });
        }

        fetchPicklists();
    }, []);

    function restrictRatingInput() {
        let ratingInput = document.getElementById('rating') as HTMLInputElement;
        ratingInput.addEventListener('input', function () {
            let value = Number(ratingInput.value); // Convert value to a number
            if (value !== null && (value < 0 || value > 5)) {
                ratingInput.value = '';
            }
        });
    }

    const formStyle : CSSProperties = {
        maxWidth: '400px',
        margin: 'auto',
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    };

    const inputStyle : CSSProperties = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    const selectStyle : CSSProperties = {
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        boxSizing: 'border-box',
    };

    const buttonStyle : CSSProperties = {
        width: '100%',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#5782F2',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const h2Style : CSSProperties = {
        color: '#5782F2',
        textAlign: 'center',
        marginBottom: '20px',
    };

    return (
        <div>
            <div className='centrado'>
                <h2 style={h2Style}>Inconformidad con el Servicio Prestado</h2>
            </div>
            <form style={formStyle} onSubmit={handleSubmit} id="modern-form">
                <div className="dropdown">
                    <label htmlFor="afectacion">Servicio con el que se encuentra inconforme:</label>
                    <select style={selectStyle} id="00NRb000001ZLCH" name="servicio_inconformidad" onChange={handleChange} title="Problemas con:">
                        <option value="">--Elegir--</option>
                        {formData.picklist_servicio_inconformidad.picklistValues.map((value) => (
                            <option key={value.apiName} value={value.apiName}>{value.label}</option>
                        ))}
                    </select>
                </div>

                <div className="dropdown">
                    <label htmlFor="dropdown2">¿Con qué se encuentra inconforme?</label>
                    <select style={selectStyle} id="00N8V00000IUPiy" name="tipo_inconformidad" onChange={handleChange} title="subtipo_afectacion">
                        <option value="">--Elegir--</option>
                        {formData.picklist_tipo_inconformidad.picklistValues.map((value) => (
                            <option key={value.apiName} value={value.apiName}>{value.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-field">
                    <label htmlFor="short-text">Asunto:</label>
                    <input style={inputStyle} type="text" id="asunto" name="asunto" onChange={handleChange} />
                </div>

                <div className="rating-field">
                    <label htmlFor="rating">Evalúe nuestro servicio (0 a 5):</label>
                    <input style={inputStyle} type="number" id="rating" name="rating" min="0" max="5" onChange={handleChange} />
                </div>

                <div className="textarea-field">
                    <label htmlFor="comment">Comentario:</label>
                    <textarea style={inputStyle} id="comment" name="comentario" rows={4} onChange={handleChange}></textarea>
                </div>

                <button style={buttonStyle} type="submit">{isSubmitting ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
}

export default InconformidadForm;
