// Обьявляем все пременные
const popups = document.querySelectorAll('.popup');
// Переменные edit попапа
const editPopup = document.querySelector('.popup_edit');
const editOpenButton = document.querySelector('.profile__edit-button');
const editForm = editPopup.querySelector('.form');
const editFormSubmit = editPopup.querySelector('.form__submit');
// Переменные add попапа
const addPopup = document.querySelector('.popup_add');
const addOpenButton = document.querySelector('.profile__add-button');
const addForm = addPopup.querySelector('.form');
const addFormSubmit = addPopup.querySelector('.form__submit');
// Переменные image попапа
const imagePopup = document.querySelector('.popup_image');
// Переменные инпутов
const inputUserName = document.querySelector('.form__input_type_user-name');
const inputDescription = document.querySelector('.form__input_type_user-description');
const inputPlaceName = document.querySelector('.form__input_type_place-name');
const inputImageUrl = document.querySelector('.form__input_type_image-url');
// Остальные переменные
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');
const cardsContainer = document.querySelector('.grid-cards');
const cardTemplate = document.querySelector('.template-card').content;
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
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

  editFormSubmit.classList.add('form__submit_inactive');
  editFormSubmit.disabled = true;
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
function submitEditForm(evt) {
  evt.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;
  closePopup(editPopup);
}

// функиция сабмита попапа добавления карточек
function submitAddForm(evt) {
  evt.preventDefault();

  const item = {
    name: inputPlaceName.value,
    link: inputImageUrl.value
  };

  const cardHtml = addCard(item);

  cardsContainer.prepend(cardHtml);

  closePopup(addPopup);

  addForm.reset();
  addFormSubmit.classList.add('form__submit_inactive');
  addFormSubmit.disabled = true;
}

// функция рэндера карточек на страницу
function renderCards() {
  const cardHtml = initialCards.map(addCard);
  cardsContainer.append(...cardHtml);
}

// функция создания карточек
function addCard(item) {
  const cardEl = cardTemplate.querySelector('.grid-card').cloneNode(true);

  const cardDel = cardEl.querySelector('.grid-card__delete-button');
  cardDel.addEventListener('click', removeCard);

  const cardImage = cardEl.querySelector('.grid-card__image');
  cardImage.setAttribute('src', item.link);
  cardImage.setAttribute('alt', item.name);
  cardImage.addEventListener('click', openImagePopup);

  const cardTilte = cardEl.querySelector('.grid-card__title');
  cardTilte.textContent = item.name;

  const cardLike = cardEl.querySelector('.grid-card__like-button');
  cardLike.addEventListener('click', activateLike);

  return cardEl;
}

// функиция удаления карточек
function removeCard(evt) {
  const targetEl = evt.target;
  const card = targetEl.closest('.grid-card');
  card.remove();
}

// функция лайка
function activateLike(evt) {
  const targetEl = evt.target;
  targetEl.classList.toggle('grid-card__like-button_active');
}

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
renderCards();
