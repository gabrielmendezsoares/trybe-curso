import data from '../data/books.js';

const { books } = data;

const formatedAuthorNamesBirth = () =>
  books.map((book) =>
    `${book.author.name} - ${book.author.birthYear}`);

console.log(formatedAuthorNamesBirth());
