import Card from '../scripts/Card.js';
import FormValidator from '../scripts/FormValidator.js';
import Section from '../scripts/Section.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import UserInfo from '../scripts/UserInfo.js';
import './index.css';

import {
  editPopup,
  editOpenButton,
  editForm,
  addPopup,
  addOpenButton,
  addForm,
  imagePopup,
  inputUserName,
  inputDescription,
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
  editFormValidator.resetValidation();
  popupWithFormEdit.open();
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
}
const openAddFormHandler = () => {
  addFormValidator.resetValidation();
  popupWithFormAdd.open();
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
addOpenButton.addEventListener('click', openAddFormHandler);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardRenderer.renderItems();
