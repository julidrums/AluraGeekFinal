import { authService } from "../servicios/autenticacion-servicio.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const email = document.querySelector("[data-email]").value;
  const password = document.querySelector("[data-password]").value;

  if (email.length > 5 && password.length > 5) {
    try {
      await authService.login(email, password);
      window.location.href = "../screens/edit-producto.html";
    } catch (error) {
      alert("No se pudo autenticar")
    }

  } else {
    alert("email y contraseña deben tener mas de 5 caracteres.");
  }
});