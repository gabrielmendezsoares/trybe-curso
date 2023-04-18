const chessPiece = 'king';

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('King -> A');
    break;

  case 'queen':
    console.log('Queen -> B');
    break;

  case 'bishop':
    console.log('Bishop -> C');
    break;

  case 'horse':
    console.log('Horse -> D');
    break;

  case 'tower':
    console.log('Tower -> E');
    break;

  case 'pawn':
    console.log('Pawn -> F');
    break;

  default:
    console.log('Invalid chess piece');
    break;
}
