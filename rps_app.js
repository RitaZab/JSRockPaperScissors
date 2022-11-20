const showPlayerChoice = document.getElementById("playerChoice")
const showComputerChoice = document.getElementById("computerChoice")
const showresult = document.getElementById("result")
const choices = document.getElementsByClassName("button")
let playerChoice;
let computerChoice;


console.log("dupa")
console.log(showComputerChoice)
console.log(showPlayerChoice)
console.log(showresult)
console.log(choices)
console.log(playerChoice)

function generateComputerChoice() {
    const generatedNumber = Math.floor(Math.random() * 3)
    switch (generatedNumber) {
        case 1:

    }

    //this three is because we have three choices(paper, rock and scissors), we can also write here choices.length
}
Array.from(choices).forEach(choice => choice.addEventListener("click", (e) => {
    playerChoice = e.target.id
    showPlayerChoice.innerHTML = playerChoice
    generateComputerChoice()
    
}
))
