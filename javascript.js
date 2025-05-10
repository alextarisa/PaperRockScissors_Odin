console.log("Hello");

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        return "rock";
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors: ");
    return choice;
}
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);

    if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock") 
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            round_res.textContent = "You win! " + humanChoice + " beats " + computerChoice
            humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw! Nobody wins!");
        round_res.textContent = "Draw! Nobody wins!"
    }
    else {
        console.log("You lost! " + computerChoice + " beats "+ humanChoice);
        round_res.textContent = "You lost! " + computerChoice + " beats "+ humanChoice;
        computerScore++;
    }
  
}

function playGame() {


    let humanScore = 0;
    let computerScore = 0;
    let humanSlection;
    let computerSelection;



    console.log(humanScore);
    console.log(computerScore);


}

//playGame();
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const res = document.createElement("div");
container.appendChild(res);
const round_res = document.createElement("p");

const count_res_h = document.createElement("p");
const count_res_c = document.createElement("p");

const buttons = document.querySelectorAll("button")

const game_res = document.createElement("p");

buttons.forEach((button) => {
    button.addEventListener("click", () => {


        if (humanScore < 5 && computerScore < 5) {
            let compChoice = getComputerChoice();
            let humanChoice = button.id;
    
            playRound(humanChoice, compChoice);
            res.appendChild(round_res);
    
            count_res_h.textContent = "Human current score is "+humanScore;
            count_res_c.textContent = "Computer current score is "+computerScore;
    
            res.appendChild(count_res_h);
            res.appendChild(count_res_c);

        } else {
            if (humanScore >= 5){
            game_res.textContent = "You won the game!"
            }
            else {
                game_res.textContent = "Computer won the game!"
            }
            res.appendChild(game_res);
        }
 
    })
})