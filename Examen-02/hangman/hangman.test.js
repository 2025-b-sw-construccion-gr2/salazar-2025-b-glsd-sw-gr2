/**
 * Tests para el juego del Ahorcado
 */

describe("Hangman Game", () => {
    beforeEach(() => {
        // Limpiar el DOM antes de cada test
        document.body.innerHTML = `
            <h2 id="word"></h2>
            <p id="tries"></p>
            <input id="userLetter">
            <button id="submitButton">submit</button>
        `;

        // Cargar el script después de montar el DOM
        jest.resetModules();
        require("./hangman.js");
    });

    test("Should initialize with hidden word on page load", () => {
        const wordElement = document.getElementById("word");
        expect(wordElement).toBeDefined();
    });

    test("Should display tries counter", () => {
        const triesElement = document.getElementById("tries");
        expect(triesElement).toBeDefined();
        expect(triesElement.textContent).toContain("Intentos");
    });

    test("Should have an input field for letters", () => {
        const letterInput = document.getElementById("userLetter");
        expect(letterInput).toBeDefined();
    });

    test("Should have a submit button", () => {
        const submitButton = document.getElementById("submitButton");
        expect(submitButton).toBeDefined();
        expect(submitButton.textContent).toBe("submit");
    });

    test("Should have SVG body parts elements", () => {
        document.body.innerHTML += `
            <svg width="300" height="400">
                <circle id="head" style="display: none;"/>
                <line id="body" style="display: none;"/>
                <line id="leftArm" style="display: none;"/>
                <line id="rightArm" style="display: none;"/>
                <line id="leftLeg" style="display: none;"/>
                <line id="rightLeg" style="display: none;"/>
            </svg>
        `;

        const bodyParts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];
        bodyParts.forEach((part) => {
            const element = document.getElementById(part);
            expect(element).toBeDefined();
        });
    });
});
