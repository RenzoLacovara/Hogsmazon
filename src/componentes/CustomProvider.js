import React, { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const vaciarCart = () => {
    setCart([]);
    setTotal(0);
  };
  const contextValue = {
    productos: cart,
    cantidad: total,
    setCart: setCart,
    setTotal: setTotal,
    vaciarCart: vaciarCart,
  };
  return <Provider value={contextValue}>{children}</Provider>;
};

export default CustomProvider;
