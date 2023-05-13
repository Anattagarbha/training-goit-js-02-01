/* дополни код так, чтобы переменные содержали 
частичные копии исходного массива fruits */

"use strict";

const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls, nonExtremeEls, lastThreeEls);
