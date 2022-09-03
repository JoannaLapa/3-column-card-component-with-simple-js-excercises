'use strict'

//////MODAL WINDOWS/////////////////////////////////////////////

const showModalBtns = document.querySelectorAll('.show-modal')
const closeModalBtn = document.querySelector('#close-modal')
const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')

const openModalWindow = function () {
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

const closeModalWindow = function () {
	modal.classList.add('hidden')
	overlay.classList.add('hidden')
}
for (let i = 0; i < showModalBtns.length; i++) {
	showModalBtns[i].addEventListener('click', openModalWindow)
}

closeModalBtn.addEventListener('click', closeModalWindow)

overlay.addEventListener('click', closeModalWindow)
