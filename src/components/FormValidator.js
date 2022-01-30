export default class FormValidator {
  constructor(options, formEl) {
    this._formEl = formEl;
    this._inputSelector = options.inputSelector;
    this._submitButtonSelector = options.submitButtonSelector;
    this._inactiveButtonClass = options.inactiveButtonClass;
    this._inputErrorClass = options.inputErrorClass;

    this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector));
    this._submitButton = this._formEl.querySelector(this._submitButtonSelector);
  }

  _showError(inputEl, errorText) {
    const errorMessage = this._formEl.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.add(this._inputErrorClass);
    errorMessage.textContent = errorText;
  };

  _hideError(inputEl) {
    const errorMessage = this._formEl.querySelector(`#${inputEl.id}-error`);
    if (!errorMessage) return;
    inputEl.classList.remove(this._inputErrorClass);
    errorMessage.textContent = '';
  };

  _setEventListeners() {
    this._toggleButtonError();

    this._inputList.forEach((inputEl) => {
      inputEl.addEventListener('input', () => {
        this._checkIfInputValid(inputEl);
        this._toggleButtonError();
      });
    });
  };

  _checkIfInputValid(inputEl) {
    if (!inputEl.validity.valid) {
      this._showError(inputEl, inputEl.validationMessage);
    } else {
      this._hideError(inputEl);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((inputEl) => !inputEl.validity.valid)
  };

  _toggleButtonError = () => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  };

  enableValidation() {
    this._formEl.addEventListener('submit', (evt) => evt.preventDefault());
    this._setEventListeners();
  };

  deactivateSubmit() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  resetValidation() {
    this._toggleButtonError();
    this._inputList.forEach((inputEl) => this._hideError(inputEl));
  }
}
