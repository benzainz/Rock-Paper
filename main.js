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
//when i click any of the button do this:
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
//create playerSelection 
 playerSelection = e.target.id;
 userChoiceDisplay.innerHTML = playerSelection;
 //create computerSelection
 getComputerChoice();
 // use both variables (playerSelection and computerSelection) go to the logic and get a result 
 playRound();
}));
//simple method that use math.random to create a number btw 0-2 and then assign its value 
function getComputerChoice(){
        const choices = ['rock','paper','scissors']
        computerSelection = choices[(Math.floor(Math.random() * choices.length))];
        computerChoiceDisplay.innerHTML = computerSelection;

}
// method to get the result between two different strings 
function playRound (){
        switch (playerSelection + computerSelection){
                case 'rockscissors':
                case 'paperrock':
                case 'scissorspaper':
                        userScore++;
                        resultDisplay.innerHTML = "You win!";
                        userScoreDisplay.innerHTML= userScore;
                        computerScoreDisplay.innerHTML= computerScore;
                        break
                case 'paperscissors':
                case 'scissorsrock':                        
                case 'rockpaper':
                        computerScore++;
                        resultDisplay.innerHTML="You lose!";
                        userScoreDisplay.innerHTML= userScore;
                        computerScoreDisplay.innerHTML= computerScore;
                        break
                case 'paperpaper':
                case 'scissorsscissors':
                case 'rockrock':
                        resultDisplay.innerHTML="It's a draw";  
                        break                     

        }

        
        }
