const chessPiece = 'king';

switch (chessPiece.toLowerCase()) {
  case 'king':
    console.log('Rei -> A house just for any direction.');
    break;

  case 'queen':
    console.log('Rainha -> Diagonal, horizontal and vertical.');
    break;

  case 'bishop':
    console.log('Bispo -> Diagonal.');
    break;

  case 'horse':
    console.log('Cavalo -> "L" can jump over pieces.');
    break;

  case 'tower':
    console.log('Torre -> Horizontal and vertical.');
    break;

  case 'pawn':
    console.log('Peão -> Only one square forward, on the first move there can be two squares.');
    break;

  default:
    console.log('Invalid chess piece');
    break;
}
