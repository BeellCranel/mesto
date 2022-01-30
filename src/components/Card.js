export default class Card {
  constructor({
    cardSelector,
    object,
    handleCardClick
  }) {
    this._selector = cardSelector;
    this._object = object;
    this._name = object.name;
    this._link = object.link;
    this._openPopupImage = handleCardClick;
  }

  _getItem() {
    return document
      .querySelector(this._selector)
      .content
      .querySelector('.grid-card')
      .cloneNode(true);
  }

  _handleRemoveCard = () => {
    this._element.remove();
    this._element = null;
  };

  _handleLikeImg = () => {
    this._element.querySelector('.grid-card__like-button').classList.toggle('grid-card__like-button_active');
  }

  _handleOpenImagePopup = () => {
    this._openPopupImage(this._object);
  }

  _setEventListeners() {
    this._element.querySelector('.grid-card__delete-button').addEventListener('click', this._handleRemoveCard);
    this._element.querySelector('.grid-card__like-button').addEventListener('click', this._handleLikeImg);
    this._element.querySelector('.grid-card__image').addEventListener('click', this._handleOpenImagePopup);
  }

  getView() {
    this._element = this._getItem();
    this._cardImage = this._element.querySelector('.grid-card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.grid-card__title').textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
