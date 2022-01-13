export default class Card {
  constructor(cardSelector, name, link, onClick) {
    this._selector = cardSelector;
    this._name = name;
    this._link = link;
    this._openPopupImage = onClick;
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
    this._element.querySelector('.grid-card__like-button').classList.toggle('grid-card__like-button_active')
  }

  _setEventListeners() {
    this._element.querySelector('.grid-card__delete-button').addEventListener('click', this._handleRemoveCard);
    this._element.querySelector('.grid-card__like-button').addEventListener('click', this._handleLikeImg);
    this._element.querySelector('.grid-card__image').addEventListener('click', this._openPopupImage);
  }

  getView() {
    this._element = this._getItem();
    this._element.querySelector('.grid-card__title').textContent = this._name;
    this._element.querySelector('.grid-card__image').src = this._link;
    this._element.querySelector('.grid-card__image').alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
