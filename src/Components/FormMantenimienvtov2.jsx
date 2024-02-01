// InconformidadForm.js
import React, { useEffect } from 'react';



function MantenimientoForm() {
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
            <form style={formStyle} action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8&orgId=00D8V000000iJuG" method="POST" id="modern-form">

                <div class="dropdown">
                    <label for="afectacion">Tipo de Afectación:</label>
                    <select style={selectStyle} id="00N8V00000IUPiP" name="00N8V00000IUPiP" title="tipo_afectacion"><option value="">--Elegir--</option>
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
                    <select style={selectStyle} id="00N8V00000IUPiy" name="00N8V00000IUPiy" title="subtipo_afectacion"><option value="">--Elegir--</option>
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
                    <select style={selectStyle} id="00N8V00000IUPj3" name="00N8V00000IUPj3" title="ubicacion_mmto"><option value="">--Elegir--</option>
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
                    <input style={inputStyle} type="text" id="00N8V00000IUPj8" name="00N8V00000IUPj8" />
                </div>

                <div class="rating-field">
                    <label for="rating">Evalúe nuestro servicio (0 a 5):</label>
                    <input style={inputStyle} type="number" id="rating" name="rating" min="0" max="5" oninput="this.value=this.value.slice(0,1)" />
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

export default MantenimientoForm;
