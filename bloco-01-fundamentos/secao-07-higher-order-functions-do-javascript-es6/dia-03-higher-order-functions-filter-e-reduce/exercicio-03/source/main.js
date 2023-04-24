import data from '../data/books.js';

const { books } = data;

const fantasyOrScienceFiction = () => {
  const genres = ['Ficção Científica', 'Fantasia'];
  const filter = books.filter((book) => genres.includes(book.genre));

  return filter;
};

const oldBooksOrdered = (year) => {
  const filter = books
    .filter((book) => year - book.releaseYear >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);

  return filter;
};

const booksByAuthorBirthYear = (birthYear) => {
  const filter = books
    .filter((book) => book.author.birthYear === birthYear)
    .map((book) => book.name);

  return filter;
};

const fantasyOrScienceFictionAuthors = () => {
  const genres = ['Ficção Científica', 'Fantasia'];
  const filter = books
    .filter((book) => genres.includes(book.genre))
    .map((book) => book.author.name)
    .sort();

  return filter;
};

const oldBooks = (year) => {
  const filter = books
    .filter((book) => year - book.releaseYear >= 60)
    .map((book) => book.name);

  return filter;
};

const authorWith3DotsOnName = () => {
  const pattern = /[A-Z]\./g;

  const filter = books
    .find((book) => {
      const initials = book.author.name.match(pattern);
      const match = initials && initials.length === 3;

      return match;
    });

  return filter && filter.name;
};

console.log(fantasyOrScienceFiction());
console.log(oldBooksOrdered(2020));
console.log(booksByAuthorBirthYear(1920));
console.log(fantasyOrScienceFictionAuthors());
console.log(oldBooks(2022));
console.log(authorWith3DotsOnName());
