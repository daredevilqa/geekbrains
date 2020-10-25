const newCart = new Cart();
cart = JSON.parse(localStorage.getItem("cart"));

for (const product of cart._items) {
  newCart.addItem(
    new Product(
      product._name,
      product._price,
      product._quantity,
      product._imgUrl
    )
  );
}

console.log(newCart);

newCart.render();
