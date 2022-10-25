import React from "react";
import Redes from "./Redes";

const Footer = () => {
  return (
    <footer className="flex grow-0 justify-between items-center bg-secundario h-28">
      <div className="flex justify-center items-center px-5">
        <p>Todos los derechos reservados</p>
      </div>
      <Redes />
    </footer>
  );
};

export default Footer;
