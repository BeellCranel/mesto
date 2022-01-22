import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';

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


// общая функиция открытия попапа
function openPopup(somePopup) {
  somePopup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupEsc);
}

// функиция открытия попапа редактирования
function openEditPopup() {
  inputUserName.value = profileUserName.textContent;
  inputDescription.value = profileDescriptoin.textContent;

  openPopup(editPopup);
  editFormValidator.resetValidation();
}

// функиция открытия попапа добавления карточек
function openAddPopup() {
  openPopup(addPopup);
}

// функиция открытия попапа просмотра изображения
function openImagePopup(evt) {
  const targetEl = evt.target;
  const targetElLink = targetEl.getAttribute('src');
  const targetElAlt = targetEl.getAttribute('alt');

  const imageEl = document.querySelector('.figure__image');
  imageEl.setAttribute('src', targetElLink);
  imageEl.setAttribute('alt', targetElAlt);

  const imageCaption = document.querySelector('.figure__image-caption');
  imageCaption.textContent = targetElAlt;

  openPopup(imagePopup);
}

// общая функиция закрытия попапа
function closePopup(somePopup) {
  somePopup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

// функция закрытия попапа по еск
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

// функиция сабмита попапа редактирования
function submitEditForm() {
  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;

  closePopup(editPopup);
}

// функиция сабмита попапа добавления карточек
function submitAddForm() {
  const item = {
    name: inputPlaceName.value,
    link: inputImageUrl.value
  };

  const cardHtml = cardCreater(item);
  cardsContainer.prepend(cardHtml);

  closePopup(addPopup);
  addForm.reset();
  addFormValidator.deactivateSubmit();
}

const cardCreater = (item) => {
  const cardEl = new Card({
      cardSelector: '.template-card',
      object: item
    },
    openImagePopup
  );

  return cardEl.getView();
}

const cardRenderer = new Section({
    items: initialCards,
    renderer: cardCreater
  },
  cardsContainer
);

// функция закрытия попапа по оверлэю и по крестику
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});

// назначаем слушатели
editOpenButton.addEventListener('click', openEditPopup);
addOpenButton.addEventListener('click', openAddPopup);
editForm.addEventListener('submit', submitEditForm);
addForm.addEventListener('submit', submitAddForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardRenderer.renderItems();
