const primaryObject = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const secondaryObject = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

primaryObject['recorrente'] = 'Sim';

for (const key in primaryObject) {
  console.log(`Chave: ${key}`);
}

for (const key in primaryObject) {
  console.log(`Valor: ${primaryObject[key]}`);
}

for (const key in primaryObject) {
  if (key === 'recorrente' && primaryObject[key] === 'Sim' && secondaryObject[key] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(`${primaryObject[key]} e ${secondaryObject[key]}`);
  }
}
