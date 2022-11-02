import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, tienda, id }) => {
  return (
    <article className="w-64 rounded-2xl shadow-lg h-96 flex flex-col items-center justify-between">
      <div className="text-center">
        <h1>{nombre}</h1>
        <h3>${precio}</h3>
        <img
          className="rounded-lg h-60 w-56  object-cover "
          src={imagen}
          alt={nombre}
        />
        <h4 className="text-sm">by {tienda.nombre}</h4>
      </div>

      <Link
        to={"/Item/"+id}
        className="bg-secundario rounded-md px-2 py-1 my-4 hover:bg-detalle hover:text-princ"
      >
        Ver mas
      </Link>
    </article>
  );
};

export default Item;
