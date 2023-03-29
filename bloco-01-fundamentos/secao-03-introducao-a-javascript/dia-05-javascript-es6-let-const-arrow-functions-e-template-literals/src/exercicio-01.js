let firstName = 'João';
let lastName = 'Silva';
let favoriteFood = "McDonald's";
const valueA = 3;
const valueB = 5;
const sumNumber = (A, B) => A + B;
const randomNumber = () => Math.random();
const getHello = (string) => `Olá, ${string}!`;
const getSpeed = (speed) => (speed >= 120) ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida';
const getName = (A, B) => `${A} ${B}`;
const getAge = (A, B) => {
  for (let idade = A; idade <= B; idade += 1) {
    console.log('Idade:', idade);
  }
};

const pessoa = {
  nome: 'Ninguém',
  idade: 0
};

getAge(1, 18);
firstName = 'Gabriel';
lastName = 'Soares';
favoriteFood = 'Burger King';
pessoa.nome = 'Gabriel';
pessoa.idade = 18;
console.log(getSpeed(180));
console.log(getName('Ricardo', 'Batista'));
console.log(getHello('Marcos Silva'));
console.log(`Olá, ${firstName} ${lastName}!`);
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Comida: ${favoriteFood}`);
console.log(`Resultado da soma: ${sumNumber(valueA, valueB)}`);
console.log(`Número aleatório: ${randomNumber()}`);
