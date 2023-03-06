const currentHour = 13;

if (currentHour >= 0 && currentHour < 5) {
  console.log('Boa Madrugada');
} else if (currentHour >= 18 && currentHour < 24) {
  console.log('Boa Noite');
} else if (currentHour >= 13 && currentHour < 18) {
  console.log('Boa Tarde');
} else if (currentHour >= 5 && currentHour < 13) {
  console.log('Bom Dia');
}
