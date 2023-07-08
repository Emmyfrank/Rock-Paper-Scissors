
// 1 computer choice function
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissor"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// 2 function to determine winner

let playerScore = 0;
let computerScore = 0;

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
      return "It's a tie";
  } else if (
      (playerChoice === "Rock" && computerChoice === "Scissor") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissor" && computerChoice === "Paper")
  ) {
      playerScore++;
      return `You win! ${playerChoice} beats ${computerChoice}`;
  } else {
      computerScore++;
      return `Oops, you lose! ${computerChoice} beats ${playerChoice}`;
  }
}

// playing game function

function game(playerChoice) {

  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  
  console.clear();
  
  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  console.log(result);
  console.log("\n \n");
}

// 4 while loop to iterate until score be 5 points

let round = 1;

while (playerScore < 5 && computerScore < 5) {

  let playerChoice1 = prompt("Enter :\nRock,\n Paper,\n or Scissor\n: ");
  let playerChoice = playerChoice1.charAt(0).toUpperCase() + playerChoice1.slice(1).toLowerCase();
  game(playerChoice);

  round++;
}

// 5 if clause to determine a game winner.

if (playerScore === computerScore) {
  console.log("Game over, it's a draw");
} else if (playerScore > computerScore) {
  console.log("Congratulations! You win the game!");
} else {
  console.log("Sorry, you lose the game!");
}