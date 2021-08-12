let userScore = 0;
let compScore = 0;

/* This randomly choose a string from an array and
returns the result. It will be called in the 'round' function. */
function computerPlayer() {
    let choicesArray = ['rock', 'paper', 'scissors'];

    return choicesArray[ Math.floor(Math.random() * choicesArray.length) ];
}

/* This runs 1 round of the game, returns the result, and logs the result to the console. It will cause userChoice to be lower case to remove case sensitivity. */
function round(userChoice, compChoice) {
    userChoice = prompt('Best out of five rounds. What\'ll it be?');
    compChoice = computerPlayer();

    if ((userChoice==='rock' && compChoice==='rock') ||
        (userChoice==='paper' && compChoice==='paper') ||
        (userChoice==='scissors' && compChoice==='scissors')) {
            return 'It\'s a tie!';
    } else if (userChoice==='rock' && compChoice==='scissors') {
        userScore++;
        return "You Win! Rock beats scissors.";
    } else if (userChoice==='rock' && compChoice==='paper') {
        compScore++;
        return "You lose... Paper beats rock.";
    } else if (userChoice==='paper' && compChoice==='rock') {
        userScore++;
        return "You Win! Paper beats rock.";
    } else if (userChoice==='paper' && compChoice==='scissors') {
        compScore++;
        return 'You lose... Scissors beat paper.';
    } else if (userChoice==='scissors' && compChoice==='paper') {
        userScore++;
        return "You Win! Scissors beat paper.";
    } else if (userChoice==='scissors' && compChoice==='rock') {
        compScore++;
        return "You lose... Rock beats scissors.";
    }
}

function game() {
    for(let run = 0; run < 5; run++) {
        console.log(round());
    }
}