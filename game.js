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
    let choice = prompt("Enter your choice")
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("Enter your choice")
    }
    return choice;
}

console.log(getComputerChoice())