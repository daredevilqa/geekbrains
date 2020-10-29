const actualCart = new Cart();
let storageCart = new Cart();

try {
  const storageItem = sessionStorage.getItem("cart");

  if (storageItem) {
    storageCart = JSON.parse(storageItem);
  }

  for (const product of storageCart._items) {
    if (!actualCart.getItem(product.name)) {
      actualCart.addItem(
        new Product(
          product._name,
          product._price,
          product._imgUrl,
          product._productPageUrl,
          product._quantity
        )
      );
    }
  }
} catch (e) {
  console.error(
    e,
    "Cannot parse cart's JSON from the session storage for some reason"
  );
}
