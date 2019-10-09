import React from 'react'; // necessario incluir react mesmo que nao use
import './App.css'; // incluindo css

import logo from './assets/logo.svg'

import Routes from './routes'

// componentizacao
// componente é uma funcao
// retornando um html
function App() {

  return (
    <div className="container">
      <img src={logo} alt="AirCnC" />

      <div className="content">
        <Routes />
        
      </div>
    </div>
  );
}

export default App;
