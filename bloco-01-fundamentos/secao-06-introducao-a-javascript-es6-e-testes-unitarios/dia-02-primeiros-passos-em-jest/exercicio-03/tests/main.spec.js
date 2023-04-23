const { encode, decode } = require('../source/main');

describe('Tests the encode and decode functions', () => {
  test('The encode function is defined', () => {
    expect(encode).toBeDefined();
  });

  test('encode is a function', () => {
    expect(typeof encode).toEqual('function');
  });

  test('Converts only vowel "a" to number 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });

  test('Convert an "e" vowel into the number 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });

  test('Converts the vowel "i" into the number 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });

  test('Converts the vowel "o" into the number 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });

  test('Converts the vowel "u" into the number 5', () => {
    expect(encode('nu')).toEqual('n5');
  });

  test('Checks if the encode function return has the same number of characters', () => {
    expect(encode('trybe').length).toEqual(5);
  });

  test('The decode function is defined', () => {
    expect(decode).toBeDefined();
  });

  test('decode is a function', () => {
    expect(typeof decode).toEqual('function');
  });

  test('Converts only the number 1 into the vowel a', () => {
    expect(decode('1n1')).toEqual('ana');
  });

  test('Converts only the number 2 into the vowel and', () => {
    expect(decode('2l2')).toEqual('ele');
  });

  test('Converts only the number 3 to the vowel i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });

  test('Converts only the number 4 into the vowel o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  test('Converts only the number 5 to the vowel u', () => {
    expect(decode('n5')).toEqual('nu');
  });

  test('Checks if the decode function return has the same number of characters', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});
