const imagenPrincipal = document.getElementById("imagenPrincipal");
const imagenes = document.querySelectorAll(".imagen");


imagenes.forEach(imagen => {
    imagen.addEventListener("click", () => {
        imagenPrincipal.src = imagen.src;
    });
});