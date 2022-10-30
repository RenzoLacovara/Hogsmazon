let productosIniciales = [];
export const getProducts = () => {
  for (let i = 0; i < 10; i++) {
    productosIniciales.push();
  }
  let pedido = new Promise((res) => {
    setTimeout(() => {
      res(productosIniciales);
    }, 2000);
  });
  return pedido;
};
export const getProductsPorTipo = (tipo) => {
  let pedido = new Promise((res) => {
    setTimeout(() => {
      res(productosIniciales.filter((item) => item.tipo === tipo));
    }, 2000);
  });
  return pedido;
};
