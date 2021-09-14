import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        <input data-testid="login-name-input" type="text" />
        <button type="button" data-testid="login-submit-button" disabled>Entrar</button>
      </div>
    );
  }
}

export default Login;
