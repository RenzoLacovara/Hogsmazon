import React from "react";
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import "./scss/estilos.scss";

function App() {
  return (
    <>
      <Navbar nombre="Hogsmazon" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
