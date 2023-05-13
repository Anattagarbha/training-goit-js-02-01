/* метод push() добавляет один или несколько элементов в конец массива, 
без необходимости указывать индексы добавляемых элементов */

"use strict";

const numbers = [];

for (let i = 1; i < 6; i++) {
  numbers.push(i);
}

console.log(numbers);
