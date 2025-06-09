//check if js is working correctly
console.log("Hello World");

//create a function called getComputerChoice
function getComputerChoice() {
    //create a variable that contains the string "rock"
    const rock = "rock";

    //create a variable that contains the string "paper"
    const paper = "paper";

    //create a variable that contains the string "scissors"
    const scissors = "scissors";

    //create a variable that stores a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);
    //if variable is 0, return rock
        //if variable is 1, return paper
            //if variable is 2, return scissors
    return randomNumber == 0 ? 
    rock : randomNumber == 1 ?
    paper : scissors;
};
//check if our function is working
//console.log(getComputerChoice());

//create a function named getHumanChoice
function getHumanChoice() {
    //prompt the user to choose their move
    let choice = prompt("What's your move?");
    return choice;
};

//test if our function is working
//console.log(getHumanChoice());

//create two variables that track human and computer score
//initialize both variables to 0
let humanScore = 0;
let computerScore = 0;

//create a function for the game that takes human and computer choices as arguments
function playRound(humanChoice, computerChoice) {

    //make human choice case insensitive
    let humanChoiceInsensitive = humanSelection.toLowerCase();

    if (humanChoiceInsensitive === computerChoice) {
        console.log("It's a tie!");
    }
    //write the cases for when the human wins
    else if (humanChoiceInsensitive == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (humanChoiceInsensitive == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (humanChoiceInsensitive == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beat Paper.");
        humanScore++;
    }
    else {
        console.log("You lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
}
    //create the logic for the game. if same choice = tie and no score change
    //if rock vs scissors, rock wins, adds one point
    //if paper vs rock, paper wins, adds one point
    //if scissors vs paper, scissors wins, adds one point
    //display to console the result of the round

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);




