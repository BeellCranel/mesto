const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupClose = popup.querySelector('.popup__close-button');
const form = popup.querySelector('.form');
const inputUserName = popup.querySelector('.form__input_type_user-name');
const inputDescription = popup.querySelector('.form__input_type_user-description');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');

function openPopup() {
  popup.classList.add('popup_opened');
  inputUserName.value = profileUserName.textContent;
  inputDescription.value = profileDescriptoin.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitForm(evt) {
  evt.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
form.addEventListener('submit', submitForm);
