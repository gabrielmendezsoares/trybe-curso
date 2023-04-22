const summaries = [];
const sortedFruits = {};
const unsortedFruits = [
  'Watermelon', 'Avocado', 'Watermelon', 'Watermelon', 'Grape', 'Orange',
  'Jackfruit', 'Pear', 'Watermelon', 'Grape', 'Orange', 'Watermelon',
  'Banana', 'Grape', 'Pear', 'Avocado', 'Orange', 'Avocado',
  'Banana', 'Watermelon', 'Orange', 'Orange', 'Jackfruit', 'Grape',
  'Banana', 'Grape', 'Orange', 'Pear', 'Watermelon', 'Grape',
  'Jackfruit', 'Banana', 'Pear', 'Avocado', 'Watermelon', 'Watermelon',
  'Orange', 'Pear', 'Banana', 'Jackfruit', 'Orange', 'Watermelon',
  'Avocado', 'Avocado', 'Pear', 'Watermelon', 'Banana', 'Banana',
  'Avocado', 'Grape', 'Orange', 'Banana', 'Avocado', 'Grape',
  'Grape', 'Avocado', 'Avocado', 'Watermelon', 'Grape', 'Jackfruit',
  'Grape', 'Banana', 'Avocado', 'Banana', 'Grape', 'Banana',
  'Orange', 'Orange', 'Jackfruit', 'Jackfruit', 'Avocado', 'Jackfruit',
  'Orange', 'Watermelon', 'Pear', 'Jackfruit', 'Watermelon', 'Grape',
  'Avocado', 'Jackfruit', 'Jackfruit', 'Avocado', 'Grape', 'Orange',
  'Pear', 'Watermelon', 'Jackfruit', 'Pear', 'Orange', 'Jackfruit',
  'Pear', 'Watermelon', 'Jackfruit', 'Banana', 'Orange', 'Jackfruit',
  'Banana', 'Pear', 'Avocado', 'Grape'
];

for (let index = 0; index < unsortedFruits.length; index += 1) {
  if (!sortedFruits.hasOwn(unsortedFruits[index])) {
    sortedFruits[unsortedFruits[index]] = 1;
  } else {
    sortedFruits[unsortedFruits[index]] += 1;
  }
}

for (const key in sortedFruits) {
  let message = `${sortedFruits[key]} ${key}`;

  if (sortedFruits[key] > 1) {
    message += 's';
  }

  summaries.push(message);
}

console.log(`Fruits: ${summaries.join(', ')}.`);
