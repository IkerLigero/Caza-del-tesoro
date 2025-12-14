/**
 * Dibujamos la tabla
 * Le añadimos un titulo
 */

export function dibujarTabla(){

    
    let tabla = document.getElementById("tabla");
    for (let i = 0; i <= 9; i++) {
        const fila = document.createElement("tr");
        fila.id = `fila_${i}`;

        for (let j = 0; j <= 9; j++) {
            const celda = document.createElement("td");
            celda.id = `casilla_${i}_${j}`;
            celda.className = `casilla_${i} casilla_${j}`; // Puede cambiar
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    } 

}




