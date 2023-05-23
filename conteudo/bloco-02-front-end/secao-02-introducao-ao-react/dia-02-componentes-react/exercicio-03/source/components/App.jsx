import React from 'react';
import countryStates from '../data/countryStates';

class App extends React.Component {
  state = {
    name: '',
    email: '',
    ssn: '',
    address: '',
    city: '',
    state: 'Acre',
    type: 'Casa',
    curriculumSummary: '',
    role: '',
    roleDescription: '',
    alertStatus: false,
    submitStatus: false
  };

  handleCase = ({ target }) => {
    const { value } = target;

    target.value = value.toUpperCase();
  };

  handleAddress = ({ target }) => {
    const { value } = target;
    const blacklist = /[^a-zA-Z0-9\s]/g;

    target.value = value.replace(blacklist, '');
  };

  handleCity = ({ target }) => {
    const { value } = target;
    const blacklist = /^\d/;
    const city = (blacklist.test(value))
      ? ''
      : value;

    this.setState({
      city,
    });
  };

  handleAlert = () => {
    const { alertStatus } = this.state;

    if (!alertStatus) {
      global.alert('Preencha com cuidado esta informação.');

      this.setState({
        alertStatus: true,
      });
    }
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitStatus: true,
    });
  };

  onReset = () => {
    this.setState({
      name: '',
      email: '',
      ssn: '',
      address: '',
      city: '',
      state: 'Acre',
      type: 'Casa',
      curriculumSummary: '',
      role: '',
      roleDescription: '',
      alertStatus: false,
      submitStatus: false,
    });
  };

  render () {
    const {
      name,
      email,
      ssn,
      address,
      city,
      state,
      type,
      curriculumSummary,
      role,
      roleDescription,
      submitStatus,
    } = this.state;

    return (
      <>
        <form>
          <h1>
            React Form
          </h1>

          <fieldset>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength="40"
              onInput={(event) => {
                this.handleCase(event);
                this.onInputChange(event);
              }}
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength="50"
              onInput={this.onInputChange}
            />

            <label htmlFor="ssn">CPF</label>
            <input
              id="ssn"
              name="ssn"
              type="text"
              maxLength="11"
              onInput={this.onInputChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="address">Endereço</label>
            <input
              id="address"
              name="address"
              type="text"
              maxLength="200"
              onInput={(event) => {
                this.handleAddress(event);
                this.onInputChange(event);
              }}
            />

            <label htmlFor="city">Cidade</label>
            <input
              id="city"
              name="city"
              type="text"
              maxLength="28"
              value={city}
              onBlur={this.handleCity}
              onInput={this.onInputChange}
            />

            <label htmlFor="state">Estado</label>
            <select
              id="state"
              name="state"
              maxLength="28"
              onInput={this.onInputChange}
            >
              {countryStates.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>

            <label htmlFor="house">Casa</label>
            <input
              id="house"
              name="type"
              type="radio"
              value="Casa"
              defaultChecked
              onInput={this.onInputChange}
            />

            <label htmlFor="apartment">Apartamento</label>
            <input
              id="apartment"
              name="type"
              type="radio"
              value="Apartamento"
              onInput={this.onInputChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="curriculumSummary">Resumo do currículo</label>
            <textarea
              id="curriculumSummary"
              name="curriculumSummary"
              maxLength="1000"
              onInput={this.onInputChange}
            />

            <label htmlFor="role">Cargo</label>
            <input
              id="role"
              name="role"
              type="text"
              maxLength="40"
              onMouseEnter={this.handleAlert}
              onInput={this.onInputChange}
            />

            <label htmlFor="roleDescription">Descrição do cargo</label>
            <textarea
              id="roleDescription"
              name="roleDescription"
              maxLength="500"
              onInput={this.onInputChange}
            />
          </fieldset>

          <button
            type="submit"
            onClick={this.onSubmit}
          >
            Enviar
          </button>

          <button
            type="reset"
            onClick={this.onReset}
          >
            Limpar
          </button>
        </form>

        {submitStatus && (
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <p>{ssn}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{type}</p>
            <p>{curriculumSummary}</p>
            <p>{role}</p>
            <p>{roleDescription}</p>
          </div>
        )}
      </>
    );
  }
}

export default App;
