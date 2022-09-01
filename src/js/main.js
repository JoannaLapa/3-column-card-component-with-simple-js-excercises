'use strict'

let score = 20
let secretNumber = Math.trunc(Math.random() * 20) + 1
let highscore = 0;
document.querySelector('#check-btn').addEventListener('click', function () {
	const inputNumber = Number(document.querySelector('#guess-input').value)
	//when the uer didn't put any number
	if (!inputNumber) {
		document.querySelector('#message').textContent = '🤷‍♀️ No number'
		//when the uer put a correct number
	} else if (inputNumber === secretNumber) {
		document.querySelector('#message').textContent = 'Correct!'
		document.querySelector('#correct-number').textContent = secretNumber
		document.querySelector('#guess-number-body').classList.add('bg-primary--350')
		document.querySelector('#guess-number-body').classList.remove('bg-primary--300')
		if(score > highscore) {
			highscore = score;
			document.querySelector('#highscore').textContent = score;
		}
		//when the uer put too high number
	} else if (inputNumber > secretNumber) {
		if (score > 1) {
			document.querySelector('#message').textContent = 'To high!'
			score--
		} else if (score === 1) {
			document.querySelector('#message').textContent = 'Game over!'
		}
		//when the uer put too low number
	} else if (inputNumber < secretNumber) {
		if (score > 1) {
			document.querySelector('#message').textContent = 'To low!'
			score--
		} else if (score === 1) {
			document.querySelector('#message').textContent = 'Game over!'
		}
	}
	document.querySelector('#score').textContent = score
})

document.querySelector('#again-btn').addEventListener('click', function () {
	score = 20
	secretNumber = Math.trunc(Math.random() * 20) + 1
	document.querySelector('#guess-number-body').classList.add('bg-primary--300')
	document.querySelector('#guess-number-body').classList.remove('bg-primary--350')
	document.querySelector('#correct-number').textContent = '?'
	document.querySelector('#message').textContent = 'Guess the number'
	document.querySelector('#guess-input').value = ''
	document.querySelector('#score').textContent = score;
})
