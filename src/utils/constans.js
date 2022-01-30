export {
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
};

// Переменные edit попапа
const editPopup = document.querySelector('.popup_edit');
const editOpenButton = document.querySelector('.profile__edit-button');
const editForm = editPopup.querySelector('.form');
// Переменные add попапа
const addPopup = document.querySelector('.popup_add');
const addOpenButton = document.querySelector('.profile__add-button');
const addForm = addPopup.querySelector('.form');
// Переменные image попапа
const imagePopup = document.querySelector('.popup_image');
// Переменные инпутов
const inputUserName = document.querySelector('.form__input_type_user-name');
const inputDescription = document.querySelector('.form__input_type_user-description');
// Остальные переменные
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');
const cardsContainer = document.querySelector('.grid-cards');
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
const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error'
};
