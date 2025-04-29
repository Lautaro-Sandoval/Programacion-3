const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");

const botonEnviar = document.getElementById("botonEnviar");


botonEnviar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombreIngresado = nombre.value;
    const edadIngresada = Number(edad.value);

    if (nombreIngresado == "") {
        alert("El campo nombre debe estar completo");
    } else if (isNaN(edadIngresada) || edadIngresada == "") {
        alert("El campo edad debe ser un número");
    } else {
        alert("Formulario enviado correctamente");
    };
    formulario.reset();
});