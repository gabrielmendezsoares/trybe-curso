const { prices } = require('../data/zoo');

const countEntrants = (entrants) => {
  const child = entrants
    .filter(({ age }) => age < 18);

  const adult = entrants
    .filter(({ age }) => age >= 18 && age < 50);

  const senior = entrants
    .filter(({ age }) => age >= 50);

  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length
  };
};

const calculateEntry = (entrants = []) => {
  if (!entrants.length) {
    return 0;
  }

  const bill = Object
    .entries(countEntrants(entrants))
    .reduce((accumulator, [key, value]) => accumulator + (prices[key] * value), 0)
    .toFixed(2);

  return parseFloat(bill);
};

module.exports = { calculateEntry, countEntrants };
