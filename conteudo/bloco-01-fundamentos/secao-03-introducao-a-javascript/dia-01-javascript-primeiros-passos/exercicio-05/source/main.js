const currentStatus = 'Approved';

switch (currentStatus) {
  case 'Approved':
    console.log('You are in the group of approved people.');
    break;

  case 'List':
    console.log('You are on our waiting list.');
    break;

  case 'Disapproved':
    console.log('You got disapproved.');
    break;

  default:
    console.log('Invalid information');
    break;
}
