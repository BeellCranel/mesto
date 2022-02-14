export default class Api {
  constructor({
    adress,
    token
  }) {
    this._adress = adress;
    this._token = token;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`)
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._adress}/users/me`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this._getResponseData)
  }

  getCards() {
    return fetch(`${this._adress}/cards`, {
        headers: {
          authorization: this._token
        }
      })
      .then(this._getResponseData)
  }
}
