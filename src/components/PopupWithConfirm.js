import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, formSelector, submitConfirmPopup) {
    super(popupSelector);
    this._handleSubmit = submitConfirmPopup;
    this._form = formSelector;
  }

  open(item) {
    this._element = item;
    super.open();
  }

  _handleSubmitDltCard = (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._element);
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmitDltCard);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._handleSubmitDltCard);
  }
}
