import React, {useState, createContext, useEffect } from "react";


export const AuthContext = createContext({});

 export const AuthProvider = ({children}) => {
 
  const [signed, setSigned] = useState(false);



useEffect(() =>{

    const userToken = localStorage.getItem('tokenUser');

    if (userToken) {
       console.log( 'prueba userToken');
        setSigned(true);
                    
    }else{
       console.log('Prueba');     
    }

    return;
    
});


const singout = () => {
    setSigned(null);    
    localStorage.removeItem('tokenUser');
};


    return <AuthContext.Provider value ={{ signed: !! singout }}>{children}</AuthContext.Provider>
    
 };

 


