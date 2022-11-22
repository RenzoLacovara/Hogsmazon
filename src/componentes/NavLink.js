import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex w-full justify-end items-center gap-4 mx-4 text-xl">
      <NavLink to="/Tiendas" className="hover:text-detalle">
        Shops
      </NavLink>
      <NavLink to="/Productos" className="hover:text-detalle">
        Products
      </NavLink>
      <NavLink to="Productos/Ofertas" className="hover:text-detalle">
        On Sale
      </NavLink>
    </div>
  );
};

export default NavLinks;
