const info = {
  character: 'Daisy Duck',
  origin: 'Donald Duck',
  note: 'Girlfriend of the main character in the Donald Duck comics'
};

const printMessage = (characterInfo) => {
  if (!characterInfo || characterInfo.character === undefined) {
    throw new Error('Invalid object');
  }

  return (`Welcome, ${characterInfo.character}`);
};

module.exports = { info, printMessage };
