class Product {
  _name = "";

  _category = "";

  _price = 0;

  /**
   * Value in %
   */
  _discount = 0;

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get category() {
    return this._category;
  }

  set category(cat) {
    this._category = cat;
  }

  get price() {
    return this._price * (1 - this._discount / 100);
  }

  get discount() {
    return this._discount;
  }

  set discount(disc) {
    this._discount = disc;
  }

  constructor(name, price) {
    this._name = name;
    this._price = price;
  }
}
