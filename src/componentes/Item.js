import React from "react";

const Item = ({ nombre, imagen, precio }) => {
  return (
    <article>
      <h1>{nombre}</h1>
      <img src={imagen} alt={nombre} />
      <h3>${precio}</h3>
    </article>
  );
};

export default Item;
