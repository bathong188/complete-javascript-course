'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);

// random 0-69
let secretNumber = Math.trunc(Math.random() * 69 + 1);
console.log(secretNumber);

let highscore = 0;
let score = 100;
// setting default score on html page
document.querySelector('.score').textContent = score;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// BUTTON guess
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // no given number (0)
    if (!guess) {
        displayMessage('⛔ No number given!');

        // player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct number!');
        document.querySelector('.number').textContent = secretNumber;
        // change to green victory background
        document.querySelector('body').style.backgroundColor = '#43A33F';
        // widen score box
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // guess low
    } else if (guess !== secretNumber) {
        if (score > 5) {
            displayMessage(
                guess < secretNumber ? '🔼 Pick higher!' : '🔽 Pick lower!'
            );
            score -= 5;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("😞 You've lost the game.");
            document.querySelector('.score').textContent = '0';
        }
    }
});

// CODING CHALLENGE #1

// BUTTON reset
document.querySelector('.again').addEventListener('click', function () {
    score = 100;
    document.querySelector('.score').textContent = score;

    // generate new secret number and hide it
    secretNumber = Math.trunc(Math.random() * 69 + 1);
    document.querySelector('.number').textContent = '?';
    // reset guess input box
    document.querySelector('.guess').value = '';
    // reset display message
    displayMessage('Start guessing...');
    // reset to dark background
    document.querySelector('body').style.backgroundColor = '#222222';
    // reset score box
    document.querySelector('.number').style.width = '15rem';
});
