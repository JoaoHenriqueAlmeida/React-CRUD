import React from 'react';
import PropTypes from 'prop-types';

class ArtistInputForm extends React.Component {
  render() {
    const { handleChange, handleClick, searchInput } = this.props;
    const requiredCharacters = 2;
    return (
      <form>
        <input
          data-testid="search-artist-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ searchInput.length < requiredCharacters }
          onClick={ handleClick }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

ArtistInputForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default ArtistInputForm;
