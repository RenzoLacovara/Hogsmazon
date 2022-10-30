import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex justify-center items-center gap-4 mx-4 text-xl">
      <NavLink to="/Tiendas" className="hover:text-detalle">
        Tiendas
      </NavLink>
      <NavLink to="/Productos" className="hover:text-detalle">
        Productos
      </NavLink>
      <NavLink to="Productos/Ofertas" className="hover:text-detalle">
        Ofertas
      </NavLink>
    </div>
  );
};

export default NavLinks;
