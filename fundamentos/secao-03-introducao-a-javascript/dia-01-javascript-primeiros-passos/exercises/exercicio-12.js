const chessPiece = 'king';

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;

    case 'queen':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;

    case 'bishop':
        console.log('Bispo-> Diagonal.');
        break;

    case 'horse':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;

    case 'tower':
        console.log('Torre -> Horizontal e vertical.');
        break;

    case 'pawn':
        console.log('Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
        break;

    default:
        console.log('Erro, peça inválida!');
        break;
};
