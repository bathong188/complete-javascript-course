'use strict';

// selecting elements
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1'); // sligthly faster than querySelector
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, isGameActive;

const init = function () {
  // set score elements to 0
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isGameActive = true;

  // hide dice
  dice.classList.add('hidden');
  // reset active background
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  // remove winner background
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
};

const switchPlayer = function () {
  // set current score to 0
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;

  // switch active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // toggle active background
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

// initializing game
init();

btnRoll.addEventListener('click', function () {
  if (isGameActive === true) {
    // generate random dice roll
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    // display roll
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;

    // if rolled 1; switch player
    if (diceRoll === 1) {
      // reset score, switch player
      switchPlayer();
    } else {
      // add roll to current score
      currentScore += diceRoll;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isGameActive === true) {
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // if score >= 100
    if (scores[activePlayer] >= 100) {
      isGameActive = false;
      dice.classList.add('hidden');

      // remove active background (dynamic)
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      // add winner background (dynamic)
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
