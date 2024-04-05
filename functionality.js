let computer;
let result = '';
let playerScore = 0;
let comScore = 0;
let round = 0;
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
    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () =>{
        player = "rock";
        computer = getComputerChoice();
        playgame();
    })
    let paper = document.querySelector("#paper");
    paper.addEventListener("click", () =>{
        player = "paper";
        computer = getComputerChoice();
        playgame();
    })
    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () =>{
        player = "scissors";
        computer = getComputerChoice();
        playgame();
    })
}
function playgame(){
    round++;
    if(round <= 10){
        if(computer === "rock"){
            if(player === "rock"){
                result = "Tie | rock = rock";
            }else if(player === "paper"){
                result="You win | rock < paper";
                playerScore++;
            }else if(player === "scissors"){
                result="You lose | rock > scissors";
                comScore++;
            }
        }else if(computer === "scissors"){
            if(player === "rock"){
                result="You Win | scissors < rock";
                playerScore++;
            }else if(player === "paper"){
                result="You Lose | scissors > paper";
                comScore++;
            }else if(player === "scissors"){
                result="Tie| scissors = scissors";
            }
        }else if(computer === "paper"){
            if(player === "rock"){
                result="You win | paper > rock";
                playerScore++;
            }else if(player === "paper"){
                result="Tie | paper = paper";
            }else if(player === "scissors"){
                result="You Lose | paper < scissors";
                comScore++;
            }
        }
        gameScoring(); 
    }
}
function gameScoring(){

    const scoreBoard = document.querySelector("#scoreBoard");
    let score = document.createElement("div");
    score.classList.add("rounds");
    score.textContent = result;
    scoreBoard.appendChild(score);

    const player = document.querySelector("#scorePlayer")
    let scorePlayer = document.createElement('div');
    scorePlayer.textContent = playerScore;
    player.replaceChildren(scorePlayer);
    
    const com = document.querySelector("#scoreCom");
    let scoreCom = document.createElement('div');
    scoreCom.textContent = comScore;
    com.replaceChildren(scoreCom);

    setWinner();
}
function setWinner(){
    if (round===10){
        if(playerScore > comScore){
            alert("player wins!");
        }else if(comScore > playerScore){
            alert("computer wins!");
        }
        else if(comScore === playerScore){
            alert("it'sa tie");
        }
    }
}
getPlayerChoice();

