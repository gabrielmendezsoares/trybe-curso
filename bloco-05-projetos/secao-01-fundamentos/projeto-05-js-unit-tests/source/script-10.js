const vqv = (name, age) => {
  if (!name || !age) {
    return undefined;
  }

  const wordA = `Oi, meu nome é ${name}!\n`;
  const wordB = `Tenho ${age} anos,\n`;
  const wordC = 'trabalho na Trybe e mando muito em programação!\n';
  const wordD = '#VQV!';

  return wordA + wordB + wordC + wordD;
};

module.exports = vqv;
