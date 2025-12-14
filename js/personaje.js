/**
 * Definimos posicion del personaje
 * Definimos comportamiento del personaje
 */

// Variables utiles

let posHeroe = {
    x: 0,
    y: 0
}; // Objeto posicion del personaje

let tiradas = 0;
let size = 10;


// Funcion que coloca al heroe
export function colocarHeroe() {
    // Obtenemos la celda inicial
    let celda = document.getElementById("casilla_0_0");

    // Aplicamos los estilos para mostrar la imagen del héroe
    celda.style.backgroundImage = "url('./images/heroe.png')";
    celda.style.backgroundSize = "contain";
    celda.style.backgroundRepeat = "no-repeat";
    celda.style.backgroundPosition = "center";
}

// Funcion que mueve al heroe
export function moverHeroe(dado, botonTirar) {

    // Limpiamos casillas disponibles anteriores
    document.querySelectorAll(".disponible").forEach(c => {
        // Quitamos la clase de disponibilidad
        c.classList.remove("disponible");
        // Reestablecemos la imagen de la casilla normal
        c.style.backgroundImage = "url('./images/casilla.png')";
        // Eliminamos el evento click
        c.onclick = null;
    });

    // Obtenemos las coordenadas actuales
    let x = posHeroe.x;
    let y = posHeroe.y;

    // Posiciones exactas posibles a las que se puede mover (norte, sur, este, oeste)
    let posibles = [
        { x: x + dado, y: y }, // Derecha
        { x: x - dado, y: y }, // Izquierda
        { x: x, y: y + dado }, // Abajo
        { x: x, y: y - dado }  // Arriba
    ];

    // Iteramos sobre las posibles posiciones
    posibles.forEach(pos => {
        // Comprobamos límites: debe estar dentro del tablero (0 a size-1)
        if (pos.x >= 0 && pos.x < size && pos.y >= 0 && pos.y < size) {

            // Obtenemos la celda disponible
            let celda = document.getElementById(`casilla_${pos.x}_${pos.y}`);

            // Estilos para indicar que es una casilla disponible
            celda.style.backgroundImage = "url('./images/casilla_disponible.png')";
            celda.classList.add("disponible");

            // Añadimos el evento click a la casilla
            celda.onclick = () => {

                // Limpiamos la casilla anterior
                let anterior = document.getElementById(
                    `casilla_${posHeroe.x}_${posHeroe.y}`
                );
                // Ponemos la imagen de casilla normal
                anterior.style.backgroundImage = "url('./images/casilla.png')";

                // Movemos el héroe a la nueva celda
                celda.style.backgroundImage = "url('./images/heroe.png')";
                celda.classList.remove("disponible");

                // Actualizamos la posición del héroe y el contador de tiradas
                posHeroe = { x: pos.x, y: pos.y };
                tiradas++;

                // Limpiamos todas las demás casillas disponibles restantes (por si el usuario no hizo click)
                document.querySelectorAll(".disponible").forEach(c => {
                    c.classList.remove("disponible");
                    c.style.backgroundImage = "url('./images/casilla.png')";
                    c.onclick = null;
                });

                // Permitimos de vuelta tirar el dado (habilitamos el botón)
                botonTirar.disabled = false;

                // Comprobamos la condición de victoria (llegar a la casilla [9, 9])
                if (posHeroe.x ===9 && posHeroe.y=== 9) {

                    // Obtenemos el récord actual del Local Storage
                    let record = localStorage.getItem("record");

                    if (record === null) {
                        // No había récord: establecer el primer récord
                        localStorage.setItem("record", tiradas);
                        alert(`¡Victoria! Nuevo récord: ${tiradas} tiradas`);
                    } else {
                        // Convertimos el récord a número entero
                        record = parseInt(record);

                        if (tiradas < record) {
                            // Nuevo récord: la tirada actual es menor que el récord
                            localStorage.setItem("record", tiradas);
                            alert(`¡Victoria! Nuevo récord: ${tiradas} tiradas`);
                        } else {
                            // No se supera el récord
                            alert(`¡Victoria! Récord no superado \nRécord actual: ${record} tiradas`);
                        }
                    }
                }

                // Aseguramos que el botón de tirar esté habilitado después de moverse
                botonTirar.disabled = false;
            };
        }
    });
}