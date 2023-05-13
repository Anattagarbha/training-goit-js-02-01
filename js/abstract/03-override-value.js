/* в отличие от строк, элементы массива можно изменять,
обратившись к ним по индексу */

"use strict";

const clients = ["Mango", "Poly", "Ajax"];

clients[0] = "Kiwi";
clients[1] = "Pango";

console.log(clients);
