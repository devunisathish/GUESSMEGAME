let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function checkGuess() {
  let guess = parseInt(document.getElementById("guess").value);
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    document.getElementById("feedback").textContent = "Please enter a valid number between 1 and 100.";
  } else {
    guessCount++;
    document.getElementById("guesses").textContent = guessCount;
    if (guess === secretNumber) {
      document.getElementById("feedback").textContent = "Congratulations! You guessed the number.";
      document.getElementById("guess").setAttribute("disabled", true);
    } else if (guess > secretNumber) {
      document.getElementById("feedback").textContent = "Too high! Guess again.";
    } else {
      document.getElementById("feedback").textContent = "Too low! Guess again.";
    }
  }
}

