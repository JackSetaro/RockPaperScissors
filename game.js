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
    const winText = "You Win! ";
    const loseText = "You Lose! ";
    
    let result = "";
    if (humanChoice == computerChoice){
        alert("Draw! You Both Picked the Same.");
    } else if (
    (humanChoice == "rock" && computerChoice == "scissor") ||
    (humanChoice == "paper" && computerChoice == "rock") || 
    (humanChoice == "scissor" && computerChoice == "paper")) {
        alert(result + capatalize(humanChoice) + ' beats ' + capatalize(computerChoice))
        humanScore++;
    } else{
        alert(loseText + capatalize(computerChoice) + ' beats ' + capatalize(humanChoice))
        computerScore ++;
    }
}

function playGame(){
    alert("Welcome to Rock, Paper, Scissors");
    for (i = 1; i <= 5; i++){
        alert("Round: " + i);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
}

function capatalize(word){
    let firstLetter = word.charAt(0);
    let firstLetterCaps = word.toUpperCase(firstLetter);
    return firstLetterCaps + word.slice(1);
}

playGame();

