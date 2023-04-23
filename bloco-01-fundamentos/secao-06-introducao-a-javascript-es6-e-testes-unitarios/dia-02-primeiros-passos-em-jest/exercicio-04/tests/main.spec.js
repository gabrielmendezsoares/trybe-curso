const techList = require('../source/main');

describe('Test the techList function', () => {
  test('Tests if the techList function is defined', () => {
    expect(techList).toBeDefined();
  });

  test('Tests if techList is a function', () => {
    expect(typeof techList).toBe('function');
  });

  test('List with 5 technologies should return an ordered list of objects', () => {
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

  test('List of 0 technologies should return an "Empty!"', () => {
    expect(techList([], 'Gabriel')).toBe('Empty!');
  });
});
