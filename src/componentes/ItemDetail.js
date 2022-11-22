import React, { useEffect, useState, useContext } from "react";
import { contexto } from "./CustomProvider";
import ItemCount from "./ItemCount";
import Snitch from "./Snitch";

const ItemDetail = ({ detalle }) => {
  const contextValue = useContext(contexto);

  const [detalles, setDetalles] = useState({});
  useEffect(() => {
    setDetalles(detalle);
  }, [detalle]);

  const handleOnAdd = (cantidad) => {};

  let ofe = detalles.precio - detalles.precio * detalles.descuento;
  return detalles.nombre === undefined ? (
    <div className="p-4 text-xl flex justify-center mt-3">
      <Snitch />
    </div>
  ) : (
    <div className="h-full my-14 w-screen flex justify-center items-center">
      <div className="rounded-2xl shadow-lg overflow-hidden flex w-2/3 h-full">
        <img
          className="h-96 w-2/5 object-contain bg-mapa bg-cover overflow-hidden"
          src={detalles.imagen}
          alt={detalles.nombre}
        />

        <div className=" w-3/5 flex flex-col justify-between">
          <div className="text-center h-full">
            <h2 className="text-2xl">{detalles.nombre}</h2>
            <div className="h-10 flex justify-center items-center">
              <h3
                className={` inline-block ${
                  detalles.oferta === true
                    ? "text-sm line-through"
                    : "text-detalle font-bold text-2xl"
                }`}
              >
                ${detalles.precio}
              </h3>
              {detalles.oferta === true && (
                <>
                  <h3 className="inline-block text-detalle font-bold ml-2 text-2xl">
                    ${ofe}
                  </h3>
                  <h3 className=" ml-2 inline bg-detalle text-princ px-1 rounded-md text-md">
                    %{detalles.descuento * 100}
                  </h3>
                </>
              )}
            </div>

            <p className="text-justify p-6 text-sm">{detalles.descripcion}</p>
          </div>
          <div>
            <ItemCount handleOnAdd={handleOnAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
