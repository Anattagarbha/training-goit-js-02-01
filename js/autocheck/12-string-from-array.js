/* дополни код функции makeStringFromArray(array, delimiter) так, 
чтобы она возвращала в переменной string результат соединения элементов 
массива array c разделителем delimiter - строку */

"use strict";

function makeStringFromArray(array, delimiter) {
  let string = array.join(delimiter);
  return string;
}
