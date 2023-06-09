/* проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат» */

"use strict";

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }
  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }
  return "The order is accepted, our manager will contact you";
}
