import { toast } from "react-toastify";

export const generarPromesa = (operation, time = 1000) => {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(operation);
    }, time);
  });
  toast.promise(
    promesa,

    {
      pending: "Accio productos!",
      success: "Como por arte de magia!",
      error: "Ups, algo salió mal",
    },
    { position: toast.POSITION.TOP_CENTER, autoClose: 1000 }
  );
  return promesa;
};
