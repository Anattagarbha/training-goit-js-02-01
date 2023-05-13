/* напиши функцию slugify(title) которая принимает заголовок статьи, 
параметр title, и возвращает slug, созданный из этой строки */

"use strict";

function slugify(title) {
  let titleArr = title.split(" ");
  let titleSlug = titleArr.join("-");
  return titleSlug.toLowerCase();
}
