'use strict'

//////////////////////////////GUESS THE NUMBER/////////////////////////////////////////////////////
let score = 20
let secretNumber = Math.trunc(Math.random() * 20) + 1
let highscore = 0

const displayMessage = function (message) {
	document.querySelector('#message').textContent = message
}

document.querySelector('#check-btn').addEventListener('click', function () {
	const inputNumber = Number(document.querySelector('#guess-input').value)
	//when the uer didn't put any number
	if (!inputNumber) {
		displayMessage('🤷‍♀️ No number')
		//when the uer put a correct number
	} else if (inputNumber === secretNumber) {
		displayMessage('Correct!')
		document.querySelector('#correct-number').textContent = secretNumber
		document.querySelector('#guess-number-body').classList.add('bg-primary--350')
		document.querySelector('#guess-number-body').classList.remove('bg-primary--300')
		if (score > highscore) {
			highscore = score
			document.querySelector('#highscore').textContent = score
		}
		//when the user put the wrong number
	} else if (inputNumber !== secretNumber) {
		if (score > 1) {
			displayMessage(inputNumber > secretNumber ? 'To high!' : 'To low!')
		} else {
			displayMessage('Game over!')
		}
		score--
	}
	document.querySelector('#score').textContent = score
})

document.querySelector('#again-btn').addEventListener('click', function () {
	score = 20
	secretNumber = Math.trunc(Math.random() * 20) + 1
	document.querySelector('#guess-number-body').classList.add('bg-primary--300')
	document.querySelector('#guess-number-body').classList.remove('bg-primary--350')
	document.querySelector('#correct-number').textContent = '?'
	displayMessage('Guess the number')
	document.querySelector('#guess-input').value = ''
	document.querySelector('#score').textContent = score
})
