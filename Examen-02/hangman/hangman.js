let letter
document.getElementById("submitButton").onclick = function(){
    letter = document.getElementById("userLetter").value;
    request_put_letter(letter);
}
function manageRequest(){
    
    do {
        let userInput = require
        request_put_letter(userInput)
    } while (userInput != -1);
   
}

let word = "hola mundo";
let incomplete_word = word;
incomplete_word.replaceAll("_");
function request_put_letter(letter){
    console.log("incomplete_word before: " + incomplete_word);
    position = word.indexOf(letter)
    console.log("position: " + position)
    if(position != -1){
        console.log("incomplete_word[position] = " + incomplete_word[position])
        console.log("word[position] = " + word[position])
        incomplete_word[position] = word[position]
        console.log("incomplete_word[position] = " + incomplete_word[position]);
        console.log("position incomplete_word[word] = " + incomplete_word.indexOf(letter))
    }
    document.getElementById("word").set
}

manageRequest()