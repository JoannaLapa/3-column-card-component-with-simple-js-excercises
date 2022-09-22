'use strict'

const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const currentScore0 = document.getElementById('current--0')
const currentScore1 = document.getElementById('current--1')

const diceImg = document.querySelector('.dice__img')
const btnNewGame = document.getElementById('btn-new-game')
const btnRollDice = document.getElementById('btn-roll-dice')
const btnHold = document.getElementById('btn-hold')

let currentScore, activePlayer, scores, playing;

//iitialize starting conditions
const init = function() {
	currentScore = 0
	activePlayer = 0
	scores = [0, 0]
	playing = true

	score0.textContent = 0
	score1.textContent = 0
	currentScore0.textContent = 0
	currentScore1.textContent = 0
	document.querySelector('h1').textContent = 'PIG GAME'
	document.querySelector('.pig-game__wrapper').classList.toggle('bg-primary--900')
	
	player0.classList.add('player--active')
	player1.classList.remove('player--active')
	
}



const switchPlayer = function () {
	currentScore = 0
	document.getElementById(`current--${activePlayer}`).textContent = 0
	activePlayer = activePlayer === 0 ? 1 : 0
	player0.classList.toggle('player--active')
	player1.classList.toggle('player--active')
	diceImg.setAttribute('data-visible', 'visible')
}

init()

//Rolling dice functionality
//1. Generating a random dice nr
btnRollDice.addEventListener('click', function () {
	if (playing) {
		const randomNumber = Math.trunc(Math.random() * 6) + 1
		//2. Adding the correct dice according to the randomNumber
		diceImg.setAttribute('data-visible', 'visible')
		diceImg.alt = `Playing dice with ${randomNumber} dots`
		diceImg.src = `dist/img/dice-${randomNumber}.png`
		console.log(randomNumber)

		//3. If randomNumber is 1 or !1
		if (randomNumber !== 1) {
			//add the current score
			currentScore += randomNumber
			document.getElementById(`current--${activePlayer}`).textContent = currentScore
		} else {
			//switch to another player
			switchPlayer()
		}
	}
})

//user holds score when clicks on hold button

btnHold.addEventListener('click', function () {
	if (playing) {
		scores[activePlayer] += currentScore
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
		if (scores[activePlayer] <= 100) {
			switchPlayer()
		} else {
			document.querySelector('h1').textContent = `Player ${activePlayer + 1} wins!`
			playing = false
			diceImg.removeAttribute('data-visible')
			document.getElementById(`score--${activePlayer}`).classList.add('player--winner')
			document.querySelector('.pig-game__wrapper').classList.toggle('bg-primary--500')
		}
	}
})

//reseting the game
btnNewGame.addEventListener('click', init);
