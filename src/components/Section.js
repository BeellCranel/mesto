export default class Section {
  constructor({
    items,
    renderer
  }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems() {
    this._items.map((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}
