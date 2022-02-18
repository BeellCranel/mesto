import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import './index.css';

import {
  editPopup,
  editOpenButton,
  editForm,
  editSubmitBtn,
  addPopup,
  addOpenButton,
  addForm,
  addSubmitBtn,
  imagePopup,
  confirmPopup,
  confirmForm,
  confirmSubmitBtn,
  avatarPopup,
  avatarForm,
  avatarSubmitBtn,
  inputUserName,
  inputDescription,
  profileAvatar,
  profileUserName,
  profileDescriptoin,
  cardsContainer,
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
// осуществляем запрос данных пользователя с сервера
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

// инициализируем класс формы профиля, функцию сабмита и открытия формы
const submitEditFormHandler = (values) => {
  api.editInfo(values.name, values.description)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
        avatar: res.avatar
      });
      editSubmitBtn.textContent = 'Сохранение...';
    })
    .catch((err) => {
      console.log(`Ошибка редактирования профиля методом PATCH: ${err}`)
    })
    .finally(() => {
      editSubmitBtn.textContent = 'Сохранить';
    });
}
const openEditFormHandler = () => {
  const userInfoVal = userInfo.getUserInfo();
  inputUserName.value = userInfoVal.name;
  inputDescription.value = userInfoVal.description;
  editFormValidator.resetValidation();
  popupWithFormEdit.open();
}
const popupWithFormEdit = new PopupWithForm({
  popupSelector: editPopup,
  formSelector: editForm,
  submitFormCallback: submitEditFormHandler
});

// инициализируем класс формы карточек и функцию сабмита
const submitAddFormHandler = (item) => {
  api.uploadCard(item.name, item.link)
    .then((res) => {
      cardRenderer.addItem(cardCreater(res));
      addSubmitBtn.textContent = 'Создание...';
    })
    .catch((err) => {
      console.log(`Ошибка загрузки карточки методом POST: ${err}`)
    })
    .finally(() => {
      addSubmitBtn.textContent = 'Создать';
    });
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

// инициализируем класс confirm попапа, функции сабмита и открытия попапа
const submitConfirmPopup = (item) => {
  api.deleteCard(item.getCardId())
    .then(() => {
      item.removeCard();
    })
    .catch((err) => {
      console.log(`Ошибка удаления карточки: ${err}`);
    });
}
const popupWithConfirm = new PopupWithConfirm(confirmPopup, confirmForm, submitConfirmPopup);
const openPopupWithConfirm = (item) => {
  popupWithConfirm.open(item);
}

// инициализируес классы создания и рэндэра карточек на страницу
const likeCard = (item) => {
  if (item.checkLike()) {
    api.deleteLike(item.getCardId())
      .then((res) => {
        item.handleLikeImg(res.likes);
      })
      .catch((err) => {
        console.log(`Ошибка удаления лайка: ${err}`);
      });
  } else {
    api.addLike(item.getCardId())
      .then((res) => {
        item.handleLikeImg(res.likes);
      })
      .catch((err) => {
        console.log(`Ошибка добавления лайка: ${err}`)
      });
  }
}

const cardCreater = (item) => {
  const cardEl = new Card({
    cardSelector: '.template-card',
    object: item,
    userId: userInfo._id,
    handleOpenImagePopup: openPopupWithImage,
    handleOpenConfirmPopup: openPopupWithConfirm,
    handleLikeCard: likeCard
  });

  return cardEl.getView();
}
const cardRenderer = new Section({
    renderer: cardCreater
  },
  cardsContainer
);
// Осуществляем загрузку карточек с сервера
api.getCards()
  .then((cards) => {
    cardRenderer.renderItems(cards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка с стартовой загрузкой карточек с сервера: ${err}`);
  });

// назначаем слушатели
editOpenButton.addEventListener('click', openEditFormHandler);
addOpenButton.addEventListener('click', openAddFormHandler);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
