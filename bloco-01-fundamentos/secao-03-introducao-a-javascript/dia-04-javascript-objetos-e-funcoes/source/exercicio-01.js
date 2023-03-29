const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
};

const names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge'
};

const car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player.bestInTheWorld);
console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);
console.log(`A jogadora ${player.name} ${player.lastName} possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata.`);
console.table(names);

for (const key in names) {
  console.log(`Pessoa: ${names[key]}`);
}

console.table(car);

for (const key in car) {
  console.log(`${key.toUpperCase()}: ${car[key]}`);
}
