import React from "react";
import CartWidget from "./CartWidget";
import Redes from "./Redes";
function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  return (
    <header>
      <nav className="navbar">
        <div>
          <h1>
            Bienvenido a <span className="nombre1">{nombre1}</span>
            <span className="nombre2">{nombre2}</span>
          </h1>
          <img src="castle1.png" alt="logo" />
        </div>

        <Redes />
        <CartWidget valor="5" />
      </nav>
    </header>
  );
}

export default Header;
