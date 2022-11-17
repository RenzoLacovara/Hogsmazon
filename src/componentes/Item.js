import React from "react";
import { Link } from "react-router-dom";

const Item = ({ nombre, imagen, precio, tienda, id, oferta, descuento }) => {
  let ofe = precio - precio * descuento;
  return (
    <div>
      <article className="my-8 w-64 rounded-2xl shadow-lg h-96 flex flex-col items-center justify-between">
        <div className="text-center">
          <h1>{nombre}</h1>
          <h4 className="text-sm">by {tienda.nombre}</h4>
          <div>
            <img
              className="rounded-lg h-60 w-56 object-contain bg-mapa"
              src={imagen}
              alt={nombre}
            />
          </div>
          <div className="h-9 flex justify-center items-center">
            <h4
              className={`inline ${
                oferta === true
                  ? "line-through text-sm mr-2"
                  : "text-detalle font-bold text-2xl"
              }`}
            >
              ${precio}
            </h4>
            {oferta === true && (
              <>
                <h3 className="inline text-detalle font-bold text-2xl">
                  {" "}
                  ${ofe}{" "}
                </h3>
                <h3 className="inline bg-detalle text-princ px-1 rounded-md text-md ml-2">
                  %{descuento * 100}
                </h3>
              </>
            )}
          </div>
        </div>

        <Link
          to={"/Item/" + id}
          className="bg-secundario rounded-md px-2 py-1 my-4 hover:bg-detalle hover:text-princ"
        >
          Ver mas
        </Link>
      </article>
    </div>
  );
};

export default Item;
