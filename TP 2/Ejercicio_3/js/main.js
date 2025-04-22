const parrafos = document.querySelectorAll(".parrafo");
const botonResaltar = document.getElementById("botonResaltar");
const botonOcultar = document.getElementById("botonOcultar");

botonResaltar.addEventListener("click", () => {
    parrafos.forEach(p => p.classList.add("resaltado"));
});

botonOcultar.addEventListener("click", () => {
    parrafos.forEach(p => p.classList.toggle("oculto"));
});