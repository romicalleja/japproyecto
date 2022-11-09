let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let nombre2 = document.getElementById("nombre2");
let apellido2 = document.getElementById("apellido2");
let email = document.getElementById("email");
let contacto = document.getElementById("contacto");

function guardar() {
  localStorage.setItem("mail", email.value);
  localStorage.setItem("nombre", nombre.value);
  localStorage.setItem("nombre2", nombre2.value);
  localStorage.setItem("apellido", apellido.value);
  localStorage.setItem("apellido2", apellido2.value);
  localStorage.setItem("contacto", contacto.value);
  alert("informacion actualizada con exito");
}

document.addEventListener("DOMContentLoaded", function (e) {
  email.value = localStorage.getItem("mail");
  nombre.value = localStorage.getItem("nombre");
  nombre2.value = localStorage.getItem("nombre2");
  apellido.value = localStorage.getItem("apellido");
  apellido2.value = localStorage.getItem("apellido2");
  contacto.value = localStorage.getItem("contacto");
});
