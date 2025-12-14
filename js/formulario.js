/**
 * Dibujamos formulario.
 * Creamos el sistema de validacion
 */

export function dibujarFormulario() {

    // Obtenemos el elemento formulario
    let contenedorFormulario = document.getElementById("formulario");

    // Creamos el elemento formulario
    let form = document.createElement("form");

    // Creamos h2, lo modificamos y lo unimos.
    let h2Nombre = document.createElement("h2");
    h2Nombre.textContent = "Introduce tu nombre caballero."; // le damos contenido
    form.appendChild(h2Nombre);

    // Creamos el input, le damos tipo, nombre y lo unimos.
    let input = document.createElement("input");
    input.type = "text"; // tipo de input
    input.name = "nombre";
    input.placeholder = "Nombre";
    form.appendChild(input);

    // Creamos el boton de submit, le damos el tipo y lo unimos.
    let botonNombre = document.createElement("button");
    botonNombre.type = "submit";
    botonNombre.textContent = "Introducir nombre"; // le damos contenido
    form.appendChild(botonNombre);

    // Creamos el mensaje, le damos id y lo unimos
    let mensaje = document.createElement("p");
    mensaje.id = "mensajeNombre";
    form.appendChild(mensaje);

    // Creamos el boton de jugar (Oculto)
    let botonJugar = document.createElement("button");
    botonJugar.type = "button";
    botonJugar.textContent = "Jugar";
    botonJugar.id = "botonJugar" // ID
    botonJugar.style.display = "none"; // oculto
    form.appendChild(botonJugar); // Lo unimos


    // Validadciones en el evento submit
    form.addEventListener("submit", (ev) => {

        ev.preventDefault();

        // Limpiamos el nombre
        let nombre = input.value.trim();

        // Validación: longitud mínima
        if (nombre.length < 4) {
            mensaje.textContent = "El nombre debe tener 4 o más letras";
            mensaje.style.color = "black"; // Volvemos al color por defecto
            botonJugar.style.display = "none"; // Por si mete otro nombre antes de darle a jugar
            return; // Salir de la funcion
        }

        // Validación: Regex para validar si hay numeros.
        if (/\d/.test(nombre)) {
            mensaje.textContent = "Números no permitidos";
            mensaje.style.color = "black"; // Volvemos al color por defecto
            botonJugar.style.display = "none"; // Por si mete otro nombre antes de darle a jugar
            return; // Salir de la funcion
        }

        // Nombre válido
        mensaje.style.color = "green";
        mensaje.textContent = `A luchar héroe: ${nombre}`;
        
        //Hacemos aparecer el boton jugar
        botonJugar.style.display = "inline-block";
    });

    contenedorFormulario.appendChild(form);
}