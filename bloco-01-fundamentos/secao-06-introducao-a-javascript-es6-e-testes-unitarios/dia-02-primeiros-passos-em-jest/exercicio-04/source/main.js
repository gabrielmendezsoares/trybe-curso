const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Empty!';

  const sortedArray = arrayTechnologies.sort();
  const technologyList = [];

  for (let index = 0; index < sortedArray.length; index += 1) {
    technologyList.push({
      tech: sortedArray[index],
      name
    });
  }

  return technologyList;
};

module.exports = techList;
