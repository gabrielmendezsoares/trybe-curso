const { encode, decode } = require('../source/exercicio-03.js');

describe('Testa as funções encode e decode', () => {
  it('A função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toEqual('1n1');
  });

  it('Converte a vogal "e" no número 2', () => {
    expect(encode('ele')).toEqual('2l2');
  });

  it('Converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toEqual('x3x3');
  });

  it('Converte a vogal "o" no número 4', () => {
    expect(encode('ovo')).toEqual('4v4');
  });

  it('Converte a vogal "u" no número 5', () => {
    expect(encode('nu')).toEqual('n5');
  });

  it('Checa se o retorno da função encode tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });

  it('A função decode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('Converte apenas o número 1 na vogal a', () => {
    expect(decode('1n1')).toEqual('ana');
  });

  it('Converte apenas o número 2 na vogal e', () => {
    expect(decode('2l2')).toEqual('ele');
  });

  it('Converte apenas o número 3 na vogal i', () => {
    expect(decode('x3x3')).toEqual('xixi');
  });

  it('Converte apenas o número 4 na vogal o', () => {
    expect(decode('4v4')).toEqual('ovo');
  });

  it('Converte apenas o número 5 na vogal u', () => {
    expect(decode('n5')).toEqual('nu');
  });

  it('Checa se o retorno da função decode tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});
