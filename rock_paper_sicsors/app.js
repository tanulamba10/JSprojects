let userScore = 0;
let sysScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const sysScoreBoard = document.querySelector("#computer-score");

const genSysChoice = () => {
    //rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "The game was draw! Play again."
    msg.style.backgroundColor = "#5E503F";
}

const showWinner = (userWin, userChoice, sysChoice) => {
    if (userWin) {
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${sysChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        sysScore++;
        sysScoreBoard.innerText = sysScore;
        msg.innerText = `You lose. ${sysChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //generate computer choice
    const sysChoice = genSysChoice();

    if (userChoice === sysChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = sysChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = sysChoice === "scissors" ? false : true
        } else {
            userWin = sysChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, sysChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
})