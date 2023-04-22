let firstName = 'João';
let lastName = 'Silva';
let favoriteFood = "McDonald's";
const valueA = 3;
const valueB = 5;
const sumNumber = (A, B) => A + B;
const randomNumber = () => Math.random();
const getHello = (string) => `Hi, ${string}!`;
const getSpeed = (speed) => (speed >= 120) ? 'Not allowed' : 'Allowed';
const getName = (A, B) => `${A} ${B}`;
const getAge = (A, B) => {
  for (let age = A; age <= B; age += 1) {
    console.log('Age:', age);
  }
};

const person = {
  name: 'Nobody',
  age: 0
};

getAge(1, 18);
firstName = 'Gabriel';
lastName = 'Soares';
favoriteFood = 'Sandwich';
person.name = 'Gabriel';
person.age = 18;
console.log(getSpeed(180));
console.log(getName('Ricardo', 'Batista'));
console.log(getHello('Marcos Silva'));
console.log(`Hi, ${firstName} ${lastName}!`);
console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Food: ${favoriteFood}`);
console.log(`Sum: ${sumNumber(valueA, valueB)}`);
console.log(`Random: ${randomNumber()}`);
