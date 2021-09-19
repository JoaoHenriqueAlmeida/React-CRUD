import React from 'react';
import PropTypes from 'prop-types';
import MusicCard from './MusicCard';

class MusicList extends React.Component {
  render() {
    const { musics } = this.props;
    return (
      <>
        <h3 data-testid="artist-name">
          { musics[0].artistName }
        </h3>
        <h3 data-testid="album-name">
          { musics[0].collectionName }
        </h3>
        {musics.slice(1).map((music) => (<MusicCard
          musicObj={ music }
          key={ music.trackId }
        />))}
      </>
    );
  }
}

MusicList.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MusicList;
