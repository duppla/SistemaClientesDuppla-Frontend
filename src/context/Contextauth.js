import React, { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";




// creación de contexto global para auth-memoria central
export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [token, setToken] = useState(null);

    const [loanding, setLoanding] = useState(true);


    useEffect(() => {
        const recovereToken = localStorage.getItem("token");

        if (recovereToken) {
            setToken(JSON.parse(recovereToken));

        }


        setLoanding(false);


    }, []);


    const login = (tokenUser) => {

        localStorage.setItem('token', JSON.stringify(tokenUser));


        if (tokenUser) {
            console.log('ver si entra el', tokenUser);
            setToken({ token: tokenUser });
            console.log(token);
            navigate('/home')
        } else {
            navigate('/register')
        }
    };
    const logout = () => {
        console.log('logout');
        localStorage.removeItem('token');
        setToken(null);
        navigate('/register');
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!token, token, loanding, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
