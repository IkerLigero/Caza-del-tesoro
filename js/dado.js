/**
 * Dibujamos el dado.
 * Contiene imagen y botón para tirar.
 * Inicialmente el dado muestra 1.
 */

export function dibujarDado() {

    // Obtenemos el contenedor del dado
    let contenedor = document.getElementById("dado");

    // Creamos la imagen del dado
    let imagenDado = document.createElement("img");
    imagenDado.id = "imagenDado";
    imagenDado.src = "./dice/dado1.png"; // dado inicial
    imagenDado.style.width = "80px";
    imagenDado.style.height = "80px";
    imagenDado.style.display = "block";
    imagenDado.style.margin = "0 auto"; // centrado horizontal
    contenedor.appendChild(imagenDado);

    // Creamos el botón para tirar el dado
    let botonTirar = document.createElement("button");
    botonTirar.textContent = "Tirar dado";
    botonTirar.style.display = "block";
    botonTirar.style.margin = "10px auto"; // centrado con margen
    contenedor.appendChild(botonTirar);
}