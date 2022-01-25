export default class UserInfo {
  constructor({
    userNameSelector,
    userDescriptionSelector
  }) {
    this._name = userNameSelector;
    this._description = userDescriptionSelector;
  }

  setUserInfo({
    inputName,
    inputDescription
  }) {
    this._name.textContent = inputName;
    this._description.textContent = inputDescription;
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      description: this._description.textContent
    };

    return user;
  }
}
