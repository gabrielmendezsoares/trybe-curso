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
console.log(`The player ${player.name} ${player.lastName} has ${player.age} years.`);
console.log(`The player ${player.name} ${player.lastName} has ${player.medals.golden} golden medals and ${player.medals.silver} silver medals .`);
console.table(names);

for (const key in names) {
  console.log(`Person: ${names[key]}`);
}

console.table(car);

for (const key in car) {
  console.log(`${key.toUpperCase()}: ${car[key]}`);
}
