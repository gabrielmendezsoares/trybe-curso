const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Test with empty parameter', () => {
    const actual = getOpeningHours();

    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 }
    };

    expect(actual).toEqual(expected);
  });

  it('Test with `Monday` and `09:00-AM` parameters', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });

  it('Test with `Tuesday` and `09:00-AM` parameters', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';

    expect(actual).toBe(expected);
  });

  it('Test with `Wednesday` and `09:00-PM` parameters', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';

    expect(actual).toBe(expected);
  });

  it('Test with `Thu` and `09:00-AM` parameters', () => {
    const actual = () => getOpeningHours('Thu', '09:00-AM');
    const expected = 'The day must be valid. Example: Monday';

    expect(actual).toThrow(expected);
  });

  it('Test with `Friday` and `09:00-ZM` parameters', () => {
    const actual = () => getOpeningHours('Friday', '09:00-ZM');
    const expected = 'The abbreviation must be \'AM\' or \'PM\'';

    expect(actual).toThrow(expected);
  });

  it('Test with `Saturday` and `C9:00-AM` parameters', () => {
    const actual = () => getOpeningHours('Saturday', 'C9:00-AM');
    const expected = 'The hour should represent a number';

    expect(actual).toThrow(expected);
  });

  it('Test with `Sunday` and `09:c0-AM` parameters', () => {
    const actual = () => getOpeningHours('Sunday', '09:c0-AM');
    const expected = 'The minutes should represent a number';

    expect(actual).toThrow(expected);
  });

  it('Test with `Monday` and `13:00-AM` parameters', () => {
    const actual = () => getOpeningHours('Monday', '13:00-AM');
    const expected = 'The hour must be between 0 and 12';

    expect(actual).toThrow(expected);
  });

  it('Test with `Tuesday` and `09:60-AM` parameters', () => {
    const actual = () => getOpeningHours('Tuesday', '09:60-AM');
    const expected = 'The minutes must be between 0 and 59';

    expect(actual).toThrow(expected);
  });
});
