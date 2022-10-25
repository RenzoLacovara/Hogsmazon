import React from "react";
import CartWidget from "./CartWidget";

function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  return (
    <header className="bg-secundario h-28 w-full p-3 flex grow-0">
      <nav className="h-full w-full flex justify-between">
        <div className="h-full w-full flex items-center gap-5">
          <h1 className="text-2xl">
            Bienvenido a <span className="font-font1 font-semibold">{nombre1}</span>
            <span className="font-font2 font-bold">{nombre2}</span>
          </h1>
          <img className="h-10 w-10" src="castle1.png" alt="logo" />
        </div>
        <CartWidget valor="5" />
      </nav>
    </header>
  );
}

export default Header;
