import React from 'react';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class AlbumList extends React.Component {
  render() {
    const { albumsArr } = this.props;

    if (albumsArr.length === 0) {
      return <p>Nenhum álbum foi encontrado</p>;
    }

    return (
      <section>
        {albumsArr.map((album, index) => <AlbumCard key={ index } albumInfo={ album } />)}
      </section>
    );
  }
}

AlbumList.propTypes = {
  albumsArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default AlbumList;
