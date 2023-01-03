import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index.js';
import './index.css';



function App(props) {
  return (
    <h1>{props.saludo} ,{props.nombre}!</h1>
  );
}

function whitsaludo(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        < React.Fragment >
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </React.Fragment >

      );
    }
  };

}

const AppWhitsaludo = whitsaludo(App)('Buenitas');

ReactDOM.render(
  <AppWhitsaludo nombre="juanito" />,
  //<App saludo="Buenas" nombre="juanito" />,
  //<App />,
  document.getElementById('root')
);
