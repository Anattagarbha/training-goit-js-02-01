/* функция должна возвращать массив из двух элементов - 
первого и последнего элемента параметра array */

"use strict";

function getExtremeElements(array) {
  let firstElement = array[0];
  let lastElement = array[array.length - 1];
  return [firstElement, lastElement];
}
