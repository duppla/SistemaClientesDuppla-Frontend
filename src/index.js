import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from 'react-router-dom';

import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
/*import { GoogleOAuthProvider } from '@react-oauth/google';*/

import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <App />
  </BrowserRouter>




);

/*    <GoogleOAuthProvider clientId="<459885345096-6i3s9tbafo45gb41nscs6gm490dnht8n.apps.googleusercontent.com>"><App/></GoogleOAuthProvider>;
*/
// If you want to start measuring performance in your app, pass a function
// to log results ( example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

