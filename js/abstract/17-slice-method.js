/* slice(begin, end) возвращает новый массив, содержащий копию части исходного 
массива, не изменяя его. Копия делается от begin и до, но не включая, end */

"use strict";

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1, 3));

// если begin и end не указаны, будет создана полная копия исходного массива

console.log(clients.slice());

// если не указан end, копирование будет от start и до конца исходного массива

console.log(clients.slice(1));
