import React from 'react'
import './../custumer/Form.css'
import { Link } from 'react-router-dom'

const FormMentenimiento = () => {
  return (
    <div className=' '>
      <div class="profile-form ">
        <button class="back-button">
          <Link to='/inicio'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"></path>
            </svg>
          </Link>
        </button>

      </div>
      <div className="container no-alinear-centro   ">
        <form className=''>
          <div className="container-form-centrado-mantenimiento ">
            <h3 className="seccion-titulo custom-h3 centrado">Generar solicitud de reparación / mantenimiento</h3>
          </div>
          {/*}Sección A */}

          <h4 className="seccion-titulo custom-h4 container-form-centrado-mantenimiento">Información del inmueble</h4>
          <div className="card container-form-centrado-mantenimiento">
            <div className="card-body-form">
              <div className="form-group">
                <label for="textField">Correo / Cédula Registrado:</label>
                <input type="text" className="form-control" id="textField" />
              </div>
              <div className="form-group">
                <label for="dropdown1">Inmueble:</label>
                <select className="form-control" id="dropdown1">
                  <option value="casa">Casa</option>
                  <option value="apartamento">Apartamento</option>
                </select>
              </div>
            </div>
          </div>

          {/* Sección B */}
          <h4 className="seccion-titulo custom-h4 container-form-centrado-mantenimiento">Información de la afectación</h4>
          <div className="card container-form-centrado-mantenimiento">
            <div className="card-body-form-two">
              {/** Dropdown 1 */}
              <div className="form-group">
                <label for="dropdownReclamacion">Tipo de Reclamación / Garantía:</label>
                {/** Continue the pattern for the other 4 dropdowns */}
                <select className="form-control" id="tipoReclamacion">
                  <option value="mantenimientoReparacion">Mantenimiento/Reparación</option>
                  <option value="administraciones">Administraciones</option>
                  <option value="cuponClavePSE">Cupón o Clave PSE</option>
                  <option value="entregaInmueble">Entrega del Inmueble</option>
                  <option value="estadoCuentaPropietarios">Estado de Cuenta Propietarios</option>
                  <option value="negociacionCanon">Negociación Canon</option>
                  <option value="reclamaciones">Reclamaciones</option>
                  <option value="semilleroPropietarios">Semillero de Propietarios</option>
                  <option value="serviciosPublicos">Servicios Públicos</option>
                  <option value="terminacionesProrrogas">Terminaciones o Prórrogas</option>
                </select>
              </div>
              {/** Dropdown 2 */}
              <div className="form-group">
                <label for="tipoAfectacion">Tipo de Afectación:</label>
                <select className="form-control" id="tipoAfectacion">
                  <option value="electricidad">Electricidad</option>
                  <option value="plomeria">Plomería</option>
                  <option value="climatizacion">Calefacción/Ventilación/Aire Acondicionado</option>
                  <option value="electrodomesticos">Electrodomésticos</option>
                  <option value="pintura">Pintura/Reparaciones en Paredes</option>
                  <option value="mobiliario">Mobiliario</option>
                  <option value="seguridad">Seguridad/Cerraduras</option>
                  <option value="iluminacion">Iluminación</option>
                  <option value="suelos">Suelos/Revestimientos</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              {/* Dropdown 3 */}
              <div className="form-group">
                <label for="subtipoAfectacion">Subtipo de Afectación:</label>
                <select className="form-control" id="subtipoAfectacion">
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
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label for="ubicacionMantenimiento">Ubicación del Mantenimiento:</label>
                <select className="form-control" id="ubicacionMantenimiento">
                  <option value="salaEstar">Sala de estar</option>
                  <option value="dormitorioPrincipal">Dormitorio principal</option>
                  <option value="dormitorioSecundario">Dormitorio secundario</option>
                  <option value="cocina">Cocina</option>
                  <option value="banoPrincipal">Baño principal</option>
                  <option value="banoSecundario">Baño secundario</option>
                  <option value="comedor">Comedor</option>
                  <option value="balconTerraza">Balcón/Terraza</option>
                  <option value="areaLavanderia">Área de lavandería</option>
                  <option value="pasillos">Pasillos</option>
                  <option value="areaAlmacenamiento">Área de almacenamiento</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              {/* Text input asunto solicitud */}
              <div class="form-group">
                <label for="textField2">Asunto</label>
                <input type="text" class="form-control" id="asuntoSolicitud" />
              </div>
              {/*Image upload field */}
              <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Adjuntar imágenes</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple />
              </div>
              <div class="form-floating">
                <label for="floatingTextarea2">Actividades solicitadas</label>
                <textarea class="form-control" placeholder="Escribe aquí tu petición" id="floatingTextarea2"
                ></textarea>
              </div>
              {/* Checkbox */}
              <div class="form-check custom-checkbox">
                <input class="form-check-input custom-control-input" type="checkbox" id="checkbox" />
                <label class="form-check-label custom-control-label" for="checkbox">Enviar copia de esta solucitud a mi
                  e-mail.</label>
              </div>
            </div>
          </div>
        </form>
        {/* Confirmation Button */}
        <div class="text-center"> {/* Add this div */}
          <button type="submit" class="btn btn-primary mt-3">Enviar solicitud</button>
        </div>
      </div>
    </div>
  )
}

export default FormMentenimiento