import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
let productosIniciales = [
  { id: 1, nombre: "producto1", categoria: "categoria1" },
  { id: 2, nombre: "producto2", categoria: "categoria2" },
];
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { tipo } = useParams();
  useEffect(() => {
    if (!tipo) {
      console.log("pido todo");
    } else {
      console.log("pido solo " + tipo);
    }
    let pedido = new Promise((res) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });
    pedido.then((res) => {
      setItems(res);
    });
    pedido.catch((error) => {});
  }, [tipo]);

  return (
    <div className="p-4 text-xl">
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
