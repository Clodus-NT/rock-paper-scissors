/* This randomly choose a string from an array and
returns the result.*/
function computerPlayer() {
    let choicesArray = ["rock", "paper", "scissors"];

    return choicesArray[ Math.floor(Math.random() * choicesArray.length) ];
}