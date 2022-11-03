import React, { useState } from "react";

const ItemCount = ({ handleOnAdd }) => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  const confirmar = () => {
    handleOnAdd(count);
  };

  return (
    <div className="h-full w-full flex flex-col items-center gap-2">
      <div className="flex">
        <button
          className="text-princ bg-secundariod px-2 py-1 rounded-l-full hover:bg-detalle"
          onClick={restar}
        >
          -
        </button>
        <h2 className="py-1 px-2 w-7 text-center bg-secundario text-principald">
          {count}
        </h2>
        <button
          className="bg-secundariod px-2 py-1 rounded-r-full hover:bg-detalle text-princ"
          onClick={sumar}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="bg-secundariod px-2 py-1 rounded-full hover:bg-detalle text-princ mb-2"
          onClick={confirmar}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
