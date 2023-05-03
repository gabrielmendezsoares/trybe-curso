const currentHour = 13;

if (currentHour >= 0 && currentHour < 5) {
  console.log('Good dawn');
} else if (currentHour >= 5 && currentHour < 13) {
  console.log('Good morning');
} else if (currentHour >= 13 && currentHour < 18) {
  console.log('Good afternoon');
} else if (currentHour >= 18 && currentHour < 24) {
  console.log('Good night');
}
