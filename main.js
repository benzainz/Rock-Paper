


function getComputerChoice(){
        let rdmNumber = Math.floor(Math.random() * 3);

        if (rdmNumber === 0 ){
                myNumberString = rdmNumber.toString();
                if (myNumberString === '0'){
                 return "rock";
                }     
                
         }
         if (rdmNumber === 1 ){
                myNumberString = rdmNumber.toString();
                if (myNumberString === '1'){
                 return "paper";
                }     
                
         }
         if (rdmNumber === 2 ){
                myNumberString = rdmNumber.toString();
                if (myNumberString === '2'){
                 return "scissors";
                }     
                
         }

}
//console.log(getComputerChoice());

var playerSelection = "rock";
console.log("your choice:        " + playerSelection);
var computerSelection = getComputerChoice();
console.log("computer choice:    " + computerSelection);



console.log(playRound(playerSelection,computerSelection));

function playRound (playerSelection, computerSelection){
        if (playerSelection == computerSelection){
                console.log ("tie");
        }
        if (playerSelection == "rock" && computerSelection == "scissors"){
                console.log ("You win");
        
        }
        if (playerSelection == "rock" && computerSelection == "paper"){
                console.log ("You Lose! Paper beats Rock");
        
        }
        if (playerSelection == "scissors" && computerSelection == "paper"){
                console.log ("You win");
        
        }
        if (playerSelection == "scissors" && computerSelection == "rock"){
                console.log ("You Lose! Rock beats Scissors");
        
        }if (playerSelection == "paper" && computerSelection == "rock"){
                console.log ("You win");
        
        }
        if (playerSelection == "paper" && computerSelection == "scissors"){
                console.log ("You Lose! Scissors beats Paper");
        
        }
        
        }
        