const { books } = require('../data/books');

const formatedBookNames = () =>
  books.map((book) =>
    `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames());
