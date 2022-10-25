import React from "react";
import CartWidget from "./CartWidget";

function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  return (
    <header className="bg-secundario h-28 w-full flex">
      <nav className="h-full w-full flex justify-between p-3">
        <div className="h-full w-full flex items-center gap-2">
          <h1 className="text-2xl pt-2">
            Bienvenido a{" "}
            <span className="font-font1 font-semibold">{nombre1}</span>
            <span className="font-font2 font-bold">{nombre2}</span>
          </h1>
          <i class="fa-solid fa-broom-ball text-3xl text-detalle"></i>
        </div>
        <CartWidget valor="5" />
      </nav>
    </header>
  );
}

export default Header;
