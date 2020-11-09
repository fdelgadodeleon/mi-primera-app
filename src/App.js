import React from 'react';
import './App.css';

function App() {
  const nombre = "Federica";
  const img = <img src="/img/foto.jpg" alt="atardecer" style={{width: 500, height: 500, textAlign: "center"}}/>

  const main = (
      <div className="main">
          <h1 className="center">Primera aplicación React</h1>
          <h2 className="center">Bienvenida {nombre}</h2>
          {img}
      </div>
  );

  const header = <div className="header"/>;
  const footer = <div className="footer"/>;

  return (
      <div>
          {header}
          {main}
          {footer}
      </div>
 )
}

export default App;
