import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";



// creación de contexto global para auth-memoria central
export const ProgressContext = createContext({});

export const ProgressProvider = ({ children }) => {
   
    const navigate = useNavigate();

    const [progress, setProgress] = useState(null);

    


    useEffect(() => {
        const recovereToken = localStorage.getItem("token");

        if (recovereToken) {
            setToken(JSON.parse(recovereToken));

        }
        setLoanding(false);


    }, []);

//ejemplo de operador ternario condicion ? true : false

    const Progress= () => {
        //console.log('logout');
        localStorage.removeItem('token');
        setToken(null);
        navigate('/register');
    };

    return (
        <AuthContext.Provider
            value={{  }}>
            {children}
        </AuthContext.Provider>
    )

}
