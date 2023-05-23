import React from 'react';
import Form from './Form';
import Card from './Card';
import Header from './Header';
import '../../styles/App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr01: '0',
    cardAttr02: '0',
    cardAttr03: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    cardNameFilter: '',
    cardRareFilter: 'todas',
    cardTrunfoFilter: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cardGame: false,
    cardPosition: 0,
    cards: [],
    randomCards: [],
    filteredCards: []
  };

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr01,
      cardAttr02,
      cardAttr03,
      cardImage,
      cardRare,
      cards
    } = this.state;

    const limitA = 90;
    const limitB = 210;
    const getName = cards.find((card) => card.cardName === cardName);
    const testName = cardName.length > 0 && !getName;
    const testDescription = cardDescription.length > 0;
    const testImage = cardImage.length > 0;
    const testRare = cardRare.length > 0;
    const testAttr01 = parseFloat(cardAttr01) >= 0 && parseFloat(cardAttr01) <= limitA;
    const testAttr02 = parseFloat(cardAttr02) >= 0 && parseFloat(cardAttr02) <= limitA;
    const testAttr03 = parseFloat(cardAttr03) >= 0 && parseFloat(cardAttr03) <= limitA;

    const testSum = (
      parseFloat(cardAttr01)
      + parseFloat(cardAttr02)
      + parseFloat(cardAttr03)) <= limitB;

    const validation = (
      testName
      && testDescription
      && testImage
      && testRare
      && testAttr01
      && testAttr02
      && testAttr03
      && testSum
    );

    this.setState({
      isSaveButtonDisabled: !validation
    });
  };

  validateCard = () => {
    const { cards } = this.state;
    const getTrunfo = cards.some(({ cardTrunfo }) => cardTrunfo === true);
    const getGame = cards.length >= 2;

    if (!getGame) {
      this.setState({
        cardGame: false
      });
    }

    this.setState({
      hasTrunfo: getTrunfo
    });
  };

  onInputChange = ({ target: { name, type, value, checked } }) => {
    let change = value;

    if (type === 'number' && parseFloat(value) > 90) {
      if (parseFloat(value) > 90) {
        change = '90';
      } else {
        change = parseFloat(value).toString();
      }
    } else if (type === 'checkbox') {
      change = checked;
    }

    this.setState({
      [name]: change,
    }, () => {
      this.validateForm();
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr01,
      cardAttr02,
      cardAttr03,
      cardImage,
      cardRare,
      cardTrunfo,
      cards,
    } = this.state;

    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr01: '0',
      cardAttr02: '0',
      cardAttr03: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [
        ...cards,
        {
          cardName,
          cardDescription,
          cardAttr01,
          cardAttr02,
          cardAttr03,
          cardImage,
          cardRare,
          cardTrunfo,
        },
      ],
    }, () => {
      this.validateCard();
    });
  };

  onDeleteButtonClick = (targetName) => {
    const { cards } = this.state;
    const filteredCards = cards.filter(({ cardName }) => cardName !== targetName);

    this.setState({
      cards: filteredCards
    }, () => {
      this.validateCard();
    });
  };

  onStartButtonClick = () => {
    const { cardGame, randomCards, cards } = this.state;
    const randomizer = 0.5;
    const randomizedCards = [...cards].sort(() => Math.random() - randomizer);
    const random = (!cardGame)
      ? randomizedCards
      : randomCards;

    this.setState({
      cardGame: true,
      randomCards: random
    }, () => {
      this.validateCard();
    });
  };

  onNextButtonClick = () => {
    const { cardPosition, randomCards } = this.state;
    const randomCardsLength = randomCards.length - 1;
    const position = (cardPosition < randomCardsLength)
      ? cardPosition + 1
      : cardPosition;

    this.setState({
      cardPosition: position
    }, () => {
      this.validateCard();
    });
  };

  onRestartButtonClick = () => {
    const { cardGame, randomCards, cards } = this.state;
    const randomizer = 0.5;
    const randomizedCards = [...cards].sort(() => Math.random() - randomizer);
    const random = (cardGame)
      ? randomizedCards
      : randomCards;

    this.setState({
      cardPosition: 0,
      randomCards: random
    }, () => {
      this.validateCard();
    });
  };

  render () {
    const {
      cardName,
      cardDescription,
      cardAttr01,
      cardAttr02,
      cardAttr03,
      cardImage,
      cardRare,
      cardNameFilter,
      cardRareFilter,
      cardTrunfoFilter,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardGame,
      cardPosition,
      cards,
      randomCards
    } = this.state;

    const nameFilter = (cardNameFilter.length > 0 && !cardTrunfoFilter)
      ? cards.filter((card) => card.cardName.includes(cardNameFilter))
      : cards;

    const rareFilter = (cardRareFilter !== 'todas' && !cardTrunfoFilter)
      ? nameFilter.filter((card) => card.cardRare === cardRareFilter)
      : nameFilter;

    const trunfoFilter = (cardTrunfoFilter)
      ? rareFilter.filter((card) => card.cardTrunfo)
      : rareFilter;

    return (
      <div className='wrapper'>
        <div className='app-logo-container'>
          <img
            className='app-logo-image'
            src='../assets/Logo.png'
          />
        </div>

        <div className='app-form-container'>
          <div className='app-info-container'>
            <h1 className='app-info-title'>ADICIONE NOVA CARTA</h1>

            <Form
              cardName={cardName}
              cardDescription={cardDescription}
              cardAttr01={cardAttr01}
              cardAttr02={cardAttr02}
              cardAttr03={cardAttr03}
              cardImage={cardImage}
              cardRare={cardRare}
              cardNameFilter={cardNameFilter}
              cardRareFilter={cardRareFilter}
              cardTrunfoFilter={cardTrunfoFilter}
              cardTrunfo={cardTrunfo}
              hasTrunfo={hasTrunfo}
              isSaveButtonDisabled={isSaveButtonDisabled}
              onInputChange={this.onInputChange}
              onSaveButtonClick={this.onSaveButtonClick}
            />
          </div>

          <div className='app-preview-container'>
            <h1 className='app-preview-title'>PRÉ-VISUALIZAÇÃO</h1>

            <div className='app-card-container'>
              <Card
                cardName={cardName}
                cardDescription={cardDescription}
                cardAttr01={cardAttr01}
                cardAttr02={cardAttr02}
                cardAttr03={cardAttr03}
                cardImage={cardImage}
                cardRare={cardRare}
                cardTrunfo={cardTrunfo}
                onDeleteButtonClick={this.onDeleteButtonClick}
                preview
              />
            </div>
          </div>
        </div>

        <div className='app-pack-container'>
          <h1 className='app-pack-title'>TODAS AS CARTAS</h1>

          <Header
            cardNameFilter={cardNameFilter}
            cardRareFilter={cardRareFilter}
            cardTrunfoFilter={cardTrunfoFilter}
            onInputChange={this.onInputChange}
          />

          <div className='app-list-container'>
            <div className='app-list-wrapper'>
              {
                trunfoFilter.map((card) => (
                  <Card
                    key={'Card' + card.cardName}
                    cardName={card.cardName}
                    cardDescription={card.cardDescription}
                    cardAttr01={card.cardAttr01}
                    cardAttr02={card.cardAttr02}
                    cardAttr03={card.cardAttr03}
                    cardImage={card.cardImage}
                    cardRare={card.cardRare}
                    cardTrunfo={card.cardTrunfo}
                    onDeleteButtonClick={this.onDeleteButtonClick}
                    preview={false}
                  />)
                )
              }
            </div>
          </div>
        </div>

        <div className='app-game-container'>
          <div className='app-game-wrapper'>
            {
              cardGame
              && randomCards[cardPosition]
              && <Card
                cardName={randomCards[cardPosition].cardName}
                cardDescription={randomCards[cardPosition].cardDescription}
                cardAttr01={randomCards[cardPosition].cardAttr01}
                cardAttr02={randomCards[cardPosition].cardAttr02}
                cardAttr03={randomCards[cardPosition].cardAttr03}
                cardImage={randomCards[cardPosition].cardImage}
                cardRare={randomCards[cardPosition].cardRare}
                cardTrunfo={randomCards[cardPosition].cardTrunfo}
                onDeleteButtonClick={this.onDeleteButtonClick}
                preview
              />
            }

            <div className='app-next-container'>
              <div className='app-next-wrapper'>
                <img
                  className='app-next-logo'
                  src='../assets/Logo.png'
                  alt='Logo Tryunfo'
                />
              </div>
            </div>
          </div>

          {
            cardGame
            && <p className='app-card-count'>Cartas restantes: {(randomCards.length - 1) - cardPosition}</p>
          }

          <div className='app-button-container'>
            {
              !cardGame
              && <button
                className='app-play-button'
                disabled={cards.length < 2}
                onClick={this.onStartButtonClick}
              >
                Jogar
              </button>
            }

            {
              cardGame
              && randomCards.length >= 2
              && cardPosition < (randomCards.length - 1)
              && <button
                className='app-next-button'
                onClick={this.onNextButtonClick}
              >
                PRÓXIMA CARTA
              </button>
            }

            {
              cardGame
              && randomCards.length >= 2
              && cardPosition === (randomCards.length - 1)
              && <button
                className='app-restart-button'
                onClick={this.onRestartButtonClick}
              >
                Embaralhar cartas
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
