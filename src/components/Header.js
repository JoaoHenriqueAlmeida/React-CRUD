import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getUserName();
  }

  // função getUsername inspirada no código do Michael https://github.com/tryber/sd-014-b-project-trybetunes/pull/2

  async getUserName() {
    const loggedUser = await getUser();
    this.setState({
      username: loggedUser.name,
      loading: false,
    });
  }

  render() {
    const { loading, username } = this.state;

    return (
      <header data-testid="header-component">
        <h1 data-testid="header-user-name">
          <Link to="/search" data-testid="link-to-search" />
          <Link to="/favorites" data-testid="link-to-favorites" />
          <Link to="/profile" data-testid="link-to-profile" />
          { loading ? <Loading /> : `Logged as ${username}, welcome!` }
        </h1>

      </header>
    );
  }
}

export default Header;
