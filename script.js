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

