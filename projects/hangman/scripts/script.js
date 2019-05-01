"use strict";

const words = {
  cities: ["warsaw", "london", "berlin", "moscow", "paris"],
  countries: ["poland", "england", "germany", "russia", "france"],
  colors: ["white", "red", "blue", "yellow", "black", "orange", "green"],
  elements: ["water", "earth", "fire", "air"],
};

const classes = [
  "cities",
  "countries",
  "colors",
  "elements",
];

const hangmanFunctions = [
  foundation,
  pole,
  beam,
  rope,
  head,
  torso,
  leftHand,
  rightHand,
  leftLeg,
  rightLeg
];

var hangmanFunctionsCounter = 0;

var canvas = document.getElementById("hangman");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "#fff";
ctx.lineWidth = 2;

function foundation() {
  ctx.beginPath();
  ctx.moveTo(15, 165);
  ctx.lineTo(165, 165);
  ctx.stroke();
}

function pole() {
  ctx.moveTo(25, 165);
  ctx.lineTo(25, 15);
  ctx.stroke();
}

function beam() {
  ctx.moveTo(15, 20);
  ctx.lineTo(85, 20);
  ctx.stroke();
}

function rope() {
  ctx.moveTo(75, 20);
  ctx.lineTo(75, 30);
  ctx.stroke();
}

function head() {
  ctx.moveTo(85, 40);
  ctx.arc(75, 40, 10, 0, Math.PI * 2, true);
  ctx.stroke();
}

function torso() {
  ctx.moveTo(75, 50);
  ctx.lineTo(75, 85);
  ctx.stroke();
}

function leftHand() {
  ctx.moveTo(75, 60);
  ctx.lineTo(35, 65);
  ctx.stroke();
}

function rightHand() {
  ctx.moveTo(75, 60);
  ctx.lineTo(115, 65);
  ctx.stroke();
}

function leftLeg() {
  ctx.moveTo(75, 85);
  ctx.lineTo(35, 115);
  ctx.stroke();
}

function rightLeg() {
  ctx.moveTo(75, 85);
  ctx.lineTo(115, 115);
  ctx.stroke();
}

const alphabetButtons = document.querySelectorAll("#alphabet > button");

var categoryName = classes[Math.round(Math.random() * (classes.length - 1))];
var champion = Math.round(Math.random() * (words[categoryName].length - 1));
var currentWord = words[categoryName][champion];

document.getElementById("category").textContent = categoryName;

var letters = currentWord.split("");
var displayedWord = [...letters];

for (let i = 0; i < letters.length; i++) {
  displayedWord[i] = "_";
}

var underscores = "";

for (let i = 0; i < letters.length; i++) {
  underscores += "_ ";
}

document.querySelector("#word").textContent = underscores;

function removeAlphabetEventListeners() {
  for (let i = 0; i < alphabetButtons.length; i++) {
    alphabetButtons[i].removeEventListener("click", handleAlphabetButtonClick);
  }
}

function insertLetter(letter) {
  let amountOfLifes = document.querySelector("#amountOfLifes");

  for (let i = 0; i < letters.length; i++) {
    if (!letters.includes(letter)) {
      hangmanFunctions[hangmanFunctionsCounter]();
      hangmanFunctionsCounter++;

      if (amountOfLifes.textContent === "1") {
        document.querySelector("#amountOfLifes").parentNode.textContent =
          "Game Over";
        removeAlphabetEventListeners();
        break;
      }

      amountOfLifes.textContent = (
        parseInt(amountOfLifes.textContent) - 1
      ).toString();

      break;
    }

    if (letter === letters[i]) {
      displayedWord[i] = letter;
    }

    if (!displayedWord.includes("_")) {
      removeAlphabetEventListeners();
      document.querySelector("#gameStatus").innerHTML = "You win!";
    }
  }

  let result = "";

  for (let i = 0; i < letters.length; i++) {
    result += displayedWord[i] + " ";
  }

  return result;
}

for (let i = 0; i < alphabetButtons.length; i++) {
  alphabetButtons[i].addEventListener(
    "click",
    handleAlphabetButtonClick,
    false
  );
}

function handleAlphabetButtonClick(e) {
  e.currentTarget.classList.add("usedLetter");
  e.currentTarget.removeEventListener("click", handleAlphabetButtonClick);
  document.querySelector("#word").textContent = insertLetter(
    e.currentTarget.textContent
  );
}

function handlePlayAgainClick(e) {
  hangmanFunctionsCounter = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  document.querySelector("#gameStatus").innerHTML =
    "You have <span id='amountOfLifes'>10</span> lives";
  //pick a random word
  categoryName = classes[Math.round(Math.random() * (classes.length - 1))];
  champion = Math.round(Math.random() * (words[categoryName].length - 1));
  currentWord = words[categoryName][champion];
  letters = currentWord.split("");
  displayedWord = [...letters];

  document.getElementById("category").textContent = categoryName;

  for (let i = 0; i < letters.length; i++) {
    displayedWord[i] = "_";
  }

  //set initial underscores in place of the future solution
  underscores = "";
  for (let i = 0; i < letters.length; i++) {
    underscores += "_ ";
  }

  document.querySelector("#word").textContent = underscores;

  for (let i = 0; i < alphabetButtons.length; i++) {
    alphabetButtons[i].addEventListener(
      "click",
      handleAlphabetButtonClick,
      false
    );
  }

  //reset alphabet buttons' style
  for (let i = 0; i < alphabetButtons.length; i++) {
    alphabetButtons[i].classList.remove("usedLetter");
  }
}

document
  .querySelector("#playAgain")
  .addEventListener("click", handlePlayAgainClick, false);
