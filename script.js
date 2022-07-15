function computerPlay() {
let option = ['rock', 'paper','scissors'];
return option[Math.floor(Math.random() * option.length)];
}
const winner ="You are the winner!"

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return `We both are winers ${playerSelection}`;
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `${winner} ${playerSelection} beats ${computerSelection}`;
} else if (playerSelection === "paper" && computerSelection === "rock") {
    return `${winner} ${playerSelection} beats ${computerSelection}`;
} else if (playerSelection === "scissors" && computerSelection
=== "paper") {
    return `${winner} ${playerSelection} beats ${computerSelection}`;
}else {
    return `You lose! ${computerSelection} beats ${playerSelection}`
}
}
const playerSelection = prompt("Start the game. Please write the option: ' Rock, Paper or Scissors'").toLowerCase(); 
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
alert(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 1; i < 5; i++) {
        let playerSelection = prompt("Choose your next option from 'Rock, Paper or Scissors' ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        alert(playRound(playerSelection, computerSelection));
    }
}
console.log(game());
