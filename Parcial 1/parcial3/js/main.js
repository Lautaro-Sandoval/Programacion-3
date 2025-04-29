const formulario = document.getElementById("formulario");
const numero = document.getElementById("numero");

const boton = document.getElementById("boton");

const error = document.getElementById("error");

boton.addEventListener("click", (e) => {
    e.preventDefault();

    const numeroIngresado = Number(numero.value);

    if (numeroIngresado == "") {
        alert("El texto esta vacio");
        error.textContent = "";
    } else if (isNaN(numeroIngresado)) {
        error.textContent = "No es un numero valido";
    } else {
        if (numeroIngresado % 2 == 0) {
            alert("El numero es par")
        } else {
            alert("El numero es impar")
        };
        error.textContent = "";
    };
    formulario.reset();
});