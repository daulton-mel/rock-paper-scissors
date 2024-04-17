function getComputerChoice() {
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'You tie! Try again!';
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            playerScore ++
            return "You win! Rock beats scissors."
        } else {
            computerScore ++
            return "You lose! Paper beats rock."
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore ++
            return "You win! Paper beats rock."
        } else {
            computerScore ++
            return "You lose! Scissors beats paper."
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            playerScore ++
            return "You win! Scissors beats paper."
        } else {
            computerScore ++
            return "You lose! Rock beats scissors."
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++ ) {
        const playerSelection = prompt("Please pick: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        return console.log('You Won!')
    } else {
        return console.log('The Computer Wins!')
    }
}

playGame()