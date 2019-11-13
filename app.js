
function updateStatus(compChoice, results) {
  let status = document.querySelector("#status");
  let compText = document.querySelector("#comp-text");

  status.innerHTML = `
  <h4 class="text-center">Computer chose ${compChoice}</h4>
  <h1 class="text-center">${results}</h1>
  `;

  compText.innerText = `${compChoice.toUpperCase()}!`;
  compSetImage(compChoice);
}

function compSetImage(compChoice) {
  let compImg = document.querySelector(".comp-img");
  if (compChoice == "rock") {
    compImg.setAttribute("src", "http://stevedilworth.com/land/images/fire%20rock.jpg");
  } else if (compChoice == "paper") {
    compImg.setAttribute("src", "https://i.pinimg.com/originals/fc/c3/51/fcc3513bf52d83fbb157863a2041b7a0.jpg");
  } else {
    compImg.setAttribute("src", "https://am21.akamaized.net/tms/cnt/uploads/2010/03/scissor-spider-550x366.jpg");
  }
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
      results = "DRAW!";
    }
  } else if (compRandomChoice == 2) {
    compChoice = "paper";
    if (playerChoice == "rock") {
      results = "You Lose!";
    } else if (playerChoice == "scissors") {
      results = "You Win!";
    } else {
      results = "DRAW!";
    }
  } else {
    compChoice = "scissors";
    if (playerChoice == "paper") {
      results = "You Lose!";
    } else if (playerChoice == "rock") {
      results = "You Win!";
    } else {
      results = "DRAW!";
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