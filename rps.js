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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'You tie! Try again!';
    }
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors."
        } else {
            return "You lose! Paper beats rock."
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats rock."
        } else {
            return "You lose! Scissors beats paper."
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats paper."
        } else {
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
}

playGame()