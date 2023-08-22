import React from 'react'

export default function Error404() {
  return (
    <div>Error404


      <div class="hipoteca-result">
        <div class="grafica hip">
          <div id="costoFinancieroHip" class="costoFinanciero normal-hip"></div>
          <div id="aporteCapitalHip" class="aporteCapital azul-hip"></div>
          <div id="gastosHip" class="gastos verde-hip"></div>
        </div>
        <div class="grafica-labels hip">
          <div class="fila">
            <div class="grafica-label-wrapper-text">
              <div class="dot normal-hip"></div>
              <p>Costo financiero</p>
            </div>
            <p><span id="costoFinancieroHipValue"></span></p>
          </div>

          <div class="fila">
            <div class="grafica-label-wrapper-text">
              <div class="dot azul-hip"></div>
              <p>Gastos</p>
            </div>
            <p><span id="gastosHipValue"></span></p>
          </div>
          <div class="fila">
            <div class="grafica-label-wrapper-text">
              <div class="dot verde-hip"></div>
              <p>Aporte a capital (obligatorio)</p>
            </div>
            <p><span id="aporteACapitalHipValue"></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
