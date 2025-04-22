const input = document.getElementById("itemImput");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    const texto = input.value.trim();

    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        botonEliminar.addEventListener("click", () => {
            lista.removeChild(li);
        })

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = "";
        input.focus();
    }
});