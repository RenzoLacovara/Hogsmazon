import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts, getProductsPorTipo } from "./utils";
import { toast } from "react-toastify";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { tipo } = useParams();
  useEffect(() => {
    if (tipo) {
      toast.promise(
        getProductsPorTipo,

        {
          pending: "Buscando productos",
          success: "Como por arte de magia!",
          error: "Ups, algo salió mal",
        },
        { position: toast.POSITION.TOP_CENTER }
      );
      getProductsPorTipo(tipo).then((res) => {
        setItems(res);
      });
    } else {
      toast.promise(
        getProducts,

        {
          pending: "Buscando productos",
          success: "Como por arte de magia!",
          error: "Ups, algo salió mal",
        },
        { position: toast.POSITION.TOP_CENTER }
      );
      getProducts().then((res) => {
        setItems(res);
      });
    }
  }, [tipo]);

  return (
    <div className="p-4 text-xl">
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
