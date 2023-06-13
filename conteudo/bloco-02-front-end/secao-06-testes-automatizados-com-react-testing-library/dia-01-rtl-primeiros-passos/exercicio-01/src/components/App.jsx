import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  return emailRegex.test(email);
};

const App = (props) => {
  const { email } = props;
  
  return (
    <div>
      <h2 data-testid="id-email-user">{`EMAIL: ${email}`}</h2>

      {
        email 
        && (
          <h3 data-testid="id-email-valid" >
            {
              (verifyEmail(email) ? 'VALID' : 'INVALID')
            }
          </h3>
        )
      }
    </div>
  );
};

App.propTypes = {
  email: PropTypes.string.isRequired,
};

export default App;
