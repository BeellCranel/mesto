import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({
    popupSelector,
    formSelector,
    submitFormCallback
  }) {
    super(popupSelector);
    this._form = formSelector;
    this._submitButton = this._popup.querySelector('.form__submit');
    this._submit = submitFormCallback;
    this._inputList = Array.from(this._form.querySelectorAll('.form__input'));
  }

  close() {
    this._form.reset();
    super.close();
  }

  open() {
    this._submitButton.value = 'Сохранить';
    super.open();
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  _handleButtonSubmit = () => {
    this._submitButton.value = 'Сохранение...';
    this._submit(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleButtonSubmit);
  }

  removeEventListeners() {
    super.removeEventListeners();
    this._form.removeEventListener('submit', this._handleButtonSubmit);
  }
}
