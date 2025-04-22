const formulario = document.getElementById("formulario");
const formularioIngreso = document.getElementById("formularioIngreso");
const lista = document.getElementById("lista"); 

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    const textoIngresado = formularioIngreso.value.trim();

    if (textoIngresado !== "") {
        const li = document.createElement("li");
        li.textContent = textoIngresado;

        li.addEventListener("click", function() {
            li.classList.toggle("completado");
        });

        lista.appendChild(li);
        formularioIngreso.value = "";
    }
});