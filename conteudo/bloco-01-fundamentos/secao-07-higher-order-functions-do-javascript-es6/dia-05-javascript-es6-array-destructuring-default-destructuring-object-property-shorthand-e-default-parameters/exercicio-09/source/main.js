const greet = (name, message = 'Hi') => `${message} ${name}`;

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));
