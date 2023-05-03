import data from '../data/books.js';

const { books } = data;
const reduceNames = () => books.map((book) => book.author.name).join(', ') + '.';
const averageAge = () => books.reduce((accumulator, book) => accumulator + (book.releaseYear - book.author.birthYear), 0) / books.length;
const longestNamedBook = () => books.reduce((accumulator, book) => (book.name.length > accumulator.length) ? book.name : accumulator);

console.log(reduceNames());
console.log(averageAge());
console.log(longestNamedBook());
