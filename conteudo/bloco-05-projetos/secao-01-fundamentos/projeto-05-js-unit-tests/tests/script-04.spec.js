const getCharacter = require('../source/script-04');

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    const objectA = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.']
    };

    const objectB = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.']
    };

    const objectC = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.']
    };

    expect(getCharacter()).toBeUndefined();
    expect(getCharacter('Arya')).toEqual(objectA);
    expect(getCharacter('Brienne')).toEqual(objectB);
    expect(getCharacter('Melissandre')).toEqual(objectC);
    expect(getCharacter('aRyA')).toEqual(objectA);
    expect(getCharacter('Gabriel')).toBeUndefined();
  });
});
