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

// Task 1
console.log("-------TASK 1-------");
displaySimpleNumbers(
  prompt("Введите число, до какого хотите вывести все простые числа")
);

// Task 2
console.log("-------TASK 2-------");
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// Task 3
console.log("-------TASK 3-------");
magicForLoop();

// Task 4
console.log("-------TASK 4-------");
drawPyramid(prompt("Введите кол-во строк пирамиды"));
