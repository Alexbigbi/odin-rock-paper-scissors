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
    console.log(randomNumber);
    //if variable is 0, return rock
        //if variable is 1, return paper
            //if variable is 2, return scissors
    return randomNumber == 0 ? 
    rock : randomNumber == 1 ?
    paper : scissors;
};
//check if our function is working
console.log(getComputerChoice());



