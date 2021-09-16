import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AlbumCard extends React.Component {
  render() {
    const {
      albumInfo: {
        artistName,
        collectionId,
        collectionName,
        artworkUrl100,
      },
    } = this.props;
    return (
      <div>
        <img src={ artworkUrl100 } alt={ `Capa do album ${collectionName}` } />
        <p>{ collectionName }</p>
        <p>{ artistName }</p>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          Mais informações
        </Link>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  albumInfo: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
  }).isRequired,
};

export default AlbumCard;
