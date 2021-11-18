// popup


const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close-button');

function openPopup() {
  popup.classList.add('popup__opened');
  inputUserName.value = profileUserName.textContent;
  inputDescription.value = profileDescriptoin.textContent;
}

editButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup__opened');
}

popupClose.addEventListener('click', closePopup);

//submit


const form = popup.querySelector('.edit-form');
const inputUserName = popup.querySelector('.form__user-name');
const inputDescription = popup.querySelector('.form__description');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');
const inputSubmit = popup.querySelector('.edit-form__submit');

function submitForm(evt) {
  evt.preventDefault();

  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;
}

form.addEventListener('submit', submitForm);

inputSubmit.addEventListener('click', closePopup);

// likeButton


const buttonOne = document.querySelector('.grid-card__button_place_one');
const buttonTwo = document.querySelector('.grid-card__button_place_two');
const buttonThree = document.querySelector('.grid-card__button_place_three');
const buttonFour = document.querySelector('.grid-card__button_place_four');
const buttonFive = document.querySelector('.grid-card__button_place_five');
const buttonSix = document.querySelector('.grid-card__button_place_six');


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
