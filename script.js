function computerPlay() {
let option = ['rock', 'paper','scissors'];
return option[Math.floor(Math.random() * option.length)];
}
const winner ="You are the winner!"

function playerPlay() {
    let option = ['rock', 'paper', 'scissors']
}

function playRound(playerSelection, computerSelection) {
if (playerSelection === computerSelection) {
    return {
        message : `We both are winers ${playerSelection}`,
        status: "winner" }
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    return {
        message : `${winner} ${playerSelection} beats ${computerSelection}`,
        status : "winner" }
} else if (playerSelection === "paper" && computerSelection === "rock") {
    return {
        message: `${winner} ${playerSelection} beats ${computerSelection}`,
        status: "winner" }
} else if (playerSelection === "scissors" && computerSelection
=== "paper") {
    return {
        message : `${winner} ${playerSelection} beats ${computerSelection}`,
        status: "winner" }
} else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    return {
        message : `Please write valid option`,
        status : "error" }
} else {
  return {
    message :`You lose! ${computerSelection} beats ${playerSelection}`,
    status : "lose" }
}
}   

const playerSelection = prompt("Start the game. Please write the option: ' Rock, Paper or Scissors'").toLowerCase(); 
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
    for (let i = 1; i < 5; i++) {
        let playerSelection = prompt("Choose your next option from 'Rock, Paper or Scissors' ");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        
    }
}
console.log(game());


