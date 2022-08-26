// RPM game

document.addEventListener("DOMContentLoaded", initGame);

function initGame() {
  // reset sprites
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
  playerChoice = "rock";
  startGame();
}

function pChoice_paper() {
  playerChoice = "paper";
  startGame();
}

function pChoice_scissors() {
  playerChoice = "scissors";
  startGame();
}

function startGame() {
  const choiceArray = ["rock", "paper", "scissors"];
  computerChoice = choiceArray[Math.floor(Math.random() * 3)];
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
    document.querySelector("#win").classList.remove("hidden");
  } else if (computerChoice == playerChoice) {
    document.querySelector("#draw").classList.remove("hidden");
  } else {
    document.querySelector("#lose").classList.remove("hidden");
  }
}
