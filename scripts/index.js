const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_edit');
const popupClose = popup.querySelector('.popup__close-button');
const editForm = popup.querySelector('.form_edit');
const inputUserName = popup.querySelector('.form__input_type_user-name');
const inputDescription = popup.querySelector('.form__input_type_user-description');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');

function openEditPopup() {
  editPopup.classList.add('popup_opened');
  inputUserName.value = profileUserName.textContent;
  inputDescription.value = profileDescriptoin.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function submitEditForm(evt) {
  evt.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;
  closePopup();
}

editButton.addEventListener('click', openEditPopup);
popupClose.addEventListener('click', closePopup);
editForm.addEventListener('submit', submitEditForm);
