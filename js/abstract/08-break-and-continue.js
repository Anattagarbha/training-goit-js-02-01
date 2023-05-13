/* будем искать имя клиента в массиве имен, если нашли - прервем цикл */

"use strict";

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (let client of clients) {
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }
  message = "Клиента с таким именем не существует в базе данных!";
}

console.log(message);

// используем цикл для вывода чисел больше определённого значения

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 15) {
    continue;
  }
  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
