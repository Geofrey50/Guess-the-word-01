const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterGuess = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessNumber = document.querySelector(".remaining span");
const guessDisplay = document.querySelector(".message");
const replayButton = document.querySelector(".play-again");

const word = "magnolia";

// Updating the word guesswork
const updateWordGuess = function (word) {
    const guessedWordLetters = [];
    for (const letter of word) {
        console.log(letter);
        guessedWordLetters.push("●");
    }
    wordInProgress.innerText = guessedWordLetters.join("");
};

updateWordGuess(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const input = letterGuess.value;
    console.log(input);
    letterGuess.value = "";
});

