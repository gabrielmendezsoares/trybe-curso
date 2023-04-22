const { books } = require('../data/exercicio-01');

const formatedBookNames = () =>
  books.map((book) =>
    `${book.name} - ${book.genre} - ${book.author.name}`);

console.log(formatedBookNames());
