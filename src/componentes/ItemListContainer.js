import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProductosPorOferta, getProductos } from "./utils";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { oferta } = useParams();

  useEffect(() => {
    if (oferta) {
      getProductosPorOferta(oferta).then((respuesta) => {
        setItems(respuesta);
      });
    } else {
      getProductos().then((respuesta) => {
        setItems(respuesta);
      });
    }
  }, [oferta]);

  return (
    <div className="p-4 text-xl flex justify-center mt-5">
      {items.length === 0 ? (
        <h1 className="h-screen">Cargando...</h1>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;
