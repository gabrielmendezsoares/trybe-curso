export const colorCreator = () => {
  const characterList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const randomize = () => Math.floor(Math.random() * characterList.length);
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    const randomCharacter = characterList[randomize()];
    color += randomCharacter;
  }

  return color;
};
