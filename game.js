let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let ranNum = Math.random();

    if (ranNum < 0.34){
        return "rock";
    } else if (ranNum >= 0.34 && ranNum < 0.67){
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Enter your choice").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice){
    const winText = "You Win!";
    const loseText = "You Lose!";
    const rockText = "Rock beats Scissors.";
    const paperText = "Paper beats Rock.";
    const scissorsText = "Scissors beats paper";
    
    if (humanChoice == computerChoice){
        return "Draw! You Both Picked the Same."
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerSelection();

playRound(humanSelection, computerSelection)