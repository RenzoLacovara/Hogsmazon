import React from "react";

const ItemListContainer = (greeting) => {
  let aviso = greeting.nombre;
  return (
    <div className="text" nombre="soy un articulo">
      <p>{aviso}</p>
    </div>
  );
};

export default ItemListContainer;
