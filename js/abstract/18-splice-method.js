/* швейцарский нож для работы с массивами, если исходный массив нужно изменить. 
Удаляет, добавляет и заменяет элементы в произвольном месте массива */

// удаление

// splice(position, num)

const scores = [1, 2, 3, 4, 5];
const deletedScores = scores.splice(0, 3);
console.log(scores, deletedScores);

// добавление

// splice(position, 0, new_element_1, new_element_2, ...)

const colors = ["red", "green", "blue"];
colors.splice(3, 0, "purple");
console.log(colors);

// замена

// splice(position, num, new_element_1, new_element_2, ...)

const languages = ["C", "C++", "Java", "JavaScript"];
console.log(languages);

languages.splice(1, 1, "Python");
console.log(languages);

languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages);
