/* если количество элементов нового массива больше maxLength, 
функция должна вернуть копию массива длиной maxLength элементов. 
В противном случае функция должна вернуть новый массив целиком */

"use strict";

function makeArray(firstArray, secondArray, maxLength) {
  let hybridArray = firstArray.concat(secondArray);
  if (hybridArray.length <= maxLength) {
    return hybridArray;
  } else {
    return hybridArray.slice(0, maxLength);
  }
}
