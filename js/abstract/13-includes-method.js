/* includes(value) проверяет есть ли в массиве элемент 
со значением value и возвращает true или false соответственно */

"use strict";

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false
