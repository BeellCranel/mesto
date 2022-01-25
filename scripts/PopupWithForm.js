import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({
    popupSelector,
    formSelector,
    submitFormCallback
  }) {
    super(popupSelector);
    this._form = formSelector;
    this._submit = submitFormCallback;
  }

  close() {
    this._form.reset();
    super.close();
  }

  _getInputValues = () => {
    this._inputList = Array.from(this._form.querySelector('.form__input'));
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    this.close();
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submit(this._getInputValues));
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._submit(this._getInputValues));
  }
}
