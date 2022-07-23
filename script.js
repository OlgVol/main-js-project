const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const optionBtn = document.querySelectorAll(".option");
const winner = "You are the winner!";

let player;
let computer;
let result;

optionBtn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function checkWinner() {
  if (player === computer) {
    return `We both are winers ${player}`;
  } else if (player === "rock" && computer === "scissors") {
    return `${winner} ${player} beats ${computer}`;
  } else if (player === "paper" && computer === "rock") {
    return `${winner} ${player} beats ${computer}`;
  } else if (player === "scissors" && computer === "paper") {
    return `${winner} ${player} beats ${computer}`;
  } else {
    return `You lose! ${computer} beats ${player}`;
  }
}

/* const selectionButtons = document.querySelectorAll('[data-selection');
const finalColumn = document.querySelector('[data-final-column]')
const computerScore= document.querySelector('[data-computer-sore]')
const yourScore = document.querySelector('[data-your-score]')
const selections = [
    {
    name: 'rock',
    beats: 'scissors'
    },
    {
    name: 'paper',
    beats: 'rock'
    },
    {
    name: 'scissors',
    beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = selections.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    const computerSelection = random();
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
    
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.name
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)

}

function isWinner(selection, opponnentSelection) {
    return selection.beats === opponnentSelection.name
}

function random() {
const randomIndex = [Math.floor(Math.random() * selections.length)];
return selections[randomIndex];
}


/*const winner ="You are the winner!"

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
/*
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
*/
