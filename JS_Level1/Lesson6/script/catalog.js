class Catalog extends Cart {
  getItemsPerCategory(category) {
    return this._items.filter((item) => item.category === category);
  }
}

const cart = new Cart();
const catalog = new Catalog();

const catalogGrid = document.querySelector(".catalog_grid");
const itemsNodes = catalogGrid.querySelectorAll(".catalog_item");

/**
 * Initializes catalog array filling it out with the products presented on the page
 * @param {NodeListOf<HTMLDivElement>} nodesList
 */
function initCatalog(nodesList) {
  nodesList.forEach((node) => {
    const name = node.querySelector(".product__name");
    const price = node.querySelector(".product__price");
    const img = node.querySelector(".product__img");
    /**
     * @type HTMLButtonElement
     */
    const buyBtn = node.querySelector(".btn__buy");

    const product = new Product(name.textContent.trim(), price.textContent);
    product.imgUrl = img.getAttribute("src");

    catalog.addItem(product);

    buyBtn.addEventListener("click", () => addToCart(product));
  });
}

/**
 * Adds items to the Cart once Buy button is clicked and logs the action
 * @param {Product} prod
 */
function addToCart(prod) {
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
  const existingItem = cart.getItem(prod.name);

  if (cart.items.length === 0) {
    catalogCartSection.style.display = "inline-block";
  }

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.addItem(prod);
  }

  let currentCount = Number(catalogCartCounter.innerText);
  catalogCartCounter.innerText = ++currentCount;

  console.log("Added to Cart:", prod);
  console.log("Cart now:", cart);
  console.log("Cart's TOTAL is:", cart.getTotal());

  localStorage.setItem("cart", JSON.stringify(cart));
}

initCatalog(itemsNodes);
console.log(catalog);
