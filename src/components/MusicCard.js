import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    const { id, checked } = event.target;
    this.setState({ loading: true });
    if (checked) {
      await addSong(id);
      this.setState({ loading: false, checked: true });
    } else {
      await removeSong(id);
      this.setState({ loading: false, checked: false });
    }
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { loading, checked } = this.state;
    const trackSection = (
      <section>
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId } data-testid={ `checkbox-music-${trackId}` }>
          Favorita
          <input
            type="checkbox"
            id={ trackId }
            checked={ checked }
            onChange={ this.handleChange }
          />
        </label>
      </section>
    );
    return (
      loading ? <Loading /> : trackSection
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
};

export default MusicCard;
