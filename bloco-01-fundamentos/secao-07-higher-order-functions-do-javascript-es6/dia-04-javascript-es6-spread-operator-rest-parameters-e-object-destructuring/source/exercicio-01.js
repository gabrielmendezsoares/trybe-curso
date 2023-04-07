const specialFruit = ['banana', 'apple', 'orange'];
const additionalItens = ['juice', 'bread', 'cheese'];
const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));
