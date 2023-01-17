/*import './App.css';*/
import React from 'react';
import {
  Route,  
  Routes,
  BrowserRouter  

} from 'react-router-dom';
import SingIn from './componentes/pages/Singin';
import Login from './componentes/pages/Login';
import Register from './componentes/pages/Register';
import Home from './componentes/pages/Home';
import Password from './componentes/pages/Password';
import Error404 from './componentes/pages/Error404';
import Profile from './componentes/homecomponents/Profile';
import Documents from './componentes/homecomponents/Documents';
import Property from './componentes/homecomponents/Property';
import Calendar from './componentes/homecomponents/Calendar';
import Offer from './componentes/homecomponents/Offer';
/*import { useEffect } from 'react';*/
/*import { AuthContextProvider } from './autenticacion/auth';*/
/*import {Ingreso, Contraseña, Inicio, Perfil } from './clientauthentication/Paths';
import PublicRoute  from './componentes/route/PublicRoute';
import PrivateRoute from './componentes/route/PrivateRoute';*/
/*import login from './componentes/login';*/




function App() {

  /*function handleCallbackResponse(response) {
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
  }, []);*/


  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login />} ></Route>
        <Route path='/singIn' element={<SingIn />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/password' element={<Password />} ></Route>       
     
        <Route path='/home'element={<Home />} ></Route>
        <Route path='/profile' element={<Profile />} ></Route>
        <Route path='/documents' element={<Documents />} ></Route>
        <Route path='/property' element={<Property />} ></Route>
        <Route path='/calendar' element={<Calendar />} ></Route>
        <Route path='/offer' element={<Offer />} ></Route>
     
      <Route path='/error404' element={<Error404 />} ></Route>
      </Routes>

</BrowserRouter>
  );
}

export default App;