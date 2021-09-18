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

    const loggedAs = (
      <h1 data-testid="header-user-name">{`Logged as ${username}, welcome!`}</h1>
    );

    return (
      <header data-testid="header-component">
        <Link to="/search" data-testid="link-to-search">
          Pesquisa
        </Link>
        <Link to="/favorites" data-testid="link-to-favorites">
          Favoritos
        </Link>
        <Link to="/profile" data-testid="link-to-profile">
          Perfil
        </Link>
        { loading ? <Loading /> : loggedAs }
      </header>
    );
  }
}

export default Header;
