const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const peoples = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 }
];

const hasName = (array, name) => {
  return array.some((currentName) => currentName === name);
};

const verifyAges = (array, minimumAge) => {
  return array.every((currentPerson) => currentPerson.age >= minimumAge);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));
console.log(verifyAges(peoples, 18));
console.log(verifyAges(peoples, 14));
