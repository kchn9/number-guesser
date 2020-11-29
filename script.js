let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate random number
const generateTarget = () => Math.floor(Math.random() * 10);
// compare guesses by comparing distances
const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess > 9) {
        alert('User input out of range!');
        humanGuess = 9;
    }
    const humanDiff = Math.abs(humanGuess - target);
    console.log(humanDiff)
    const computerDiff = Math.abs(computerGuess - target);
    console.log(computerDiff)
    return humanDiff <= computerDiff ? true : false;
};
// update score
const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;
// advance to next round
const advanceRound = function() {
    currentRoundNumber++
};

console.log(compareGuesses(1, 7, 0))