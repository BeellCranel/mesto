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
  avatarPopup,
  avatarOpenButton,
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
const avatarFormValidator = new FormValidator(validationConfig, avatarForm);

//инициализируем класс и функции по сбору инфы о пользователе
const userInfo = new UserInfo({
  userNameSelector: profileUserName,
  userDescriptionSelector: profileDescriptoin,
  avatar: profileAvatar
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
      popupWithFormEdit.close();
    })
    .catch((err) => {
      console.log(`Ошибка редактирования профиля методом PATCH: ${err}`)
    })
    .finally(() => {
      editSubmitBtn.value = 'Сохранить';
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
      popupWithFormAdd.close();
    })
    .catch((err) => {
      console.log(`Ошибка загрузки карточки методом POST: ${err}`)
    })
    .finally(() => {
      addSubmitBtn.value = 'Сохранить';
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

// инициализируем класс avatar попапаб, функции сабмита и открытия попапа
const submitAvatarFormHandler = (item) => {
  api.changeAvatar(item.link)
    .then((res) => {
      userInfo.setUserInfo({
        name: res.name,
        description: res.about,
        avatar: res.avatar
      });
      popupWithFormAvatar.close();
    })
    .catch((err) => {
      console.log(`Ошибка редактирования аватара: ${err}`);
    })
    .finally(() => {
      avatarSubmitBtn.value = 'Сохранить';
    });
}
const openAvatarFormHandler = () => {
  avatarFormValidator.resetValidation();
  popupWithFormAvatar.open();
}
const popupWithFormAvatar = new PopupWithForm({
  popupSelector: avatarPopup,
  formSelector: avatarForm,
  submitFormCallback: submitAvatarFormHandler
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
// Осуществляем загрузку карточек и данных пользователя с сервера
const getServerUserInfo = api.getUserInfo()
  .then((ServerUserInfo) => {
    return ServerUserInfo;
  })
  .catch((err) => {
    console.log(`Ошибка загрузки данных пользователя с сервера: ${err}`);
  });
const getServerInitialCards = api.getCards()
  .then((ServerInitialCards) => {
    return ServerInitialCards;
  })
  .catch((err) => {
    console.log(`Ошибка загрузки карточек с сервера: ${err}`)
  });
Promise.all([getServerUserInfo, getServerInitialCards])
  .then(([ServerUserInfo, ServerInitialCards]) => {
    userInfo.setUserInfo({
      name: ServerUserInfo.name,
      description: ServerUserInfo.about,
      avatar: ServerUserInfo.avatar,
      id: ServerUserInfo._id
    });
    cardRenderer.renderItems(ServerInitialCards.reverse());
  })
  .catch((err) => {
    console.log(`Ошибка загрузки данных с сервера: ${err}`);
  });

// назначаем слушатели
editOpenButton.addEventListener('click', openEditFormHandler);
addOpenButton.addEventListener('click', openAddFormHandler);
avatarOpenButton.addEventListener('click', openAvatarFormHandler);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();
