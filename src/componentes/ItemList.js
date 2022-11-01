import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <section className="flex flex-wrap gap-8 w-9/12 h-full justify-center items-center">
      {items.map((item) => {
        return <Item key={item.nombre} {...item} />;
      })}
    </section>
  );
};

export default ItemList;
