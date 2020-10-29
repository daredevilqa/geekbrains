class Cart {
  /**
   * @type Array<Product>
   */
  _items = [];

  get items() {
    return this._items;
  }

  /**
   *
   * @param {string} name
   * @type Product
   */
  getItem(name) {
    return this._items.find((item) => item._name === name);
  }

  /**
   *
   * @param {Product} item
   */
  addItem(item) {
    this._items.push(item);
  }

  removeItem(item) {
    this._items.splice(this._items.indexOf(item), 1);
  }

  getTotal() {
    return this._items.reduce((sum, cur) => sum + cur.getOverallPrice(), 0);
  }

  getTotalCountOfProducts() {
    return this._items.reduce((sum, cur) => sum + cur._quantity, 0);
  }

  render(insertIntoCss = ".content") {
    this._items.forEach((prod) => {
      const outerProductDiv = document.createElement("div");
      outerProductDiv.classList.add("catalog_item");

      const productImg = document.createElement("img");
      productImg.classList.add("product__img");
      productImg.setAttribute("width", "200");
      productImg.src = prod.imgUrl;

      const productNameDiv = document.createElement("div");
      productNameDiv.classList.add("cart__item_props", "product__name");
      productNameDiv.innerText = prod.name;

      const productPriceDiv = document.createElement("div");
      productPriceDiv.classList.add("cart__item_props", "product__price");
      productPriceDiv.innerText = `Цена: ${prod.price}`;

      const productQuantityDiv = document.createElement("div");
      productQuantityDiv.classList.add("cart__item_props", "product__quantity");

      const quantitySpan = document.createElement("span");
      quantitySpan.innerText = `Количество: ${prod.quantity}`;
      const plusBtn = document.createElement("input");
      plusBtn.classList.add("btn__change_quantity");
      plusBtn.setAttribute("type", "button");
      plusBtn.setAttribute("value", "+");
      plusBtn.addEventListener("click", () => handleQuantityIncrease());
      const minusBtn = document.createElement("input");
      minusBtn.classList.add("btn__change_quantity");
      minusBtn.setAttribute("type", "button");
      minusBtn.setAttribute("value", "-");
      minusBtn.addEventListener("click", () => handleQuantityDecrease());

      productQuantityDiv.append(quantitySpan, plusBtn, minusBtn);

      const productOverallPriceDiv = document.createElement("div");
      productOverallPriceDiv.classList.add(
        "cart__item_props",
        "product__overall_price"
      );
      productOverallPriceDiv.innerText = `Сумма: ${prod.getOverallPrice()}`;

      outerProductDiv.append(
        productImg,
        productNameDiv,
        productPriceDiv,
        productQuantityDiv,
        productOverallPriceDiv
      );

      document.querySelector(insertIntoCss).appendChild(outerProductDiv);
    });

    const cartTotalDiv = document.createElement("div");
    cartTotalDiv.classList.add("cart__total", "clearfix");
    cartTotalDiv.innerText = `Общая Сумма: ${this.getTotal()}`;

    document.querySelector(insertIntoCss).appendChild(cartTotalDiv);
  }

  constructor(...items) {
    this._items.push(...items);
  }
}
