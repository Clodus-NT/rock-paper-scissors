
//These need to be declared globally so that we can access them later. 
let userScore = 0;
let compScore = 0;

/* This function randomly chooses a string from an array and
returns the result. It will be called in the round() function. */
function computerPlayer() {
    let choicesArray = ['rock', 'paper', 'scissors'];

    return choicesArray[ Math.floor(Math.random() * choicesArray.length) ];
}

/* This runs 1 round of the game, returns the result, and logs the result to the console. It causes userChoice to be lower case to remove case sensitivity. It also adds a point to the winner and stores the result.*/
function round(userChoice, compChoice) {
    userChoice = prompt('Best out of five rounds. What\'ll it be?').toLowerCase();
    
    compChoice = computerPlayer();

    if ((userChoice==='rock' && compChoice==='rock') ||
        (userChoice==='paper' && compChoice==='paper') ||
        (userChoice==='scissors' && compChoice==='scissors')) {
            return 'It\'s a tie!';
    } else if (userChoice==='rock' && compChoice==='scissors') {
        userScore++;
        return 'Round Won! Rock beats scissors.';
    } else if (userChoice==='rock' && compChoice==='paper') {
        compScore++;
        return 'Round Lost... Paper beats rock.';
    } else if (userChoice==='paper' && compChoice==='rock') {
        userScore++;
        return 'Round Won! Paper beats rock.';
    } else if (userChoice==='paper' && compChoice==='scissors') {
        compScore++;
        return 'Round Lost... Scissors beat paper.';
    } else if (userChoice==='scissors' && compChoice==='paper') {
        userScore++;
        return 'Round Won! Scissors beat paper.';
    } else if (userChoice==='scissors' && compChoice==='rock') {
        compScore++;
        return 'Round Lost... Rock beats scissors.';
    } else {
        return 'That\'s not an option, bucko.';
    }
}

/*This calls round() 5x using a for loop. It then tallies the score and logs the results to the console.*/
function game() {
    for(let run = 0; run < 5; run++) {
        console.log(round());
    }

    if (userScore < compScore) {
        console.log('You lost the game.');
    } else if (userScore > compScore) {
        console.log('YOU WON!!!');
    } else {
        console.log('Tie-Game.')
    }
}