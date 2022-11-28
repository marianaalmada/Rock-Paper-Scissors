function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) 
        return "rock";
    if (computerChoice === 1) 
        return "paper";
    if (computerChoice === 2) 
        return "scissors";
}

function playRound(playerSelection, computerSelection) {

    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log(computerSelection);
        return false; 
    } else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        console.log(computerSelection);
        return true; 
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log(computerSelection);
        return false; 
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        console.log(computerSelection);
        return true; 
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        console.log(computerSelection);
        return true; 
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log(computerSelection);
        return false; 
    } else if (computerSelection === playerSelection) {
        return "It's a tie!";
    }
}

function selectPlayerChoice(e) {
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    if(e === rock) {
        return 'rock';
    } else if(e === paper) {
        return 'paper';
    } else if(e === scissors) {
        return 'scissors';
    }
}

let player = 0;
let computer = 0;

window.addEventListener('click', (e) => {
    const score = document.querySelector('#score');
    const playerChoice = selectPlayerChoice(e.target);
    const round = playRound(playerChoice, getComputerChoice());

    if (playerChoice !== undefined) {
        if (round === "It's a tie!") {
            console.log('TIE');;
        } else if (round) {
            player++;
            score.textContent = 'Player: ' + player + '  Computer: ' + computer;
        } else if (!round) {
            computer++;
            score.textContent = 'Player: ' + player + '  Computer: ' + computer;
        }  
    }

    const info = document.getElementById('info');
    const result = document.querySelector('#results');

    if (player === 5) {
        result.textContent = 'You win. Congratulations!';
        info.removeChild(score);
    } else if (computer === 5) {
        result.textContent = 'The winner is the Computer.';
        info.removeChild(score);
    }
});