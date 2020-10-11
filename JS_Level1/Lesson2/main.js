class MathOperation {
  static Sum = "Sum";
  static Deduct = "Deduct";
  static Multiply = "Multiply";
  static Divide = "Divide";
}

/**
 * @type HTMLInputElement
 */
const input1 = document.getElementById("first-num");
/**
 * @type HTMLInputElement
 */
const input2 = document.getElementById("second-num");
/**
 * @type HTMLInputElement
 */
const inputTask4 = document.getElementById("task4-input");
/**
 * @type HTMLSelectElement
 */
const select = document.getElementById("operator");

const btnTask3 = document.getElementById("btn-task3");
const btnTask4 = document.getElementById("btn-task4");
const btnTask6 = document.getElementById("btn-task6");
const btnTask8 = document.getElementById("btn-task8");

const resultSpan = document.getElementById("result");
const resultTask4 = document.getElementById("result-task4");

function calcTask3() {
  const val1 = input1.value;
  const val2 = input2.value;

  if (!val1 || !val2) {
    alert("Please, enter both numbers, otherwise, I can't calculate");
    return;
  }

  if (val1 >= 0 && val2 >= 0) {
    resultSpan.innerText = val1 - val2;
  } else if (val1 < 0 && val2 < 0) {
    resultSpan.innerText = val1 * val2;
  } else {
    resultSpan.innerText = Number(val1) + Number(val2);
  }
}

function calcTask4() {
  const val = inputTask4.value;

  if (!val || val < 0 || val > 15) {
    alert(
      "It's required to select a number in range [0..15], otherwise, I can't proceed"
    );
    return;
  }

  let result = "";

  switch (val) {
    case "0":
      result = "0";
    case "1":
      result += " 1";
    case "2":
      result += " 2";
    case "3":
      result += " 3";
    case "4":
      result += " 4";
    case "5":
      result += " 5";
    case "6":
      result += " 6";
    case "7":
      result += " 7";
    case "8":
      result += " 8";
    case "9":
      result += " 9";
    case "10":
      result += " 10";
    case "11":
      result += " 11";
    case "12":
      result += " 12";
    case "13":
      result += " 13";
    case "14":
      result += " 14";
    case "15":
      result += " 15";
  }

  resultTask4.innerText = result;
}

function sum(val1, val2) {
  return val1 + val2;
}

function deduct(val1, val2) {
  return val1 - val2;
}

function multiply(val1, val2) {
  return val1 * val2;
}

function divide(val1, val2) {
  return val1 / val2;
}

function power(val, pow) {
  return pow === 0
    ? 1
    : pow > 0
    ? val * power(val, --pow)
    : (1 / val) * power(val, ++pow);
}

function calcTask6(val1, val2, operation) {
  if (!val1 || !val2 || !operation) {
    alert(
      "Please, enter both numbers and select type of the math operation,\n otherwise, I can't calculate"
    );
    return;
  }

  let result;

  switch (operation) {
    case MathOperation.Sum:
      result = sum(Number(val1), Number(val2));
      break;
    case MathOperation.Deduct:
      result = deduct(val1, val2);
      break;
    case MathOperation.Multiply:
      result = multiply(val1, val2);
      break;
    case MathOperation.Divide:
      result = divide(val1, val2);
      break;
  }
  resultSpan.innerText = result;
}

function calcTask8() {
  const val1 = input1.value;
  const val2 = input2.value;

  if (!val1 || !val2) {
    alert("Please, enter both numbers, otherwise, I can't calculate");
    return;
  }
  resultSpan.innerText = power(Number(val1), Number(val2));
}

btnTask3.addEventListener("click", calcTask3);
btnTask4.addEventListener("click", calcTask4);
btnTask6.addEventListener("click", () =>
  calcTask6(input1.value, input2.value, select.value)
);
btnTask8.addEventListener("click", calcTask8);

console.log(`'null + 0' = ${null + 0}`);
console.log(`'null - 0' = ${null - 0}`);
console.log(`'null * 0' = ${null * 0}`);
console.log(`'null / 0' = ${null / 0}`);
console.log(`'0 / null' = ${0 / null}`);
console.log(`'null == 0' = ${null == 0}`);
console.log(`'null === 0' = ${null === 0}`);
