// selecciono el titulo con getElementById y cambio el texto
const titulo = document.getElementById("tituloPrincipal");
titulo.textContent = "Nuevo Título";

// selecciono los parrafos con getElementByClassName y cambio el color
const parrafos = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "red";
}

// selecciono los elementos li con querySelectorAll y agrego un texto al final
const items = document.querySelectorAll("#contenedor ul li");
items.forEach((item, index) => {
    item.textContent += " Elementos";
})
