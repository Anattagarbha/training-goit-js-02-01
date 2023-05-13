/* дополни код так, чтобы в переменной allClients получился 
массив всех элементов массивов oldClients и newClients */

"use strict";

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients);

console.log(allClients);
