let letter;
let tries = 0;
let max_tries = 6;

// Partes del cuerpo en orden
const bodyParts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];

let diccionary = [
    "SANDIA",
    "MANZANA",
    "PERA",
    "MANDARINA",
    "MENLON",
    "KIWI",
    "FRESA",
    "MANGO",
    "PIÑA",
    "CEREZA",
    "DURAZNO",
    "FRUTILLA",
    "NARANJA",
    "LIMON",
    "GUAYABA",
    "MARACUYA",
    "COCO",
    "PAPAYA",
    "TAMARINDO",
    "HIGO",
];
let word = diccionary[Math.floor(Math.random() * diccionary.length)];
let incomplete_word = word.replaceAll(/[QWERTYUIOPLKJÑHGFDSAZXCVBNM]/g, "_");

// Mostrar palabra incompleta al cargar la página
document.getElementById("word").textContent = incomplete_word;
document.getElementById("tries").textContent = `Intentos fallidos: ${tries}/${max_tries}`;

document.getElementById("submitButton").onclick = function () {
    letter = document.getElementById("userLetter").value;
    request_put_letter(letter);
    document.getElementById("userLetter").value = "";
};

function request_put_letter(letter) {
    let index = 0;
    let incomplete_array = incomplete_word.split("");
    let found = false;

    letter = letter.toUpperCase();

    // Buscar todas las ocurrencias de la letra en la palabra
    while ((index = word.indexOf(letter, index)) != -1) {
        incomplete_array[index] = word[index];
        index++;
        found = true;
    }

    // Si no se encontró la letra, incrementar intentos fallidos
    if (!found) {
        tries++;
        // Mostrar la siguiente parte del cuerpo
        if (tries <= bodyParts.length) {
            document.getElementById(bodyParts[tries - 1]).style.display = "block";
        }
        document.getElementById("tries").textContent = `Intentos fallidos: ${tries}/${max_tries}`;
    }

    if (tries >= max_tries) {
        alert("You lose! The word was: " + word);
        return;
    }

    if (!incomplete_array.includes("_")) {
        alert("You win! The word was: " + word);
    }

    incomplete_word = incomplete_array.join("");

    document.getElementById("word").textContent = incomplete_word;
}
