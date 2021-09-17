import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicList from '../components/MusicList';
import Header from '../components/Header';

// Consultei o pull request dos colegas Fernando Nascimento e Michael Caxias para conseguir resolver o sétimo requisito, links :
// Michael Caxias : https://github.com/tryber/sd-014-b-project-trybetunes/pull/2
// Fernando Nascimento : https://github.com/tryber/sd-014-a-project-trybetunes/pull/63

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      musics: [],
      loading: true,
    };

    this.fetchMusics = this.fetchMusics.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
  }

  async fetchMusics() {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      musics,
      loading: false,
    });
  }

  render() {
    const { musics, loading } = this.state;

    return (
      <>
        <Header />
        <div data-testid="page-album">
          { loading ? <Loading /> : <MusicList musics={ musics } /> }
        </div>
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
