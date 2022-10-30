import React from "react";
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar nombre1="Hogs" nombre2="mazon" />
      <Main />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
