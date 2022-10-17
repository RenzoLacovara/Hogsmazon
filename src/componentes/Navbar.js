import React from "react";
import CartWidget from "./CartWidget";
import Redes from "./Redes";
function Header(prop) {
  let nombrePagina = prop.nombre;
  return (
    <header>
      <nav className="navbar">
        <div>
          <h1>Bienvenido a {nombrePagina}</h1>
        </div>
        <Redes />
        <CartWidget valor="5" />
      </nav>
    </header>
  );
}

export default Header;
