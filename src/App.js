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
import ContextProvider from '././clientauthentication/contextuser'
import useAuth from './hooks/useAuth';

const Private = ({Item}) => {

const {signed} = useAuth();
 return signed > 0 ?<Item/>: <Register/>;
 
};

function App() {
  
  /*const [isLogged, setIsLogged] = useState (false);*/
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

    
    
      <Routes>
       <Route path='/' element={<Login />} ></Route>
        <Route path='/singIn' element={<SingIn />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/password' element={<Password />} ></Route>       
     
        <Route exact path='/home'element={<Private Item = {Home} />} ></Route>
        <Route exact path='/profile' element={< Private Item ={Profile} />} ></Route>
        <Route exact path='/documents' element={<Private Item = {Documents} />} ></Route>
        <Route exact path='/property' element={<Private Item = {Property} />} ></Route>
        <Route exact path='/calendar' element={<Private Item = {Calendar} />} ></Route>
        <Route exact path='/offer' element={<Private Item = {Offer} />} ></Route>
     
      <Route path='/error404' element={<Error404 />} ></Route>
      </Routes>


  );
}

export default App;