import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { createUser } from './services/userAPI';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/album/:id">
            {(props) => <Album { ...props } />}
          </Route>

          <Route path="/profile/edit">
            <ProfileEdit />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/" exact>
            <Login createUser={ createUser } />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    );
  }
}

export default App;
