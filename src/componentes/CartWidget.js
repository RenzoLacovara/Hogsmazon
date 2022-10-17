import React from "react";

const CartWidget = (prop) => {
  const cart = prop.valor;
  return (
    <div className="cart">
      <i class="fa-solid fa-cart-shopping"> {cart}</i>
    </div>
  );
};

export default CartWidget;
