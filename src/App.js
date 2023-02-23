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
import Logout from './componentes/pages/Logout';
import Inicio from './custumer/Inicio';
import Payment from './custumer/Payment';
import { AuthContext } from './context/Contextauth';
import { AuthProvider } from './context/Contextauth';




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
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} ></Route>
        <Route path='/singIn' element={<SingIn />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/password' element={<Password />} ></Route>
        <Route path='/logout' element={<Logout />} ></Route>

        <Route exact path='/home' element={<Private><Home /></Private>} ></Route>
        <Route exact path='/profile' element={<Private>< Profile /></Private>} ></Route>
        <Route exact path='/documents' element={<Private><Documents /></Private>} ></Route>
        <Route exact path='/property' element={<Private><Property /></Private>} ></Route>
        <Route exact path='/offer' element={<Private><Offer /></Private>} ></Route>
        <Route exact path='/inicio' element={<Private><Inicio /></Private>} ></Route>
        <Route exact path='/pagos' element={<Private><Payment /></Private>} ></Route>


        <Route path='/error404' element={<Error404 />} ></Route>
      </Routes>


    </AuthProvider>


  );
}

export default App;