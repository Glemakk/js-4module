//--------------------------------1
//Дополни код так, чтобы в переменной result 
//был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.
function makePizza(name) {
  return 'Ваша пицца готовится, ожидайте.';
}
// Пиши код ниже этой строки

const result = makePizza();
const pointer = makePizza;

console.log(makePizza());
console.log(pointer);
console.log(makePizza);
console.log(result);