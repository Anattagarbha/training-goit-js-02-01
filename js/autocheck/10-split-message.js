/* дополни код функции splitMessage(message, delimiter) так, 
чтобы она возвращала в переменной words результат разделения 
строки message по разделителю delimiter - массив строк */

"use strict";

function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}
