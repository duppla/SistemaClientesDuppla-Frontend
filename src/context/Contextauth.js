import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";



// creación de contexto global para auth-memoria central
export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
   
    const navigate = useNavigate();

    const [token, setToken] = useState(null);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const recoveredToken = localStorage.getItem("token");
        if (recoveredToken) {
            // Don't parse the token, just use it as is
            setToken(recoveredToken);
        }
        setLoading(false);

    }, []);

//ejemplo de operador ternario condicion ? true : false
    const login = (tokenUser, email,estado) => {

        if (tokenUser) {
            // Store the token as is, without stringifying
            localStorage.setItem('token', tokenUser);
            localStorage.setItem('email', JSON.stringify(email)); 
            localStorage.setItem('estado', JSON.stringify(estado));      
            

            const options = {
                method: 'POST',
                headers: {
                  Authorization: 'Bearer ' + tokenUser,
                }
              };
              
              fetch(`${process.env.REACT_APP_BACKEND_URL}/users/check`, options)
                .then(response => response.json())
                .then(response => {
                    // Set the token directly without wrapping in an object
                    setToken(tokenUser);
                    
                    //console.log(response);
                    if(tokenUser == "undefined"){
                        navigate('/login');
                        localStorage.removeItem('token');
                    }
                    else if(estado == true){
                        navigate('/inicio')
                    }
                    else{
                        navigate('/home')
                    }        
                })
                .catch(err => {                
                    
                    console.error(err)                
                    navigate('/login')
                });
        } else {
            navigate('/login')
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('estado');
        setToken(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!token, token, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
