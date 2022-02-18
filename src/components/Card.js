export default class Card {
  constructor({
    cardSelector,
    object,
    userId,
    handleOpenImagePopup,
    handleOpenConfirmPopup,
    handleLikeCard
  }) {
    this._selector = cardSelector;
    this._object = object;
    this._name = object.name;
    this._link = object.link;
    this._userId = userId;
    this._ownerId = object.owner._id;
    this._likes = object.likes;
    this._openImagePopup = handleOpenImagePopup;
    this._openConfirmPopup = handleOpenConfirmPopup;
    this._likeCard = handleLikeCard;
  }

  _getItem() {
    return document
      .querySelector(this._selector)
      .content
      .querySelector('.grid-card')
      .cloneNode(true);
  }

  getCardId() {
    return this._object._id;
  }

  checkLike = () => {
    if (this._element.querySelector('.grid-card__like-button').classList.contains('grid-card__like-button_active')) {
      return true
    } else return false
  }

  removeCard = () => {
    this._element.remove();
    this._element = null;
  };

  handleLikeImg = (likes) => {
    this._element.querySelector('.grid-card__like-button').classList.toggle('grid-card__like-button_active');
    this._element.querySelector('.grid-card__likes-count').textContent = likes.length;
  }

  _handleOpenImagePopup = () => {
    this._openImagePopup(this._object);
  }

  _handleOpenConfirmPopup = () => {
    this._openConfirmPopup(this);
  }

  _handleLikeCard = () => {
    this._likeCard(this);
  }

  _setEventListeners() {
    this._element.querySelector('.grid-card__delete-button').addEventListener('click', this._handleOpenConfirmPopup);
    this._element.querySelector('.grid-card__like-button').addEventListener('click', this._handleLikeCard);
    this._element.querySelector('.grid-card__image').addEventListener('click', this._handleOpenImagePopup);
  }

  _hideTrash = () => {
    if (this._ownerId != this._userId) {
      this._element.querySelector('.grid-card__delete-button').classList.add('grid-card__delete-button_inactive');
    }
  }

  _likeChek = () => {
    this._likes.forEach((item) => {
      if (item._id === this._userId) {
        this._element.querySelector('.grid-card__like-button').classList.add('grid-card__like-button_active');
      }
    });
  }

  getView() {
    this._element = this._getItem();
    this._cardImage = this._element.querySelector('.grid-card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.grid-card__title').textContent = this._name;
    this._element.querySelector('.grid-card__likes-count').textContent = this._likes.length;

    this._hideTrash();
    this._likeChek();
    this._setEventListeners();

    return this._element;
  }
}
