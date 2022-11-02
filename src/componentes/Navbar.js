import React from "react";
import NavLink from "./NavLink";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function Header(prop) {
  let nombre1 = prop.nombre1;
  let nombre2 = prop.nombre2;
  return (
    <header className="bg-secundario h-28 w-full flex">
      <nav className="h-full w-full flex justify-between p-3">
        <div className="h-full w-full flex items-center ">
          <Link to="/" className="mx-4 text-2xl pt-2">
            <span className="font-font1 font-semibold">{nombre1}</span>
            <span className="font-font2 font-bold">{nombre2}</span>
          </Link>
          <img
            src="../logo1.png"
            alt="logo"
            className="h-8 w-8 filter drop-shadow-xl"
          />
        </div>
        <NavLink />
        <CartWidget valor="5" />
      </nav>
    </header>
  );
}

export default Header;
