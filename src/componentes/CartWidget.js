import React, { useContext } from "react";
import { contexto } from "./CustomProvider";

const CartWidget = () => {
  const contextValue = useContext(contexto);
  return (
    <div className="flex h-full justify-center items-center mx-4">
      <i className="fa-solid fa-cart-shopping bg-secundariod text-detalle rounded-2xl w-16 h-8  text-center p-2">
        {contextValue.cantidad}
      </i>
    </div>
  );
};

export default CartWidget;
