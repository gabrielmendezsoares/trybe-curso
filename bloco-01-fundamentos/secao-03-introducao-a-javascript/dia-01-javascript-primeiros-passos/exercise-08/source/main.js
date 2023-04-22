const valueState = 100;

switch (Math.sign(valueState)) {
  case 1:
    console.log('Positive value');
    break;

  case -1:
    console.log('Negative value');
    break;

  case 0:
    console.log('Zero value');
    break;

  default:
    throw new Error('Invalid information');
}
