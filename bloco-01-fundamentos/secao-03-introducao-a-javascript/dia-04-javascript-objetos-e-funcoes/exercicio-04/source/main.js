const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Pior Dia de Todos',
      author: 'Daniela Kopsch',
      editor: 'Tordesilhas'
    }
  ]
};

reader.favoriteBooks.push(
  {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    editor: 'Rocco'
  }
);

console.log(`The favorite book of ${reader.name} ${reader.lastName} is '${reader.favoriteBooks[0].title}'`);
console.log(`${reader.name} ${reader.lastName} has ${reader.favoriteBooks.length} favorite books`);
