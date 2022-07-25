var computerChoiceDisplay = document.getElementById('computer-choice');
var userChoiceDisplay= document.getElementById('user-choice');
var resultDisplay = document.getElementById('result');
var userScoreDisplay = document.getElementById('user-score');
var computerScoreDisplay = document.getElementById('computer-score');
var winnerDisplay = document.getElementById('winner-display');

var possibleChoices = document.querySelectorAll('button');
let playerSelection;
let computerSelection;
let result;
let userScore = 0;
let computerScore = 0;
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
 playerSelection = e.target.id;
 userChoiceDisplay.innerHTML = playerSelection;
 getComputerChoice();
 playRound();
}));

function getComputerChoice(){
        let rdmNumber = Math.floor(Math.random() * 3);

        if (rdmNumber === 0 ){
                computerSelection = "rock";  
         }
         if (rdmNumber === 1 ){
                computerSelection = "scissors";
         }
         if (rdmNumber === 2 ){
                computerSelection = "paper";
         }
         computerChoiceDisplay.innerHTML = computerSelection;

}
function playRound (){
        if (playerSelection == computerSelection){
                result = "It's a draw!";
                
        }
        else if (playerSelection == "rock" && computerSelection == "scissors"){
                result = "You win";
                userScore++;
        
        }
        else if (playerSelection == "rock" && computerSelection == "paper"){
                result = "You Lose! Paper beats Rock";
                computerScore++;
        
        }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
                result = "You win";
                userScore++;
        
        }
        else if (playerSelection == "scissors" && computerSelection == "rock"){
                result = "You Lose! Rock beats Scissors";
                computerScore++;

        
        }
        else if (playerSelection == "paper" && computerSelection == "rock"){
                result = "You win";
                userScore++;
        
        }
        else if (playerSelection == "paper" && computerSelection == "scissors"){
                result = "You Lose! Scissors beats Paper";
                computerScore++;

        
        }
        resultDisplay.innerHTML = result;
        userScoreDisplay.innerHTML= userScore;
        computerScoreDisplay.innerHTML= computerScore;        

        if (userScore == 5 ){
                winnerDisplay.innerHTML="YOU'RE THE WINNER!!!"
               // document.removeEventListener('click', playRound);
                possibleChoices.removeEventListener('click')

        }else if (computerScore == 5){
                winnerDisplay.innerHTML="SORRY, YOU LOSE!!!"
               // document.removeEventListener('click', playRound)
                possibleChoices.removeEventListener('click')

        }
        }
