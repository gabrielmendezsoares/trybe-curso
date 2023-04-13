const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants
    .filter((entrant) => entrant.age < 18);

  const adult = entrants
    .filter((entrant) => entrant.age >= 18 && entrant.age < 50);

  const senior = entrants
    .filter((entrant) => entrant.age >= 50);

  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants === []) {
    return 0;
  }

  const bill = Object
    .entries(countEntrants(entrants))
    .reduce((accumulator, [key, value]) => accumulator + (data.prices[key] * value), 0)
    .toFixed(2);

  return parseFloat(bill);
};

module.exports = { calculateEntry, countEntrants };
