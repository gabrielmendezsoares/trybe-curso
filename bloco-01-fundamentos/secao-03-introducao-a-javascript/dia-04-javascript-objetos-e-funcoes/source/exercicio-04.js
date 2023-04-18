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

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    editor: 'Rocco'
  }
);

console.log(`The favorite book of ${leitor.nome} ${leitor.sobrenome} is '${leitor.livrosFavoritos[0].titulo}'`);
console.log(`${leitor.nome} ${leitor.sobrenome} has ${leitor.livrosFavoritos.length} favorite books`);
