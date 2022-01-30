export default class UserInfo {
  constructor({
    userNameSelector,
    userDescriptionSelector
  }) {
    this._name = userNameSelector;
    this._description = userDescriptionSelector;
  }

  setUserInfo({
    name,
    description
  }) {
    this._name.textContent = name;
    this._description.textContent = description;
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      description: this._description.textContent
    };

    return user;
  }
}
