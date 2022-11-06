import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, tienda, id, oferta, ofertaValor }) => {
  return (
    <div>
      {oferta === "si" ? (
        <article className="my-8 w-64 rounded-2xl shadow-lg h-96 flex flex-col items-center justify-between">
          <div className="text-center">
            <h1>{nombre}</h1>
            <h4 className="inline line-through text-sm">${precio}</h4>
            <h3 className="inline text-detalle font-bold"> ${ofertaValor}</h3>
            <div>
              <img
                className="rounded-lg h-60 w-56 object-contain bg-mapa"
                src={imagen}
                alt={nombre}
              />
            </div>
            <h4 className="text-sm">by {tienda.nombre}</h4>
          </div>

          <Link
            to={"/Item/" + id}
            className="bg-secundario rounded-md px-2 py-1 my-4 hover:bg-detalle hover:text-princ"
          >
            Ver mas
          </Link>
        </article>
      ) : (
        <article className="w-64 rounded-2xl shadow-lg h-96 flex flex-col items-center justify-between">
          <div className="text-center">
            <h1>{nombre}</h1>
            <h3 className="text-detalle font-bold">${precio}</h3>
            <img
              className="rounded-lg h-60 w-56  object-contain bg-mapa"
              src={imagen}
              alt={nombre}
            />
            <h4 className="text-sm">by {tienda.nombre}</h4>
          </div>

          <Link
            to={"/Item/" + id}
            className="bg-secundario rounded-md px-2 py-1 my-4 hover:bg-detalle hover:text-princ"
          >
            Ver mas
          </Link>
        </article>
      )}
    </div>
  );
};

export default Item;
