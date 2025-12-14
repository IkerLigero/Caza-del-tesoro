# Proyecto: Busqueda del tesoro 
# Autor: Iker Ligero Liendo

## Guía de uso
1. El juego se compone de un menú de inicio de sesión y un apartado de juego.
2. El usuario debe introducir su nombre y validarlo:
   - El nombre debe tener más de 3 letras.
   - El nombre no puede contener números.
3. El usuario debe hacer clic en "Jugar".
4. Dentro del juego hay una cuadrícula con casillas, el héroe y el tesoro, además de un dado.
5. El usuario debe hacer clic en el botón del dado, ese será el número de casillas que podrá moverse.
6. El usuario solo puede girar el dado una vez por turno.
7. Una vez que se llegue al tesoro, se mostrarán los turnos y se indicará si se ha establecido un nuevo récord.

## Anotaciones
- Todos los modelos han sido creados por mí utilizando Aseprite.
- Me he apoyado en W3C y Gemini para las partes que no entendía y sobre cómo utilizar ciertos objetos.
- He estructurado el código utilizando una arquitectura modular.
- El proyecto se compone de:
  + Imágenes del dado: `/dice`
  + Imágenes generales: `/images`
  + Hoja de estilos: `/style`
  + Módulos de JavaScript: `/js`
  + Página principal: `index.html`
  + Código principal: `main.js`

## Principales problemas encontrados
- He tenido problemas a la hora de modular el código, principalmente con los parámetros pasados en las funciones de `personaje.js`.
- La implementación del dado ha tenido que ser cambiada al menos tres veces debido a problemas de compatibilidad con `main.js`.
- El apartado del personaje en `personaje.js` ha quedado demasiado largo, se podría haber modularizado más.
- Problemas con los objetos primarios en `personaje.js`.

## Detalles no implementados
- Gráficos generales para el entorno.
- Distinción en las distintas áreas de interacción (tablas y dados).
- Interacción más dinámica con hovers.
- Botón que devuelva al inicio una vez terminado el juego.