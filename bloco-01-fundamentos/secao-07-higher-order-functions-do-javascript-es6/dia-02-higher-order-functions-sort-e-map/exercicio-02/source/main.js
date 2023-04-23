const { books } = require('../data/books');

const formatedAuthorNamesBirth = () =>
  books.map((book) =>
    `${book.author.name} - ${book.author.birthYear}`);

console.log(formatedAuthorNamesBirth());
