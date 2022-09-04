'use strict'

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');

const diceImg = document.querySelector('.dice__img')
const btnNewGame = document.getElementById('btn-new-game');
const btnRollDice = document.getElementById('btn-roll-dice');
const btnHold = document.getElementById('btn-hold');

//starting conditions
let currentScore = 0;

//Rolling dice functionality
//1. Generating a random dice nr
btnRollDice.addEventListener('click', function(){
    const randomNumber = Math.trunc(Math.random() * 6) +1;
    //2. Adding the correct dice according to the randomNumber
    diceImg.setAttribute('data-visible', 'visible');
    diceImg.alt = `Playing dice with ${randomNumber} dots`;
    diceImg.src = `dist/img/dice-${randomNumber}.png`; 
    console.log(randomNumber);

    //3. If randomNumber is 1 or !1
    if(randomNumber !== 1) {
        //add the current score 
        currentScore = currentScore + randomNumber;
    }else {
        //switch to another player
    }
})


/* const switchMobileNavigation = () => {
	headerContainer.hasAttribute('data-visible')
    ? toggleButton.setAttribute('aria-expanded', 'false')
    : toggleButton.setAttribute('aria-expanded', 'true')
headerContainer.toggleAttribute('data-overlay')
primaryNavigation.toggleAttribute('data-visible')
openingIcon.toggleAttribute('data-visible')
closingIcon.toggleAttribute('data-visible')
}*/