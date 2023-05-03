import data from '../data/books.js';

const { books } = data;

const formatedBookNames = () =>
  books.map((book) =>
    `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames());
