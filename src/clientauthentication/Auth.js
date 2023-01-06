import { createContext, useMemo, useState, useCallback, useContext } from "react";
import {PropTypes } from "prop-types";


/*la constante guarda la contraseña del localstore, para recuperar datos*/
const MY_AUTH_APP = "MY_AUTH_APP";
/*esta función contiene tod el contexto y requiere envover la app para la autenticación*/
export const AuthContext = createContext();

/*identifica si el usuario se logeo o no, implementa la lógica*/
export function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem() ?? false);
    /* En esta función validamos el ingreso y se conecta a la api, actualizar porque solo un ejemplo*/
    // eslint-disable-next-line no-undef
    const login = useCallback(function () {
        localStorage.setItem(MY_AUTH_APP, true);
        setIsAuthenticated(true);
    }, []);
    /*Salida*/
    // eslint-disable-next-line no-undef
    const logout = useCallback(function () {
        localStorage.removeItem(MY_AUTH_APP);
        setIsAuthenticated(false);
    }, []);
/*es un objeto y no se renderisa cada vez que carga la app*/
 const value = useMemo(
    () => ({
        login,
        logout,
        isAuthenticated
    }),
    [login, logout, isAuthenticated]

 );

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>



};


AuthContextProvider.propTypes ={
    children: PropTypes.object
};

/*Ruta publica*/

export function useAuthContext() {
    return useContext(AuthContext);
    
}