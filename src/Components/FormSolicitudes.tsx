// InconformidadForm.js
import React, { CSSProperties, useEffect, useState } from 'react';
import PicklistService from '../services/PickListsService';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { PickList } from '../models/picklist';
import { Tipo } from '../models/case';




function SolicitudesForm() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        tipo_solicitud: '',       
        asunto: '',
        comentario: '',
        tipo: 'Solicitud',
        calificacion: 5,
        picklist_solicitud: {
            label:          '',
            dependsOn:      '',
            apiName:        '',
            picklistValues: [],
        } as PickList,
        email: ''
   
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    
  

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setIsSubmitting(true); // Establecer isSubmitting en true mientras se envía el formulario
        

        try {
            const body = {
                email: formData.email,
                tipo: Tipo.PETICIONES_Y_RECLAMOS,
                asunto: formData.asunto,
                comentario: formData.comentario,
                tipo_solicitud: formData.tipo_solicitud,
                calificacion: formData.calificacion,

                tipo_afectacion: 'None',
                subtipo_afectacion: 'None',
                ubicacion_mmto: 'None',

                servicio_inconformidad: 'None',
                tipo_inconformidad: 'None',

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
                let picklistServicioSolicitudes : PickList | undefined;
                for (let picklist of picklists) {
                    if (picklist.apiName === 'Tipo_requerimiento__c') {
                        picklist.picklistValues = picklist.picklistValues.filter((value) => value.validForapiName === 'Peticiones y reclamos');
                        picklistServicioSolicitudes = picklist;
                    }
                }
                if (picklistServicioSolicitudes) {
                    setFormData({
                        ...formData,
                        picklist_solicitud: picklistServicioSolicitudes,
                    });
                }
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
                <h2 style={h2Style}>Solicitudes</h2>
            </div>
            <form style={formStyle} onSubmit={handleSubmit} id="modern-form">
                <div className="dropdown">
                    <label htmlFor="afectacion">¿Qué tipo de solicitud desea realizar?:</label>
                    <select style={selectStyle} id="00NRb000001ZLCH" name="servicio_inconformidad" onChange={handleChange} title="Problemas con:">
                        <option value="">--Elegir--</option>
                        {formData.picklist_solicitud.picklistValues.map((value) => (
                            <option key={value.apiName} value={value.apiName}>{value.label}</option>
                        ))}
                    </select>
                </div>

                <div className="input-field">
                    <label htmlFor="short-text">Asunto:</label>
                    <input style={inputStyle} type="text" id="asunto" name="asunto" onChange={handleChange} />
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

export default SolicitudesForm;
