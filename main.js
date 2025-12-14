/**
 * Fichero principal del juego.
 * Controla el flujo entre escenas
 * y conecta el dado con el movimiento del héroe
 */

// Manejamos los imports
import { dibujarFormulario } from "./js/formulario.js";
import { dibujarTabla } from "./js/tabla.js";
import { dibujarDado } from "./js/dado.js";
import { colocarHeroe, moverHeroe } from "./js/personaje.js";


// Cargamos la aplicación al iniciar la página
window.onload = inicio;

function inicio() {

    // Dibujamos el formulario inicial
    dibujarFormulario();

    // Obtenemos el botón jugar del formulario
    let botonJugar = document.getElementById("botonJugar");

    // Evento click para comenzar la partida
    botonJugar.addEventListener("click", (ev) => {

        // Ocultamos el formulario
        document.getElementById("formulario").style.display = "none";

        // Dibujamos la tabla del juego
        dibujarTabla();

        // Colocamos al héroe en la casilla inicial
        colocarHeroe();

        // Dibujamos el dado
        dibujarDado();

        // Obtenemos el botón y la imagen del dado
        let botonTirar = document.querySelector("#dado button");
        let imagenDado = document.querySelector("#dado img");

        // Evento click para tirar el dado
        botonTirar.addEventListener("click", (ev) => {

            // Bloqueamos el dado para evitar múltiples tiradas
            botonTirar.disabled = true;

            // Generamos un número aleatorio n[1 - 6]
            let numero = Math.floor(Math.random() * 6) + 1;

            // Actualizamos la imagen del dado
            imagenDado.src = `./dice/dado${numero}.png`;

            // Movemos el héroe según el valor del dado
            moverHeroe(numero, botonTirar);
        });
    });
}