import React, { Component } from 'react';
import propTypes from 'prop-types';
import '../../styles/Form.css';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    let sumPoints = 0;

    if (!isNaN(parseFloat(cardAttr01))) {
      sumPoints += parseFloat(cardAttr01);
    }

    if (!isNaN(parseFloat(cardAttr02))) {
      sumPoints += parseFloat(cardAttr02);
    }

    if (!isNaN(parseFloat(cardAttr03))) {
      sumPoints += parseFloat(cardAttr03);
    }

    const subtractPoints = 210 - sumPoints;
    const freePoints = (!isNaN(subtractPoints) && subtractPoints >= 0)
      ? subtractPoints.toString()
      : '0';

    return (
      <form className='form'>
        <div className='form-name-container'>
          <label className='form-name-label' htmlFor='form-name-input'>Nome</label>
          <input
            id='form-name-input'
            className='form-name-input'
            name='cardName'
            type='text'
            value={cardName}
            onChange={onInputChange}
          />
        </div>

        <div className='form-description-container'>
          <label className='form-description-label' htmlFor='form-description-input'>Descrição</label>
          <textarea
            id='form-description-input'
            className='form-description-input'
            name='cardDescription'
            rows='5'
            value={cardDescription}
            onChange={onInputChange}
          />
        </div>

        <div className='form-attr01-container'>
          <label className='form-attr01-label' htmlFor='form-attr01-input'>Attr01</label>
          <input
            id='form-attr01-input'
            className='form-attr01-input'
            name='cardAttr01'
            type='number'
            max='90'
            min='0'
            value={cardAttr01}
            onChange={onInputChange}
          />
        </div>

        <div className='form-attr02-container'>
          <label className='form-attr02-label' htmlFor='form-attr02-input'>Attr02</label>
          <input
            id='form-attr02-input'
            className='form-attr02-input'
            name='cardAttr02'
            type='number'
            max='90'
            min='0'
            value={cardAttr02}
            onChange={onInputChange}
          />
        </div>

        <div className='form-attr03-container'>
          <label className='form-attr03-label' htmlFor='form-attr03-input'>Attr03</label>
          <input
            id='form-attr03-input'
            className='form-attr03-input'
            name='cardAttr03'
            type='number'
            max='90'
            min='0'
            value={cardAttr03}
            onChange={onInputChange}
          />
        </div>

        <p className='form-current-points'>Pontos restantes = {freePoints}</p>

        <div className='form-image-container'>
          <label className='form-image-label' htmlFor='form-image-input'>Imagem</label>
          <input
            id='form-image-input'
            className='form-image-input'
            name='cardImage'
            type='text'
            placeholder='https://'
            value={cardImage}
            onChange={onInputChange}
          />
        </div>

        <div className='form-rare-container'>
          <label className='form-rare-label' htmlFor='form-rare-input'>Raridade</label>
          <select
            id='form-rare-input'
            className='form-rare-input'
            name='cardRare'
            value={cardRare}
            onChange={onInputChange}
          >
            <option value='normal'>Normal</option>
            <option value='raro'>Raro</option>
            <option value='muito raro'>Muito Raro</option>
          </select>
        </div>

        <p
          className={
            (!isNaN(sumPoints) && sumPoints >= 0 && sumPoints <= 210)
              ? 'form-total-points'
              : 'form-total-points-invalid'
          }
        >
          Total de pontos = {sumPoints}
        </p>

        <div className='form-save-container'>
          <div className='form-trunfo-container'>
            {
              !hasTrunfo
              && <input
                id='form-trunfo-input'
                className='form-trunfo-input'
                name='cardTrunfo'
                type='checkbox'
                checked={cardTrunfo}
                onChange={onInputChange}
              />
            }

            {
              !hasTrunfo
              && <label className='form-trunfo-label' htmlFor='form-trunfo-input'>Super Trunfo</label>
            }

            {
              hasTrunfo
              && <p className='form-trunfo-text'>Você já tem um Super Trunfo em seu baralho</p>
            }
          </div>

          <button
            className='form-save-button'
            type='submit'
            disabled={isSaveButtonDisabled}
            onClick={onSaveButtonClick}
          >
            Salvar
          </button>
        </div>
      </form >
    );
  }
}

Form.propTypes = {
  cardName: propTypes.string.isRequired,
  cardDescription: propTypes.string.isRequired,
  cardAttr01: propTypes.string.isRequired,
  cardAttr02: propTypes.string.isRequired,
  cardAttr03: propTypes.string.isRequired,
  cardImage: propTypes.string.isRequired,
  cardRare: propTypes.string.isRequired,
  cardNameFilter: propTypes.string.isRequired,
  cardRareFilter: propTypes.string.isRequired,
  cardTrunfoFilter: propTypes.bool.isRequired,
  cardTrunfo: propTypes.bool.isRequired,
  hasTrunfo: propTypes.bool.isRequired,
  isSaveButtonDisabled: propTypes.bool.isRequired,
  onInputChange: propTypes.func.isRequired,
  onSaveButtonClick: propTypes.func.isRequired,
};

export default Form;
