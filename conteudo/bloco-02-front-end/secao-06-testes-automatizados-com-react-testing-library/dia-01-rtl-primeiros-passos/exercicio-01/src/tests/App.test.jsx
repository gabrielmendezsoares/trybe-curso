import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App.jsx';

it('Test email validation', () => {
  const EMAIL_USER = 'email@email.com';

  render(<App email={EMAIL_USER} />);

  const isEmailValid = screen.getByText('VALID');

  expect(isEmailValid).toBeInTheDocument();
});
