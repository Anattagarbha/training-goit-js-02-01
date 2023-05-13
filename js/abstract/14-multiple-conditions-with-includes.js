"use strict";

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
const hasFruit = redFruits.includes(fruit);
if (hasFruit) {
  console.log(`${fruit} is a red fruit`);
}
