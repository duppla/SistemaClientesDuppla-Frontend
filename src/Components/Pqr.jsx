// InconformidadForm.js
import React, { useEffect } from 'react';



function SolitudForm() {



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
            <form style={formStyle} action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D8V000000iJuG" method="POST" id="modern-form">

             
                <div class="dropdown">
                    <label for="afectacion">¿Qué tipo de solicitud desea realizar?:</label>
                    <select style={selectStyle} id="00NRb000001ZLCH" name="00NRb000001ZLCH" title="Problemas con:">
                        <option value="Administraciones">Administraciones</option>
                        <option value="Servicios Públicos">Servicios Públicos</option>
                        <option value="Canon">Canon</option>
                        <option value="Estado de cuenta">Estado de cuenta</option>
                        <option value="Terminación contrato y Prorrogas">Terminación contrato y Prórrogas</option>
                    </select>
                </div>

                <div class="input-field">
                    <label for="short-text">Asunto:</label>
                    <input style={inputStyle} type="text" id="00N8V00000IUPj8" name="00N8V00000IUPj8" />
                </div>


                <div class="textarea-field">
                    <label for="comment">Comentario:</label>
                    <textarea style={inputStyle} id="comment" name="comment" rows="4"></textarea>
                </div>

                <button style={buttonStyle} type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default SolitudForm;
