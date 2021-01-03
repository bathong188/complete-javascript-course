'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  console.log('Overlay/Close button clicked');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Open button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// looping thru all open modal buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal); // use function variable, called when clicked; if use function method, it'd be executed immediately
}

// use function variable, called when clicked; if use function method, it'd be executed immediately
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// add event handler everywhere on the page
document.addEventListener('keydown', function (event) {
  // event is generated when button is pressed down
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
