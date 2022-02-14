export default class UserInfo {
  constructor({
    userNameSelector,
    userDescriptionSelector,
    avatar
  }) {
    this._name = userNameSelector;
    this._description = userDescriptionSelector;
    this._avatar = avatar;
  }

  setUserInfo({
    name,
    description,
    avatar,
    id
  }) {
    this._name.textContent = name;
    this._description.textContent = description;
    this._avatar.src = avatar;
    this._id = id;
  }

  getUserInfo() {
    const user = {
      name: this._name.textContent,
      description: this._description.textContent
    };

    return user;
  }
}
