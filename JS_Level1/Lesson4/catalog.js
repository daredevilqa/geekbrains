class Catalog extends Cart {
  getItemsPerCategory(category) {
    return this._items.filter((item) => item.category === category);
  }
}
