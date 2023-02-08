import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";



// creación de contexto global para auth-memoria central
export const ProgressContext = createContext({});

export const ProgressProvider = ({ children }) => {
   
    const navigate = useNavigate();

    const [progress, setProgress] = useState(false);

      // GET request using fetch inside useEffect React hook
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: '{"id":"1"}'
      };
      
      fetch('https://sistemas-clientes-duppla.herokuapp.com/ofertas/accept', options)
        .then(response => response)
        .then(response => setProgress(response))
        .catch(err => console.error(err));
  
      // empty dependency array means this effect will only run once (like componentDidMount in classes)
  
  
      const handleProgress= () => {
      
         setProgress(true);
         alert('Su oferta fue aceptada');       
          
          //console.log(setProgress);
         }
  

  

//ejemplo de operador ternario condicion ? true : false


    return (
        <ProgressContext.Provider
            value={{  }}>
            {children}
        </ProgressContext.Provider>
    )

}
