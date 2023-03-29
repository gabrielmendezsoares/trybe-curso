const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

const printMessage = (characterInfo) => {
  if (!characterInfo || characterInfo.personagem === undefined) {
    throw new Error('objeto inválido');
  }

  return (`Boas vindas, ${characterInfo.personagem}`);
};

module.exports = { info, printMessage };
