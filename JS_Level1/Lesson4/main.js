function numberToObject(num = "") {
  let result = {
    hundreds: "0",
    tens: "0",
    units: "0",
  };

  // If the number is single-digit
  if (num / 10 < 1) {
    result.units = num;
    return result;
  }

  // If the number is two-digit or more
  result.units = num[num.length - 1];
  result.tens = num[num.length - 2];

  // If the number is three-digit or more
  if (num / 100 >= 1) {
    let str = "";
    for (let i = num.length - 3; i >= 0; i--) {
      str += num[i];
    }
    result.hundreds = str.split("").reverse().join("");
  }

  return result;
}

// Task 1
// Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до infinity, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.

console.log("-------TASK 1-------");
console.log(numberToObject(prompt("Enter an integer from 0 to infinity")));

// Task 2
// Task 3

console.log("-------TASKS 2 & 3-------");

const prod1 = new Product("Socks", "Clothes", 100);
const prod2 = new Product("Underwear", "Clothes", 200);
const prod3 = new Product("Sneakers", "Shoes", 1000);
const catalog = new Catalog(prod1, prod2, prod3);
const cart = new Cart(prod1, prod2, prod3);

console.log("CATALOG:");
console.log(catalog.items);
console.log("CART:");
console.log(cart.items);
console.log(`Cart's total is: ${cart.getTotal()}`);

cart.addItem(new Product("Skis", "Sport", 13000));

console.log("The new item has been added to cart:");
console.log(cart.getItem("Skis"));
console.log("Now CART is:");
console.log(cart.items);

console.log(`Cart's total is: ${cart.getTotal()}`);

prod3.discount = 10;

console.log(
  `Price of ${prod3.name} dropped to ${prod3.price} due to ${prod3.discount}% discount applied`
);
console.log(`Cart's total is recalculated as well: ${cart.getTotal()}`);

console.log(`'${prod1.category}' category contains these items:`);
console.log(catalog.getItemsPerCategory(prod1.category));
