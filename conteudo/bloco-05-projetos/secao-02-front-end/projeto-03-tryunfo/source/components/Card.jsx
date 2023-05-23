import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../../styles/Card.css';

class Card extends Component {
  render () {
    const {
      cardName,
      cardDescription,
      cardAttr01,
      cardAttr02,
      cardAttr03,
      cardImage,
      cardRare,
      cardTrunfo,
      onDeleteButtonClick,
      preview,
    } = this.props;

    return (
      <div className='card-container'>
        <div className='card-wrapper'>
          <div className='card-main-container'>
            <div className='card-title-container'>
              <h1 className='card-title-text'>{cardName}</h1>
            </div>

            <div className='card-logo-container'>
              <img
                className='card-logo-image'
                src={cardImage}
                alt={cardName}
              />

              {
                cardTrunfo
                && <img
                  className='card-logo-trunfo'
                  src='../assets/Logo.png'
                  alt={cardName}
                />
              }
            </div>

            <div className='card-about-container'>
              <div className='card-scroll-container'>
                <p className='card-description-text'>{cardDescription}</p>

                <div className='card-rare-container'>
                  <p className='card-rare-text'>Raridade</p>
                  <p className='card-rare-box'>{cardRare}</p>
                </div>

                <div className='card-attr01-container'>
                  <p className='card-attr01-text'>Attr01</p>
                  <p className='card-attr01-box'>{cardAttr01 || '?'}</p>
                </div>

                <div className='card-attr02-container'>
                  <p className='card-attr02-text'>Attr02</p>
                  <p className='card-attr02-box'>{cardAttr02 || '?'}</p>
                </div>

                <div className='card-attr03-container'>
                  <p className='card-attr03-text'>Attr03</p>
                  <p className='card-attr03-box'>{cardAttr03 || '?'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          !preview
          && (
            <button
              className='card-delete-button'
              onClick={() => onDeleteButtonClick(cardName)}
            >
              Excluir
            </button>
          )
        }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr01: propTypes.string.isRequired,
  cardAttr02: propTypes.string.isRequired,
  cardAttr03: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  onDeleteButtonClick: propTypes.func.isRequired,
  preview: propTypes.bool.isRequired,
};

export default Card;
