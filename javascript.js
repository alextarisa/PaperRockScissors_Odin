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
            humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log("Draw! Nobody wins!");
    }
    else {
        console.log("You lost! " + computerChoice + " beats "+ humanChoice);
        computerScore++;
    }
  
}

function playGame() {
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice);
        console.log(computerChoice);
    
        if ((humanChoice === "rock" && computerChoice === "scissors") 
            || (humanChoice === "paper" && computerChoice === "rock") 
            || (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore++;
        } else if (humanChoice === computerChoice) {
            console.log("Draw! Nobody wins!");
        }
        else {
            console.log("You lost! " + computerChoice + " beats "+ humanChoice);
            computerScore++;
        }
      
    }

    let humanScore = 0;
    let computerScore = 0;
    let humanSlection;
    let computerSelection;

    for (let i=0; i<5; i++) {
        humanSlection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSlection, computerSelection);
    }

    console.log(humanScore);
    console.log(computerScore);


}

playGame();