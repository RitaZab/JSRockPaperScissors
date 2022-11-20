const showPlayerChoice = document.getElementById("playerChoice")
const showComputerChoice = document.getElementById("computerChoice")
const showResult = document.getElementById("result")
const choices = document.getElementsByClassName("button")
let playerChoice;
let computerChoice;
let result;

function giveResult() {
    if (playerChoice === computerChoice) {
        result = "It'a draw"
    }
   
    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "paper":
                result = "You lose!"
                break
            case "scissors":
                result = "You win!"
                break
        }
    }
    if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                result == "You win!"
                break
            case "scissors":
                result == "You lose!"
                break
        }
    }
    if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                result == "You lose!"
                break
            case "paper":
                result == "You win!"
                break
        }
    }
                
     
        
    console.log(result)
    showResult.innerHTML = result
}
        
    
    function generateComputerChoice() {
        const generatedNumber = Math.floor(Math.random() * 3)
        switch (generatedNumber) {
            case 0:
                computerChoice = "rock"
                break
            case 1:
                computerChoice = "paper"
                break
            case 2:
                computerChoice = "scissors"
                break
        }
        
        showComputerChoice.innerHTML = computerChoice;
    }

    

    //this three is because we have three choices(paper, rock and scissors), we can also write here choices.length

Array.from(choices).forEach(choice => choice.addEventListener("click", (e) => {
        playerChoice = e.target.id
        showPlayerChoice.innerHTML = playerChoice
        generateComputerChoice()
        giveResult()
    }))
    


