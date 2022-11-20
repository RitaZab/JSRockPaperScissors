const showPlayerChoice = document.getElementById("playerChoice")
const showComputerChoice = document.getElementById("computerChoice")
const showResult = document.getElementById("result")
const choices = document.getElementsByClassName("button")
const pPoints = document.getElementById("player-points")
const cPoints = document.getElementById("computer-points")
const rockicon = document.createElement("img")
rockicon.src="icons/stone.png"
const papericon = document.createElement("img")
papericon.src="icons/paper.png"
const scissorsicon = document.createElement("img")
scissorsicon.src="icons/scissors.png"
let playerChoice;
let computerChoice;
let result;
let ppoints = 0;
let cpoints = 0

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
                result = "You win!"
                break
            case "scissors":
                result = "You lose!"
                break
        }
    }
    if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                result ="You lose!"
                break
            case "paper":
                result = "You win!"
                break
        }
    }
                
     
        
    console.log(result)
    showResult.innerHTML = result
}
        
function showingPlayerChoice() {
    if (playerChoice === "rock") {
        document.querySelector(".player-icon").appendChild(rockicon)
    }
}   
function generateComputerChoice() {
    const generatedNumber = Math.floor(Math.random() * 3)
    
        switch (generatedNumber) {
            case 0:
                computerChoice = "rock"
                
                document.querySelector(".computer-icon").appendChild(rockicon)
                break
            case 1:
                computerChoice = "paper"
                document.querySelector(".computer-icon").appendChild(papericon)
                break
            case 2:
                computerChoice = "scissors"
                document.querySelector(".computer-icon").appendChild(scissorsicon)
                             
                break
        }
        
        showComputerChoice.innerHTML = computerChoice;
    }
function countingPoints(){
    if (result === "You win!") {
        ppoints += 1
        pPoints.innerHTML = ppoints
    }
    else {
        if (result === "You lose!") {
            cpoints += 1
            cPoints.innerHTML = cpoints
        }
    }
}
    

    //this three is because we have three choices(paper, rock and scissors), we can also write here choices.length

Array.from(choices).forEach(choice => choice.addEventListener("click", (e) => {
    playerChoice = e.target.id
    
    showPlayerChoice.innerHTML = playerChoice
    showingPlayerChoice()
    generateComputerChoice()
    giveResult()
    countingPoints()
    }))
    


