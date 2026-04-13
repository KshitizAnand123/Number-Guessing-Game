const generatedNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
    const input = window.prompt("Guess a number between 1 and 100:");

    if (input === null) {
        alert("You quit the game.");
        break;
    }

    const userGuess = parseInt(input, 10);

    if (isNaN(userGuess)) {
        alert("Please enter a valid number!");
        continue;
    }

    if (userGuess < 1 || userGuess > 100) {
        alert("Please enter a number between 1 and 100.");
        continue;
    }

    if (userGuess === generatedNumber) {
        alert("Congratulations! You won.");
        break;
    }

    const message = userGuess < generatedNumber ? "Too low! Make a larger guess." : "Too high! Make a smaller guess.";
    alert(message);
}