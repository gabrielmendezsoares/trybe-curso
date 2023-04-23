const sum = (...numbers) => numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum(4, 5, 6));
