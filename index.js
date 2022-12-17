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
    const divResult = document.querySelector('#round-result');

    if ((computerSelection === "paper") && (playerSelection === "rock")) {
        divResult.textContent = 'You lost! Paper beats rock.';
        return false; 
    } else if ((computerSelection === "scissors") && (playerSelection === "rock")) {
        divResult.textContent = 'You win! Rock beats scissors.';
        return true; 
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        divResult.textContent = 'You lost! Scissors beats paper.';
        return false; 
    } else if ((computerSelection === "paper") && (playerSelection === "scissors")) {
        divResult.textContent = 'You win! Scissors beats paper.';;
        return true; 
    } else if ((computerSelection === "rock") && (playerSelection === "paper")) {
        divResult.textContent = 'You win! Paper beats rock.';
        return true; 
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        divResult.textContent = 'You lost! Rock beats scissors.';
        return false; 
    } else if (computerSelection === playerSelection) {
        divResult.textContent = 'Tie game.';
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

function removeElements() {
    const info = document.getElementById('info');
    const score = document.getElementById('score');
    const divResult = document.getElementById('round-result');

    info.removeChild(score);
    info.removeChild(divResult);
}

const info = document.getElementById('info');
const playAgainButton = document.createElement('button');
playAgainButton.textContent = 'PLAY AGAIN';

let player = 0;
let computer = 0;

window.addEventListener('click', (e) => {
    const result = document.querySelector('#results');
    const score = document.querySelector('#score');
    const playerChoice = selectPlayerChoice(e.target);
    const round = playRound(playerChoice, getComputerChoice());

    if (playerChoice !== undefined) {
        if (player === 5 || computer === 5 ) {
            removeElements();
            // info.appendChild(playAgainButton);
        } else if (round === "It's a tie!") {
            score.textContent = 'Player: ' + player + '  Computer: ' + computer;
        } else if (round) {
            player++;
            score.textContent = 'Player: ' + player + '  Computer: ' + computer;
        } else if (!round) {
            computer++;
            score.textContent = 'Player: ' + player + '  Computer: ' + computer;
        } 
    }

    if (player === 5) {
        result.textContent = 'You win. Congratulations!';
    } else if (computer === 5) {
        result.textContent = 'The winner is Computer.';
    }
});