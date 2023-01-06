/*import './App.css';*/
import React from 'react';
import {
  Route,
  Routes 
} from 'react-router-dom';
import SingIn from './componentes/Singin';
import Login from './componentes/Login';
import Register from './componentes/Register';
import Password from './componentes/Password';
import Home from './componentes/Home';
import Profile from './componentes/homecomponents/profile';
import { useEffect } from 'react';
/*import { AuthContextProvider } from './autenticacion/auth';*/
import {Ingreso, Contraseña, Inicio, Perfil } from './clientauthentication/Paths';
import PublicRoute  from './componentes/route/PublicRoute';
import PrivateRoute from './componentes/route/PrivateRoute';
/*import login from './componentes/login';*/




function App() {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      cliente_id: "459885345096-6i3s9tbafo45gb41nscs6gm490dnht8n.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById("btnInicioGoogle"),
      { theme: "outline", size: "large" }

    )
  }, []);


  return (

      <Routes>
        <Route path='/' element={<PublicRoute/>}>
        <Route path='/singIn' element={<SingIn />} ></Route>
        <Route path={Ingreso} element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path={Contraseña} element={<Password />} ></Route>
        </Route>
        <Route path={Inicio} element={<PrivateRoute/>}>
        <Route path={Inicio}element={<Home />} ></Route>
        <Route path={Perfil} element={<Profile />} ></Route>
        </Route>
      </Routes>


  );
}

export default App;