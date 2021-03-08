function computerPlay() {
    let choice = getRandomInt(3);
    switch(choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
        console.log("choice not found: " + choice);
    } 
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function convertSel(sel) {
    return sel.toUpperCase();
}

let computerScore=0;
let playerScore = 0;

function displayWinner(e) {
    let result = playRound(e);
    let winnerText = "";
    switch(result) {
        case 1: 
            winner="Player won"
            playerScore++
            break;
        case 2:
            winner="Computer won";
            computerScore++
            break;
        case 0:
            winner="Tie";
    }
    writeToSummary(winner);
    
    writeToSummary("Play score: " + playerScore + ", Computer score: " + computerScore);

    if (playerScore == 5 || computerScore == 5) {
        showWinner();
    }
    return result;
}

function showWinner() {
    let winner = "Tied";
    if (playerScore > computerScore) {
        winner = "Player";
    } else if (computerScore > playerScore) {
        winner = "Computer";
    }
    writeToSummary(winner + " won!");
}

function writeToSummary(myText) {
    const container = document.querySelector('#container');
    const resultDiv = document.createElement('p');
    resultDiv.textContent = myText;
    container.appendChild(resultDiv);
}

function playRound(e) {
    let result = 0;
    let playerSelection = e.target.dataset.sel;
    let computerSelection = computerPlay();
    let playerSel = convertSel(playerSelection);
    let computerSel = convertSel(computerSelection);
    writeToSummary("Player selected: " + playerSel + ", Computer selected: " + computerSel);
    if (playerSel == "PAPER" && computerSel == "SCISSORS") {
        result = 2;
    } else if (playerSel == "PAPER" && computerSel == "ROCK") {
        result = 1;
    } else if (playerSel == "ROCK" && computerSel == "PAPER") {
        result = 2;
    } else if (playerSel == "ROCK" && computerSel == "SCISSORS") {
        result = 1;
    } else if (playerSel == "SCISSORS" && computerSel == "PAPER") {
        result = 1;
    } else if (playerSel == "SCISSORS" && computerSel == "ROCK") {
        result = 2;
    }
    return result;
    /*
    if (result) {
        //return (`"You Win! ${ playerSel } beats ${ computerSel }"`);
        return 1;
    }
    else {
        return 0;
        //return (`"You Lose! ${ computerSel } beats ${ playerSel }"`);
    }*/
}

function game() {
    //Play 5 rounds, log score, report winner at end
    let playerWon = 0;
    let computerWon = 0;
    for (i = 1; i <= 5; i++) {
        gameResult = displayWinner(playChoice);
        if (gameResult == 1) {
            playerWon++;
            console.log("Player won");
        } else if (gameResult == 2) {
            console.log("Computer won");
            computerWon++;
        } else {
            console.log("Tie");
        }
    }
    let winner = "Tied";
    if (playerWon > computerWon) {
        winner = "Player";
    } else if (computerWon > playerWon) {
        winner = "Computer";
    }
    console.log("Winner: " + winner);
}

const buttons = document.querySelectorAll('button');
function playRound1(e) {
    console.log('sel: ' + e.target.dataset.sel);
    console.log(e);
}
buttons.forEach(button => button.addEventListener('click', displayWinner));