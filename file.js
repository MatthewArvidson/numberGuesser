//Global Variables.
var solution = randomNumGen();
console.log(solution)
var guessNumberBox = document.getElementById('guess-input');
var resetBtn = document.querySelector('.reset-btn')
var clearBtn = document.querySelector('.clear-btn')
var submitBtn = document.getElementById('submit-btn');
var currentGuessDisplay = document.querySelector(".current-guess-display")
var highLow = document.querySelector(".high-low")
//Event Listeners
resetBtn.addEventListener('click', function (event) {
  event.preventDefault()
  window.location.reload(true)})
guessNumberBox.addEventListener('input', toggleDisable)
resetBtn.addEventListener('click', resetGame)
submitBtn.addEventListener('click', manageGuess)
//Functions
//Random number generator: between 1-100
function randomNumGen(){
  return Math.floor(Math.random() * 100 + 1);
}
function manageGuess(){
  resetBtn.disabled = false;
  var input = guessNumberBox.value;
  var inputInt = parseInt(input, 10);
  console.log('inputInt in event listener: ', inputInt)
  currentGuessDisplay.innerText = inputInt
  guessNumberBox.value = ""
  checkGuess(inputInt)
}
function toggleDisable() {
  if (guessNumberBox.value === "") {
    submitBtn.disabled = true;
    clearBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
    clearBtn.disabled = false;
  }
}
function resetGame() {
  guessNumberBox.value = ""
  submitBtn.disabled = true;
  clearBtn.disabled = true;
  currentGuessDisplay.innerText = "00";
  resetBtn.disabled = true;
  highLow.innerText = ""
}
//Compares the user input vs the randomNumGen: Give alerts if anything else.
function checkGuess(guessedNum){
  if (guessedNum < 0 || guessedNum > 100) {
    alert ("Oops! The number you guess needs to be between 1 and 100, you silly goose!")
  }
  else if (guessedNum === solution) {
      highLow.innerText = "Boom! Great work! You're so smart! You guessed the secret number and won a million dollars!"
      console.log("win")
  }
  else if (guessedNum > solution) {
      highLow.innerText = "You guessed too high!"
      console.log(solution)
  }
  else if (guessedNum < solution) {
      highLow.innerText = "You guessed too low!"
      console.log(solution)
  }
  else {
    alert ("Oops! You need to enter a whole number between 1 and 100, you giant pile of crazy!")
  }}
