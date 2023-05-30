

import React, { useEffect, useState } from 'react'
import numeral from 'numeral';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';




const GrafictHome = () => {

  const [dataGrafict, setDataGrafict] = useState({});
  const [formattedDataCustumer, setFormattedDataCustumer] = useState(null);

  useEffect(() => {

    const email = localStorage.getItem('email');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ "email": ' + email + '}'
    };

    fetch('https://sistema-duppla-backend.herokuapp.com/users/homeCustomer', options)
      .then(response => response.json())
      .then(response => {
        setDataGrafict(response)
        setFormattedDataCustumer(numeral(dataGrafict).format('0,0.00'))
      })

      .catch(err => console.error(err));
  }, []);


  const dataAniversario = dataGrafict.fechaEntrega;
  const meta = dataGrafict.meta;


  //compración de fechas
  const GrafictPie = () => {
    const fecha1 = new Date();
    const fecha2 = new Date(dataGrafict.fechaEntrega);
    const diffYears = 1 + (fecha2.getFullYear() - fecha1.getFullYear()) * -1;
    //console.log(diffYears); // Número de años entre las dos fechas 

    let metaPorcentaje = 30;
    let years = 5;
    let metaAnual = (metaPorcentaje - dataGrafict.participacionInicial) / years;
    let porcentajeActual = dataGrafict.participacionInicial + (metaAnual * diffYears);
    let participacionacumulada = (dataGrafict.participacionInicial / porcentajeActual) * 100;
    let faltanteMeta= porcentajeActual-dataGrafict.participacion;

    console.log('diferencia' + faltanteMeta);
    return faltanteMeta;
  }


  const hazComprado = () => {

    let porcentaje = dataGrafict.participacion - dataGrafict.participacionInicial;

    return porcentaje;
  }
  console.log(dataGrafict.participacionInicial);
  console.log(hazComprado());
  console.log(GrafictPie());


  const dataPrueba = [
    { name: 'Group A', value: dataGrafict.participacionInicial },
    { name: 'Group B', value: hazComprado() },
    { name: 'Group C', value: GrafictPie() },
  ];

  const COLORS = ['#0A3323', '#6C9FFF', '#C5F5CA'];



  //console.log(dataGrafict.participacion);
  //console.log("prueba" + GrafictPie());

  return (

    <PieChart width={360} height={360} >
      <Pie
        data={dataPrueba}
        cx={175}//mueve la grafica de eje x
        cy={120}//mueve la grafica de eje y
        innerRadius={90}// maneja el grosor de la grafica
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={1} //controla el espacio entre los graficos
        dataKey="value" // el valor que muestra

      >
        {dataPrueba.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

    </PieChart>

  )
}


export default GrafictHome;


