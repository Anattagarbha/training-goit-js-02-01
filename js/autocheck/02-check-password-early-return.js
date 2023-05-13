/* проведи рефакторинг кода функции checkPassword 
используя паттерн «ранний возврат» */

"use strict";

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}
