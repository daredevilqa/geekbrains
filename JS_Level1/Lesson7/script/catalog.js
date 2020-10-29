class Catalog extends Cart {
  getItemsPerCategory(category) {
    return this._items.filter((item) => item.category === category);
  }

  render() {
    this.items.forEach((prod) => {
      prod.render();
    });

    if (actualCart.items.length === 0) {
      catalogCartSection.style.display = "none";
    } else {
      catalogCartSection.style.display = "inline-block";
      catalogCartCounter.innerText = actualCart.getTotalCountOfProducts();
    }
  }
}

/**
 * @type HTMLDivElement
 */
const catalogCartSection = document.querySelector(".catalog__cart_section");
/**
 * @type HTMLSpanElement
 */
const catalogCartCounter = catalogCartSection.querySelector(
  ".catalog__cart_counter"
);

const catalog = new Catalog(
  new Product(
    "SUP Board",
    31900,
    "img/supboard-1.jpg",
    "catalog/supboard.html"
  ),
  new Product(
    "Water skis",
    26250,
    "img/waterskis.jpg",
    "catalog/waterskis.html"
  )
);

catalog.render();
console.log(catalog);

/**
 * Adds items to the Cart once Buy button is clicked and logs the action
 * @param {Product} prod
 */
function addToCart(prod) {
  const existingItem = actualCart.getItem(prod.name);

  if (actualCart.items.length === 0) {
    catalogCartSection.style.display = "inline-block";
  }

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    actualCart.addItem(prod);
  }

  catalogCartCounter.innerText = actualCart.getTotalCountOfProducts();

  console.log("Added to Cart:", prod);
  console.log("Cart now:", actualCart);
  console.log("Cart's TOTAL is:", actualCart.getTotal());

  sessionStorage.setItem("cart", JSON.stringify(actualCart));
}
