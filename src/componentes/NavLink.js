import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
  return (
    <div className="flex justify-center items-center gap-4 mx-4 text-xl">
      <Link to="/Tiendas" className="hover:text-detalle">
        Tiendas
      </Link>
      <Link to="/Productos" className="hover:text-detalle">
        Productos
      </Link>
      <Link to="/Ofertas" className="hover:text-detalle">
        Ofertas
      </Link>
    </div>
  );
};

export default NavLink;
