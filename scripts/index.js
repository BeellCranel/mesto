import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import Popup from './Popup.js';
import PopupWithImage from './PopupWithImage.js';

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

const popupEdit = new Popup(editPopup);

// попап редактирования
function openEditPopup() {
  inputUserName.value = profileUserName.textContent;
  inputDescription.value = profileDescriptoin.textContent;

  popupEdit.open();
  editFormValidator.resetValidation();
}

// попап добавления карточек
const popupAddCard = new Popup(addPopup);

// попап просмотра изображения
const popupWithImage = new PopupWithImage(imagePopup);

// функиция сабмита попапа редактирования
function submitEditForm() {
  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;

  popupEdit.close();
}

// функиция сабмита попапа добавления карточек
function submitAddForm() {
  const item = {
    name: inputPlaceName.value,
    link: inputImageUrl.value
  };

  const cardHtml = cardCreater(item);
  cardsContainer.prepend(cardHtml);

  popupAddCard.close();
  addForm.reset();
  addFormValidator.deactivateSubmit();
}

const cardCreater = (item) => {
  const cardEl = new Card({
    cardSelector: '.template-card',
    object: item,
    openPopupImage: () => popupWithImage.open(item)
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
editOpenButton.addEventListener('click', openEditPopup);
addOpenButton.addEventListener('click', () => {
  popupAddCard.open()
});
editForm.addEventListener('submit', submitEditForm);
addForm.addEventListener('submit', submitAddForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
cardRenderer.renderItems();
