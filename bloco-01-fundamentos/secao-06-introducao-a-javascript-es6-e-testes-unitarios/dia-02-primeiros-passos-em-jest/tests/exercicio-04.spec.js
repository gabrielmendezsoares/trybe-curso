const techList = require('../src/exercicio-04');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });

  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });

  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Gabriel')).toEqual([
      {
        tech: 'CSS',
        name: 'Gabriel'
      },
      {
        tech: 'HTML',
        name: 'Gabriel'
      },
      {
        tech: 'JavaScript',
        name: 'Gabriel'
      },
      {
        tech: 'Jest',
        name: 'Gabriel'
      },
      {
        tech: 'React',
        name: 'Gabriel'
      }
    ]);
  });

  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Gabriel')).toBe('Vazio!');
  });
});
