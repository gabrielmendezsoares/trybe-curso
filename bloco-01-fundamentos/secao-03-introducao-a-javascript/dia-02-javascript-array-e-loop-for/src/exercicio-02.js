const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
const names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

for (const iterator of names) {
  console.log(iterator);
}
