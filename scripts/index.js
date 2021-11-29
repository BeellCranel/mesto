const editPopup = document.querySelector('.popup_edit');
const editButton = document.querySelector('.profile__edit-button');
const editForm = document.querySelector('.form_edit');
const addPopup = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const addForm = document.querySelector('.form_add');
const imagePopup = document.querySelector('.popup_image');
const closeButtons = document.querySelectorAll('.popup__close-button');
const popupLeyers = document.querySelectorAll('.popup');
const inputUserName = document.querySelector('.form__input_type_user-name');
const inputDescription = document.querySelector('.form__input_type_user-description');
const inputPlaceName = document.querySelector('.form__input_type_place-name');
const inputImageUrl = document.querySelector('.form__input_type_image-url');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');
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
const cardsContainer = document.querySelector('.grid-cards');
const cardTemplate = document.querySelector('.template-card').content;

function openEditPopup() {
  editPopup.classList.add('popup_opened');
  inputUserName.value = profileUserName.textContent;
  inputDescription.value = profileDescriptoin.textContent;
}

function openAddPopup() {
  addPopup.classList.add('popup_opened');
  inputPlaceName.value = '';
  inputImageUrl.value = '';
}

function openImagePopup(evt) {
  imagePopup.classList.add('popup_opened');

  const targetEl = evt.target;
  const targetElLink = targetEl.getAttribute('src');
  const targetElAlt = targetEl.getAttribute('alt');

  const imageEl = document.querySelector('.figure__image');
  imageEl.setAttribute('src', targetElLink);
  imageEl.setAttribute('alt', targetElAlt);

  const imageCaption = document.querySelector('.figure__image-caption');
  imageCaption.textContent = targetElAlt;
}

function closePopup(evt) {
  const targetEl = evt.target;
  const targetPopup = targetEl.closest('.popup');
  targetPopup.classList.remove('popup_opened');
}

function closeForAll(elements, evtListener) {
  Array.from(elements).forEach((el) => el.addEventListener('click', evtListener));
}

function submitEditForm(evt) {
  evt.preventDefault();
  profileUserName.textContent = inputUserName.value;
  profileDescriptoin.textContent = inputDescription.value;
  closePopup(evt);
}

function submitAddForm(evt) {
  evt.preventDefault();

  const item = {
    name: '',
    link: ''
  };

  item.name = inputPlaceName.value;
  item.link = inputImageUrl.value;

  const cardHtml = addCard(item);

  cardsContainer.prepend(cardHtml);

  closePopup(evt);
}

function renderCards() {
  const cardHtml = initialCards.map(addCard);
  cardsContainer.append(...cardHtml);
}

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

function removeCard(evt) {
  const targetEl = evt.target;
  const card = targetEl.closest('.grid-card');
  card.remove();
}

function activateLike(evt) {
  const targetEl = evt.target;
  targetEl.classList.toggle('grid-card__like-button_active');
}

editButton.addEventListener('click', openEditPopup);
addButton.addEventListener('click', openAddPopup);
editForm.addEventListener('submit', submitEditForm);
addForm.addEventListener('submit', submitAddForm);
closeForAll(closeButtons, closePopup);
renderCards();
