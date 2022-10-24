import React from "react";
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import "./scss/estilos.scss";
import "./style.css";

function App() {
  return (
    <>
      <Navbar nombre1="Hogs" nombre2="mazon" />
      <ItemListContainer className="text" nombre="Renzo" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
