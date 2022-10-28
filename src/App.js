import React from "react";
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar nombre1="Hogs" nombre2="mazon" />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
