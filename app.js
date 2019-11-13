
function updateStatus(compChoice, results) {
  document.querySelector("#status").innerHTML = `
  <h4 class="text-center">Computer chose ${compChoice}</h4>
  <h1 class="text-center">${results}</h1>
  `;
}

//PLAY//
function play(playerChoice) {
  //1 = Rock, 2 = Paper, 3 = Scissors
  let compRandomChoice = Math.floor(Math.random() * 3) + 1;
  let compChoice = "";
  let results = "";

  if (compRandomChoice == 1) {
    compChoice = "rock";
    if (playerChoice == "scissors") {
      results = "You Lose!";
    } else if (playerChoice == "paper") {
      results = "You Win!";
    } else {
      results = "Draw!";
    }
  } else if (compRandomChoice == 2) {
    compChoice = "paper";
    if (playerChoice == "rock") {
      results = "You Lose!";
    } else if (playerChoice == "scissors") {
      results = "You Win!";
    } else {
      results = "Draw!";
    }
  } else {
    compChoice = "scissors";
    if (playerChoice == "paper") {
      results = "You Lose!";
    } else if (playerChoice == "rock") {
      results = "You Win!";
    } else {
      results = "Draw!";
    }
  }
  updateStatus(compChoice, results);
}

function chooseRock() {
  play("rock");
}

function choosePaper() {
  play("paper");
}

function chooseScissors() {
  play("scissors");
}