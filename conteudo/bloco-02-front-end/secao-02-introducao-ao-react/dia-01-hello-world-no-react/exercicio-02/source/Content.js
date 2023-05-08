import React, { Component } from 'react';

const conteudos = [
  {
    nome: 'JavaScript assíncrono',
    bloco: 9,
    status: 'já aprendi',
  },
  {
    nome: 'Composição de Componentes',
    bloco: 10,
    status: 'estou aprendendo',
  },
  {
    nome: 'Composição de Estados',
    bloco: 11,
    status: 'aprenderei',
  },
  {
    nome: 'Redux',
    bloco: 15,
    status: 'aprenderei',
  },
];

class Content extends Component {
  render() {
    return (
      <ul>
        {conteudos
          .map(({ nome, bloco, status }, index) => (
            <li key={ index } className="card">
              {`Eu ${status} ${index} o conteúdo ${nome} no bloco ${bloco}`}
            </li>
          ))}
      </ul>
    );
  }
}

export default Content;
