const currentStatus = 'Aprovada';

switch (currentStatus) {
  case 'Aprovada':
    console.log('Você está no grupo de pessoas aprovadas.');
    break;

  case 'Lista':
    console.log('Você está na nossa lista de espera.');
    break;

  case 'Reprovada':
    console.log('Você reprovou.');
    break;

  default:
    console.log('Erro, informação incorreta!');
    break;
}
