const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().replace(' ', '_');

  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (generator) => {
  const employees = {
    id1: generator('Pedro Guerra'),
    id2: generator('Luiza Drumond'),
    id3: generator('Carla Paiva')
  };

  return employees;
};

console.log(newEmployees(employeeGenerator));
