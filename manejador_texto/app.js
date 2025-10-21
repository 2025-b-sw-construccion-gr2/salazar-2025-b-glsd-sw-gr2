import {
    convertirAMayusculas,
    convertirAMinusculas,
    capitalizarPrimeraLetra,
    contarPalabras,
    invertirTexto,
    eliminarEspaciosExtras,
    reemplazarPalabra,
    obtenerPrimerasNPalabras,
    repetirTexto
} from './lib/manejador_texto.js';

console.log("=== Manejador de Texto ===");

const textoEjemplo = "  Hola mundo! Bienvenidos al manejador de texto.  ";

console.log("Texto Original:", `"${textoEjemplo}"`);
console.log("Mayúsculas:", convertirAMayusculas(textoEjemplo));
console.log("Minúsculas:", convertirAMinusculas(textoEjemplo));
console.log("Capitalizar Primera Letra:", capitalizarPrimeraLetra(textoEjemplo));
console.log("Contar Palabras:", contarPalabras(textoEjemplo));
console.log("Invertir Texto:", invertirTexto(textoEjemplo));
console.log("Eliminar Espacios Extras:", `"${eliminarEspaciosExtras(textoEjemplo)}"`);
console.log("Reemplazar 'mundo' por 'universo':", reemplazarPalabra(textoEjemplo, 'mundo', 'universo'));
console.log("Obtener Primeras 3 Palabras:", obtenerPrimerasNPalabras(textoEjemplo, 3));
console.log("Repetir Texto 2 Veces:", repetirTexto(textoEjemplo, 2));