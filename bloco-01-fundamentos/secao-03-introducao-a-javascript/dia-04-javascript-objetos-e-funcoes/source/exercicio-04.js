const leitor = {
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

leitor.favoriteBooks.push(
  {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    editor: 'Rocco'
  }
);

console.log(`The favorite book of ${leitor.name} ${leitor.lastName} is '${leitor.favoriteBooks[0].title}'`);
console.log(`${leitor.name} ${leitor.lastName} has ${leitor.favoriteBooks.length} favorite books`);
