

// this function use Math class to generate a random number which can change it to a string (rock,scissor or paper)
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
var computerSelection = getComputerChoice();
var mydiv = document.getElementById('mydiv');
//mydiv.innerHTML+='hello motofakcer';
//console.log("Computer selection: " + computerSelection)

var paperButton = document.getElementById("pbtn");
var scissorsButton = document.getElementById("sbtn");
var rockButton = document.getElementById("rbtn");

paperButton.addEventListener('click', function(){
        playRound("paper", computerSelection);
       },false);
scissorsButton.addEventListener('click', function(){
        playRound("scissors", computerSelection);
       },false);
rockButton.addEventListener('click', function(){
        playRound("rock", computerSelection);
       },false);


function cambiaColor(){
        paperButton.style.color = "yellow";
}
//this function compares between 2 strings and return a string
function playRound (playerSelection , computerSelection){
        computerSelection = getComputerChoice();
        console.log("Computer selection: "+ computerSelection)
        if (playerSelection == computerSelection){
                return mydiv.innerHTML+="Tie ";
        }
        else if (playerSelection == "rock" && computerSelection == "scissors"){
                //console.log("You win");
        
               return mydiv.innerHTML+='You win! Rock beats scissors ';
        
        }
        else if (playerSelection == "rock" && computerSelection == "paper"){
                //console.log("You Lose!, paper beats rock ");
        
               return mydiv.innerHTML+='you Lost! Paper beats Rock ';
        
        }
        else if (playerSelection == "scissors" && computerSelection == "paper"){
                return mydiv.innerHTML+="You win! Scissors beats Paper ";
        
        }
        else if (playerSelection == "scissors" && computerSelection == "rock"){
                //return "You Lose! Rock beats Scissors";
                return mydiv.innerHTML+="You Lose! Rock beats Scissors ";
        }
        else if (playerSelection == "paper" && computerSelection == "rock"){
                
                return mydiv.innerHTML+="You win! Paper beats Rock ";
                
        
        }
        else if (playerSelection == "paper" && computerSelection == "scissors"){
                
                return mydiv.innerHTML+="You Lose! Scissors beats paper ";
        
        }
        
        
        }
/*
        //we call game which call both functions playRound and getComputerChoice
        game();

        //this function call function playRound (5 times) and return a game winner that 
       function game (){
        
                //get user input here 
                var playerSelection = prompt("Please enter your choice here: ").toLowerCase();
                //test player input
                while (playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper" ){
                        var playerSelection = prompt("Please enter your choice here: (rock, scissors or paper)").toLowerCase();
                        
                }
                var counterWins = 0;
                var counterLoses =0;
                for(var i = 0; i < 5; i++ ){
                        console.log("game: "+ (i+1));
                        console.log("your choice:        " + playerSelection);
                        //every time we call getComputerChoice will generate new value
                        var computerSelection = getComputerChoice();
                        console.log("computer choice:    " + computerSelection);
                        // we call playRound func 5 times 
                        console.log(playRound(playerSelection,computerSelection));
                        var stringResult = playRound(playerSelection,computerSelection);
                        if (stringResult.includes('win')){
                                counterWins++;
                        }
                        else if (stringResult.includes('Lose')){
                                counterLoses++
                        }
                     
                }
                console.log("my total wins =" + counterWins);
                console.log("my total loses =" + counterLoses);
                //a final if conditional to show the winner
                if (counterLoses > counterWins){
                        console.log("Sorry, You Lost!!")
                }
                else if (counterWins > counterLoses){
                        console.log("YOU ARE A WINNER!!")
                }
                else {
                        console.log("ufff!!! Tie game");
                }
   
                
        }
       
      */  