import React from "react";
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import "./scss/estilos.scss";

function App() {
  return (
    <>
      <Navbar nombre="Mi-Aplicacion-React" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
