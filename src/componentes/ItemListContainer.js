import React from "react";

const ItemListContainer = (greeting) => {
  let aviso = greeting.nombre;
  return (
    <div className="p-4 text-xl">
      <h2>Hola {aviso}!</h2>
    </div>
  );
};

export default ItemListContainer;
