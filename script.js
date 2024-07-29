const choices = ["rock", "paper", "scissors"];
const winners = [];

function resetGame() {
    //reset game
}

function playGame() {
    // play the game until someone wins five times
    let imgs = document.querySelectorAll('img')
    imgs.forEach((img) =>
    img.addEventListener(('click'), () => {
        if (img.id) {
        }
      })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if(wins >= 5){
        return
    }

    const computerSelection = getComputerChoice();

    const winner = checkWinner(humanSelection, computerSelection);

    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5){
        //display end results
        //change the button to visible
        //change the text to display winner
        displayEnd()
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if (playerWins == 5) {
        document.querySelector(".winner").textContent = "You Won 5 Games, Congrats!";
    } else {
        document.querySelector(".winner").textContent = "Sorry, The Computer Won 5 Times";
    }
    document.querySelector(".reset").style.display = "flex";
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `You Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    document.querySelector('winner').textContent = `Round Winner: ${winner}`;
}

function tallyWins() {
    let playerWins = winners.filter((item) => item == "You Win!").length;
    let computerWins = winners.filter((item) => item == "Computer Wins!").length;
    let ties = winners.filter((item) => item == "It's a tie!").length;
    document.querySelector('.playerScore').textContent = `Score${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score${computerWins}`;
    document.querySelector('.ties').textContent = `Score${ties}`;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
    //get random input for computer
    //use Math.Random to generate random string
}

function checkWins() {
    let playerWins = winners.filter((item) => item == "You Win!").length;
    let computerWins = winners.filter((item) => item == "Computer Wins!").length;
    return Math.max(playerWins,computerWins)
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
    //log the winner of each round and increment the score
}

//startGame();