import React, { useEffect, useState, useContext } from "react";
import { contexto } from "./CustomProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({ detalle }) => {
  const contextValue = useContext(contexto);

  const [detalles, setDetalles] = useState({});
  useEffect(() => {
    let produ = detalle[0];
    setDetalles(produ);
  }, [detalle]);

  const handleOnAdd = (cantidad) => {};

  if (detalles === undefined) {
    return <h1 className="h-screen">Cargando...</h1>;
  } else if (detalles.oferta === "si") {
    return (
      <div className="h-full my-14 w-screen flex justify-center items-center">
        <div className="rounded-2xl shadow-lg overflow-hidden flex w-2/3 h-full">
          <img
            className="h-96 w-2/5 object-contain bg-mapa bg-cover overflow-hidden"
            src={detalles.imagen}
            alt={detalles.nombre}
          />

          <div className=" w-3/5 flex flex-col justify-between">
            <div className="text-center h-full">
              <h2 className="text-2xl inline-block">
                {detalles.nombre} -{" "}
                <h2 className="inline-block text-sm line-through">
                  ${detalles.precio}
                </h2>
                <h2 className="inline-block text-detalle font-bold ml-2">
                  ${detalles.ofertaValor}
                </h2>
              </h2>
              <p className="text-justify p-6 text-sm">{detalles.descripcion}</p>
            </div>
            <div>
              <ItemCount handleOnAdd={handleOnAdd} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full my-14 w-screen flex justify-center items-center">
        <div className="rounded-2xl shadow-lg overflow-hidden flex w-2/3 h-full">
          <img
            className="h-96 w-2/5 object-contain bg-mapa bg-cover overflow-hidden"
            src={detalles.imagen}
            alt={detalles.nombre}
          />
          <div className="w-3/5 flex flex-col justify-between">
            <div className="text-center">
              <h2 className="text-2xl inline-block">
                {detalles.nombre} -{" "}
                <h2 className="inline-block text-detalle font-bold">
                  ${detalles.precio}
                </h2>
              </h2>
              <p className="text-justify p-6 text-sm">{detalles.descripcion}</p>
            </div>
            <div>
              <ItemCount handleOnAdd={handleOnAdd} />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemDetail;
