import { toast } from "react-toastify";

let productosIniciales = [
  {
    nombre: "Diadema de Ravenclaw",
    precio: "2500",
    imagen: "../diadema.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Copa de Hufflepuff",
    precio: "2500",
    imagen: "../copa.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Guardapelo de Slytherin",
    precio: "2500",
    imagen: "../guardapelo.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Espada de Gryffindor",
    precio: "2500",
    imagen: "../espada.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "Varita de Sauco",
    precio: "1999",
    oferta: "si",
    ofertaValor: "1999",
    imagen: "../sauco.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
  {
    nombre: "El Innombrable",
    precio: "1999",
    oferta: "si",
    ofertaValor: "1999",
    imagen: "../voldy.png",
    tienda: {
      nombre: "Ollivanders",
      imagen: "./ollivanders.png",
    },
  },
];

export const getProducts = () => {
  let pedido = new Promise((res) => {
    setTimeout(() => {
      res(productosIniciales);
    }, 2000);
  });
  toast.promise(
    pedido,

    {
      pending: "Buscando productos",
      success: "Como por arte de magia!",
      error: "Ups, algo salió mal",
    },
    { position: toast.POSITION.TOP_CENTER,
    autoClose: 1000 }
  );
  return pedido;
};

export const getProductsPorTipo = (oferta) => {
  let pedido = new Promise((res) => {
    setTimeout(() => {
      res(productosIniciales.filter((item) => item.oferta === "si"));
    }, 2000);
  });
  toast.promise(
    pedido,

    {
      pending: "Buscando productos",
      success: "Como por arte de magia!",
      error: "Ups, algo salió mal",
    },
    { position: toast.POSITION.TOP_CENTER, autoClose: 1000 }
  );
  return pedido;
};
