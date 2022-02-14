import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
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
  profileAvatar,
  profileUserName,
  profileDescriptoin,
  cardsContainer,
  initialCards,
  validationConfig
} from '../utils/constans.js';

const api = new Api({
  adress: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '2602973a-2e71-4598-8f16-eafce852daf4'
});

// устанавливаем валидацию
const editFormValidator = new FormValidator(validationConfig, editForm);
const addFormValidator = new FormValidator(validationConfig, addForm);

//инициализируем класс и функции по сбору инфы о пользователе
const userInfo = new UserInfo({
  userNameSelector: profileUserName,
  userDescriptionSelector: profileDescriptoin,
  avatar: profileAvatar
});
api.getUserInfo()
  .then((user) => {
    userInfo.setUserInfo({
      name: user.name,
      description: user.about,
      avatar: user.avatar,
      id: user._id
    });
  })
  .catch((err) => {
    console.log(`Ошибка с загрузкой данных о пользователе с сервера: ${err}`);
  });

const submitEditFormHandler = (values) => {
  api.editInfo(values.name, values.description)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
        avatar: profileAvatar.src
      });
    })
    .catch((err) => {
      console.log(`Ошибка редактирования профиля методом PATCH: ${err}`)
    })
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
  // cardsContainer.prepend(cardCreater(item));
  api.uploadCard(item.name, item.link)
    .then((res) => {
      cardRenderer.addItem(cardCreater(res));
    })
    .catch((err) => {
      console.log(`Ошибка загрузки карточки методом POST: ${err}`)
    })
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
    renderer: cardCreater
  },
  cardsContainer
);
api.getCards()
  .then((cards) => {
    cardRenderer.renderItems(cards)
  })
  .catch((err) => {
    console.log(`Ошибка с стартовой загрузкой карточек с сервера: ${err}`)
  });

// назначаем слушатели
editOpenButton.addEventListener('click', openEditFormHandler);
addOpenButton.addEventListener('click', openAddFormHandler);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
