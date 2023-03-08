const stringInserter = (string) => {
  const word = 'Tryber x aqui!';
  const wordArray = word.split(' ');
  for (let index = 0; index < wordArray.length; index += 1) {
    if (wordArray[index] === 'x') {
      wordArray[index] = string;
    }
  }  
  return wordArray.join(' ');
};

const stringFormatter = (callback) => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let string = `
  ${callback}
  
  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    string = `${string}
    -> ${skills[index]}`;
  }
  return string;
};
  
console.log(stringFormatter(stringInserter('Gabriel')));
