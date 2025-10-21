function convertirAMayusculas(texto) {
    return texto.toUpperCase();
}

function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}

function capitalizarPrimeraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function contarPalabras(texto) {
    if (texto.trim() === "") return 0;
    return texto.trim().split(/\s+/).length;
}

function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}

function eliminarEspaciosExtras(texto) {
    return texto.replace(/\s+/g, ' ').trim();
}

function reemplazarPalabra(texto, palabraVieja, palabraNueva) {
    const regex = new RegExp(palabraVieja, 'g');
    return texto.replace(regex, palabraNueva);
}

function obtenerPrimerasNPalabras(texto, n) {
    const palabras = texto.trim().split(/\s+/);
    return palabras.slice(0, n).join(' ');
}

function repetirTexto(texto, veces) {
    return texto.repeat(veces);
}

export {
    convertirAMayusculas,
    convertirAMinusculas,
    capitalizarPrimeraLetra,
    contarPalabras,
    invertirTexto,
    eliminarEspaciosExtras,
    reemplazarPalabra,
    obtenerPrimerasNPalabras,
    repetirTexto
}
