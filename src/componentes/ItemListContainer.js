import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {getProductsPorTipo, getProducts} from "./utils"


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { cat } = useParams();
  useEffect(() => {
    if (cat) {
      getProductsPorTipo(cat).then((respuesta) => {
        setItems(respuesta);
    
      });

    } else {
    getProducts().then((respuesta) => {
        setItems(respuesta);
      });
    }
  }, [cat]);

  return (
    <div className="p-4 text-xl flex justify-center mt-5">
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
