//create a variable that takes user input via prompt

//create a variable that stores the result of the function randomGenerate

//create a function named ranomGenerate that randomly selects rock,paper,scissor
function randomGenerate(){
    let arr = ["rock", "paper", "scissors"];
    let ranResult = arr[(Math.floor(Math.random() * arr.length))];
    return ranResult;
}
// create a function called playRound() that takes 2 parameters the user input and the computer generated input
function playRound(playerSelection, computerSelection){
    let flag = 0; // 0 if player losses 1 if won
    let playResult;
    if (playerSelection === computerSelection){
        playResult = `its a tie both are ${playerSelection}`;
        flag = 2;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        flag = 1;
        playResult =  `you won! ${playerSelection} against ${computerSelection}`;
    } else {
        playResult = `computer won using ${computerSelection} against your ${playerSelection}`;
    }
    return {
        flag, 
        playResult
    };
}
//the function playRound() will compare the two parameters and return the result 

// finally create a game() function that uses the previous function top play a 5 round game
function game(){
    let i = 1;
    let playerScore = 0;
    let computerScore = 0;
    while(i <= 5){
        let playerSelection = prompt("Rock, Paper, Scissors GO!: ").toLowerCase();
        let computerSelection = randomGenerate();
        const result = playRound(playerSelection, computerSelection);
        if(result.flag === 2){
            computerScore++;
            playerScore++;
        } else if(result.flag === 1){
            playerScore++;
        } else {
            computerScore++;
        }
        console.log(`Round ${i}: ${result.playResult}`);
        
        i++;
    }
    if (playerScore > computerScore){
        console.log(`${playerScore} :: ${computerScore}, Player Won!!!!`);
    } else if (playerScore === computerScore){
        console.log(`${playerScore} :: ${computerScore}, Its a Tie!!!!`);
    } else {
        console.log(`${playerScore} :: ${computerScore}, Comouter Won!!!!`);
    }

}
// that keeps score and reports a winner or loser at the end
game();

/*let playerScore = 0;
    let computerScore = 0;
    let result = playRound(playerSelection, computerSelection);
    console.log(result.playResult);
    if(result.flag === 2){
        computerScore++;
        playerScore++;
    } else if(result.flag === 1){
        playerScore++;
    } else {
        computerScore++;
    }
    console.log(result.flag);
    console.log(`playerscore: ${playerScore}`);
    console.log(`computerscore: ${computerScore}`);
    */
   