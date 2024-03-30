function getComputerChoice(){
    let randomNum = Math.floor(Math.random() * 30);
    if (randomNum <= 10){
        return "rock";
    }else if (randomNum >=11 && randomNum <=20){
        return "paper";
    }else if(randomNum >=21){
        return "scissors";
    }
}
function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper, Scissors GO!");
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === "rock"){
        return "rock";
    }else if(playerChoice === "scissors"){
        return "scissors";
    }else if(playerChoice === "paper"){
        return "paper";
    }else{
        console.log("Not an option");
    }
}
function playgame(){
    if(computer === "rock"){
        if(player === "rock"){
            console.log("Tie | rock = rock");
        }else if(player === "paper"){
            console.log("You win | rock < paper");
        }else if(player === "scissors"){
            console.log("You lose | scissors < rock");
        }
    }else if(computer === "scissors"){
        if(player === "rock"){
            console.log("You Win | scissors < rock");
        }else if(player === "paper"){
            console.log("You Lose | scissors > paper");
        }else if(player === "scissors"){
            console.log("Tie| scissors = scissors");
        }
    }else if(computer === "paper"){
        if(player === "rock"){
            console.log("You win | paper > rock");
        }else if(player === "paper"){
            console.log("Tie | paper = paper");
        }else if(player === "scissors"){
            console.log("You Lose | scissors > paper");
        }
    }
}
let computer = getComputerChoice();
let player = getPlayerChoice();
playgame();