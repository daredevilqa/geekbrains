class Product {
  _name = "";

  _category = "";

  _price = 0;

  /**
   * Value in %
   */
  _discount = 0;

  _quantity = 1;

  _imgUrl = "";

  getOverallPrice() {
    return this._price * this._quantity * (1 - this._discount / 100);
  }

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

  get quantity() {
    return this._quantity;
  }

  set quantity(q) {
    this._quantity = q;
  }

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(url) {
    this._imgUrl = url;
  }

  constructor(name, price, quantity = 1, imgUrl = "") {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this._imgUrl = imgUrl;
  }
}
