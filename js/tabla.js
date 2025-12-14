/**
 * Dibujamos la tabla
 * Definimos las casillas como default
 */

export function dibujarTabla() {
    let tabla = document.getElementById("tabla");

    for (let i = 0; i < 10; i++) {
        const fila = document.createElement("tr");
        fila.id = `fila_${i}`;

        for (let j = 0; j < 10; j++) {
            const celda = document.createElement("td");
            celda.id = `casilla_${i}_${j}`;
            celda.className = `casilla_${i} casilla_${j}`;

            // Fondo por defecto: casilla marrón
            celda.style.backgroundImage = "url('./images/casilla.png')";
            celda.style.backgroundSize = "cover";
            celda.style.backgroundRepeat = "no-repeat";
            celda.style.backgroundPosition = "center";

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    // Sobreescribimos la celda del cofre
    const celdaCofre = document.getElementById("casilla_9_9");
    celdaCofre.style.backgroundImage = "url('./images/cofre.png')";
    celdaCofre.style.backgroundSize = "contain";
    celdaCofre.style.backgroundRepeat = "no-repeat";
    celdaCofre.style.backgroundPosition = "center";
}




