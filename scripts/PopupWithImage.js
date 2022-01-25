import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.figure__image');
    this._imageCaption = this._popup.querySelector('.figure__image-caption');
  }

  open({
    link,
    name
  }) {
    this._image.src = link;
    this._image.alt = name;
    this._imageCaption.textContent = name;
    super.open();
  }
}
