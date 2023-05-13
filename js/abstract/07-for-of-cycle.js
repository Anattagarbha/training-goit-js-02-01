/* хорошая замена циклу for, если не нужен доступ к счётчику итерации */

"use strict";

const clients = ["Mango", "Ajax", "Poly"];

for (let client of clients) {
  console.log(client);
}

const string = "javascript";

for (let char of string) {
  console.log(char);
}
