function displaySimpleNumbers(upTo) {
  let num = 2;
  while (num < upTo) {
    let isNatural = true;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        isNatural = false;
        break;
      }
    }
    if (isNatural) {
      console.log(num);
    }
    num++;
  }
}

function magicForLoop() {
  for (let i = 0; i <= 9; console.log(i), i++) {}
}

function drawPyramid(rows) {
  let str = "x";
  while (str.length <= rows) {
    console.log(str);
    str += "x";
  }
}

// ! Task 1
console.log("-------TASK 1-------");
displaySimpleNumbers(
  prompt("Введите число, до какого хотите вывести все простые числа")
);

// ! Task 2
console.log("-------TASK 2-------");

const item1 = { name: "Socks", price: 200 };
const item2 = { name: "Underwear", price: 300 };

const cart = {
  items: [],
  total: function () {
    let sum = 0;
    this.items.forEach((item) => {
      sum += item.price;
    });
    return sum;
  },
};

cart.items.push(item1, item2);
console.log(
  `There are ${
    cart.items.length
  } items in the cart with total price '${cart.total()}'`
);

// ! Task 3
console.log("-------TASK 3-------");
magicForLoop();

// ! Task 4
console.log("-------TASK 4-------");
drawPyramid(prompt("Введите кол-во строк пирамиды"));
