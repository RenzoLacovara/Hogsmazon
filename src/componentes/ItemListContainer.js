import React from "react";

const ItemListContainer = (greeting) => {
  let aviso = greeting.nombre;
  return (
    <div className="text">
      <h2>Hola {aviso}!</h2>
    </div>
  );
};

export default ItemListContainer;
