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

console.log(getComputerChoice())