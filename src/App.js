/*import './App.css';*/
import React, { useContext } from 'react';
import {
  Route,
  Routes,
  Navigate

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
import Offer from './componentes/homecomponents/Offer';
import Pagos from './Components/Pagos';
import Form from './Components/FormMentenimiento';
import Pagospaloma from './Components/Payment';

import Inicio from './custumer/Inicio';
/* import Payment from './custumer/Payment'; */
import History from './custumer/History';
import Goal from './custumer/Goal';
import { AuthContext } from './context/Contextauth';
import { AuthProvider } from './context/Contextauth';
import Annual from './custumer/Annual';
import Notification from './custumer/Notification';





function App() {
  //  el children viene de context
  const Private = ({ children }) => {

    const { authenticated, loanding } = useContext(AuthContext);

    // valida que este en localsotore- si no esta logueado se redirecciona a login

    if (loanding) {
      return <div>cargando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  }

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/singIn' element={<SingIn />} ></Route>
       {/*  <Route path='/register' element={<Login />} ></Route> */}
        <Route path='/login' element={<Register />} ></Route>
        <Route path='/password' element={<Password />} ></Route>


        <Route exact path='/home' element={<Private><Home /></Private>} ></Route>
        <Route exact path='/profile' element={<Private>< Profile /></Private>} ></Route>
        <Route exact path='/documents' element={<Private><Documents /></Private>} ></Route>
        <Route exact path='/property' element={<Private><Property /></Private>} ></Route>
        <Route exact path='/offer' element={<Private><Offer /></Private>} ></Route>

          <Route exact path='/inicio' element={<Private><Inicio /></Private>} ></Route>
         {/*  <Route exact path='/pagos' element={<Private><Payment /></Private>} ></Route> */}
          <Route exact path='/historial' element={<Private><History /></Private>} ></Route>
          <Route exact path='/Ajustemeta' element={<Private><Goal /></Private>} ></Route>
          <Route exact path='/Consolidado' element={<Private><Annual /></Private>} ></Route>
          <Route exact path='/Facturacion' element={<Private><Notification /></Private>} ></Route>
          <Route exact path='/pagosHistorial' element={<Private><Pagos /></Private>} ></Route>
          <Route exact path='/formulario' element={<Private><Form /></Private>} ></Route>
          <Route exact path='/pagos' element={<Private><Pagospaloma /></Private>} ></Route>


        <Route path='/error404' element={<Error404 />} ></Route>
      </Routes>
</AuthProvider>
  );
}

export default App;