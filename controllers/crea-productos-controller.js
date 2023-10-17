import { productoServices } from "../servicios/producto-servicios.js";


const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("[data-name]").value;
  const url = document.querySelector("[data-url]").value;
  const precio = document.querySelector("[data-price]").value;

  productoServices
    .creaProductosFirebase(nombre, url, precio)
    .then((respuesta) => {
      window.location.href = "../screens/index.html";
      console.log(respuesta);
    })
    .catch((err) => {
      console.log(err);
    });
});
