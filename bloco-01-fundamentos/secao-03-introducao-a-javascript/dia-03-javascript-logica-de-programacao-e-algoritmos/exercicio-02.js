let clients = ['Ada', 'John', 'Gus'];

function addClient(client) {
  if (typeof client === 'string') {
    clients.push(client);
    return `${client} Adicionado.`;
  } else {
    return 'Erro, o parâmetro passado precisa ser do tipo "string"!';
  }
}

function removeClient(client) {
  if (typeof client === 'string') {
    let clientFound = false;
    
    for (let index = 0; index < clients.length; index += 1) {
      if (client === clients[index]) {
        clients.splice(index, 1);
        clientFound = true;
        return `${client} Removido.`;
      }
    }
    if (!clientFound) {
      return 'Client not found.'
    }
  } else {
    return 'Erro, o parâmetro passado precisa ser do tipo "string"!';
  }
}

console.log(addClient('Gabriel'));
console.log(removeClient('Ada'));
console.log(`Clients: ${clients}`);
