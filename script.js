let userScore = 0;
let compScore = 0;

/* This randomly choose a string from an array and
returns the result. It will be called in the 'round' function. */
function computerPlayer() {
    let choicesArray = ['rock', 'paper', 'scissors'];

    return choicesArray[ Math.floor(Math.random() * choicesArray.length) ];
}

/* This runs 1 round of the game, returns the result, and logs the result to the console. It converts userChoice to lower case so to remove case sensitivity. */
function round(userChoice, compChoice) {
    let beginRound = prompt('Best out of five rounds. What\'ll it be?');
    userChoice = beginRound.toLowerCase();

    compChoice = computerPlayer();

    if ((userChoice==='rock' && compChoice==='rock') ||
        (userChoice==='paper' && compChoice==='paper') ||
        (userChoice==='scissors' && compChoice==='scissors')) {
            return 'It\'s a tie!';
    } else {
        return 'It sort of works';
    }
}