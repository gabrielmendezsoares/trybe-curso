const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const firstTry = () => numbers
  .filter((number) => number % 2 === 0)
  .reduce((accumulator, number) => accumulator + number);

const secondTry = () => numbers
  .reduce((accumulator, number) => (number % 2 === 0) ? accumulator + number : accumulator, 0);

console.log(firstTry());
console.log(secondTry());
