actualCart.render();

/**
 * @param {Product} prod
 * @param {string} action
 */
function handleQuantityChange(prod, action) {
  const existingProduct = actualCart.getItem(prod.name);

  if (existingProduct) {
    switch (action) {
      case "increase":
        existingProduct.quantity++;
        break;
      case "decrease":
        existingProduct.quantity--;

        if (existingProduct.quantity === 0) {
          actualCart.removeItem(prod);
        }
        break;
    }
    sessionStorage.setItem("cart", JSON.stringify(actualCart));
    document.querySelector(".content").innerHTML = "<h1>Корзина</h1>";
    actualCart.render();
  }
}
