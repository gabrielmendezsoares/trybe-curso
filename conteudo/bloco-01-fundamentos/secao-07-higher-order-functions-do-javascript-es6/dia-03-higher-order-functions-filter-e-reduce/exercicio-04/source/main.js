import data from '../data/countries.js';

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha'
];

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const pattern = /[Aa]/g;

const getPopulation = () =>
  data.reduce((accumulator, country) =>
    accumulator + country.population, 0);

const getTotalArea = () =>
  data.reduce((accumulator, country) =>
    accumulator + country.area, 0);

const longestName = () =>
  data.reduce((accumulator, country) =>
    (country.name.length > accumulator.name.length)
      ? country
      : accumulator);

const countA = () =>
  names.reduce((accumulator, name) =>
    (name.match(pattern))
      ? accumulator + name.match(pattern).length
      : accumulator, 0);

const studentAverage = () => students.map((student, index) => ({
  name: student,
  average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length)
}
));

console.log(getPopulation());
console.log(getTotalArea());
console.log(longestName());
console.log(countA());
console.log(studentAverage());
