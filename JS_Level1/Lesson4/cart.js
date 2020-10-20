class Cart {
  _items = [];

  get items() {
    return this._items;
  }

  getItem(name) {
    return this._items.find((item) => item.name === name);
  }

  addItem(item) {
    this._items.push(item);
  }

  removeItem(item) {
    this._items.splice(this._items.indexOf(item), 1);
  }

  getTotal() {
    return this._items.reduce((sum, cur) => sum + cur.price, 0);
  }

  constructor(...items) {
    this._items.push(...items);
  }
}
