function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return "Rock";
    }
    if (computerChoice === 1) {
        return "Paper";
    }
    if (computerChoice === 2) {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    const input = playerSelection.toLowerCase();
    console.log(computerSelection);

    if ((computerSelection === "Paper") && (input === "rock")) {
        console.log(computerSelection);
        return "You lose! Paper beats Rock"; 
    } else if ((computerSelection === "Scissors") && (input === "rock")) {
        console.log(computerSelection);
        return "You win! Rock beats Scissors"; 
    } else if ((computerSelection === "Scissors") && (input === "paper")) {
        console.log(computerSelection);
        return "You lose! Scissors beats Paper"; 
    } else if ((computerSelection === "Paper") && (input === "scissors")) {
        console.log(computerSelection);
        return "You win! Scissors beats Paper"; 
    } else if ((computerSelection === "Rock") && (input === "paper")) {
        console.log(computerSelection);
        return "You win! Paper beats Rock"; 
    } else if ((computerSelection === "Rock") && (input === "scissors")) {
        console.log(computerSelection);
        return "You lose! Rock beats Scissors"; 
    }
}

const player = 'SCISSORS';
const computer = getComputerChoice();

console.log(playRound(player, computer));
