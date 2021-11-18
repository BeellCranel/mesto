const editButton = document.querySelector('.profile__edit-button');

const buttonOne = document.querySelector('.grid-card__button_place_one');
const buttonTwo = document.querySelector('.grid-card__button_place_two');
const buttonThree = document.querySelector('.grid-card__button_place_three');
const buttonFour = document.querySelector('.grid-card__button_place_four');
const buttonFive = document.querySelector('.grid-card__button_place_five');
const buttonSix = document.querySelector('.grid-card__button_place_six');
const popup = document.querySelector('.popup');

// popup


function openPopup() {
  popup.classList.add('popup__opened');
}

editButton.addEventListener('click', openPopup);

// likeButton


function likeOne() {
  buttonOne.classList.toggle('grid-card__button_active');
}

buttonOne.addEventListener('click', likeOne);

function likeTwo() {
  buttonTwo.classList.toggle('grid-card__button_active');
}

buttonTwo.addEventListener('click', likeTwo);

function likeThree() {
  buttonThree.classList.toggle('grid-card__button_active');
}

buttonThree.addEventListener('click', likeThree);

function likeFour() {
  buttonFour.classList.toggle('grid-card__button_active');
}

buttonFour.addEventListener('click', likeFour);

function likeFive() {
  buttonFive.classList.toggle('grid-card__button_active');
}

buttonFive.addEventListener('click', likeFive);

function likeSix() {
  buttonSix.classList.toggle('grid-card__button_active');
}

buttonSix.addEventListener('click', likeSix);
