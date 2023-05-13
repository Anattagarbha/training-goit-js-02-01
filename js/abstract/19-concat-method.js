/* объединяет два или более массива в один, не изменяет массив на котором вызывается, 
а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива */

"use strict";

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClients = oldClients.concat(newClients);
console.log(allClients);

const allClientsNewFirst = newClients.concat(oldClients);
console.log(allClientsNewFirst);
