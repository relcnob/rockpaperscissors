// RPM game
document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

function initGame() {
  let playerChoice = "";
  let computerChoice = "";
  document.querySelector("#player1").className = "player";
  document.querySelector("#player2").className = "player";
  //   add event listeners for buttons

  document
    .querySelector("#buttons .rock")
    .addEventListener("click", pChoice_rock);
  document
    .querySelector("#buttons .paper")
    .addEventListener("click", pChoice_paper);
  document
    .querySelector("#buttons .scissors")
    .addEventListener("click", pChoice_scissors);
}

function pChoice_rock() {
  console.log("Player clicked rock");
  playerChoice = "rock";
  startGame();
}

function pChoice_paper() {
  console.log("Player clicked paper");
  playerChoice = "paper";
  startGame();
}

function pChoice_scissors() {
  console.log("Player clicked scissors");
  playerChoice = "scissors";
  startGame();
}

function startGame() {
  let choiceArray = ["rock", "paper", "scissors"];
  computerChoice = choiceArray[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
  console.log("computerChoice = " + computerChoice);
  //   hide previous outcome
  document.querySelector("#draw").className = "hidden";
  document.querySelector("#win").className = "hidden";
  document.querySelector("#lose").className = "hidden";
  //   init animations
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", showOutcome);
}

function showOutcome() {
  const player = document.querySelector("#player1");
  const computer = document.querySelector("#player2");
  player.className = "player " + playerChoice;
  computer.className = "player " + computerChoice;

  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    // playerWin();
    console.log("player wins");
    document.querySelector("#win").classList.remove("hidden");
  } else if (
    (computerChoice == "rock" && playerChoice == "scissors") ||
    (computerChoice == "paper" && playerChoice == "rock") ||
    (computerChoice == "scissors" && playerChoice == "paper")
  ) {
    console.log("computer wins");
    document.querySelector("#lose").classList.remove("hidden");
  } else {
    console.log("draw");
    document.querySelector("#draw").classList.remove("hidden");
  }
}
