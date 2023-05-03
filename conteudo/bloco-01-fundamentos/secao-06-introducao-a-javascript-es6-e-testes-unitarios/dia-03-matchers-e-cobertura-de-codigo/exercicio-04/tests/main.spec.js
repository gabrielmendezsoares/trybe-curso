const searchEmployee = require('../source/main');

describe('5 - In this exercise, you will practice test-driven development by implementing `the function` and `the tests` for that function', () => {
  test('Tests whether searchEmployee is a role', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  test('Tests whether searchEmployee(id, "firstName") returns the first username of the queried id', () => {
    const actual = searchEmployee('1256-4', 'firstName');
    const expected = 'Linda';

    expect(actual).toBe(expected);
  });

  test('Tests whether searchEmployee(id, "lastName") returns the second username of the queried id', () => {
    const actual = searchEmployee('1256-4', 'lastName');
    const expected = 'Bezos';

    expect(actual).toBe(expected);
  });

  test('Tests whether searchEmployee(id, "specialities") returns an array with all the skills of the searched id', () => {
    const actual = searchEmployee('1256-4', 'specialities');

    expect(actual).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });

  test('Tests whether an error with the message "Unidentified ID" is returned when the ID does not exist', () => {
    expect(() => { searchEmployee('1256-8', 'specialities'); }).toThrow();
  });

  test('Testing error message for non-existent ID', () => {
    expect(() => { searchEmployee('1256-8', 'specialities'); }).toThrow(new Error('Unidentified ID'));
  });

  test('Tests whether an error is thrown when the information and ID are non-existent', () => {
    expect(() => { searchEmployee(); }).toThrow();
  });

  test('Testing the error message for missing information', () => {
    expect(() => { searchEmployee('4678-2', 'shift'); }).toThrow(new Error('Invalid information'));
  });
});
