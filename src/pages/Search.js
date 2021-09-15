import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  }

  render() {
    const { searchInput } = this.state;
    const requiredCharacters = 2;
    return (
      <div data-testid="page-search">
        <form>
          <input
            data-testid="search-artist-input"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ searchInput.length < requiredCharacters }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
