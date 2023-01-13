import React from 'react';
import Formulario from './components/Formulario';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Desafío Estado de los componentes y eventos</h1>
      <Formulario titulo="Iniciar sesión"/>
    </div>
  );
}
export default App;
