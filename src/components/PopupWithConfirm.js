import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, formSelector, submitConfirmPopup) {
    super(popupSelector);
    this._handleSubmit = submitConfirmPopup;
    this._form = formSelector;
  }

  open(item) {
    super.open();
    this._element = item;
  }

  _handleSubmitDltCard = (evt) => {
    evt.preventDefault();
    this._handleSubmit(this._element);
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmitDltCard)
  }
}
