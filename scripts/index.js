import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

import {
  popups,
  editPopup,
  editOpenButton,
  editForm,
  addPopup,
  addOpenButton,
  addForm,
  imagePopup,
  inputUserName,
  inputDescription,
  inputPlaceName,
  inputImageUrl,
  profileUserName,
  profileDescriptoin,
  cardsContainer,
  initialCards,
  validationConfig
} from '../utils/constans.js';

// устанавливаем валидацию
const editFormValidator = new FormValidator(validationConfig, editForm);
const addFormValidator = new FormValidator(validationConfig, addForm);

//инициализируем класс и функции по сбору инфы о пользователе
const userInfo = new UserInfo({
  userNameSelector: profileUserName,
  userDescriptionSelector: profileDescriptoin
});
const submitEditFormHandler = (values) => {
  userInfo.setUserInfo(values);
}
const openEditFormHandler = () => {
  const userInfoVal = userInfo.getUserInfo();
  inputUserName.value = userInfoVal.name;
  inputDescription.value = userInfoVal.description;
  popupWithFormEdit.open();
  editFormValidator.resetValidation();
}
//инициализируем класс формы профиля
const popupWithFormEdit = new PopupWithForm({
  popupSelector: editPopup,
  formSelector: editForm,
  submitFormCallback: submitEditFormHandler
});

// инициализируем класс формы карточек и функцию сабмита
const submitAddFormHandler = (item) => {
  cardsContainer.prepend(cardCreater(item));
  addFormValidator.deactivateSubmit();
}
const popupWithFormAdd = new PopupWithForm({
  popupSelector: addPopup,
  formSelector: addForm,
  submitFormCallback: submitAddFormHandler
});

// инициализируем класс формы просмотра изображений
const popupWithImage = new PopupWithImage(imagePopup);
const openPopupWithImage = (item) => {
  popupWithImage.open(item);
}

// инициализируес классы создания и рэндэра карточек на страницу
const cardCreater = (item) => {
  const cardEl = new Card({
    cardSelector: '.template-card',
    object: item,
    handleCardClick: openPopupWithImage
  });

  return cardEl.getView();
}
const cardRenderer = new Section({
    items: initialCards,
    renderer: cardCreater
  },
  cardsContainer
);

// назначаем слушатели
editOpenButton.addEventListener('click', openEditFormHandler);
addOpenButton.addEventListener('click', () => {
  popupWithFormAdd.open();
});
editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardRenderer.renderItems();
