'use strict';
//score references
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

//image reference
const diceImg = document.querySelector(".dice");

//button references
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//initial condition
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden');
var oldCurrent = 0;
var scoreCount0 = 0;
var scoreCount1 = 0;
var rand = 0;

const diceRoll = function () {
    rand = Number(Math.trunc(Math.random() * 6) + 1);
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${rand}.png`;

    if (rand == 1) {
        oldCurrent = 0;
        hold();
    } else {
        oldCurrent += rand;
    }
    if (player0.classList.contains('player--active')) { current0.textContent = oldCurrent; }
    else { current1.textContent = oldCurrent; }

}

const hold = function () {

    if (player0.classList.contains('player--active')) {
        rand = 0;
        current0.textContent = 0;
        scoreCount0 += oldCurrent;
        score0.textContent = scoreCount0;
        oldCurrent = 0;

        if (scoreCount0 >= 100) {
            player0.classList.add("player--winner");
            diceImg.classList.add('hidden');
        } else {
        player1.classList.add("player--active");
        player0.classList.remove("player--active");
    }
    }
    else {
        rand = 0;
        current1.textContent = 0;
        scoreCount1 += oldCurrent;
        score1.textContent = scoreCount1;
        oldCurrent = 0;
        if (scoreCount1 >= 100) {
            player1.classList.add("player--winner");
            diceImg.classList.add('hidden');
        }else{
        player0.classList.add("player--active");
        player1.classList.remove("player--active");
    }
    }
}
const newGame = function () {
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    player0.classList.add("player--active");
    player0.classList.remove("player--winner");
    player1.classList.remove("player--active","player--winner");
    diceImg.classList.add('hidden');

}

rollBtn.addEventListener('click', diceRoll);
holdBtn.addEventListener('click', hold);
newBtn.addEventListener('click', newGame);