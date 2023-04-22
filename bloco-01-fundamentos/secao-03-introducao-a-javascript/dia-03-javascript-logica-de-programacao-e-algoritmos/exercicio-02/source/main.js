const clients = ['Ada', 'John', 'Gus'];

function addClient (client) {
  if (typeof client === 'string') {
    clients.push(client);
    return `${client} Added`;
  } else {
    return 'Invalid information';
  }
}

function removeClient (client) {
  if (typeof client === 'string') {
    let clientFound = false;

    for (let index = 0; index < clients.length; index += 1) {
      if (client === clients[index]) {
        clients.splice(index, 1);
        clientFound = true;
        return `${client} Removed`;
      }
    }
    if (!clientFound) {
      return 'Client not found';
    }
  } else {
    return 'Invalid information';
  }
}

console.log(addClient('Gabriel'));
console.log(removeClient('Ada'));
console.log(`Clients: ${clients}`);
