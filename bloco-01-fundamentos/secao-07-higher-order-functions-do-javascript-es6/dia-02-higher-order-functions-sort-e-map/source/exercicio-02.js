const { books } = require('../data/exercicio-01');

const formatedAuthorNamesBirth = () =>
  books.map((book) =>
    `${book.author.name} - ${book.author.birthYear}`);

console.log(formatedAuthorNamesBirth());
