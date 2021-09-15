import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from '../components/Loading';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginInput: '',
      loggingIn: false,
      loggedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    const { value, id } = event.target;
    this.setState({
      [id]: value,
    });
  }

  async submit() {
    const { loginInput } = this.state;
    this.setState({
      loggingIn: true,
    });
    await createUser({ name: loginInput });
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const requiredCharacters = 3;
    const { loginInput, loggedIn, loggingIn } = this.state;
    if (loggingIn) {
      return (
        <>
          <Loading />
          { loggedIn ? <Redirect to="/search" /> : '' }
        </>
      );
    }
    return (
      <div data-testid="page-login">
        <input
          id="loginInput"
          data-testid="login-name-input"
          type="text"
          onChange={ this.handleChange }
          value={ loginInput }
        />
        <button
          id="loginButton"
          type="button"
          data-testid="login-submit-button"
          disabled={ loginInput.length < requiredCharacters }
          onClick={ this.submit }
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
