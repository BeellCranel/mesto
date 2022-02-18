export {
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
};

// Переменные edit попапа
const editPopup = document.querySelector('.popup_edit');
const editOpenButton = document.querySelector('.profile__edit-button');
const editForm = editPopup.querySelector('.form');
const editSubmitBtn = editPopup.querySelector('.form__submit');
// Переменные add попапа
const addPopup = document.querySelector('.popup_add');
const addOpenButton = document.querySelector('.profile__add-button');
const addForm = addPopup.querySelector('.form');
const addSubmitBtn = addPopup.querySelector('.form__submit');
// Переменные image попапа
const imagePopup = document.querySelector('.popup_image');
// Переменные confirm попапа
const confirmPopup = document.querySelector('.popup_confirm');
const confirmForm = confirmPopup.querySelector('.form');
const confirmSubmitBtn = confirmPopup.querySelector('.form__submit');
// Переменные avatar попапа
const avatarPopup = document.querySelector('.popup_avatar');
const avatarForm = avatarPopup.querySelector('.form');
const avatarSubmitBtn = avatarPopup.querySelector('.form__submit');
// Переменные инпутов
const inputUserName = document.querySelector('.form__input_type_user-name');
const inputDescription = document.querySelector('.form__input_type_user-description');
// Остальные переменные
const profileAvatar = document.querySelector('.profile__image');
const profileUserName = document.querySelector('.profile__user-name');
const profileDescriptoin = document.querySelector('.profile__user-description');
const cardsContainer = document.querySelector('.grid-cards');
const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error'
};
