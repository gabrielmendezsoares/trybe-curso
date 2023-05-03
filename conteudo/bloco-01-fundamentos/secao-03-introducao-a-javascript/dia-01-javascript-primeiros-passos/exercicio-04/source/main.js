const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
];

const weekDay = 'Monday';
const currentDay = (weekDays.includes(weekDay)) ? 'Week' : 'Weekend';

console.log(currentDay);
