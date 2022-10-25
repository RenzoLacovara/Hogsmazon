import React from "react";

const Redes = () => {
  return (
    <div className="flex items-center px-5 h-full">
      <ul className="h-full flex gap-5 items-center">
        <a className="hover:text-detalle"href="www.linkedin.com">Linkedin</a>
        <a className="hover:text-detalle"href="www.github.com">Github</a>
        <a className="hover:text-detalle"href="www.gmail.com">Mail</a>
      </ul>
    </div>
  );
};

export default Redes;
