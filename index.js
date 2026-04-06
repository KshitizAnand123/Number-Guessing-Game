const generatedNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
    const input = window.prompt("Guess a number between 1 and 100:");

    if (input === null) break;

    const userGuess = parseInt(input, 10);

    if (isNaN(userGuess)) {
        alert("Please enter a valid number!");
        continue;
    }

    if (userGuess === generatedNumber) {
        console.log("Congratulations! You won.");
        break;
    }

    const message = userGuess < generatedNumber ? "Make a larger guess" : "Make a smaller guess";
    alert(message);
}