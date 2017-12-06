var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var myGuesses = [];
console.log(myGuesses);

// Set all variables to their starting state, 0 wins, 0 losses and 8 guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 8;

// Randomly pick a letter form the letters array
function letterGuess(){
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("computer guess is " + computerGuess);
    return computerGuess;
}

// A reset function that sets everything to its default state
function reset(){
    // reset # of guesses left
    guessesLeft = 8;
    document.querySelector("#guessLeft").innerHTML = guessesLeft;
    // resets myGuesses array
    myGuesses = [];
    document.querySelector("#myGuess").innerHTML = myGuesses;
    // resets the computer guess
    computerGuess;
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log("new computer guess is " + computerGuess);
    var userGuess;
    return computerGuess;
}

var computerGuess = letterGuess();
// Main event that happens when a key is pressed by the user
document.onkeyup = function(event){
    //storing user guess in a variable
    var userGuess = event.key.toLowerCase();

    if (userGuess === computerGuess){
        // increment wins by 1, assign the new wins variable to the html element with the wins ID
        wins++; 
        document.querySelector("#wins").innerHTML = wins;
        console.log("my guess is " + userGuess);
        computerGuess = reset();
    }

    else{
        // Decrement guesses left, assign that new value to the html element with the guessLeft ID, and push the guesses made by the user to the myGuesses array
        if (guessesLeft > 1){
            guessesLeft--;
            document.querySelector("#guessLeft").innerHTML = guessesLeft;
            myGuesses.push(userGuess);
            document.querySelector("#myGuess").innerHTML = myGuesses;
        }

        else{
            losses++;
            document.querySelector("#losses").innerHTML = losses;
            computerGuess = reset();
        }
    }
}