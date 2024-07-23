const choices = ["rock", "paper", "scissors"];
const winners = [];

function playGame() {
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }
    winCounter();
    //play the game
    //play 5 rounds
    //console based
}

function playRound(round) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    //console.log(computerSelection);
    const winner = checkWinner(humanSelection, computerSelection);
    winners.push(winner);
    logRound(humanSelection, computerSelection, winner, round);
    //console.log(winner);
    //run both user input and generate computer choice
    //check winner of each round 
}

function getHumanChoice() {
    let userInput = prompt("Rock, Paper, Scissors?");
    while (userInput == null) {
        userInput = prompt("Rock, Paper, Scissors?");
    }
    userInput = userInput.toLowerCase();
    let check = checkInput(userInput);
    while (check == false) {
        userInput = prompt("Check your spelling of your input.");
        while (userInput == null) {
            input = prompt("Rock, Paper, Scissors?");
        }
        userInput = userInput.toLowerCase();
        check = checkInput(userInput);
    }
    return userInput;
    //console.log(userInput);
    //get input from player
    //make case insenstive using .toLowerCase
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
    //get random input for computer
    //use Math.Random to generate random string
}

function checkInput(choice) {
    return choices.includes(choice);
    //check to see if user put in valid choice
}

function checkWinner(humanChoice, computerChoice) {
    //console.log(humanChoice, computerChoice);
    if(humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    (humanChoice === "paper" && computerChoice === "rock") || 
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
    //check to see who won the round, computer or user
    //return who won the round
}

function winCounter() {
    let playerWins = winners.filter((item) => item == "You Win!").length;
    let computerWins = winners.filter((item) => item == "Computer Wins!").length;
    let ties = winners.filter((item) => item == "It's a tie!").length;
    console.log("Results:");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties);
    //log the winner of each round and increment the score
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round:", round)
    console.log("Player Chose:", playerChoice);
    console.log("Computer Chose:", computerChoice);
    console.log(winner);
    console.log("--------------------------------");
    //log who won each round and and who's score is higher after 5 rounds 
}

playGame();
//call the funciton to run the game