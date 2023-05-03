const createStudent = (nameItem) => {
  const object = {
    name: nameItem,
    feedback: () => 'Eita pessoa boa!'
  };

  return object;
};

module.exports = createStudent;
