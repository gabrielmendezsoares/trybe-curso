const getEmployeesCoverage = require('../source/script-10');

describe('10 - Tests for `getEmployeesCoverage`', () => {
  test('Tests for `name` key', () => {
    const actual = getEmployeesCoverage({ name: 'Sharonda' });

    const expected = {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      fullName: 'Sharonda Spry',
      species: ['otters', 'frogs'],
      locations: ['SE', 'SW']
    };

    expect(actual).toEqual(expected);
  });

  test('Tests for last name', () => {
    const actual = getEmployeesCoverage({ name: 'Spry' });

    const expected = {
      id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
      fullName: 'Sharonda Spry',
      species: ['otters', 'frogs'],
      locations: ['SE', 'SW']
    };

    expect(actual).toEqual(expected);
  });

  it('se o objeto de opções tiver a propriedade id retorna somente a pessoa correspondente', () => {
    const actual = getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' });

    const expected = {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      fullName: 'Ardith Azevado',
      species: ['tigers', 'bears'],
      locations: ['NW', 'NW'],
    };

    expect(actual).toEqual(expected);
  });

  it('sem parâmetros, retorna uma lista com a cobertura de todas as pessoas colaboradoras', () => {
    const actual = getEmployeesCoverage();

    const expected = [
      {
        id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
        fullName: 'Nigel Nelson',
        species: ['lions', 'tigers'],
        locations: ['NE', 'NW']
      },
      {
        id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
        fullName: 'Burl Bethea',
        species: ['lions', 'tigers', 'bears', 'penguins'],
        locations: ['NE', 'NW', 'NW', 'SE']
      },
      {
        id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
        fullName: 'Ola Orloff',
        species: ['otters', 'frogs', 'snakes', 'elephants'],
        locations: ['SE', 'SW', 'SW', 'NW']
      },
      {
        id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
        fullName: 'Wilburn Wishart',
        species: ['snakes', 'elephants'],
        locations: ['SW', 'NW']
      },
      {
        id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
        fullName: 'Stephanie Strauss',
        species: ['otters', 'giraffes'],
        locations: ['SE', 'NE']
      },
      {
        id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
        fullName: 'Sharonda Spry',
        species: ['otters', 'frogs'],
        locations: ['SE', 'SW']
      },
      {
        id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
        fullName: 'Ardith Azevado',
        species: ['tigers', 'bears'],
        locations: ['NW', 'NW']
      },
      {
        id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
        fullName: 'Emery Elser',
        species: ['lions', 'bears', 'elephants'],
        locations: ['NE', 'NW', 'NW']
      }
    ];

    expect(actual).toEqual(expected);
  });

  test('Tests for error case', () => {
    const actual = () => getEmployeesCoverage({ id: 'Id inválido' });
    const expected = /^Informações inválidas$/;

    expect(actual).toThrow(expected);
  });
});
