// показываем ошибку
const showError = (formEl, inputEl, errorText, errorClass, inputErrorClass) => {
  const errorMessage = formEl.querySelector(`#${inputEl.id}-error`);

  errorMessage.textContent = errorText;
  errorMessage.classList.add(errorClass);
  inputEl.classList.add(inputErrorClass);
}

// скрываем ошибку
const hideError = (formEl, inputEl, errorClass, inputErrorClass) => {
  const errorMessage = formEl.querySelector(`#${inputEl.id}-error`);

  errorMessage.textContent = '';
  errorMessage.classList.remove(errorClass);
  inputEl.classList.remove(inputErrorClass);
}

// проверяем есть ли среди всех инпутов невалидный
const hasInvalidInput = (inputList) => {
  return inputList.some((el) => !el.validity.valid);
}

// меняем состояние кнопки
const toggleButtonError = (inputList, submitButton, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

// проверяем инпут на валидность
const checkIfInputValid = (formEl, inputEl, {
  errorClass,
  inputErrorClass
}) => {
  if (!inputEl.validity.valid) {
    showError(formEl, inputEl, inputEl.validationMessage, errorClass, inputErrorClass);
  } else {
    hideError(formEl, inputEl, errorClass, inputErrorClass);
  }
}

// вешаеем слушатели
const setInputListeners = (formEl, {
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  ...rest
}) => {
  const inputList = Array.from(formEl.querySelectorAll(inputSelector));
  const submitButton = formEl.querySelector(submitButtonSelector);

  toggleButtonError(inputList, submitButton, inactiveButtonClass);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener('input', () => {
      checkIfInputValid(formEl, inputEl, rest);

      toggleButtonError(inputList, submitButton, inactiveButtonClass);
    });
  });
}

// создаем функцию для кастомной валидации
const enableValidation = ({
  formSelector,
  ...rest
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formEl) => {
    formEl.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    setInputListeners(formEl, rest);
  });
}

// включаем валидацию
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  inactiveButtonClass: 'form__submit_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
});
