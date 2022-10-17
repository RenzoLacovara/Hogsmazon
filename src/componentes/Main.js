import React from "react";
import ItemListContainer from "../scss/componentes/ItemListContainer";

const Main = () => {
  return (
    <div className="main">
      <article className="card">
        <div className="img"></div>
        <ItemListContainer className="text" nombre="soy un article" />
      </article>
      <article className="card">
        <div className="img"></div>
        <ItemListContainer className="text" nombre="yo tambien" />
      </article>
      <article className="card">
        <div className="img"></div>
        <ItemListContainer className="text" nombre="y yo lo mismo" />
      </article>
    </div>
  );
};

export default Main;
