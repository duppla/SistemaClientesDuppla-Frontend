import './App.css';
import React from 'react';
import Profile from './componentes/profile';
import Documents from './componentes/documents';
import Property from './componentes/';

function App() {
  return (
    <div className="App">
      <header>
        <Profile/>
      </header>
      <div className='row'>
        <Documents/>
      </div>
      <div className='row'>
        <Property />
      </div>
      
    </div>
  );
}

export default App;