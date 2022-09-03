'use strict'

//////MODAL WINDOWS/////////////////////////////////////////////

const showModalBtns = document.querySelectorAll('.show-modal')
const closeModalBtn = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')

//OPENING MODAL WINDOW FUNCTION
const openModalWindow = function () {
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

//CLOSING MODAL WINDOW FUNCTION
const closeModalWindow = function () {
	modal.classList.add('hidden')
	overlay.classList.add('hidden')
}

//ADDEVENTLISTENERS/////////////////////////////////////////////////

//OPEN MODAL WINDOW ON CLICKING THE BUTTON
for (let i = 0; i < showModalBtns.length; i++) {
	showModalBtns[i].addEventListener('click', openModalWindow)
}

//CLOSING MODAL WINDOW ON CLIKING THE BUTTON
closeModalBtn.addEventListener('click', closeModalWindow)

//CLOSING MODAL WINDOW ON CLICKING ON BODY
overlay.addEventListener('click', closeModalWindow)

//CLOSING MODAL WINDOW ON CLICKING THE ESCAPE KEY
document.addEventListener('keydown', function (e) {
	console.log(e.key)
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModalWindow()
	}
})
