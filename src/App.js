/*import './App.css';*/
import React from 'react';
import {
  Route,
  Routes,
  Link
} from 'react-router-dom'
import SingIn from './componentes/singin';
import Login from './componentes/login';
import Register from './componentes/register';  
import Profile from './componentes/profile';
import Documents from './componentes/documents';
import Property from './componentes/property';
import { useEffect } from 'react';




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
                {theme: "outline", size: "large" }
    
            )
        }, []);

  
  return (
    <div className="App">
      <Routes>
        <Route path='/singIn' element={<SingIn />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/profile' element={<Profile />} ></Route>
      </Routes>
    </div>
  );
}

export default App;