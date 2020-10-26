// Создать функцию, генерирующую шахматную доску.
// При этом можно использовать любые html - теги.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

const fieldContainer = document.querySelector(".field__container");

function generateChessField() {
  const lettersArr = ["A", "B", "C", "D", "E", "F", "G", "H"];

  for (let i = 0; i <= 8; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    fieldContainer.appendChild(row);

    for (let j = 0; j <= 8; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (i === 0 && j === 0) {
        cell.classList.add("num__letter__cell");
        row.appendChild(cell);
        continue;
      }

      if (i === 0) {
        cell.innerText = lettersArr[j - 1];
        cell.classList.add("num__letter__cell");
        row.appendChild(cell);
        continue;
      }

      if (j === 0) {
        cell.innerText = i;
        cell.classList.add("num__letter__cell");
        row.appendChild(cell);
        continue;
      }

      if (i % 2 === j % 2) {
        cell.classList.add("black");
      }
      row.appendChild(cell);
    }
  }
}

generateChessField();
