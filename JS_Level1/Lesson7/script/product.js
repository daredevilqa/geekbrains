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

  _productPageUrl = "";

  getOverallPrice() {
    return this._price * this._quantity * (1 - this._discount / 100);
  }

  //#region Getters/Setters

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

  //#endregion Getters/Setters

  render(insertIntoCss = ".catalog__grid") {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("catalog_item");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("product__name", "item_row");
    const nameLink = document.createElement("a");
    nameLink.setAttribute("href", this._productPageUrl);
    const bold = document.createElement("b");
    bold.innerText = this._name;
    nameDiv.appendChild(nameLink).appendChild(bold);

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("item_row");
    const imgLink = document.createElement("a");
    imgLink.setAttribute("href", this._productPageUrl);
    const img = document.createElement("img");
    img.classList.add("product__img");
    img.src = this._imgUrl;
    img.alt = this._name;
    img.title = this._name;
    img.width = 200;
    imgDiv.appendChild(imgLink).appendChild(img);

    const priceAndCurrencyDiv = document.createElement("div");
    priceAndCurrencyDiv.classList.add("item_row");
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("product__price", "price");
    priceDiv.innerText = this._price;
    const currencyDiv = document.createElement("div");
    currencyDiv.classList.add("currency");
    currencyDiv.innerText = "РУБ.";
    priceAndCurrencyDiv.append(priceDiv, currencyDiv);

    const buyBtnDiv = document.createElement("div");
    buyBtnDiv.classList.add("item_row");
    const buyBtn = document.createElement("input");
    buyBtn.classList.add("btn__buy");
    buyBtn.setAttribute("type", "button");
    buyBtn.setAttribute("value", "Купить");
    buyBtn.addEventListener("click", () => addToCart(this));
    buyBtnDiv.appendChild(buyBtn);

    outerDiv.append(nameDiv, imgDiv, priceAndCurrencyDiv, buyBtnDiv);

    document.querySelector(insertIntoCss).appendChild(outerDiv);
  }

  constructor(name, price, imgUrl = "", productPageUrl = "", quantity = 1) {
    this._name = name;
    this._price = price;
    this._imgUrl = imgUrl;
    this._productPageUrl = productPageUrl;
    this._quantity = quantity;
  }
}
