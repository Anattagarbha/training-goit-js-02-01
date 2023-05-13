/* indexOf(value) возвращает первый индекс, в котором элемент со значением 
value был найден в массиве, или число -1, если такого элемента нет */

"use strict";

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];

console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1
