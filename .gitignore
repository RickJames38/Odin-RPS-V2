let winners = [];
const choices = ["rock", "paper", "scissors"];

function resetGame() {
    winners = [];
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}

function startGame() {
    // play the game until someone wins five times
    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>
    img.addEventListener('click', () => {
        if (img.id) {
            playRound(img.id);
        }
      })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return;
    }

    const computerChoice = computerSelect();

    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);
    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();
    if (wins == 5) {
        //display end results
        //change the button to visible
        //change the text to display winner
        displayEnd();
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
    document.querySelector('.playerChoice').textContent = `You Chose: 
        ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;
    document.querySelector('.computerChoice').textContent = `Computer Chose: 
        ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector("winner").textContent = "You Won the Round!";
    } else if (winner == 'Computer') {
        document.querySelector("winner").textContent = "The Computer Won That Round";
    } else {
        document.querySelector("winner").textContent = "That Round Was A Tie";
    }
}

function tallyWins() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.playerScore').textContent = `Score: ${playerWins}`;
    document.querySelector('.computerScore').textContent = `Score: ${computerWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function computerSelect() {
    //update the dom with the computers selection
    const choice = choices[Math.floor(Math.random() * choices.length)];

    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove("active");
    }, 700);

    return choice;
}

function checkWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins, computerWins);
}

function checkWinner(choice1, choice2) {
    if (
    (choice1 === "rock" && choice2 === "scissors") || 
    (choice1 === "paper" && choice2 === "rock") || 
    (choice1 === "scissors" && choice2 === "paper")
    ) {
        return "Player";
    } else  if (choice1 == choice2) {
        return "Tie";
    } else {
        return "Computer";
    }
}

function winCounter() {
    const playerWins = winners.filter((item) => item == "Player").length;
    const computerWins = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
}

startGame();