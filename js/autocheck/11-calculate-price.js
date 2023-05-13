/* сервису гравировки украшений нужна функция, которая бы автоматически 
считала цену гравировки, в зависимости от количества слов и цены за слово */

"use strict";

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");
  let engravingPrice = words.length * pricePerWord;
  return engravingPrice;
}
