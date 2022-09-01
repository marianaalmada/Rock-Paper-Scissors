function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) 
        return "Rock";
    if (computerChoice === 1) 
        return "Paper";
    if (computerChoice === 2) 
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {

    if ((computerSelection === "Paper") && (playerSelection.toLowerCase() === "rock")) {
        console.log(computerSelection);
        console.log("You lose! Paper beats Rock");
        return false; 
    } else if ((computerSelection === "Scissors") && (playerSelection.toLowerCase() === "rock")) {
        console.log(computerSelection);
        console.log("You win! Rock beats Scissors");
        return true; 
    } else if ((computerSelection === "Scissors") && (playerSelection.toLowerCase() === "paper")) {
        console.log(computerSelection);
        console.log("You lose! Scissors beats Paper");
        return false; 
    } else if ((computerSelection === "Paper") && (playerSelection.toLowerCase() === "scissors")) {
        console.log(computerSelection);
        console.log("You win! Scissors beats Paper");
        return true; 
    } else if ((computerSelection === "Rock") && (playerSelection.toLowerCase() === "paper")) {
        console.log(computerSelection);
        console.log("You win! Paper beats Rock");
        return true; 
    } else if ((computerSelection === "Rock") && (playerSelection.toLowerCase() === "scissors")) {
        console.log(computerSelection);
        console.log("You lose! Rock beats Scissors");
        return false; 
    } else if ((computerSelection === "Rock") && (playerSelection.toLowerCase() === "rock")) {
        console.log(computerSelection);
        return "It's a tie!"; 
    } else if ((computerSelection === "Scissors") && (playerSelection.toLowerCase() === "scissors")) {
        console.log(computerSelection);
        return "It's a tie!"; 
    } else if ((computerSelection === "Paper") && (playerSelection.toLowerCase() === "paper")) {
        console.log(computerSelection);
        return "It's a tie!"; 
    }
}

function game() {
    let player = 0;
    let computer = 0;

    for(i = 0; i < 5; i++) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("Input your choice...");
        const round = playRound(playerChoice, computerChoice);

        if (round == "It's a tie!") {
            console.log(`Player: ${player}\nComputer: ${computer}`);
            continue;
        } else if (round) {
            player++;
        } else if (!round) {
            computer++;
        } 
        console.log(`Player: ${player}\nComputer: ${computer}`);
    }

    if(player === computer) {
        const computerChoice = getComputerChoice();
        const playerChoice = prompt("Input your choice...");
        const round = playRound(playerChoice, computerChoice);

        while (player === computer) {
            if (round == "It's a tie!") {
                console.log(`Player: ${player}\nComputer: ${computer}`);
                continue;
            } else if (round) {
                player++;
            } else if (!round) {
                computer++;
            } 
            console.log(`Player: ${player}\nComputer: ${computer}`);
        }
    }
    
    if(player > computer) {
        return "The winner is player!"
    } else if(computer > player) {
        return "The winner is computer!"
    }
}

console.log(game());