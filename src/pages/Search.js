import React from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';
import Loading from '../components/Loading';
import ArtistInputForm from '../components/ArtistInputForm';
import Header from '../components/Header';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currArtist: '',
      searchInput: '',
      loading: false,
      foundArtist: false,
      albumsArr: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      searchInput: value,
    });
  }

  async handleClick() {
    const { searchInput } = this.state;
    this.setState({ loading: true });
    const albums = await searchAlbumsAPI(searchInput);
    this.setState({
      currArtist: searchInput,
      searchInput: '',
      loading: false,
      foundArtist: true,
      albumsArr: [...albums],
    });
  }

  render() {
    const {
      state: {
        currArtist,
        searchInput,
        loading,
        foundArtist,
        albumsArr,
      },
      handleChange,
      handleClick,
    } = this;

    const renderArtistAlbums = (
      <>
        <p>{`Resultado de álbuns de: ${currArtist}`}</p>
        <AlbumList albumsArr={ albumsArr } />
      </>
    );

    const renderSearchInput = (
      <ArtistInputForm
        handleChange={ handleChange }
        handleClick={ handleClick }
        searchInput={ searchInput }
      />
    );

    return (
      <>
        <Header />
        <div data-testid="page-search">
          { loading ? <Loading /> : renderSearchInput }
          { foundArtist ? renderArtistAlbums : '' }
        </div>
      </>
    );
  }
}

export default Search;
