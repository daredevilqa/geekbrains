class Catalog extends Cart {
  getItemsPerCategory(category) {
    return this._items.filter((item) => item.category === category);
  }
}

const catalogGrid = document.querySelector(".catalog_grid");
const itemsNodes = catalogGrid.querySelectorAll(".catalog_item");

const catalog = new Catalog();
const cart = new Cart();

/**
 * Initializes catalog array filling it out with the products presented on the page
 * @param {NodeListOf<Element>} nodesList
 */
function initCatalog(nodesList) {
  nodesList.forEach((node) => {
    const name = node.querySelector(".product__name");
    const price = node.querySelector(".product__price");
    /**
     * @type HTMLButtonElement
     */
    const buyBtn = node.querySelector(".btn__buy");
    const product = new Product(name.textContent.trim(), price.textContent);

    catalog.addItem(product);
    buyBtn.addEventListener("click", () => addToCart(product));
  });
}

/**
 * Adds items to the Cart once Buy button is clicked and logs the action
 * @param {Product} prod
 */
function addToCart(prod) {
  cart.addItem(prod);
  console.log("Added to Cart:", prod);
  console.log("Cart now:", cart);
}

initCatalog(itemsNodes);
console.log(catalog);
