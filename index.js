// Number Guessing Game
/*
Workflow:
1. The computer generates a random number
2. User inputs a number
3. If user_input == generated_number, then game over
   else
    the computer indicates whether the generated_number < user_input or generated_number > user_input
4. Asks the user for another guess
5. User inputs again
6. The process repeats
*/

var generated_number = Math.floor(Math.random()*100) + 1;
var user_input;
guess = () => {
    user_input = parseInt(window.prompt("Guess a number between 1 to 100"));
}
guess();

while (user_input !== generated_number){
    if (user_input < generated_number)
        alert("Make a larger guess")
    else
        alert("Make a smaller guess")

    guess();
}
        
// document.getElementById("myH1").textContent = "Congratulations! You won."
console.log("Congratulations! You won.")
