const createStudent = require('../source/script-03');
const goodPerson = 'Eita pessoa boa!';

describe('5 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    const estudante = createStudent('Leandrão, o Lobo Solitário');
    const estudante2 = createStudent('Nobre');
    const estudante3 = createStudent('Inácio');

    expect(typeof estudante).toBe('object');
    expect(typeof estudante.feedback).toBe('function');
    expect(estudante.name).toMatch(/Leandrão, o Lobo Solitário/);
    expect(estudante.feedback()).toBe(goodPerson);
    expect(typeof estudante2).toBe('object');
    expect(typeof estudante2.feedback).toBe('function');
    expect(estudante2.name).toMatch(/Nobre/);
    expect(estudante2.feedback()).toBe(goodPerson);
    expect(typeof estudante3).toBe('object');
    expect(typeof estudante3.feedback).toBe('function');
    expect(estudante3.name).toMatch(/Inácio/);
    expect(estudante3.feedback()).toBe(goodPerson);
  });
});
